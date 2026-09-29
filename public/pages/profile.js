import { fetchAPI, setCurrentPage, logout, showToast } from '../lib.js';
import { router } from '../app.js';

let currentUser = null;

export const renderProfile = async (container) => {
  try {
    const response = await fetchAPI('/users/me');
    currentUser = response.user;
  } catch (error) {
    showToast('Erreur chargement profil', true);
    setCurrentPage('dashboard');
    router();
    return;
  }

  const avatarEmoji = currentUser.avatar || '👤';

  container.innerHTML = `
    <div class="profile">
      <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 32px;">
        <button class="btn btn-secondary" id="backBtn">← Retour</button>
        <h1 style="font-family: 'Baloo 2', cursive; font-size: 2.2rem; margin: 0;">👤 Profil</h1>
      </div>

      <div class="profile-header">
        <div class="profile-avatar">${avatarEmoji}</div>
        <div class="profile-info">
          <h1>${currentUser.username}</h1>
          <p>${currentUser.email}</p>
          <p style="margin-top: 12px; color: var(--muted);">Créateur BuildForge | Connecté via ${currentUser.provider}</p>
          <div class="profile-stats">
            <div class="stat-item">
              <div class="stat-value">0</div>
              <div class="stat-label">Projets</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">0</div>
              <div class="stat-label">Assets</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">0</div>
              <div class="stat-label">Followers</div>
            </div>
            <div class="stat-item">
              <div class="stat-value">0</div>
              <div class="stat-label">Following</div>
            </div>
          </div>
        </div>
      </div>

      <div style="background: rgba(255,255,255,0.8); border-radius: 24px; padding: 32px; border: 1px solid rgba(124,77,255,0.1); margin-bottom: 24px;">
        <h2 style="margin: 0 0 24px; font-family: 'Baloo 2', cursive; font-size: 1.5rem;">⚙️ Paramètres</h2>
        <div class="form-group">
          <label>Nom d'utilisateur</label>
          <input type="text" id="username" value="${currentUser.username}" placeholder="Ton nom">
        </div>
        <div class="form-group">
          <label>Email</label>
          <input type="email" value="${currentUser.email}" disabled style="opacity: 0.6;">
        </div>
        <div class="form-group">
          <label>Bio</label>
          <textarea id="bio" placeholder="Parle de toi..." rows="3"></textarea>
        </div>
        <button class="btn btn-primary" id="saveBtn" style="width: 100%; margin-top: 16px;">💾 Sauvegarder</button>
      </div>

      <div style="display: flex; gap: 12px;">
        <button class="btn btn-secondary" id="deleteBtn">🗑️ Supprimer compte</button>
        <button class="btn btn-red" id="logoutBtn" style="background: linear-gradient(135deg, var(--red), #ff5252); color: white;">🚪 Déconnexion</button>
      </div>
    </div>
  `;

  setupProfileListeners();
};

const setupProfileListeners = () => {
  const backBtn = document.getElementById('backBtn');
  const saveBtn = document.getElementById('saveBtn');
  const logoutBtn = document.getElementById('logoutBtn');
  const deleteBtn = document.getElementById('deleteBtn');
  const usernameInput = document.getElementById('username');
  const bioInput = document.getElementById('bio');

  backBtn.addEventListener('click', () => {
    setCurrentPage('dashboard');
    router();
  });

  saveBtn.addEventListener('click', async () => {
    try {
      const username = usernameInput.value.trim();
      const bio = bioInput.value.trim();

      if (!username || username.length < 3) {
        showToast('Nom d\'au moins 3 caractères', true);
        return;
      }

      await fetchAPI('/users/me', {
        method: 'PATCH',
        body: JSON.stringify({ username, bio })
      });

      showToast('Profil mis à jour!');
    } catch (error) {
      showToast(error.message, true);
    }
  });

  logoutBtn.addEventListener('click', () => {
    if (confirm('Sûr de vouloir te déconnecter ?')) {
      logout();
    }
  });

  deleteBtn.addEventListener('click', () => {
    if (confirm('⚠️ Cette action est irréversible. Tu es vraiment sûr ?')) {
      if (confirm('C\'est vraiment la dernière chance...')) {
        showToast('Compte supprimé');
        logout();
      }
    }
  });
};
