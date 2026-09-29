import { fetchAPI, setCurrentPage, getCurrentUser, setCurrentUser, showToast } from '../lib.js';
import { router } from '../app.js';

let currentProject = null;

export const renderStudio = async (container) => {
  const projectId = localStorage.getItem('buildforge_project_id');

  if (!projectId) {
    setCurrentPage('dashboard');
    router();
    return;
  }

  try {
    const response = await fetchAPI(`/projects/${projectId}`);
    currentProject = response.project;
  } catch (error) {
    showToast('Erreur chargement du projet', true);
    setCurrentPage('dashboard');
    router();
    return;
  }

  container.innerHTML = `
    <div class="studio">
      <div class="studio-main">
        <div style="background: rgba(255,255,255,0.8); border-radius: 16px; padding: 16px; display: flex; align-items: center; justify-content: space-between;">
          <div>
            <h2 style="margin: 0; font-family: 'Baloo 2', cursive; font-size: 1.6rem;">${currentProject.name}</h2>
            <p style="margin: 4px 0 0; color: var(--muted);">Type: ${currentProject.type}</p>
          </div>
          <div style="display: flex; gap: 12px;">
            <button class="btn btn-secondary" id="backBtn">← Retour</button>
            <button class="btn btn-primary" id="saveBtn">💾 Sauvegarder</button>
          </div>
        </div>

        <div class="studio-canvas" id="canvas">
          <div>
            <p style="text-align: center; margin: 0;">
              🎨 Canvas de prévisualisation<br>
              <small>Les assets générés s'afficheront ici</small>
            </p>
          </div>
        </div>
      </div>

      <div class="studio-sidebar">
        <div class="studio-section">
          <div class="studio-section-title">🤖 Générateur IA</div>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="font-weight: 600; color: var(--text);">Décris ce que tu veux</label>
            <textarea id="aiPrompt" class="prompt-box" placeholder="Ex: Un personnage Roblox de robot futuriste..."></textarea>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <button class="btn btn-sm btn-sm-primary" id="generateModel">📦 Modèle</button>
              <button class="btn btn-sm btn-sm-primary" id="generateAnimation">✨ Animation</button>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
              <button class="btn btn-sm btn-sm-primary" id="generateUI">🎨 UI</button>
              <button class="btn btn-sm btn-sm-primary" id="generateScript">⚙️ Script</button>
            </div>
          </div>
        </div>

        <div class="studio-section">
          <div class="studio-section-title">📚 Ressources</div>
          <div id="assetsList" style="display: flex; flex-direction: column; gap: 8px;">
            ${currentProject.assets && currentProject.assets.length > 0 ? currentProject.assets.map(asset => `
              <div style="background: rgba(124,77,255,0.05); padding: 12px; border-radius: 8px;">
                <div style="font-weight: 600;">${asset.name}</div>
                <small style="color: var(--muted);">${asset.type}</small>
              </div>
            `).join('') : '<p style="color: var(--muted);">Aucune ressource</p>'}
          </div>
        </div>

        <div class="studio-section">
          <div class="studio-section-title">⚙️ Paramètres</div>
          <div class="form-group">
            <label>Visibilité</label>
            <select style="width: 100%;">
              <option>Privé</option>
              <option>Public</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  `;

  setupStudioListeners();
};

const setupStudioListeners = () => {
  const backBtn = document.getElementById('backBtn');
  const saveBtn = document.getElementById('saveBtn');
  const generateModel = document.getElementById('generateModel');
  const generateAnimation = document.getElementById('generateAnimation');
  const generateUI = document.getElementById('generateUI');
  const generateScript = document.getElementById('generateScript');
  const promptBox = document.getElementById('aiPrompt');
  const canvas = document.getElementById('canvas');

  backBtn.addEventListener('click', () => {
    setCurrentPage('dashboard');
    router();
  });

  saveBtn.addEventListener('click', () => {
    showToast('Projet sauvegardé!');
  });

  const generateAsset = (type) => {
    const prompt = promptBox.value.trim();
    if (!prompt) {
      showToast('Écris un prompt d\'abord!', true);
      return;
    }

    canvas.innerHTML = `
      <div style="text-align: center;">
        <p style="margin-bottom: 12px;">⏳ Génération de ${type}...</p>
        <div style="width: 40px; height: 40px; border: 4px solid rgba(124,77,255,0.2); border-top-color: var(--purple); border-radius: 50%; animation: spin 0.8s linear infinite; margin: 0 auto;"></div>
      </div>
    `;

    setTimeout(() => {
      canvas.innerHTML = `
        <div style="text-align: center;">
          <p style="margin: 0; font-size: 2rem; margin-bottom: 12px;">✅</p>
          <p style="margin: 0;">Génération ${type.toLowerCase()} simulée!</p>
          <small style="color: var(--muted);">Intégration API à venir</small>
        </div>
      `;

      const style = document.createElement('style');
      style.textContent = '@keyframes spin { to { transform: rotate(360deg); } }';
      document.head.appendChild(style);
    }, 2000);
  };

  generateModel.addEventListener('click', () => generateAsset('3D Model'));
  generateAnimation.addEventListener('click', () => generateAsset('Animation'));
  generateUI.addEventListener('click', () => generateAsset('UI'));
  generateScript.addEventListener('click', () => generateAsset('Script'));
};
