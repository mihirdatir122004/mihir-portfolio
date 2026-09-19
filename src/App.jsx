import "./App.css";

function App() {
  return (
    <div className="portfolio">

      {/* ================= NAVBAR ================= */}

      <nav className="navbar">
        <div className="nav-logo">
          Mihir<span>Datir</span>
        </div>

        <div className="nav-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
          <a href="#education">Education</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>


      {/* ================= HERO SECTION ================= */}

      <section id="home" className="hero-section">

        <div className="hero-content">

          <p className="hero-tag">
            ELECTRONICS & TELECOMMUNICATION ENGINEER
          </p>

          <h1>
            Mihir <span>Datir</span>
          </h1>

          <h2>
            Software Developer | AI/ML | Full Stack Java
          </h2>

          <p className="hero-description">
            Electronics and Telecommunication Engineer with hands-on
            experience in IT, software development, AI/ML, Embedded Systems,
            IoT and Industrial Automation.
          </p>

          <div className="hero-buttons">

            <a href="#projects" className="primary-button">
              View Projects
            </a>

            <a
              href="/Resume_Mihir Datir.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="secondary-button"
            >
              Download Resume
            </a>

            <a href="#contact" className="secondary-button">
              Contact Me
            </a>

          </div>

        </div>


        {/* Professional Photo */}

        <div className="hero-photo-container">

          <img
            src="/profile.jpg.png"
            alt="Mihir Datir"
            className="hero-photo"
          />

        </div>

      </section>


      {/* ================= ABOUT SECTION ================= */}

      <section id="about" className="about-section">

        <div className="section-heading">

          <p className="section-tag">
            ABOUT ME
          </p>

          <h2>
            About Me
          </h2>

        </div>

        <div className="about-content">

          <p>
            I am a B.Tech Electronics and Telecommunication graduate with a
            strong interest in software development and full-stack application
            development. I enjoy solving real-world problems through
            technology and building practical applications.
          </p>

          <p>
            My technical interests include Java, Spring Boot, React.js,
            JavaScript, Python, MySQL, REST APIs and AI/ML. I am interested in
            software development roles where I can apply my technical skills
            and continue learning new technologies.
          </p>

        </div>

      </section>


      {/* ================= SKILLS SECTION ================= */}

      <section id="skills" className="skills-section">

        <div className="section-heading">

          <p className="section-tag">
            TECHNICAL SKILLS
          </p>

          <h2>
            My Skills
          </h2>

        </div>

        <div className="skills-grid">

          <div className="skill-card">
            <h3>Java</h3>
            <p>Core Java, OOPs, Collections and Exception Handling</p>
          </div>

          <div className="skill-card">
            <h3>Spring Boot</h3>
            <p>REST APIs, Spring Data JPA and backend development</p>
          </div>

          <div className="skill-card">
            <h3>React.js</h3>
            <p>Component-based frontend and responsive interfaces</p>
          </div>

          <div className="skill-card">
            <h3>JavaScript</h3>
            <p>Frontend functionality and API integration</p>
          </div>

          <div className="skill-card">
            <h3>Python</h3>
            <p>AI/ML, automation and application development</p>
          </div>

          <div className="skill-card">
            <h3>MySQL</h3>
            <p>Database design, SQL queries and data management</p>
          </div>

          <div className="skill-card">
            <h3>REST APIs</h3>
            <p>API development and frontend-backend integration</p>
          </div>

          <div className="skill-card">
            <h3>HTML & CSS</h3>
            <p>Responsive web page structure and styling</p>
          </div>

          <div className="skill-card">
            <h3>Git & GitHub</h3>
            <p>Version control and project management</p>
          </div>

        </div>

      </section>


      {/* ================= EXPERIENCE SECTION ================= */}

      <section id="experience" className="experience-section">

        <div className="section-heading">

          <p className="section-tag">
            EXPERIENCE
          </p>

          <h2>
            Experience
          </h2>

        </div>


        <div className="experience-card">

          <div className="experience-top">

            <div>

              <h3>
                Project Trainee – Electrical Department
              </h3>

              <h4>
                Biofics Private Limited
              </h4>

            </div>

            <span>
              2026
            </span>

          </div>

          <p>
            Worked on electrical systems, installation and commissioning,
            automation-related systems and industrial equipment.
          </p>

        </div>


        <div className="experience-card">

          <div className="experience-top">

            <div>

              <h3>
                Web Development Intern
              </h3>

              <h4>
                Felix IT Systems
              </h4>

            </div>

            <span>
              2026
            </span>

          </div>

          <p>
            Developed responsive web applications using HTML, CSS and
            JavaScript while improving debugging, development and frontend
            optimization skills.
          </p>

        </div>

      </section>


      {/* ================= PROJECTS SECTION ================= */}

      <section id="projects" className="projects-section">

        <div className="section-heading">

          <p className="section-tag">
            MY WORK
          </p>

          <h2>
            Featured Projects
          </h2>

        </div>


        <div className="projects-grid">


          {/* CareerConnect */}

          <div className="project-card featured-project">

            <div className="project-header">

              <h3>
                CareerConnect – Full Stack Job Portal
              </h3>

              <span>
                Full Stack Web Application
              </span>

            </div>

            <p>
              Developed a full-stack job portal where candidates can register
              and log in, search and filter jobs, view job details, apply for
              jobs, upload resumes and track application status.
            </p>

            <p>
              Built an admin interface for managing job postings, editing and
              deleting jobs, viewing candidate applications, viewing resumes
              and updating application status.
            </p>

            <div className="project-tech">
              Java · Spring Boot · React.js · MySQL · REST APIs
            </div>

            <a
              href="http://localhost:5173"
              target="_blank"
              rel="noopener noreferrer"
              className="project-button"
            >
              View Project →
            </a>

          </div>


          {/* AI Fake Video */}

          <div className="project-card">

            <div className="project-header">

              <h3>
                AI Powered Fake Video Identification Platform
              </h3>

              <span>
                Nov 2024 – Dec 2025
              </span>

            </div>

            <p>
              Built a real-time deepfake detection platform using face and
              voice liveness detection to identify potentially fake video
              content.
            </p>

            <div className="project-tech">
              Python · TensorFlow · OpenCV · MediaPipe · Librosa
            </div>

          </div>


          {/* GPT Project */}

          <div className="project-card">

            <div className="project-header">

              <h3>
                GPT-4 Functionality Chatbot
              </h3>

              <span>
                Apr 2025 – Jul 2025
              </span>

            </div>

            <p>
              Designed an NLP chatbot capable of intelligent conversations,
              contextual understanding and response generation.
            </p>

            <div className="project-tech">
              Python · NLP · APIs · AI
            </div>

          </div>


          {/* Voice Chatbot */}

          <div className="project-card">

            <div className="project-header">

              <h3>
                Chatbot with Text and Voice Detection
              </h3>

              <span>
                May 2024 – Jul 2024
              </span>

            </div>

            <p>
              Developed an AI chatbot integrating NLP, speech recognition and
              voice synthesis for real-time conversations.
            </p>

            <div className="project-tech">
              Python · NLP · Speech Recognition · AI
            </div>

          </div>


          {/* Smart Irrigation */}

          <div className="project-card">

            <div className="project-header">

              <h3>
                Smart Irrigation System
              </h3>

              <span>
                IoT Project
              </span>

            </div>

            <p>
              Developed an IoT-based irrigation system using sensors and
              Arduino to automate irrigation and reduce unnecessary water
              usage.
            </p>

            <div className="project-tech">
              Arduino · IoT · Sensors
            </div>

          </div>


          {/* Solar Tracking */}

          <div className="project-card">

            <div className="project-header">

              <h3>
                Solar Tracking System
              </h3>

              <span>
                Electronics Project
              </span>

            </div>

            <p>
              Designed a dual-axis solar tracking system to automatically
              adjust the panel position according to the direction of sunlight.
            </p>

            <div className="project-tech">
              Arduino · Sensors · Embedded Systems
            </div>

          </div>

        </div>

      </section>


      {/* ================= EDUCATION SECTION ================= */}

      <section id="education" className="education-section">

        <div className="section-heading">

          <p className="section-tag">
            EDUCATION
          </p>

          <h2>
            Education
          </h2>

        </div>


        <div className="education-card">

          <div className="education-content">

            <h3>
              B.Tech – Electronics & Telecommunication Engineering
            </h3>

            <h4>
              JSPM Rajarshi Shahu College of Engineering, Pune
            </h4>

            <p>
              Savitribai Phule Pune University (SPPU)
            </p>

            <div className="education-details">

              <span>
                2022 – 2026
              </span>

              <span>
                CGPA: 8.34 / 10
              </span>

            </div>

          </div>

        </div>

      </section>


      {/* ================= CONTACT SECTION ================= */}

      <section id="contact" className="contact-section">

        <div className="section-heading">

          <p className="section-tag">
            GET IN TOUCH
          </p>

          <h2>
            Let's Connect
          </h2>

          <p>
            I am open to opportunities in software development, Java
            development, AI/ML and full-stack development.
          </p>

        </div>


        <div className="contact-container">


          {/* Email */}

          <a
            href="mailto:mihirdatir424@gmail.com"
            className="contact-card"
          >

            <div className="contact-icon">
              ✉
            </div>

            <div>
              <h3>Email</h3>
              <p>
                mihirdatir424@gmail.com
              </p>
            </div>

          </a>


          {/* Phone */}

          <a
            href="tel:+919822517679"
            className="contact-card"
          >

            <div className="contact-icon">
              ☎
            </div>

            <div>
              <h3>Phone</h3>
              <p>
                +91 9822517679
              </p>
            </div>

          </a>


          {/* LinkedIn */}

          <a
            href="https://linkedin.com/in/mihir-datir-b93b33212"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <div className="contact-icon">
              in
            </div>

            <div>
              <h3>LinkedIn</h3>
              <p>
                linkedin.com/in/mihir-datir-b93b33212
              </p>
            </div>

          </a>


          {/* GitHub */}

          <a
            href="https://github.com/mihirdatir122004"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >

            <div className="contact-icon">
              GH
            </div>

            <div>
              <h3>GitHub</h3>
              <p>
                github.com/mihirdatir122004
              </p>
            </div>

          </a>

        </div>

      </section>


      {/* ================= FOOTER ================= */}

      <footer className="footer">

        <div className="footer-logo">
          Mihir<span>Datir</span>
        </div>

        <p>
          Software Developer | AI/ML | Full Stack Java
        </p>

        <div className="footer-links">

          <a href="mailto:mihirdatir424@gmail.com">
            Email
          </a>

          <a href="tel:+919822517679">
            Phone
          </a>

          <a
            href="https://linkedin.com/in/mihir-datir-b93b33212"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>

          <a
            href="https://github.com/mihirdatir122004"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>

        </div>

        <p className="copyright">
          © 2026 Mihir Datir. All rights reserved.
        </p>

      </footer>

    </div>
  );
}

export default App;