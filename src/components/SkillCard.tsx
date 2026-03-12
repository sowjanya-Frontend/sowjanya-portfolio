import type { JSX } from "react";

type SkillCardProps = {
  skillName: string;
  icon: JSX.Element;
};

export function SkillCard({ skillName, icon }: SkillCardProps) {
  return (
    <div className="card skill-card text-center p-3 m-2 h-100">
      <div className="skill-icon mb-2">{icon}</div>
      <h5 className="card-title">{skillName}</h5>
    </div>
  );
}