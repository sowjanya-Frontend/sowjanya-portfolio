import type { JSX } from "react";

type SkillCardProps = {
  skillName: string;
  icon: JSX.Element;
};

export function SkillCard({ skillName, icon }: SkillCardProps) {
  return (
    <article className="card skill-card text-center p-3 h-100">

      {/* ICON */}
      <div
        className="skill-icon mb-2"
        aria-hidden="true"
      >
        {icon}
      </div>

      {/* TEXT */}
      <p className="card-title mb-0 fw-medium">
        {skillName}
      </p>

    </article>
  );
}