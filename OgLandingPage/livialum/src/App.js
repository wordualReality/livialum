import "./App.css";

function App() {
  return (
    <body>
      <header>
        <nav class="navbar">
          <div class="navbar-logo">
            <a href="#">YourLogo</a>
          </div>
          <ul class="navbar-links">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
          <div class="burger-menu">
            <div class="line1"></div>
            <div class="line2"></div>
            <div class="line3"></div>
          </div>
        </nav>
        <section class="hero">
          <div class="hero-images">
            <img src="BeispielLampe2.jpeg" alt="Image 1" />
            <img src="BeispielLampe2.jpeg" alt="Image 2" />
            <img src="Livia setzt Lampe ein.jpeg" alt="Image 3" />
          </div>
          <div class="hero-content">
            <h1>
              Illuminate Your <span id="highlight">Life</span>
            </h1>
            <p>Introducing the USB-C charged light bulb</p>
          </div>
        </section>
      </header>

      <section class="features">
        <div class="container">
          <div class="feature">
            <div class="feature-images">
              <img src="technisch.jpeg" alt="Feature Image 1" />
            </div>
            <div class="feature-text">
              <h3>Feature 1</h3>
              <p>Description for feature 1...</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-images">
              <img src="technisch 2.jpeg" alt="Feature Image 2" />
            </div>
            <div class="feature-text">
              <h3>Feature 2</h3>
              <p>Description for feature 2...</p>
            </div>
          </div>
          <div class="feature">
            <div class="feature-images">
              <img src="Livia setzt Lampe ein 2.jpeg" alt="Feature Image 3" />
            </div>
            <div class="feature-text">
              <h3>Feature 3</h3>
              <p>Description for feature 3...</p>
            </div>
          </div>
        </div>
      </section>

      <section class="contact">
        <div class="container">
          <h2>Contact Us</h2>
          <form action="#" method="POST">
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <textarea placeholder="Your Message" required></textarea>
            <button type="submit">Send</button>
          </form>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 amorph</p>
      </footer>

      <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js"></script>
      <script src="animations.js"></script>
    </body>
  );
}

export default App;
