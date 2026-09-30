const app = document.getElementById('app');

app.innerHTML = `
  <div class="page-shell">

    <header class="topbar">
      <div class="brand-wrap">
        <div class="brand-badge">BF</div>

        <div>
          <div class="brand-name">BuildForge</div>
          <div class="brand-sub">ROBLOX AI STUDIO</div>
        </div>
      </div>

      <nav class="nav-links">
        <a href="#features">Fonctionnalités</a>
        <a href="#studio">Studio</a>
        <a href="#pricing">Tarifs</a>
      </nav>

      <button class="ghost-btn" id="loginBtn">
        Se connecter
      </button>
    </header>

    <main class="hero">

      <section class="hero-copy">

        <div class="badge-pill">
          ⚡ IA pour Roblox Studio
        </div>

        <h1>
          Construis ton prochain jeu Roblox avec l'IA.
        </h1>

        <p>
          BuildForge aide les créateurs Roblox à générer
          des scripts Luau, des systèmes de gameplay,
          des interfaces, des mondes et bien plus.
        </p>

        <div class="cta-row">
          <button class="primary-btn" id="startBtn">
            Commencer
          </button>

          <button class="secondary-btn">
            Voir la démo
          </button>
        </div>

      </section>

      <section class="auth-panel">

        <div class="panel-card">

          <div class="panel-header">
            <p class="eyebrow">BUILD FORGE</p>
            <h2>Créer un compte</h2>
          </div>

          <div class="provider-list">

            <button class="provider-btn" id="robloxBtn">
              🎮 Continuer avec Roblox
            </button>

            <button class="provider-btn" id="googleBtn">
              Google
            </button>

          </div>

          <div class="divider">
            ou
          </div>

          <form class="email-form" id="emailForm">

            <label>
              Email
              <input
                type="email"
                id="emailInput"
                placeholder="ton@email.com"
                required
              >
            </label>

            <label>
              Nom d'utilisateur
              <input
                type="text"
                id="usernameInput"
                placeholder="Builder"
              >
            </label>

            <label>
              Mot de passe
              <input
                type="password"
                id="passwordInput"
                placeholder="••••••••"
                required
              >
            </label>

            <button class="submit-btn" type="submit">
              Créer mon compte
            </button>

          </form>

        </div>

      </section>

    </main>

    <section class="feature-section" id="features">

      <div class="section-title">
        <p>BUILD TOOLS</p>
        <h3>Tout pour créer sur Roblox</h3>
      </div>

      <div class="feature-grid">

        <article class="feature-card">
          <div>🏗️</div>
          <h4>Game Builder</h4>
          <p>
            Transforme une idée en système de jeu Roblox.
          </p>
        </article>

        <article class="feature-card">
          <div>⚙️</div>
          <h4>Luau AI</h4>
          <p>
            Génère et améliore tes scripts Luau.
          </p>
        </article>

        <article class="feature-card">
          <div>🎨</div>
          <h4>UI Builder</h4>
          <p>
            Crée des interfaces modernes pour Roblox Studio.
          </p>
        </article>

        <article class="feature-card">
          <div>🌎</div>
          <h4>World Builder</h4>
          <p>
            Imagine des maps, environnements et systèmes.
          </p>
        </article>

      </div>

    </section>

  </div>
`;

document.getElementById('startBtn')?.addEventListener('click', () => {
  document
    .querySelector('.auth-panel')
    ?.scrollIntoView({
      behavior: 'smooth'
    });
});

document.getElementById('loginBtn')?.addEventListener('click', () => {
  document
    .querySelector('.auth-panel')
    ?.scrollIntoView({
      behavior: 'smooth'
    });
});

document.getElementById('emailForm')?.addEventListener('submit', async (event) => {
  event.preventDefault();

  const email = document.getElementById('emailInput').value.trim();
  const username = document.getElementById('usernameInput').value.trim();
  const password = document.getElementById('passwordInput').value;

  try {
    const response = await fetch('/api/auth/email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        username,
        password
      })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.error || 'Erreur de connexion');
    }

    localStorage.setItem('buildforge_token', data.token);

    alert(`Bienvenue ${data.user.username} !`);
  } catch (error) {
    console.error(error);
    alert(error.message);
  }
});
