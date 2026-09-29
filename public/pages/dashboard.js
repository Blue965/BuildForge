import { fetchAPI, setCurrentPage, logout, getCurrentUser, setCurrentUser, showToast } from '../lib.js';
import { router } from '../app.js';

let projects = [];
let currentUser = null;

export const renderDashboard = async (container) => {
  try {
    const userResponse = await fetchAPI('/users/me');
    currentUser = userResponse.user;
    setCurrentUser(currentUser);

    const projectsResponse = await fetchAPI('/projects');
    projects = projectsResponse.projects || [];
  } catch (error) {
    console.error('Erreur chargement dashboard:', error);
  }

  container.innerHTML = `
    <div class="dashboard">
      <aside class="sidebar">
        <a href="#" class="sidebar-brand">
          <div class="badge">BF</div>
          <span>BuildForge</span>
        </a>

        <nav class="sidebar-nav">
          <a class="nav-item active" data-page="dashboard">📊 Dashboard</a>
          <a class="nav-item" data-page="studio">🎨 Studio</a>
          <a class="nav-item" data-page="profile">👤 Profil</a>
        </nav>

        <div class="sidebar-bottom">
          <button class="btn btn-sm-primary" id="newProjectBtn">+ Nouveau projet</button>
          <button class="btn btn-sm-secondary" id="logoutBtn">Déconnexion</button>
        </div>
      </aside>

      <main class="main-content">
        <div class="header">
          <div>
            <h1>🎨 Tes Créations</h1>
            <p style="color: var(--muted);">Bienvenue ${currentUser?.username || 'Créateur'}!</p>
          </div>
          <button class="btn btn-primary" id="newProjectBtn2">+ Nouveau Projet</button>
        </div>

        <div id="projectsContainer" class="projects-grid">
          <div class="new-project-card" id="newProjectCard">
            <div class="new-project-icon">➕</div>
            <div>Créer un projet</div>
          </div>
          ${projects.map(project => `
            <div class="project-card" data-project-id="${project.id}">
              <h3>${project.name}</h3>
              <p>${project.description || 'Aucune description'}</p>
              <span class="project-type">${project.type}</span>
              <div class="project-meta">
                <span>${new Date(project.updatedAt).toLocaleDateString('fr-FR')}</span>
                <span class="project-status">${project.status}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </main>
    </div>
  `;

  setupDashboardListeners();
};

const setupDashboardListeners = () => {
  const navItems = document.querySelectorAll('.nav-item');
  const newProjectBtn = document.getElementById('newProjectBtn') || document.getElementById('newProjectBtn2');
  const logoutBtn = document.getElementById('logoutBtn');
  const projectCards = document.querySelectorAll('.project-card');

  navItems.forEach(item => {
    item.addEventListener('click', (e) => {
      e.preventDefault();
      const page = item.dataset.page;
      setCurrentPage(page);
      router();
    });
  });

  newProjectBtn?.addEventListener('click', () => {
    showCreateProjectModal();
  });

  logoutBtn?.addEventListener('click', () => {
    if (confirm('Sûr de vouloir te déconnecter ?')) {
      logout();
    }
  });

  projectCards.forEach(card => {
    card.addEventListener('click', () => {
      const projectId = card.dataset.projectId;
      localStorage.setItem('buildforge_project_id', projectId);
      setCurrentPage('studio');
      router();
    });
  });
};

const showCreateProjectModal = () => {
  const backdrop = document.createElement('div');
  backdrop.className = 'modal-backdrop';
  backdrop.innerHTML = `
    <div class="modal">
      <div class="modal-header">
        <h2>Nouveau Projet</h2>
      </div>
      <form id="createProjectForm" class="modal-body">
        <div class="form-group">
          <label>Nom du projet</label>
          <input type="text" id="projectName" placeholder="Mon projet" required>
        </div>
        <div class="form-group">
          <label>Description</label>
          <textarea id="projectDesc" placeholder="Décris ton idée..." rows="3"></textarea>
        </div>
        <div class="form-group">
          <label>Type</label>
          <select id="projectType">
            <option value="World">🌍 World</option>
            <option value="Game">🎮 Game</option>
            <option value="Model">📦 Model</option>
            <option value="UI">🎨 UI</option>
            <option value="Script">⚙️ Script</option>
          </select>
        </div>
      </form>
      <div class="modal-footer">
        <button class="btn btn-secondary" id="cancelBtn">Annuler</button>
        <button class="btn btn-primary" id="createBtn" form="createProjectForm">Créer</button>
      </div>
    </div>
  `;

  document.body.appendChild(backdrop);

  const form = backdrop.querySelector('#createProjectForm');
  const cancelBtn = backdrop.querySelector('#cancelBtn');
  const createBtn = backdrop.querySelector('#createBtn');

  cancelBtn.addEventListener('click', () => backdrop.remove());

  backdrop.addEventListener('click', (e) => {
    if (e.target === backdrop) backdrop.remove();
  });

  createBtn.addEventListener('click', async () => {
    const name = backdrop.querySelector('#projectName').value;
    const description = backdrop.querySelector('#projectDesc').value;
    const type = backdrop.querySelector('#projectType').value;

    if (!name) {
      showToast('Nom requis', true);
      return;
    }

    try {
      const response = await fetchAPI('/projects', {
        method: 'POST',
        body: JSON.stringify({ name, description, type })
      });

      showToast('Projet créé avec succès!');
      backdrop.remove();

      const container = document.getElementById('app');
      renderDashboard(container);
    } catch (error) {
      showToast(error.message, true);
    }
  });
};
