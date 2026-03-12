type ProjectCardProps = {
  title: string;
  description: string;
  contributions: string[];
  techstack: string[];
};

export function ProjectCard({ title, description, contributions, techstack }: ProjectCardProps) {
  return (
    <div className="card shadow-sm mb-4 project-card">

      <div className="card-body">

        <h5 className="card-title fw-bold">{title}</h5>

        <p className="text-muted">{description}</p>

        <h6 className="contribution-title mt-3">Key Contributions</h6>

        <div className="contribution-list">
          {contributions.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>

        <div className="tech-stack mt-4">
            {techstack.map((t, i) => (
                <span key={i} className="tech-badge">{t}</span>
            ))}
        </div>

      </div>

    </div>
  );
}