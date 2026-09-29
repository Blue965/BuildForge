import { fetchAPI, setCurrentPage, saveToken, showToast } from '../lib.js';
import { router } from '../app.js';

export const renderLanding = (container) => {
  const token = localStorage.getItem('buildforge_token');
  if (token) {
    setCurrentPage('dashboard');
    router();
    return;
  }

  container.innerHTML = `
    <div class="landing-page">
      <header class="topbar">
        <div class="brand-wrap">
          <div class="brand-badge">BF</div>
          <div>
            <div class="brand-name">BuildForge</div>
            <div class="brand-sub">Studio AI</div>
          </div>
        </div>
        <nav class="nav-links">
          <a href="#features">Fonctionnalités</a>
          <a href="#pricing">Tarifs</a>
        </nav>
        <button class="btn btn-ghost" id="loginBtn">Se connecter</button>
      </header>

      <main class="hero">
        <section class="hero-copy">
          <div class="badge-pill">⚡ IA pour créer Roblox Studio</div>
          <h1>Crée tes mondes, UI, scripts et animations en une seule plateforme.</h1>
          <p>BuildForge aide les créateurs Roblox à générer des modèles, des interfaces, des animations et des systèmes via une IA puissante et intuitive.</p>
          <div class="cta-row">
            <button class="btn btn-primary" id="getStartedBtn">Commencer</button>
            <button class="btn btn-secondary">Voir la démo</button>
          </div>
        </section>

        <section class="auth-panel">
          <div class="panel-header">
            <p class="eyebrow">Bienvenue</p>
            <h2>Connecte-toi</h2>
          </div>

          <div class="provider-list">
            <button class="provider-btn roblox-btn" id="robloxBtn">🎮 Continuer avec Roblox</button>
            <button class="provider-btn google-btn" id="googleBtn">🔵 Continuer avec Google</button>
          </div>

          <div class="divider"><span>ou</span></div>

          <form id="emailForm" class="email-form">
            <div class="form-group">
              <label>Email</label>
              <input type="email" id="emailInput" placeholder="prenom@buildforge.io" required>
            </div>
            <div class="form-group">
              <label>Nom d'utilisateur</label>
              <input type="text" id="usernameInput" placeholder="BuildBoss">
            </div>
            <div class="form-group">
              <label>Mot de passe</label>
              <input type="password" id="passwordInput" placeholder="••••••••" required>
            </div>
            <button type="submit" class="btn btn-primary" style="width: 100%;">Créer mon compte</button>
          </form>
        </section>
      </main>
    </div>
  `;

  setupLandingListeners();
};

const setupLandingListeners = () => {
  const robloxBtn = document.getElementById('robloxBtn');
  const googleBtn = document.getElementById('googleBtn');
  const emailForm = document.getElementById('emailForm');
  const getStartedBtn = document.getElementById('getStartedBtn');

  robloxBtn?.addEventListener('click', async () => {
    try {
      const response = await fetchAPI('/auth/roblox', {
        method: 'POST',
        body: JSON.stringify({
          username: 'RobloxCreator',
          avatar: '🎮'
        })
      });

      if (response.token) {
        saveToken(response.token);
        showToast(`Connexion réussie ! Bienvenue ${response.user.username}`);
        setTimeout(() => {
          setCurrentPage('dashboard');
          router();
        }, 500);
      }
    } catch (error) {
      showToast(error.message, true);
    }
  });

  googleBtn?.addEventListener('click', async () => {
    try {
      const response = await fetchAPI('/auth/google', {
        method: 'POST',
        body: JSON.stringify({
          email: 'creator@gmail.com',
          name: 'Google Creator',
          avatar: '👤'
        })
      });

      if (response.token) {
        saveToken(response.token);
        showToast(`Connexion réussie ! Bienvenue ${response.user.username}`);
        setTimeout(() => {
          setCurrentPage('dashboard');
          router();
        }, 500);
      }
    } catch (error) {
      showToast(error.message, true);
    }
  });

  emailForm?.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('emailInput').value.trim();
    const username = document.getElementById('usernameInput').value.trim();
    const password = document.getElementById('passwordInput').value;

    if (!email || !password) {
      showToast('Email et mot de passe requis', true);
      return;
    }

    try {
      const response = await fetchAPI('/auth/email', {
        method: 'POST',
        body: JSON.stringify({
          email,
          username: username || email.split('@')[0],
          password
        })
      });

      if (response.token) {
        saveToken(response.token);
        showToast(`Compte créé ! Bienvenue ${response.user.username}`);
        setTimeout(() => {
          setCurrentPage('dashboard');
          router();
        }, 500);
      }
    } catch (error) {
      showToast(error.message, true);
    }
  });

  getStartedBtn?.addEventListener('click', () => {
    document.querySelector('.auth-panel').scrollIntoView({ behavior: 'smooth' });
  });
};
