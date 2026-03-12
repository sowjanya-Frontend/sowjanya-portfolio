import { Link } from "react-router-dom";
import { SkillCard } from "../components/SkillCard";
import profilePic from "../../src/assets/images/profile.jpeg";
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
    <>
      {/* HERO SECTION */}

      <section className="container-fluid py-3 bg-light">
        <div className="container">

          <div className="row align-items-center">

            {/* LEFT SIDE */}

          <div className="col-lg-7 col-md-7 col-sm-12 pe-lg-4 pe-md-3">

              <h1 className="display-6 fw-bold">
                Hi, I'm Sowjanya Kandra
              </h1>

              <h3 className="text-muted mb-3">
                Frontend Developer
              </h3>

              <p className="lead">
                Frontend Developer with 10+ years of experience building scalable,
                responsive and high-performance web applications across healthcare,
                analytics and enterprise platforms.
              </p>

              <div className="mt-4">

                <Link to="/projects" className="btn btn-dark me-3">
                  View My Professional Career
                </Link>

                <a
                  href="/Sowjanya_Kandra_Resume.pdf"
                  download
                  className="btn btn-outline-dark me-3"
                >
                  Download Resume
                </a>

                <a
                  href="https://github.com/sowjanya-Frontend"
                  target="_blank"
                  className="btn btn-outline-secondary me-2"
                >
                  GitHub
                </a>

                <a
                  href="https://www.linkedin.com/in/sowjanya-kandra-3aab3490"
                  target="_blank"
                  className="btn btn-outline-primary"
                >
                  LinkedIn
                </a>

              </div>


              <p className="mt-5">
                Work Authorization: Eligible to work in the UK. No visa sponsorship required.
              </p>
            </div>

            {/* RIGHT SIDE (PHOTO) */}

           <div className="col-md-5 d-flex justify-content-center justify-content-md-end">

              <img
                src={profilePic}
                alt="Sowjanya Kandra"
                className="img-fluid rounded-circle shadow"
                style={{ width: "220px", maxWidth: "100%" }}
              />

            </div>

          </div>

        </div>
      </section>


      {/* SKILLS SECTION */}

      <section className="container py-4">

        <h2 className="mb-4 text-center">
          Core Competencies
        </h2>

        <div className="row justify-content-center">

          {skills.map((skill) => (
            <div
              key={skill.skillName}
              className="col-6  col-sm-4 col-md-3 col-lg-2 mb-3"
            >
              <SkillCard
                skillName={skill.skillName}
                icon={skill.icon}
              />
            </div>
          ))}

        </div>

      </section>

      {/* EXPERIENCE SECTION */}

        <section className="container py-3">

        <h2 className="text-center mb-5">
            Professional Experience
        </h2>

        <div className="timeline">

        <div className="timeline-item">
        <h5>Royal Pharmaceutical Society</h5>
        <p className="text-muted mb-1">Frontend Developer</p>
        <small>Oct 2022 — Present | London, UK</small>
        </div>

        <div className="timeline-item">
        <h5>Splash Business Intelligence Pvt Ltd</h5>
        <p className="text-muted mb-1">Senior Software Engineer</p>
        <small>Oct 2016 — Sep 2022 | Hyderabad, India</small>
        </div>

        <div className="timeline-item">
        <h5>Napier Healthcare</h5>
        <p className="text-muted mb-1">Software Engineer</p>
        <small>Nov 2015 — Oct 2016 | Hyderabad, India</small>
        </div>

        <div className="timeline-item">
        <h5>Glasscheese Pvt Ltd</h5>
        <p className="text-muted mb-1">Junior Frontend Developer</p>
        <small>Feb 2014 — Nov 2015 | Chennai, India</small>
        </div>

        </div>

        </section>
    </>
  );
}

export default Home;