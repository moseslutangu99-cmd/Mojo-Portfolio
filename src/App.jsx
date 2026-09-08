import { useEffect, useRef, useState } from 'react'
import {
  FaLightbulb,
  FaRocket,
  FaUsers,
  FaCogs,
  FaLaptopCode,
  FaTools,
  FaWindows,
  FaMicrochip,
  FaCertificate,
  FaMedal,
  FaTrophy,
  FaEnvelope,
  FaWhatsapp,
  FaPhone,
  FaGithub,
  FaLinkedin,
  FaBars,
  FaTimes,

} from 'react-icons/fa'

function App() {
  const roles = [
    'ICT Student',
    'Web Developer',
    'Frontend Developer',
    'Problem Solver',
    'Technology Enthusiast',
  ]

  const [roleIndex, setRoleIndex] = useState(0)
  const [menuOpen, setMenuOpen] = useState(false)

const handleNavClick = () => {
  setMenuOpen(false)
}

  // ================================
  // HERO ROLE ROTATION
  // ================================

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((currentIndex) => {
        return (currentIndex + 1) % roles.length
      })
    }, 3500)

    return () => clearInterval(interval)
  }, [])

  // ================================
  // ABOUT SCROLL ANIMATION
  // ================================

  const aboutRef = useRef(null)
  const [aboutVisible, setAboutVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAboutVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (aboutRef.current) {
      observer.observe(aboutRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // ================================
  // SKILLS SCROLL ANIMATION
  // ================================

  const skillsRef = useRef(null)
  const [skillsVisible, setSkillsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setSkillsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // ================================
  // EDUCATION SCROLL ANIMATION
  // ================================

  const educationRef = useRef(null)
  const [educationVisible, setEducationVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setEducationVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )

    if (educationRef.current) {
      observer.observe(educationRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // ================================
  // PROJECTS SCROLL ANIMATION
  // ================================

  const projectsRef = useRef(null)
  const [projectsVisible, setProjectsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setProjectsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (projectsRef.current) {
      observer.observe(projectsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // ================================
  // SERVICES SCROLL ANIMATION
  // ================================

  const servicesRef = useRef(null)
  const [servicesVisible, setServicesVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setServicesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (servicesRef.current) {
      observer.observe(servicesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // ================================
  // CERTIFICATES SCROLL ANIMATION
  // ================================

  const certificatesRef = useRef(null)
  const [certificatesVisible, setCertificatesVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCertificatesVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (certificatesRef.current) {
      observer.observe(certificatesRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // ================================
  // ACHIEVEMENTS SCROLL ANIMATION
  // ================================

  const achievementsRef = useRef(null)
  const [achievementsVisible, setAchievementsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAchievementsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // ================================
  // CONTACT SCROLL ANIMATION
  // ================================

  const contactRef = useRef(null)
  const [contactVisible, setContactVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setContactVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.15 }
    )

    if (contactRef.current) {
      observer.observe(contactRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <div className="app">

      {/* ================================
          NAVIGATION
          ================================ */}

<nav className="navbar">

  <div className="logo">
    MOJO<span>.</span>
  </div>

  <button
    type="button"
    className="mobile-menu-button"
    onClick={() => setMenuOpen((current) => !current)}
    aria-label={
      menuOpen
        ? 'Close navigation menu'
        : 'Open navigation menu'
    }
    aria-expanded={menuOpen}
  >
    {menuOpen ? <FaTimes /> : <FaBars />}
  </button>

  <div
    className={`nav-links ${menuOpen ? 'mobile-open' : ''}`}
  >

    <a href="#home" onClick={handleNavClick}>
      Home
    </a>

    <a href="#about" onClick={handleNavClick}>
      About
    </a>

    <a href="#skills" onClick={handleNavClick}>
      Skills
    </a>

    <a href="#education" onClick={handleNavClick}>
      Education
    </a>

    <a href="#projects" onClick={handleNavClick}>
      Projects
    </a>

    <a href="#services" onClick={handleNavClick}>
      Services
    </a>

    <a href="#certificates" onClick={handleNavClick}>
      Certificates
    </a>

    <a href="#achievements" onClick={handleNavClick}>
      Achievements
    </a>

    <a href="#contact" onClick={handleNavClick}>
      Contact
    </a>

  </div>

</nav>


      <main>

        {/* ================================
            HERO
            ================================ */}

        <section id="home" className="hero">

          <div className="hero-content">

            <div className="hero-text">

              <p className="hero-intro">
                Hello, I'm
              </p>

              <h1>
                Moses <span>"Mojo"</span> Lutangu
              </h1>

              <h2
                key={roleIndex}
                className="rotating-role"
              >
                {roles[roleIndex]}
              </h2>

              <p className="hero-description">
                Building modern, responsive, and user-friendly web
                experiences through creativity, clean code, and
                continuous learning.
              </p>

              <div className="hero-buttons">

                <a
                  href="#contact"
                  className="btn primary-btn"
                >
                  Hire Me
                </a>

                <a
                  href="#about"
                  className="btn secondary-btn"
                >
                  Explore More
                </a>

              </div>

            </div>


            <div className="hero-image-container">

              <div className="hero-image-glow"></div>

              <div className="hero-image">

                <img
                  src="/profile.png"
                  alt="Moses Mojo Lutangu"
                />

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            ABOUT
            ================================ */}

        <section
          id="about"
          className={`about-section ${
            aboutVisible ? 'is-visible' : ''
          }`}
          ref={aboutRef}
        >

          <div className="section-heading reveal reveal-heading">

            <p className="section-subtitle">
              GET TO KNOW ME
            </p>

            <h2>
              About Me
            </h2>

          </div>


          <div className="about-content">

            <div className="about-text">

              <p className="reveal reveal-text">
                I am Moses “Mojo” Lutangu, an aspiring Web Developer
                and Frontend Developer with a strong passion for
                technology and continuous learning.
              </p>

              <p className="reveal reveal-text">
                I enjoy acquiring new skills, solving real-world
                problems, and collaborating with others to achieve
                meaningful results. My strengths include critical
                thinking, adaptability, teamwork, and the ability
                to work effectively with minimal supervision.
              </p>

              <p className="reveal reveal-text">
                I chose to pursue Information and Communication
                Technology because I am passionate about using
                technology to help people overcome technical
                challenges and improve everyday life.
              </p>

              <p className="reveal reveal-text">
                I am particularly interested in developing websites
                and digital platforms that support businesses and
                services, including online advertising, appointment
                booking, and reservation systems.
              </p>

              <p className="reveal reveal-text">
                Beyond coding, I believe programming strengthens
                logical reasoning and problem-solving skills. I am
                committed to continuous improvement and to building
                innovative, user-friendly, and impactful digital
                solutions.
              </p>

            </div>


            <div className="about-cards">

              <div className="about-card reveal reveal-card">

                <div className="about-card-icon">
                  <FaLightbulb />
                </div>

                <h3>Problem Solver</h3>

                <p>
                  I enjoy using technology and logical thinking
                  to find practical solutions to real-world
                  challenges.
                </p>

              </div>


              <div className="about-card reveal reveal-card">

                <div className="about-card-icon">
                  <FaRocket />
                </div>

                <h3>Continuous Learner</h3>

                <p>
                  I constantly work on improving my technical
                  skills and exploring new technologies.
                </p>

              </div>


              <div className="about-card reveal reveal-card">

                <div className="about-card-icon">
                  <FaUsers />
                </div>

                <h3>Team Player</h3>

                <p>
                  I value collaboration, communication, and
                  sharing ideas to achieve better results.
                </p>

              </div>


              <div className="about-card reveal reveal-card">

                <div className="about-card-icon">
                  <FaCogs />
                </div>

                <h3>Technology Enthusiast</h3>

                <p>
                  I am passionate about technology and its ability
                  to make everyday tasks and services more efficient.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            SKILLS
            ================================ */}

        <section
          id="skills"
          className={`skills-section ${
            skillsVisible ? 'is-visible' : ''
          }`}
          ref={skillsRef}
        >

          <div className="section-heading reveal reveal-heading">

            <p className="section-subtitle">
              MY EXPERTISE
            </p>

            <h2>
              Skills
            </h2>

          </div>


          <div className="skills-container">

            <div className="skills-category reveal reveal-skill-category">

              <h3>
                Programming & Web Development
              </h3>

              {[
                ['HTML', '84%'],
                ['CSS', '78%'],
                ['JavaScript', '56%'],
                ['C++', '78%'],
                ['Java', '85%'],
                ['MySQL', '57%'],
              ].map(([skill, percentage]) => (

                <div className="skill" key={skill}>

                  <div className="skill-info">
                    <span>{skill}</span>
                    <span>{percentage}</span>
                  </div>

                  <div className="skill-bar">

                    <div
                      className="skill-progress"
                      style={{
                        width: skillsVisible
                          ? percentage
                          : '0%',
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>


            <div className="skills-category reveal reveal-skill-category">

              <h3>
                Microsoft Office
              </h3>

              {[
                ['Microsoft Word', '84%'],
                ['Microsoft Excel', '76%'],
                ['Microsoft PowerPoint', '78%'],
              ].map(([skill, percentage]) => (

                <div className="skill" key={skill}>

                  <div className="skill-info">
                    <span>{skill}</span>
                    <span>{percentage}</span>
                  </div>

                  <div className="skill-bar">

                    <div
                      className="skill-progress"
                      style={{
                        width: skillsVisible
                          ? percentage
                          : '0%',
                      }}
                    ></div>

                  </div>

                </div>

              ))}

            </div>


            <div className="skills-category soft-skills reveal reveal-skill-category">

              <h3>
                Professional Skills
              </h3>

              <div className="soft-skill-list">

                <span>Hardworking</span>
                <span>Fast Learner</span>
                <span>Team Player</span>
                <span>Critical Thinker</span>
                <span>Problem Solver</span>
                <span>Adaptable</span>
                <span>Self-Motivated</span>
                <span>Reliable</span>
                <span>Communication</span>
                <span>Time Management</span>
                <span>Works Under Minimum Supervision</span>

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            EDUCATION
            ================================ */}

        <section
          id="education"
          className={`education-section ${
            educationVisible ? 'is-visible' : ''
          }`}
          ref={educationRef}
        >

          <div className="section-heading reveal reveal-heading">

            <p className="section-subtitle">
              MY ACADEMIC JOURNEY
            </p>

            <h2>
              Education
            </h2>

          </div>


          <div className="education-container">

            <div className="education-timeline">

              <div className="timeline-line"></div>


              <div className="education-item reveal education-item-main">

                <div className="timeline-dot"></div>

                <div className="education-card">

                  <div className="education-year">
                    2024 — 2028
                  </div>

                  <h3>
                    Bachelor of ICT With Education
                  </h3>

                  <h4>
                    Kwame Nkrumah University
                  </h4>

                  <p className="education-school">
                    School of Business Studies
                  </p>

                  <p>
                    Currently pursuing a degree in Information and
                    Communication Technology with Education, with
                    a focus on developing technical knowledge,
                    problem-solving abilities, and educational
                    skills.
                  </p>

                </div>

              </div>


              <div className="education-item reveal education-item-courses">

                <div className="timeline-dot"></div>

                <div className="education-card">

                  <div className="education-year">
                    Relevant Coursework
                  </div>

                  <h3>
                    Key Courses
                  </h3>

                  <div className="course-list">

                    <span>Java Programming</span>
                    <span>C++ Programming</span>
                    <span>Database Systems</span>
                    <span>Computer Networks</span>
                    <span>Computer Architecture & Systems</span>
                    <span>Computer Ethics</span>
                    <span>Psychology</span>
                    <span>Sociology of Education</span>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            PROJECTS
            ================================ */}

        <section
          id="projects"
          className={`projects-section ${
            projectsVisible ? 'is-visible' : ''
          }`}
          ref={projectsRef}
        >

          <div className="section-heading reveal reveal-heading">

            <p className="section-subtitle">
              MY WORK
            </p>

            <h2>
              Projects
            </h2>

          </div>


          <div className="projects-container">

            <div className="project-card reveal-project">

              <div className="project-image-placeholder">

                <div className="project-placeholder-content">

                  <span className="project-icon">
                    <FaLaptopCode />
                  </span>

                  <p>
                    Project Screenshot
                  </p>

                  <small>
                    Screenshot coming soon
                  </small>

                </div>

              </div>


              <div className="project-content">

                <div className="project-status">
                  IN PROGRESS
                </div>

                <h3>
                  Smart Farm System
                </h3>

                <p>
                  A smart farming platform designed to improve
                  agricultural productivity through digital
                  technology. The system focuses on helping
                  farmers manage farm operations more efficiently
                  while supporting informed decision-making.
                </p>


                <div className="project-features">

                  <span>Farm Management</span>
                  <span>Digital Agriculture</span>
                  <span>Smart Technology</span>
                  <span>Data Management</span>

                </div>


                <div className="project-tech">

                  <span>HTML</span>
                  <span>CSS</span>
                  <span>JavaScript</span>
                  <span>MySQL</span>

                </div>

              </div>

            </div>


            <div className="project-card project-secondary reveal-project">

              <div className="project-content">

                <div className="project-status">
                  PERSONAL PROJECT
                </div>

                <h3>
                  Mojo's Portfolio “CV”
                </h3>

                <p>
                  A responsive personal portfolio designed to
                  showcase my skills, education, projects,
                  services, achievements, and professional
                  journey.
                </p>


                <div className="project-tech">

                  <span>React</span>
                  <span>JavaScript</span>
                  <span>HTML</span>
                  <span>CSS</span>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            SERVICES
            ================================ */}

        <section
          id="services"
          className={`services-section ${
            servicesVisible ? 'is-visible' : ''
          }`}
          ref={servicesRef}
        >

          <div className="section-heading reveal reveal-heading">

            <p className="section-subtitle">
              WHAT I CAN DO
            </p>

            <h2>
              Services
            </h2>

          </div>


          <div className="services-grid">

            <div className="service-card reveal-service">

              <div className="service-icon">
                <FaLaptopCode />
              </div>

              <h3>
                Web Development
              </h3>

              <p>
                Building responsive and user-friendly websites
                designed around specific business and user needs.
              </p>

            </div>


            <div className="service-card reveal-service">

              <div className="service-icon">
                <FaTools />
              </div>

              <h3>
                Computer Troubleshooting
              </h3>

              <p>
                Diagnosing and resolving common computer,
                operating system, and software-related problems.
              </p>

            </div>


            <div className="service-card reveal-service">

              <div className="service-icon">
                <FaWindows />
              </div>

              <h3>
                Windows Installation
              </h3>

              <p>
                Windows installation, reinstallation, setup,
                configuration, and basic system optimization.
              </p>

            </div>


            <div className="service-card reveal-service">

              <div className="service-icon">
                <FaMicrochip />
              </div>

              <h3>
                Hardware Upgrades
              </h3>

              <p>
                Assistance with hardware upgrades such as RAM
                replacement and other basic laptop improvements.
              </p>

            </div>


            <div className="service-card reveal-service">

              <div className="service-icon">
                <FaTools />
              </div>

              <h3>
                Software Configuration
              </h3>

              <p>
                Software installation, activation, configuration,
                and basic troubleshooting.
              </p>

            </div>


            <div className="service-card reveal-service">

              <div className="service-icon">
                <FaLightbulb />
              </div>

              <h3>
                ICT Consultation
              </h3>

              <p>
                Sharing ideas and technical guidance for websites,
                digital solutions, and technology-based projects.
              </p>

            </div>

          </div>

        </section>


        {/* ================================
            CERTIFICATES
            ================================ */}

        <section
          id="certificates"
          className={`certificates-section ${
            certificatesVisible ? 'is-visible' : ''
          }`}
          ref={certificatesRef}
        >

          <div className="section-heading reveal reveal-heading">

            <p className="section-subtitle">
              QUALIFICATIONS
            </p>

            <h2>
              Certificates
            </h2>

          </div>


          <div className="certificates-grid">

            <div className="certificate-card reveal-certificate">

              <div className="certificate-icon">
                <FaCertificate />
              </div>

              <div>

                <span className="certificate-label">
                  CERTIFICATE
                </span>

                <h3>
                  Full Stack Website Development
                </h3>

                <p>
                  Udemy
                </p>

              </div>

            </div>


            <div className="certificate-card reveal-certificate">

              <div className="certificate-icon">
                <FaMedal />
              </div>

              <div>

                <span className="certificate-label">
                  CERTIFICATE
                </span>

                <h3>
                  Pathfinder Certificate of Drills and Marching
                </h3>

                <p>
                  Pathfinder
                </p>

              </div>

            </div>


            <div className="certificate-card reveal-certificate">

              <div className="certificate-icon">
                <FaCertificate />
              </div>

              <div>

                <span className="certificate-label">
                  CERTIFICATE
                </span>

                <h3>
                  Pathfinder Certificate in Survival Camp
                </h3>

                <p>
                  Pathfinder
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* ================================
            ACHIEVEMENTS
            ================================ */}

        <section
          id="achievements"
          className={`achievements-section ${
            achievementsVisible ? 'is-visible' : ''
          }`}
          ref={achievementsRef}
        >

          <div className="section-heading reveal reveal-heading">

            <p className="section-subtitle">
              MILESTONES
            </p>

            <h2>
              Achievements
            </h2>

          </div>


          <div className="achievements-grid">

            <div className="achievement-card reveal-achievement">

              <div className="achievement-number">
                01
              </div>

              <div className="achievement-icon">
                <FaTrophy />
              </div>

              <h3>
                Drills & Marching Champion
              </h3>

              <p>
                Won a drills and marching competition through
                discipline, teamwork, precision, and leadership.
              </p>

            </div>


            <div className="achievement-card reveal-achievement">

              <div className="achievement-number">
                02
              </div>

              <div className="achievement-icon">
                <FaMedal />
              </div>

              <h3>
                Best Commander
              </h3>

              <p>
                Received a medal in recognition of outstanding
                leadership and command performance.
              </p>

            </div>

          </div>

        </section>


        {/* ================================
            CONTACT
            ================================ */}

        <section
          id="contact"
          className={`contact-section ${
            contactVisible ? 'is-visible' : ''
          }`}
          ref={contactRef}
        >

          <div className="section-heading reveal reveal-heading">

            <p className="section-subtitle">
              LET'S CONNECT
            </p>

            <h2>
              Contact Me
            </h2>

          </div>


          <div className="contact-container">


            <div className="contact-info reveal-contact">

              <h3>
                Let's Work Together
              </h3>

              <p>
                Have a project idea, technical challenge, or
                opportunity you'd like to discuss? Feel free
                to get in touch.
              </p>


              <div className="contact-details">

                <a
                  href="mailto:mosesmojo625@gmail.com"
                  className="contact-detail"
                >

                  <span className="contact-detail-icon">
                    <FaEnvelope />
                  </span>

                  <div>

                    <small>
                      Email
                    </small>

                    <p>
                      mosesmojo625@gmail.com
                    </p>

                  </div>

                </a>


                <a
                  href="https://wa.me/260771819702"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-detail"
                >

                  <span className="contact-detail-icon">
                    <FaWhatsapp />
                  </span>

                  <div>

                    <small>
                      WhatsApp
                    </small>

                    <p>
                      0771819702
                    </p>

                  </div>

                </a>


                <a
                  href="tel:+260771819702"
                  className="contact-detail"
                >

                  <span className="contact-detail-icon">
                    <FaPhone />
                  </span>

                  <div>

                    <small>
                      Phone
                    </small>

                    <p>
                      0771819702
                    </p>

                  </div>

                </a>


<a
  href="https://zm.linkedin.com/in/moses-lutangu-4978bb294?utm_source=chatgpt.com"
  target="_blank"
  rel="noopener noreferrer"
  className="contact-detail"
>

  <span className="contact-detail-icon">
    <FaLinkedin />
  </span>

  <div>

    <small>
      LinkedIn
    </small>

    <p>
      Moses Lutangu
    </p>

  </div>

</a>


                <div className="contact-detail">

                  <span className="contact-detail-icon">
                    <FaGithub />
                  </span>

                  <div>

                    <small>
                      GitHub
                    </small>

                    <p>
                      Coming soon
                    </p>

                  </div>

                </div>

              </div>

            </div>


            <form
                  className="contact-form"
                  action="https://formspree.io/f/xyeynore"
                  method="POST"
                  //target='_blank'
                >

              <div className="form-group">

                <label htmlFor="name">
                  Name
                </label>

<input
  id="name"
  name="name"
  type="text"
  placeholder="Your name"
  required
/>

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email
                </label>

<input
  id="email"
  name="email"
  type="email"
  placeholder="Your email"
  required
/>

              </div>


              <div className="form-group">

                <label htmlFor="subject">
                  Subject
                </label>

<input
  id="subject"
  name="subject"
  type="text"
  placeholder="What would you like to discuss?"
  required
/>
              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

<textarea
  id="message"
  name="message"
  rows="6"
  placeholder="Write your message..."
></textarea>

              </div>


<button 
  type="submit" 
  className="btn primary-btn contact-button" 
> 
  Send Message 
</button>

            </form>

          </div>

        </section>

      </main>


      {/* ================================
          FOOTER
          ================================ */}

      <footer className="footer">

        <div className="footer-content">

          <div className="footer-brand">

            <div className="logo">
              MOJO<span>.</span>
            </div>

            <p>
              Building. Learning. Creating.
            </p>

          </div>


          <div className="footer-links">

            <a href="#home">
              Home
            </a>

            <a href="#about">
              About
            </a>

            <a href="#skills">
              Skills
            </a>

            <a href="#projects">
              Projects
            </a>

            <a href="#contact">
              Contact
            </a>

          </div>


          <div className="footer-bottom">

            <p>
              © {new Date().getFullYear()} Moses “Mojo” Lutangu.
              All rights reserved.
            </p>

            <p>
              Designed & Built by Mojo.
            </p>

          </div>

        </div>

      </footer>

    </div>
  )
}

export default App