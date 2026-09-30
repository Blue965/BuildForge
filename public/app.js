const app = document.getElementById("app");

app.innerHTML = `
  <div class="site-container">

    <!-- NAVBAR -->
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

      <div class="nav-actions">

        <button
          class="btn btn-primary"
          id="navStart"
        >
          Open Studio
        </button>

      </div>

    </header>


    <!-- HERO -->
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
            >
              Start Creating
            </button>

            <button
              class="btn btn-secondary"
              id="heroExplore"
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


      <!-- FEATURES -->
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


      <!-- STUDIO -->
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

                <div class="canvas-window canvas-window-one"></div>

                <div class="canvas-window canvas-window-two"></div>

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

                <button class="ai-send">
                  →
                </button>

              </div>

            </aside>

          </div>

        </div>

      </section>


      <!-- HOW IT WORKS -->
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


      <!-- CREATOR -->
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

            <div class="creator-cube creator-cube-one"></div>

            <div class="creator-cube creator-cube-two"></div>

            <div class="creator-cube creator-cube-three"></div>

          </div>

        </div>

      </section>


      <!-- FINAL CTA -->
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
        >
          Open BuildForge Studio
        </button>

      </section>

    </main>


    <!-- FOOTER -->
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


  <!-- AUTH MODAL -->
  <div
    class="modal-overlay"
    id="authModal"
  >

    <div class="auth-modal">

      <div class="modal-header">

        <div>

          <h2>
            Welcome to BuildForge
          </h2>

          <p>
            Create your creator account.
          </p>

        </div>

        <button
          class="modal-close"
          id="closeModal"
        >
          ×
        </button>

      </div>


      <form
        class="auth-form"
        id="emailForm"
      >

        <label class="form-field">

          Email

          <input
            type="email"
            id="emailInput"
            placeholder="you@example.com"
            required
          >

        </label>


        <label class="form-field">

          Username

          <input
            type="text"
            id="usernameInput"
            placeholder="Builder"
          >

        </label>


        <label class="form-field">

          Password

          <input
            type="password"
            id="passwordInput"
            placeholder="••••••••"
            required
          >

        </label>


        <button
          class="btn btn-primary auth-submit"
          type="submit"
        >
          Create Account
        </button>

      </form>

    </div>

  </div>


  <div
    class="toast"
    id="toast"
  ></div>
`;


/* =========================================================
   HELPERS
   ========================================================= */

const modal = document.getElementById("authModal");
const toast = document.getElementById("toast");

function openAuth() {
  modal.classList.add("open");
}

function closeAuth() {
  modal.classList.remove("open");
}

function showToast(message) {
  toast.textContent = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 3000);
}


/* =========================================================
   BUTTONS
   ========================================================= */

document
  .getElementById("navStart")
  ?.addEventListener("click", openAuth);

document
  .getElementById("heroStart")
  ?.addEventListener("click", openAuth);

document
  .getElementById("finalStart")
  ?.addEventListener("click", openAuth);


document
  .getElementById("heroExplore")
  ?.addEventListener("click", () => {

    document
      .getElementById("studio")
      ?.scrollIntoView({
        behavior: "smooth"
      });

  });


document
  .getElementById("closeModal")
  ?.addEventListener("click", closeAuth);


modal?.addEventListener("click", (event) => {

  if (event.target === modal) {
    closeAuth();
  }

});


document.addEventListener("keydown", (event) => {

  if (event.key === "Escape") {
    closeAuth();
  }

});


/* =========================================================
   AUTH
   ========================================================= */

document
  .getElementById("emailForm")
  ?.addEventListener("submit", async (event) => {

    event.preventDefault();

    const email =
      document
        .getElementById("emailInput")
        .value
        .trim();

    const username =
      document
        .getElementById("usernameInput")
        .value
        .trim();

    const password =
      document
        .getElementById("passwordInput")
        .value;


    try {

      showToast("Creating your BuildForge account...");


      const response = await fetch(
        "/api/auth/email",
        {
          method: "POST",

          headers: {
            "Content-Type":
              "application/json"
          },

          body: JSON.stringify({
            email,
            username,
            password
          })
        }
      );


      const data =
        await response.json();


      if (!response.ok) {
        throw new Error(
          data.error ||
          "Something went wrong."
        );
      }


      if (data.token) {

        localStorage.setItem(
          "buildforge_token",
          data.token
        );

      }


      closeAuth();


      showToast(
        `Welcome to BuildForge${
          data.user?.username
            ? `, ${data.user.username}`
            : ""
        }!`
      );


    } catch (error) {

      console.error(error);

      showToast(
        error.message ||
        "Unable to create your account."
      );

    }

  });
