import { Link } from "react-router-dom";
import { ProjectCard } from "../components/ProjectCard";

const projects = [
  {
    title: "JANUS – Editorial Platform Modernisation",
    company: "Royal Pharmaceutical Society",
    duration: "10/2022 – Present | London, UK",
    description:
      "Large scale modernization initiative transforming legacy editorial systems into a modern, scalable platform.",
    contributions: [
      "Migrating legacy applications to React and TypeScript",
      "Building reusable component libraries",
      "Refactoring editorial workflows reducing manual effort by 70%",
      "Improving rendering performance",
      "Collaborating closely in Agile sprints"
    ],
    tech: ["React", "TypeScript", "Meterial UI" ,"REST API", "Python", "Storybook", "AWS"]
  },
  {
    title: "Drug Compatibility Checker",
    company: "Royal Pharmaceutical Society",
    duration: "10/2022 – Present | London, UK",
    description:
      "Clinical decision support tool to validate drug interactions in real-time for pharmacists.",
    contributions: [
      "Developing responsive UI using Vue.js",
      "Integrating REST APIs for drug interaction data",
      "Implementing unit & integration tests",
      "Delivering accessible interfaces",
      "Ensuring cross-browser compatibility"
    ],
    tech: ["Vue.js", "JavaScript", "REST API"]
  },
  {
    title: "SplashBI – Analytics Platform",
    company: "Splash Business Intelligence Pvt Ltd",
    duration: "10/2016 – 09/2022 | Hyderabad, India",
    description:
      "Enterprise Business Intelligence platform with ad hoc reporting and interactive dashboards.",
    contributions: [
      "Led frontend development for dynamic dashboards using Angular",
      "Built interactive data visualizations with Telerik Kendo UI",
      "Improved page load performance by 40% with code splitting & lazy loading",
      "Developed reusable UI components",
      "Mentored junior developers and conducted code reviews"
    ],
    tech: ["Angular", "JavaScript", "Kendo UI", "CSS3", "HTML5", "SASS"]
  },
  {
    title: "SATA – Healthcare Automation System",
    company: "Napier Healthcare",
    duration: "11/2015 – 10/2016 | Hyderabad, India",
    description:
      "Comprehensive healthcare automation platform to streamline hospital and clinical workflows.",
    contributions: [
      "Developing modular and scalable UI components",
      "Building role-based portals for doctors, nurses, and admins",
      "Automating key operational processes including admissions, lab management, and inventory",
      "Integrating REST APIs for real-time clinical and operational data",
      "Coordinating with QA teams for stable releases"
    ],
    tech: ["JavaScript", "jQuery", "Ext JS", "REST API", "Bootstrap", "HTML/CSS", "Less"]
  },
  {
    title: "Sebit – Educational Platform",
    company: "Glasscheese Pvt Ltd",
    duration: "02/2014 – 11/2015 | Chennai, India",
    description:
      "Gamified learning platform to improve mathematics engagement for primary school students.",
    contributions: [
      "Developed interactive, game-based learning modules",
      "Built responsive interfaces using Bootstrap, HTML5, and CSS3",
      "Implemented frontend modules within an MVC (.NET) architecture",
      "Collaborated with designers and backend developers to ensure smooth user experience"
    ],
    tech: ["JavaScript", "jQuery", "Bootstrap", "HTML5", "CSS3", "C#"]
  }
];

export default function Projects() {
  return (
    <section className="container">
    {/* Floating Back to Home Button */}
      <div className="mb-4">
        <Link to="/" className="btn btn-dark back-home-btn">
          &larr; Back to Home
        </Link>
      </div>

      <h1 className="text-center mb-4">Projects</h1>

      <div className="timeline-container">
        {projects.map((proj, index) => (
          <div key={index} className="timeline-row">

            <div className="timeline-left">
              <p className="timeline-duration">{proj.duration}</p>
              <p className="timeline-company">{proj.company}</p>
            </div>

            <div className="timeline-right">
              <ProjectCard
                title={proj.title}
                description={proj.description}
                contributions={proj.contributions}
                techstack = {proj.tech}
              />
            </div>

          </div>
        ))}
      </div>

    </section>
  );
}