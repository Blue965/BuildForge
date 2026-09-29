* {
  box-sizing: border-box;
}

:root {
  --bg: #f9f3ff;
  --bg-dark: #180f2d;
  --card: rgba(255, 255, 255, 0.8);
  --purple: #7c4dff;
  --purple-dark: #5534d6;
  --pink: #ff6db8;
  --orange: #ffb347;
  --blue: #52c7ff;
  --green: #4fd6a4;
  --text: #1f1830;
  --muted: #655a7a;
  --shadow: 0 20px 50px rgba(92, 66, 155, 0.18);
}

html {
  scroll-behavior: smooth;
}

body {
  margin: 0;
  font-family: 'Inter', sans-serif;
  background: radial-gradient(circle at top, #fff8df 0%, #f3ebff 20%, #efe9ff 100%);
  color: var(--text);
}

button,
input {
  font: inherit;
}

.page-shell {
  max-width: 1280px;
  margin: 0 auto;
  padding: 24px 28px 60px;
}

.topbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 14px 16px;
  background: rgba(255, 255, 255, 0.56);
  border: 1px solid rgba(124, 77, 255, 0.12);
  border-radius: 22px;
  box-shadow: 0 10px 30px rgba(71, 46, 123, 0.08);
  backdrop-filter: blur(10px);
}

.brand-wrap {
  display: flex;
  align-items: center;
  gap: 12px;
}

.brand-badge {
  width: 42px;
  height: 42px;
  display: grid;
  place-items: center;
  border-radius: 14px;
  background: linear-gradient(135deg, var(--purple), var(--pink));
  color: white;
  font-family: 'Baloo 2', cursive;
  font-weight: 800;
  box-shadow: 0 10px 20px rgba(124, 77, 255, 0.35);
}

.brand-copy {
  display: flex;
  flex-direction: column;
  line-height: 1;
}

.brand-name {
  font-family: 'Baloo 2', cursive;
  font-size: 1.7rem;
  font-weight: 800;
}

.brand-sub {
  font-size: 0.7rem;
  opacity: 0.7;
  letter-spacing: 0.12em;
  text-transform: uppercase;
}

.nav-links {
  display: flex;
  gap: 30px;
}

.nav-links a {
  text-decoration: none;
  color: var(--muted);
  font-weight: 600;
}

.ghost-btn,
.primary-btn,
.secondary-btn,
.provider-btn,
.submit-btn {
  border: none;
  border-radius: 16px;
  font-weight: 700;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.ghost-btn,
.secondary-btn {
  background: rgba(255, 255, 255, 0.8);
  color: var(--text);
  border: 1px solid rgba(124, 77, 255, 0.12);
}

.ghost-btn {
  padding: 12px 20px;
}

.hero {
  display: grid;
  grid-template-columns: 1.2fr 0.8fr;
  align-items: center;
  gap: 36px;
  min-height: 720px;
  padding-top: 32px;
}

.hero-copy {
  padding-right: 24px;
}

.badge-pill {
  display: inline-flex;
  align-items: center;
  padding: 10px 16px;
  border-radius: 999px;
  background: rgba(255, 179, 71, 0.18);
  color: var(--purple-dark);
  font-weight: 700;
  margin-bottom: 18px;
}

.hero-copy h1 {
  margin: 0;
  font-family: 'Baloo 2', cursive;
  font-size: clamp(3rem, 5vw, 5rem);
  line-height: 0.92;
  letter-spacing: -0.05em;
}

.hero-copy p {
  font-size: 1.1rem;
  line-height: 1.8;
  color: var(--muted);
  max-width: 620px;
  margin-top: 20px;
}

.cta-row {
  display: flex;
  gap: 16px;
  margin-top: 28px;
}

.primary-btn,
.submit-btn {
  padding: 16px 26px;
  background: linear-gradient(135deg, var(--purple), var(--pink));
  color: white;
  box-shadow: 0 14px 24px rgba(124, 77, 255, 0.35);
}

.secondary-btn {
  padding: 16px 26px;
}

.primary-btn:hover,
.secondary-btn:hover,
.provider-btn:hover,
.submit-btn:hover,
.ghost-btn:hover {
  transform: translateY(-2px);
}

.mini-stats {
  display: flex;
  gap: 28px;
  margin-top: 32px;
}

.mini-stats div {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.mini-stats strong {
  font-size: 1.6rem;
  font-family: 'Baloo 2', cursive;
}

.mini-stats span {
  color: var(--muted);
}

.auth-panel {
  display: flex;
  justify-content: center;
}

.panel-card {
  width: min(100%, 470px);
  background: rgba(255, 255, 255, 0.78);
  border: 1px solid rgba(124, 77, 255, 0.1);
  border-radius: 28px;
  box-shadow: var(--shadow);
  padding: 28px 24px 22px;
}

.eyebrow {
  margin: 0 0 10px;
  color: var(--purple);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  font-weight: 700;
  text-transform: uppercase;
}

.panel-header h2 {
  margin: 0;
  font-size: clamp(2rem, 4vw, 2.7rem);
  font-family: 'Baloo 2', cursive;
}

.provider-list {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-top: 22px;
}

.provider-btn {
  width: 100%;
  padding: 16px 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1rem;
  background: white;
  color: var(--text);
  border: 1px solid rgba(124, 77, 255, 0.09);
}

.roblox-btn {
  background: linear-gradient(135deg, rgba(124, 77, 255, 0.08), rgba(93, 214, 255, 0.08));
}

.google-btn {
  background: linear-gradient(135deg, rgba(255, 109, 184, 0.08), rgba(255, 179, 71, 0.08));
}

.divider {
  position: relative;
  text-align: center;
  margin: 22px 0 18px;
  color: var(--muted);
  font-size: 0.84rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

.divider::before {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  height: 1px;
  background: rgba(109, 92, 141, 0.14);
}

.divider span {
  position: relative;
  background: rgba(255, 255, 255, 0.9);
  padding: 0 12px;
}

.email-form {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.email-form label {
  display: flex;
  flex-direction: column;
  gap: 8px;
  font-weight: 600;
  color: var(--muted);
}

.email-form input {
  border: 1px solid rgba(124, 77, 255, 0.12);
  border-radius: 14px;
  padding: 14px 16px;
  background: rgba(246, 240, 255, 0.9);
  color: var(--text);
  outline: none;
}

.email-form input:focus {
  border-color: rgba(124, 77, 255, 0.55);
  box-shadow: 0 0 0 4px rgba(124, 77, 255, 0.08);
}

.submit-btn {
  margin-top: 8px;
}

.feature-section {
  padding-top: 40px;
}

.section-title {
  text-align: center;
  margin-bottom: 26px;
}

.section-title p {
  margin: 0;
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  color: var(--purple);
  text-transform: uppercase;
  font-weight: 700;
}

.section-title h3 {
  margin: 10px 0 0;
  font-family: 'Baloo 2', cursive;
  font-size: clamp(2rem, 4vw, 3.4rem);
}

.feature-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(200px, 1fr));
  gap: 20px;
  margin-top: 22px;
}

.feature-card {
  border-radius: 24px;
  padding: 22px 18px;
  border: 1px solid rgba(25, 20, 36, 0.06);
  box-shadow: 0 12px 30px rgba(39, 28, 55, 0.08);
}

.card-purple { background: linear-gradient(180deg, rgba(124, 77, 255, 0.12), rgba(124, 77, 255, 0.04)); }
.card-orange { background: linear-gradient(180deg, rgba(255, 179, 71, 0.16), rgba(255, 179, 71, 0.05)); }
.card-blue { background: linear-gradient(180deg, rgba(82, 199, 255, 0.13), rgba(82, 199, 255, 0.04)); }
.card-green { background: linear-gradient(180deg, rgba(79, 214, 164, 0.15), rgba(79, 214, 164, 0.05)); }

.emoji {
  font-size: 2rem;
}

.feature-card h4 {
  margin: 18px 0 8px;
  font-size: 1.3rem;
}

.feature-card p {
  margin: 0;
  color: var(--muted);
  line-height: 1.7;
}

@media (max-width: 980px) {
  .hero {
    grid-template-columns: 1fr;
    padding-top: 18px;
  }

  .feature-grid {
    grid-template-columns: repeat(2, minmax(200px, 1fr));
  }
}

@media (max-width: 640px) {
  .page-shell {
    padding: 18px 18px 42px;
  }

  .topbar {
    flex-wrap: wrap;
    gap: 12px;
  }

  .nav-links {
    display: none;
  }

  .mini-stats {
    flex-wrap: wrap;
  }

  .feature-grid {
    grid-template-columns: 1fr;
  }
}
