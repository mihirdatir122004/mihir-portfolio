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
            I am a B.Tech Electronics and Telecommunication Engineer with
            hands-on experience in IT, software development, AI/ML, embedded
            systems, IoT and industrial automation.
          </p>

          <p>
            My technical interests include Java, Full Stack Java Development,
            Spring Boot, React.js, JavaScript, Python, SQL, REST APIs,
            Machine Learning, Generative AI and Data Structures & Algorithms.
            I enjoy building practical software solutions and applying
            technology to real-world problems.
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
            <h3>Programming</h3>
            <p>
              Python, Java, C, C++, JavaScript, HTML, CSS, SQL
            </p>
          </div>

          <div className="skill-card">
            <h3>Full Stack Java</h3>
            <p>
              Core Java, OOPs, Data Structures & Algorithms, Spring,
              Spring Boot, Hibernate, JDBC, Maven
            </p>
          </div>

          <div className="skill-card">
            <h3>Frontend</h3>
            <p>
              React.js, JavaScript, HTML, CSS, Responsive Web Development
            </p>
          </div>

          <div className="skill-card">
            <h3>Backend & APIs</h3>
            <p>
              Spring Boot, REST APIs, Flask, JDBC, MySQL, MongoDB
            </p>
          </div>

          <div className="skill-card">
            <h3>AI & Machine Learning</h3>
            <p>
              Machine Learning, Deep Learning, NLP, Computer Vision,
              Generative AI, LLMs, Prompt Engineering
            </p>
          </div>

          <div className="skill-card">
            <h3>AI Tools & Libraries</h3>
            <p>
              TensorFlow, OpenCV, MediaPipe, Librosa, Pandas, NumPy
            </p>
          </div>

          <div className="skill-card">
            <h3>Embedded & IoT</h3>
            <p>
              Embedded C, Arduino, Raspberry Pi, Microcontrollers,
              Sensors, IoT
            </p>
          </div>

          <div className="skill-card">
            <h3>Industrial Automation</h3>
            <p>
              PLC, SCADA, VFD, HMI, Industrial Automation,
              Electrical Maintenance, Troubleshooting
            </p>
          </div>

          <div className="skill-card">
            <h3>Core Electronics</h3>
            <p>
              Digital Electronics, Communication Systems, PCB Design,
              Signal Processing
            </p>
          </div>

          <div className="skill-card">
            <h3>Tools & Platforms</h3>
            <p>
              Git, GitHub, VS Code, MATLAB, Arduino IDE
            </p>
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


        {/* Felix IT Systems */}

        <div className="experience-card">

          <div className="experience-top">

            <div>

              <h3>
                Full Stack Java Development
              </h3>

              <h4>
                Felix IT Systems
              </h4>

            </div>

            <span>
              Jun 2026 – Present
            </span>

          </div>

          <p>
            Developing full-stack applications using Java, React.js, HTML,
            CSS and JavaScript with hands-on application development work.
          </p>

          <p>
            Working with Spring, Spring Boot, Hibernate, JDBC, Maven and
            MySQL while applying OOP, REST APIs, debugging and responsive
            web development concepts.
          </p>

        </div>


        {/* Biofics */}

        <div className="experience-card">

          <div className="experience-top">

            <div>

              <h3>
                Graduate Engineer Trainee (GET) – Junior PLC & SCADA Operator
              </h3>

              <h4>
                Biofics Private Limited
              </h4>

            </div>

            <span>
              Apr 2026 – Aug 2026
            </span>

          </div>

          <p>
            Operated PLC, SCADA and VFD based systems with preventive
            maintenance, troubleshooting and industrial automation support.
          </p>

          <p>
            Supported commissioning, electrical maintenance and process
            optimization activities.
          </p>

        </div>


        {/* Ather Energy */}

        <div className="experience-card">

          <div className="experience-top">

            <div>

              <h3>
                Junior Embedded Developer Intern
              </h3>

              <h4>
                Ather Energy
              </h4>

            </div>

            <span>
              Sept 2025 – Apr 2026
            </span>

          </div>

          <p>
            Worked on Embedded C, Arduino and microcontroller interfacing
            for embedded systems development.
          </p>

          <p>
            Performed firmware debugging, hardware testing and validation.
          </p>

        </div>


        {/* AICT Plasmid */}

        <div className="experience-card">

          <div className="experience-top">

            <div>

              <h3>
                Web Development Intern
              </h3>

              <h4>
                AICT Plasmid
              </h4>

            </div>

            <span>
              Jan 2025 – Sept 2025
            </span>

          </div>

          <p>
            Built responsive web pages using HTML, CSS and JavaScript while
            improving website responsiveness and user experience.
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
                Smart Irrigation System using IoT
              </h3>

              <span>
                Sep 2024 – Jan 2025
              </span>

            </div>

            <p>
              Developed an automated irrigation system using Raspberry Pi,
              sensors and IoT monitoring to optimize water usage.
            </p>

            <div className="project-tech">
              Raspberry Pi · IoT · Sensors
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


        {/* B.Tech */}

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


        {/* HSC */}

        <div className="education-card">

          <div className="education-content">

            <h3>
              Higher Secondary Certificate (Science)
            </h3>

            <h4>
              D.R. Arts Commerce & Science Jr. College
            </h4>

            <p>
              Nandurbar
            </p>

            <div className="education-details">

              <span>
                2020 – 2022
              </span>

              <span>
                81.5%
              </span>

            </div>

          </div>

        </div>


        {/* SSC */}

        <div className="education-card">

          <div className="education-content">

            <h3>
              Secondary School Certificate
            </h3>

            <h4>
              S.A. Mission English Medium High School
            </h4>

            <p>
              Nandurbar
            </p>

            <div className="education-details">

              <span>
                2010 – 2020
              </span>

              <span>
                76.4%
              </span>

            </div>

          </div>

        </div>


        {/* ================= CERTIFICATIONS ================= */}

        <div className="section-heading">

          <p className="section-tag">
            CERTIFICATIONS
          </p>

          <h2>
            Certifications
          </h2>

        </div>


        <div className="education-card">

          <div className="education-content">

            <h3>
              Cisco Networking Certification
            </h3>

            <p>
              Cisco Networking Academy
            </p>

          </div>

        </div>


        <div className="education-card">

          <div className="education-content">

            <h3>
              Web Development (Java)
            </h3>

            <p>
              AICT Plasmid
            </p>

          </div>

        </div>


        {/* ================= EXTRACURRICULAR ================= */}

        <div className="section-heading">

          <p className="section-tag">
            EXTRACURRICULAR
          </p>

          <h2>
            Extracurricular Activities
          </h2>

        </div>


        <div className="education-card">

          <div className="education-content">

            <h3>
              Treasurer – Entesa Club
            </h3>

            <p>
              ENTC Department — Managed departmental finances, event budgets
              and resource allocation.
            </p>

          </div>

        </div>


        <div className="education-card">

          <div className="education-content">

            <h3>
              Member – IETE Students’ Chapter
            </h3>

            <p>
              Organized technical workshops, seminars and industry interaction
              activities.
            </p>

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