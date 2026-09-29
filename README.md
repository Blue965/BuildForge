const tokenKey = 'buildforge_token';

const showMessage = (message, isError = false) => {
  const existing = document.querySelector('.toast');
  if (existing) existing.remove();

  const toast = document.createElement('div');
  toast.className = `toast ${isError ? 'error' : 'success'}`;
  toast.textContent = message;
  document.body.appendChild(toast);

  setTimeout(() => toast.remove(), 3000);
};

const saveToken = (token) => {
  localStorage.setItem(tokenKey, token);
};

const getToken = () => localStorage.getItem(tokenKey);

const loginWithProvider = async (provider) => {
  try {
    if (provider === 'roblox') {
      const response = await fetch('/api/auth/roblox', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: 'BuildBoss', avatar: '' })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Erreur Roblox');
      saveToken(data.token);
      showMessage(`Connexion Roblox réussie ! Bienvenue ${data.user.username}`);
      return;
    }

    if (provider === 'google') {
      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: 'creator@gmail.com',
          name: 'Build Creator',
          avatar: ''
        })
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Erreur Google');
      saveToken(data.token);
      showMessage(`Connexion Google réussie ! Bienvenue ${data.user.username}`);
      return;
    }
  } catch (error) {
    showMessage(error.message, true);
  }
};

document.querySelectorAll('[data-provider]').forEach((button) => {
  button.addEventListener('click', () => loginWithProvider(button.dataset.provider));
});

document.getElementById('email-form').addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('emailInput').value.trim();
  const username = document.getElementById('usernameInput').value.trim();
  const password = document.getElementById('passwordInput').value;

  if (!email || !password) {
    showMessage('Email et mot de passe requis', true);
    return;
  }

  try {
    const response = await fetch('/api/auth/email', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email,
        password,
        username: username || email.split('@')[0]
      })
    });

    const data = await response.json();
    if (!response.ok) throw new Error(data.error || 'Erreur inscription');

    saveToken(data.token);
    showMessage(`Compte créé avec succès !
      Bienvenue ${data.user.username}`);
  } catch (error) {
    showMessage(error.message, true);
  }
});

window.addEventListener('load', async () => {
  const token = getToken();
  if (!token) return;

  try {
    const response = await fetch('/api/me', {
      headers: {
        Authorization: `Bearer ${token}`
      }
    });

    if (!response.ok) {
      throw new Error('Token invalid');
    }

    const user = await response.json();
    showMessage(`Connecté en tant que ${user.username}`);
  } catch (error) {
    localStorage.removeItem(tokenKey);
  }
});

const style = document.createElement('style');
style.textContent = `
  .toast {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 100;
    padding: 12px 18px;
    border-radius: 12px;
    font-weight: 700;
    color: white;
    background: linear-gradient(135deg, #4fd6a4, #52c7ff);
    box-shadow: 0 15px 30px rgba(79, 214, 164, 0.22);
  }

  .toast.error {
    background: linear-gradient(135deg, #ff6db8, #ff7a7a);
  }
`;
document.head.appendChild(style);
