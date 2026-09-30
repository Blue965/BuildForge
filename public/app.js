const app = document.getElementById("app");

/* =========================================================
   BUILDFORGE APPLICATION
   ========================================================= */

app.innerHTML = `
  <div class="site-container">

    <!-- =====================================================
         NAVBAR
    ====================================================== -->

    <header class="navbar">

      <a href="#" class="logo">

        <div class="logo-icon">
          BF
        </div>

        <div class="logo-text">
          Build<span>Forge</span>

          <small class="logo-small">
            ROBLOX CREATION PLATFORM
          </small>
        </div>

      </a>


      <nav class="nav-links">

        <a class="nav-link" href="#features">
          Features
        </a>

        <a class="nav-link" href="#studio">
          AI Studio
        </a>

        <a class="nav-link" href="#how">
          How it works
        </a>

        <a class="nav-link" href="#creators">
          Creators
        </a>

      </nav>


      <div class="nav-actions" id="navActions">

        <button
          class="btn btn-primary"
          id="navStart"
          type="button"
        >
          Open Studio
        </button>

      </div>

    </header>


    <!-- =====================================================
         HERO
    ====================================================== -->

    <main>

      <section class="hero">

        <div class="hero-content">

          <div class="hero-label">

            <span class="hero-label-dot"></span>

            AI CREATION FOR ROBLOX

          </div>


          <h1>

            Build your
            <span class="blue">
              Roblox
            </span>
            ideas.

          </h1>


          <p class="hero-description">

            BuildForge gives creators a playful workspace
            to design games, generate Luau systems,
            create interfaces and turn ideas into real
            Roblox projects.

          </p>


          <div class="hero-actions">

            <button
              class="btn btn-primary"
              id="heroStart"
              type="button"
            >
              Start Creating
            </button>


            <button
              class="btn btn-secondary"
              id="heroExplore"
              type="button"
            >
              Explore Studio
            </button>

          </div>


          <div class="hero-note">

            <span>●</span>

            Built for Roblox creators

          </div>

        </div>


        <!-- CARTOONY WORLD -->

        <div class="hero-visual">

          <div class="world-card">

            <div class="world-sun"></div>

            <div class="world-cloud world-cloud-one"></div>

            <div class="world-cloud world-cloud-two"></div>


            <div class="tree tree-one">

              <div class="tree-top"></div>

              <div class="tree-trunk"></div>

            </div>


            <div class="tree tree-two">

              <div class="tree-top"></div>

              <div class="tree-trunk"></div>

            </div>


            <div class="world-ground"></div>

            <div class="world-dirt"></div>

            <div class="world-platform"></div>


            <div class="cube cube-blue"></div>

            <div class="cube cube-yellow"></div>

            <div class="cube cube-orange"></div>


            <div class="ai-mascot">

              <div class="ai-head">

                <div class="ai-eye"></div>

                <div class="ai-eye"></div>

              </div>

              <div class="ai-mouth"></div>

            </div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           FEATURES
      ====================================================== -->

      <section
        class="section"
        id="features"
      >

        <div class="section-heading">

          <div class="section-kicker">
            BUILD TOOLS
          </div>

          <h2>
            Everything you need to build.
          </h2>

          <p>
            One playful workspace for your Roblox
            development ideas.
          </p>

        </div>


        <div class="features-grid">

          <article class="feature-card">

            <span class="feature-number">
              01
            </span>

            <div class="feature-icon">
              ▦
            </div>

            <h3>
              Game Builder
            </h3>

            <p>
              Turn gameplay ideas into structured
              Roblox systems and mechanics.
            </p>

          </article>


          <article class="feature-card">

            <span class="feature-number">
              02
            </span>

            <div class="feature-icon">
              &lt;/&gt;
            </div>

            <h3>
              Luau AI
            </h3>

            <p>
              Generate, explain, improve and debug
              Luau code for your projects.
            </p>

          </article>


          <article class="feature-card">

            <span class="feature-number">
              03
            </span>

            <div class="feature-icon">
              ◈
            </div>

            <h3>
              UI Builder
            </h3>

            <p>
              Design clean Roblox interfaces and
              gameplay menus faster.
            </p>

          </article>


          <article class="feature-card">

            <span class="feature-number">
              04
            </span>

            <div class="feature-icon">
              ◒
            </div>

            <h3>
              World Builder
            </h3>

            <p>
              Plan environments, maps, systems and
              interactive worlds.
            </p>

          </article>

        </div>

      </section>


      <!-- =====================================================
           STUDIO
      ====================================================== -->

      <section
        class="studio-section"
        id="studio"
      >

        <div class="section-heading">

          <div class="section-kicker">
            BUILDFORGE STUDIO
          </div>

          <h2>
            Your creative workspace.
          </h2>

          <p>
            A workspace designed around building,
            not endless menus.
          </p>

        </div>


        <div class="studio-window">

          <div class="studio-topbar">

            <div class="window-dots">

              <span class="window-dot"></span>
              <span class="window-dot"></span>
              <span class="window-dot"></span>

            </div>

            <div class="studio-title">
              BuildForge Studio
            </div>

          </div>


          <div class="studio-body">

            <aside class="studio-sidebar">

              <div class="tool-title">
                CREATE
              </div>


              <div class="tool active">
                ▦
                Game
              </div>


              <div class="tool">
                &lt;/&gt;
                Scripts
              </div>


              <div class="tool">
                ◈
                Interface
              </div>


              <div class="tool">
                ◒
                World
              </div>


              <div class="tool">
                ◇
                Assets
              </div>


              <br>


              <div class="tool-title">
                PROJECT
              </div>


              <div class="tool">
                Project
              </div>


              <div class="tool">
                Settings
              </div>

            </aside>


            <div class="studio-canvas">

              <div class="canvas-grid"></div>

              <div class="canvas-platform"></div>


              <div class="canvas-building">

                <div
                  class="canvas-window canvas-window-one"
                ></div>

                <div
                  class="canvas-window canvas-window-two"
                ></div>

                <div class="canvas-door"></div>

              </div>


              <div class="canvas-roof"></div>

            </div>


            <aside class="ai-panel">

              <div class="ai-panel-title">

                <span class="ai-status"></span>

                BuildForge AI

              </div>


              <div class="ai-message">

                <strong>
                  AI Assistant
                </strong>

                <br><br>

                Your Roblox building system
                is ready to be generated.

              </div>


              <div class="ai-code">

                local Building = {}

                <br><br>

                function Building.new()

                <br>

                &nbsp;&nbsp;return {

                <br>

                &nbsp;&nbsp;&nbsp;&nbsp;Name = "House"

                <br>

                &nbsp;&nbsp;}

                <br>

                end

              </div>


              <div class="ai-input">

                <div class="ai-input-box">
                  Ask BuildForge...
                </div>

                <button
                  class="ai-send"
                  type="button"
                >
                  →
                </button>

              </div>

            </aside>

          </div>

        </div>

      </section>


      <!-- =====================================================
           HOW IT WORKS
      ====================================================== -->

      <section
        class="section"
        id="how"
      >

        <div class="section-heading">

          <div class="section-kicker">
            SIMPLE WORKFLOW
          </div>

          <h2>
            From idea to creation.
          </h2>

          <p>
            Describe what you want to build and
            work from there.
          </p>

        </div>


        <div class="steps">

          <article class="step">

            <div class="step-number">
              01
            </div>

            <h3>
              Describe
            </h3>

            <p>
              Explain your Roblox game or system
              using your own words.
            </p>

          </article>


          <article class="step">

            <div class="step-number">
              02
            </div>

            <h3>
              Build
            </h3>

            <p>
              Use the BuildForge workspace to
              develop your idea.
            </p>

          </article>


          <article class="step">

            <div class="step-number">
              03
            </div>

            <h3>
              Create
            </h3>

            <p>
              Take your project into your Roblox
              development workflow.
            </p>

          </article>

        </div>

      </section>


      <!-- =====================================================
           CREATORS
      ====================================================== -->

      <section
        class="section"
        id="creators"
      >

        <div class="creator-card">

          <div>

            <div class="section-kicker">
              MADE FOR CREATORS
            </div>


            <h2>
              Your ideas deserve
              a place to grow.
            </h2>


            <p>
              BuildForge is designed around the way
              Roblox creators actually work — ideas,
              scripts, interfaces, worlds and iteration.
            </p>


            <div class="creator-list">

              <div class="creator-item">

                <span class="creator-check">
                  ✓
                </span>

                Luau development

              </div>


              <div class="creator-item">

                <span class="creator-check">
                  ✓
                </span>

                Gameplay systems

              </div>


              <div class="creator-item">

                <span class="creator-check">
                  ✓
                </span>

                Roblox UI workflows

              </div>


              <div class="creator-item">

                <span class="creator-check">
                  ✓
                </span>

                World & map ideas

              </div>

            </div>

          </div>


          <div class="creator-art">

            <div
              class="creator-cube creator-cube-one"
            ></div>

            <div
              class="creator-cube creator-cube-two"
            ></div>

            <div
              class="creator-cube creator-cube-three"
            ></div>

          </div>

        </div>

      </section>


      <!-- =====================================================
           FINAL CTA
      ====================================================== -->

      <section class="final-cta">

        <h2>
          Ready to build?
        </h2>

        <p>
          Start turning your Roblox ideas into
          something you can actually build.
        </p>


        <button
          class="btn btn-yellow"
          id="finalStart"
          type="button"
        >
          Open BuildForge Studio
        </button>

      </section>

    </main>


    <!-- =====================================================
         FOOTER
    ====================================================== -->

    <footer class="footer">

      <div class="footer-inner">

        <div>

          <div class="footer-brand">
            Build<span>Forge</span>
          </div>

          <div class="footer-copy">
            Roblox creation platform.
          </div>

        </div>


        <div class="footer-links">

          <a href="#features">
            Features
          </a>

          <a href="#studio">
            Studio
          </a>

          <a href="#how">
            How it works
          </a>

          <a href="#">
            Privacy
          </a>

          <a href="#">
            Terms
          </a>

        </div>

      </div>

    </footer>

  </div>


  <!-- =======================================================
       AUTH MODAL
  ======================================================== -->

  <div
    class="modal-overlay"
    id="authModal"
  >

    <div class="auth-modal">

      <div class="modal-header">

        <div>

          <h2 id="authTitle">
            Welcome to BuildForge
          </h2>

          <p id="authSubtitle">
            Create your creator account.
          </p>

        </div>


        <button
          class="modal-close"
          id="closeModal"
          type="button"
          aria-label="Close"
        >
          ×
        </button>

      </div>


      <!-- AUTH MODE SWITCH -->

      <div
        class="auth-switch"
        style="
          display:flex;
          gap:8px;
          margin-bottom:20px;
        "
      >

        <button
          type="button"
          id="registerMode"
          class="btn btn-primary"
          style="flex:1;"
        >
          Create Account
        </button>


        <button
          type="button"
          id="loginMode"
          class="btn btn-secondary"
          style="flex:1;"
        >
          Login
        </button>

      </div>


      <!-- AUTH ERROR -->

      <div
        id="authError"
        style="
          display:none;
          margin-bottom:16px;
          padding:12px 14px;
          border-radius:12px;
          background:#fff0f0;
          color:#d93025;
          font-size:14px;
          font-weight:600;
        "
      ></div>


      <!-- AUTH FORM -->

      <form
        class="auth-form"
        id="authForm"
      >

        <!-- USERNAME -->

        <label
          class="form-field"
          id="usernameField"
        >

          Username

          <input
            type="text"
            id="usernameInput"
            placeholder="Builder"
            minlength="3"
            maxlength="24"
            autocomplete="username"
          >

        </label>


        <!-- EMAIL -->

        <label class="form-field">

          Email

          <input
            type="email"
            id="emailInput"
            placeholder="you@example.com"
            required
            autocomplete="email"
          >

        </label>


        <!-- PASSWORD -->

        <label class="form-field">

          Password

          <input
            type="password"
            id="passwordInput"
            placeholder="••••••••"
            minlength="8"
            required
            autocomplete="current-password"
          >

        </label>


        <!-- SUBMIT -->

        <button
          class="btn btn-primary auth-submit"
          id="authSubmit"
          type="submit"
        >
          Create Account
        </button>

      </form>

    </div>

  </div>


  <!-- =======================================================
       TOAST
  ======================================================== -->

  <div
    class="toast"
    id="toast"
    role="status"
    aria-live="polite"
  ></div>
`;


/* =========================================================
   DOM REFERENCES
   ========================================================= */

const modal =
  document.getElementById("authModal");

const toast =
  document.getElementById("toast");

const authForm =
  document.getElementById("authForm");

const authTitle =
  document.getElementById("authTitle");

const authSubtitle =
  document.getElementById("authSubtitle");

const authSubmit =
  document.getElementById("authSubmit");

const authError =
  document.getElementById("authError");

const usernameField =
  document.getElementById("usernameField");

const usernameInput =
  document.getElementById("usernameInput");

const emailInput =
  document.getElementById("emailInput");

const passwordInput =
  document.getElementById("passwordInput");

const registerMode =
  document.getElementById("registerMode");

const loginMode =
  document.getElementById("loginMode");

const navActions =
  document.getElementById("navActions");


/* =========================================================
   AUTH STATE
   ========================================================= */

let authMode = "register";

let currentUser = null;


/* =========================================================
   TOAST
   ========================================================= */

let toastTimeout = null;

function showToast(message) {

  if (!toast) {
    return;
  }

  toast.textContent = message;

  toast.classList.add("show");

  clearTimeout(toastTimeout);

  toastTimeout = setTimeout(() => {

    toast.classList.remove("show");

  }, 3500);
}


/* =========================================================
   AUTH ERROR
   ========================================================= */

function showAuthError(message) {

  if (!authError) {
    return;
  }

  authError.textContent = message;

  authError.style.display = "block";
}


function clearAuthError() {

  if (!authError) {
    return;
  }

  authError.textContent = "";

  authError.style.display = "none";
}


/* =========================================================
   AUTH MODAL
   ========================================================= */

function openAuth(mode = "register") {

  setAuthMode(mode);

  clearAuthError();

  if (modal) {
    modal.classList.add("open");
  }

  setTimeout(() => {

    if (authMode === "login") {
      emailInput?.focus();
    } else {
      usernameInput?.focus();
    }

  }, 100);
}


function closeAuth() {

  if (!modal) {
    return;
  }

  modal.classList.remove("open");

  clearAuthError();

  if (authForm) {
    authForm.reset();
  }
}


/* =========================================================
   AUTH MODE
   ========================================================= */

function setAuthMode(mode) {

  authMode =
    mode === "login"
      ? "login"
      : "register";


  clearAuthError();


  if (authMode === "login") {

    authTitle.textContent =
      "Welcome back";

    authSubtitle.textContent =
      "Login to your BuildForge account.";

    authSubmit.textContent =
      "Login";

    usernameField.style.display =
      "none";

    usernameInput.required = false;

    passwordInput.autocomplete =
      "current-password";


    registerMode.className =
      "btn btn-secondary";

    loginMode.className =
      "btn btn-primary";

  } else {

    authTitle.textContent =
      "Create your BuildForge account";

    authSubtitle.textContent =
      "Start building your Roblox ideas.";

    authSubmit.textContent =
      "Create Account";

    usernameField.style.display =
      "flex";

    usernameInput.required = true;

    passwordInput.autocomplete =
      "new-password";


    registerMode.className =
      "btn btn-primary";

    loginMode.className =
      "btn btn-secondary";

  }
}


/* =========================================================
   API — REGISTER
   ========================================================= */

async function register(
  username,
  email,
  password
) {

  const response =
    await fetch(
      "/api/auth/register",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        credentials: "include",

        body: JSON.stringify({
          username,
          email,
          password
        })
      }
    );


  let data;

  try {

    data =
      await response.json();

  } catch {

    throw new Error(
      "The server returned an invalid response."
    );

  }


  if (!response.ok) {

    throw new Error(
      data.error ||
      "Unable to create your account."
    );

  }


  return data;
}


/* =========================================================
   API — LOGIN
   ========================================================= */

async function login(
  email,
  password
) {

  const response =
    await fetch(
      "/api/auth/login",
      {
        method: "POST",

        headers: {
          "Content-Type":
            "application/json"
        },

        credentials: "include",

        body: JSON.stringify({
          email,
          password
        })
      }
    );


  let data;

  try {

    data =
      await response.json();

  } catch {

    throw new Error(
      "The server returned an invalid response."
    );

  }


  if (!response.ok) {

    throw new Error(
      data.error ||
      "Unable to login."
    );

  }


  return data;
}


/* =========================================================
   API — CURRENT USER
   ========================================================= */

async function getCurrentUser() {

  try {

    const response =
      await fetch(
        "/api/auth/me",
        {
          method: "GET",

          credentials: "include",

          headers: {
            Accept:
              "application/json"
          }
        }
      );


    if (!response.ok) {
      return null;
    }


    const data =
      await response.json();


    if (
      !data.success ||
      !data.authenticated ||
      !data.user
    ) {

      return null;

    }


    return data.user;

  } catch (error) {

    console.error(
      "AUTH CHECK ERROR:",
      error
    );

    return null;

  }
}


/* =========================================================
   API — LOGOUT
   ========================================================= */

async function logout() {

  try {

    const response =
      await fetch(
        "/api/auth/logout",
        {
          method: "POST",

          credentials: "include",

          headers: {
            Accept:
              "application/json"
          }
        }
      );


    if (!response.ok) {

      throw new Error(
        "Logout failed."
      );

    }


    currentUser = null;

    updateNavbar();

    showToast(
      "You have been logged out."
    );

  } catch (error) {

    console.error(
      "LOGOUT ERROR:",
      error
    );

    showToast(
      "Unable to logout."
    );

  }
}


/* =========================================================
   NAVBAR — LOGGED OUT
   ========================================================= */

function renderLoggedOutNavbar() {

  navActions.innerHTML = `
    <button
      class="btn btn-primary"
      id="navStart"
      type="button"
    >
      Open Studio
    </button>
  `;


  document
    .getElementById("navStart")
    ?.addEventListener(
      "click",
      () => openAuth("register")
    );
}


/* =========================================================
   NAVBAR — LOGGED IN
   ========================================================= */

function renderLoggedInNavbar() {

  const username =
    currentUser?.username ||
    "Creator";


  navActions.innerHTML = `
    <div
      class="buildforge-user"
      style="
        display:flex;
        align-items:center;
        gap:10px;
      "
    >

      <div
        class="buildforge-user-avatar"
        style="
          width:38px;
          height:38px;
          border-radius:12px;
          display:flex;
          align-items:center;
          justify-content:center;
          background:#3b82f6;
          color:white;
          font-weight:800;
          box-shadow:0 5px 0 #2563eb;
        "
      >
        ${escapeHtml(
          username
            .charAt(0)
            .toUpperCase()
        )}
      </div>


      <div
        style="
          display:flex;
          flex-direction:column;
          line-height:1.1;
        "
      >

        <strong
          style="
            font-size:14px;
          "
        >
          ${escapeHtml(username)}
        </strong>

        <button
          id="logoutButton"
          type="button"
          style="
            border:0;
            padding:2px 0;
            background:none;
            cursor:pointer;
            text-align:left;
            color:#718096;
            font-size:12px;
          "
        >
          Logout
        </button>

      </div>

    </div>
  `;


  document
    .getElementById("logoutButton")
    ?.addEventListener(
      "click",
      logout
    );
}


/* =========================================================
   NAVBAR UPDATE
   ========================================================= */

function updateNavbar() {

  if (!navActions) {
    return;
  }


  if (currentUser) {

    renderLoggedInNavbar();

  } else {

    renderLoggedOutNavbar();

  }
}


/* =========================================================
   ESCAPE HTML
   ========================================================= */

function escapeHtml(value) {

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}


/* =========================================================
   AUTH FORM
   ========================================================= */

authForm?.addEventListener(
  "submit",
  async (event) => {

    event.preventDefault();

    clearAuthError();


    const email =
      emailInput.value
        .trim()
        .toLowerCase();

    const password =
      passwordInput.value;


    if (!email) {

      showAuthError(
        "Please enter your email."
      );

      emailInput.focus();

      return;

    }


    if (!password) {

      showAuthError(
        "Please enter your password."
      );

      passwordInput.focus();

      return;

    }


    if (
      authMode === "register" &&
      !usernameInput.value.trim()
    ) {

      showAuthError(
        "Please choose a username."
      );

      usernameInput.focus();

      return;

    }


    const originalText =
      authSubmit.textContent;


    authSubmit.disabled = true;

    authSubmit.style.opacity =
      "0.7";

    authSubmit.style.cursor =
      "wait";


    if (authMode === "register") {

      authSubmit.textContent =
        "Creating account...";

    } else {

      authSubmit.textContent =
        "Logging in...";

    }


    try {

      let data;


      /* ================================================
         REGISTER
      ================================================= */

      if (
        authMode === "register"
      ) {

        const username =
          usernameInput.value
            .trim();


        data =
          await register(
            username,
            email,
            password
          );


        currentUser =
          data.user || null;


        closeAuth();

        updateNavbar();


        showToast(
          `Welcome to BuildForge${
            currentUser?.username
              ? `, ${currentUser.username}`
              : ""
          }!`
        );


      /* ================================================
         LOGIN
      ================================================= */

      } else {

        data =
          await login(
            email,
            password
          );


        currentUser =
          data.user || null;


        closeAuth();

        updateNavbar();


        showToast(
          `Welcome back${
            currentUser?.username
              ? `, ${currentUser.username}`
              : ""
          }!`
        );

      }


    } catch (error) {

      console.error(
        "AUTH ERROR:",
        error
      );


      showAuthError(
        error.message ||
        "Something went wrong."
      );


    } finally {

      authSubmit.disabled =
        false;

      authSubmit.style.opacity =
        "1";

      authSubmit.style.cursor =
        "pointer";

      authSubmit.textContent =
        originalText;

    }

  }
);


/* =========================================================
   AUTH MODE BUTTONS
   ========================================================= */

registerMode?.addEventListener(
  "click",
  () => {

    setAuthMode("register");

  }
);


loginMode?.addEventListener(
  "click",
  () => {

    setAuthMode("login");

  }
);


/* =========================================================
   NAV BUTTONS
   ========================================================= */

document
  .getElementById("navStart")
  ?.addEventListener(
    "click",
    () => openAuth("register")
  );


document
  .getElementById("heroStart")
  ?.addEventListener(
    "click",
    () => {

      if (currentUser) {

        document
          .getElementById("studio")
          ?.scrollIntoView({
            behavior: "smooth"
          });

      } else {

        openAuth("register");

      }

    }
  );


document
  .getElementById("finalStart")
  ?.addEventListener(
    "click",
    () => {

      if (currentUser) {

        document
          .getElementById("studio")
          ?.scrollIntoView({
            behavior: "smooth"
          });

      } else {

        openAuth("register");

      }

    }
  );


document
  .getElementById("heroExplore")
  ?.addEventListener(
    "click",
    () => {

      document
        .getElementById("studio")
        ?.scrollIntoView({
          behavior: "smooth"
        });

    }
  );


/* =========================================================
   CLOSE MODAL
   ========================================================= */

document
  .getElementById("closeModal")
  ?.addEventListener(
    "click",
    closeAuth
  );


modal?.addEventListener(
  "click",
  (event) => {

    if (
      event.target === modal
    ) {

      closeAuth();

    }

  }
);


/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
  "keydown",
  (event) => {

    if (
      event.key === "Escape" &&
      modal?.classList.contains("open")
    ) {

      closeAuth();

    }

  }
);


/* =========================================================
   STUDIO AI DEMO
   ========================================================= */

document
  .querySelector(".ai-send")
  ?.addEventListener(
    "click",
    () => {

      if (!currentUser) {

        openAuth("register");

        return;

      }

      showToast(
        "BuildForge AI Studio is coming next."
      );

    }
  );


/* =========================================================
   STUDIO TOOLS
   ========================================================= */

document
  .querySelectorAll(".studio-sidebar .tool")
  .forEach((tool) => {

    tool.addEventListener(
      "click",
      () => {

        document
          .querySelectorAll(
            ".studio-sidebar .tool"
          )
          .forEach((item) => {

            item.classList.remove(
              "active"
            );

          });


        tool.classList.add(
          "active"
        );

      }
    );

  });


/* =========================================================
   CHECK AUTHENTICATION
   ========================================================= */

async function initializeAuthentication() {

  currentUser =
    await getCurrentUser();

  updateNavbar();

}


/* =========================================================
   INITIALIZE
   ========================================================= */

setAuthMode("register");

initializeAuthentication();
