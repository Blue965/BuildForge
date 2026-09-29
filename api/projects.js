const express = require('express');
const Project = require('../models/Project');
const { authMiddleware } = require('../middleware/auth');

const router = express.Router();

router.post('/', authMiddleware, async (req, res) => {
  try {
    const { name, description, type } = req.body;

    if (!name) {
      return res.status(400).json({ error: 'Nom du projet requis' });
    }

    const project = await Project.create({
      userId: req.user.id,
      name,
      description: description || '',
      type: type || 'World'
    });

    res.status(201).json({
      success: true,
      project: {
        id: project._id,
        name: project.name,
        description: project.description,
        type: project.type,
        status: project.status,
        createdAt: project.createdAt
      }
    });
  } catch (error) {
    console.error('Create project error:', error);
    res.status(500).json({ error: 'Erreur création projet' });
  }
});

router.get('/', authMiddleware, async (req, res) => {
  try {
    const projects = await Project.find({ userId: req.user.id })
      .sort({ updatedAt: -1 })
      .limit(50);

    res.json({
      success: true,
      projects: projects.map(p => ({
        id: p._id,
        name: p.name,
        description: p.description,
        type: p.type,
        status: p.status,
        thumbnail: p.thumbnail,
        createdAt: p.createdAt,
        updatedAt: p.updatedAt
      }))
    });
  } catch (error) {
    console.error('Get projects error:', error);
    res.status(500).json({ error: 'Erreur récupération projets' });
  }
});

router.get('/:projectId', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.projectId,
      userId: req.user.id
    });

    if (!project) {
      return res.status(404).json({ error: 'Projet non trouvé' });
    }

    res.json({
      success: true,
      project: {
        id: project._id,
        name: project.name,
        description: project.description,
        type: project.type,
        status: project.status,
        thumbnail: project.thumbnail,
        assets: project.assets,
        settings: project.settings,
        createdAt: project.createdAt,
        updatedAt: project.updatedAt
      }
    });
  } catch (error) {
    console.error('Get project error:', error);
    res.status(500).json({ error: 'Erreur récupération projet' });
  }
});

router.patch('/:projectId', authMiddleware, async (req, res) => {
  try {
    const { name, description, type, status, thumbnail } = req.body;

    const project = await Project.findOne({
      _id: req.params.projectId,
      userId: req.user.id
    });

    if (!project) {
      return res.status(404).json({ error: 'Projet non trouvé' });
    }

    if (name) project.name = name;
    if (description !== undefined) project.description = description;
    if (type) project.type = type;
    if (status) project.status = status;
    if (thumbnail) project.thumbnail = thumbnail;
    project.updatedAt = new Date();

    await project.save();

    res.json({
      success: true,
      project: {
        id: project._id,
        name: project.name,
        description: project.description,
        type: project.type,
        status: project.status,
        updatedAt: project.updatedAt
      }
    });
  } catch (error) {
    console.error('Update project error:', error);
    res.status(500).json({ error: 'Erreur mise à jour projet' });
  }
});

router.delete('/:projectId', authMiddleware, async (req, res) => {
  try {
    const project = await Project.findOne({
      _id: req.params.projectId,
      userId: req.user.id
    });

    if (!project) {
      return res.status(404).json({ error: 'Projet non trouvé' });
    }

    await Project.deleteOne({ _id: project._id });

    res.json({ success: true, message: 'Projet supprimé' });
  } catch (error) {
    console.error('Delete project error:', error);
    res.status(500).json({ error: 'Erreur suppression projet' });
  }
});

module.exports = router;
