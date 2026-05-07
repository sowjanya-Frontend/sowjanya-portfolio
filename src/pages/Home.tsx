import { Link } from "react-router-dom";
import { SkillCard } from "../components/SkillCard";
import profilePic from "../../src/assets/images/profile.jpeg";
import { motion, type Variants } from "framer-motion";
import {
  SiReact,
  SiTypescript,
  SiJavascript,
  SiHtml5,
  SiCss,
  SiBootstrap,
  SiRedux,
  SiVuedotjs,
  SiAngular
} from "react-icons/si";

function Home() {

  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const skills = [
    { skillName: "React", icon: <SiReact color="#61dafb" size={40} /> },
    { skillName: "TypeScript", icon: <SiTypescript color="#3178c6" size={40} /> },
    { skillName: "JavaScript", icon: <SiJavascript color="#f7df1e" size={40} /> },
    { skillName: "HTML5", icon: <SiHtml5 color="#e34f26" size={40} /> },
    { skillName: "CSS3", icon: <SiCss color="#1572b6" size={40} /> },
    { skillName: "Bootstrap", icon: <SiBootstrap color="#7952b3" size={40} /> },
    { skillName: "Redux", icon: <SiRedux color="#764abc" size={40} /> },
    { skillName: "Vue.js", icon: <SiVuedotjs color="#42b883" size={40} /> },
    { skillName: "Angular", icon: <SiAngular color="#dd0031" size={40} /> },
  ];

  return (
    <main>

      {/* HERO SECTION */}
      <motion.section
        className="container-fluid"
        aria-labelledby="intro-heading"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="row align-items-center">

            {/* RIGHT IMAGE */}
            <aside className="col-md-4 d-flex">

              <motion.img
                src={profilePic}
                alt="Portrait of Sowjanya Kandra"
                className="img-fluid shadow"
                style={{ width: "250px", maxWidth: "100%" }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />

            </aside>

            {/* LEFT CONTENT */}
            <div className="col-lg-8 col-md-8 col-sm-12">

              <header>
                <h1 id="intro-heading" className="fw-bold">
                  Frontend Engineer
                </h1>

                <p className="fs-5 mb-3">
                  Hello, I am Sowjanya
                </p>
              </header>

              <div className="space-y-2">
                <p>
                  Frontend Engineer with 10+ years of experience building scalable applications using React and TypeScript.
                </p>

                <p>
                  Specialised in modern frontend architecture, legacy system modernisation, and reusable component libraries.
                </p>

                <p>
                  Experience across healthcare, analytics, and enterprise platforms, focused on performance and maintainability.
                </p>

                <p>
                  Passionate about clean UI, developer experience, and continuous improvement.
                </p>

                <p>
                  Outside work: exploring tech, learning, and family time.
                </p>
              </div>
              <nav className="mt-4" aria-label="Primary actions">

                <Link to="/projects" className="btn btn-outline-light me-3">
                  View Professional Experience
                </Link>

                <a
                  href="/Kandra_Sowjanya_Resume.pdf"
                  download
                  className="btn btn-outline-light me-3"
                >
                  Download Resume
                </a>

                <a
                  href="https://github.com/sowjanya-Frontend"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-light me-2"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/kandra-sowjanya-3aab3490/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-primary"
                >
                  LinkedIn
                </a>

              </nav>

              <p className="mt-4">
                Work Authorization: Eligible to work in the UK. No visa sponsorship required.
              </p>

            </div>


          </div>
        </div>
      </motion.section>


      {/* SKILLS SECTION */}
      <motion.section
        className="container py-3"
        aria-labelledby="skills-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <header className="text-center mb-4">
          <h2 id="skills-heading">Core Competencies</h2>
        </header>

        <ul className="skills-list">
          {skills.map((skill) => (
            <li key={skill.skillName}>
              <SkillCard
                skillName={skill.skillName}
                icon={skill.icon}
              />
            </li>
          ))}
        </ul>
      </motion.section>

      {/* EXPERIENCE SECTION */}
      <motion.section
        className="container"
        aria-labelledby="experience-heading"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >

        <header className="text-center mb-5">
          <h2 id="experience-heading">
            Professional Experience
          </h2>
        </header>

        <div className="experience-row">

          <article className="experience-mini-card">
            <h3>Rolisma Ltd</h3>
            <p>Frontend Developer</p>
            <time>Sep 2025 — Mar 2026</time>
          </article>

          <article className="experience-mini-card">
            <h3>Royal Pharmaceutical Society</h3>
            <p>Frontend Developer</p>
            <time>Oct 2022 — Aug 2025</time>
          </article>

          <article className="experience-mini-card">
            <h3>SplashBI</h3>
            <p>Senior Software Engineer</p>
            <time>Oct 2016 — Sep 2022</time>
          </article>

          <article className="experience-mini-card">
            <h3>Napier Healthcare</h3>
            <p>Software Engineer</p>
            <time>Nov 2015 — Oct 2016</time>
          </article>

          <article className="experience-mini-card">
            <h3>Glasscheese</h3>
            <p>Junior Frontend Developer</p>
            <time>Feb 2014 — Nov 2015</time>
          </article>

        </div>

      </motion.section>

    </main>
  );
}

export default Home;