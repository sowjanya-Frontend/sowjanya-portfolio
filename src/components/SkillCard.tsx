import type { JSX } from "react";

type SkillCardProps = {
  skillName: string;
  icon: JSX.Element;
};

export function SkillCard({ skillName, icon }: SkillCardProps) {
  return (
    <span className="skill-pill">
      <span className="skill-icon" aria-hidden="true">
        {icon}
      </span>
      <span>{skillName}</span>
    </span>
  );
}