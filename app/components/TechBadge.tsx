import React from 'react';

interface TechBadgeProps {
  label: string;
  icon: React.ReactNode;
  color: string;
}

export default function TechBadge({ label, icon, color }: TechBadgeProps) {
  return (
    <div className="tech-badge">
      <div className="tech-badge-bg" />

      <div className="tech-badge-icon-box">
        <div
          className="tech-badge-gradient"
          style={{ backgroundImage: `linear-gradient(135deg, ${color} 0%, rgba(0,0,0,0) 100%)` }}
        />
        <div className="tech-badge-glow" style={{ background: color }} />
        <div className="tech-badge-icon">{icon}</div>
        <div className="tech-badge-icon-box-shadow" />
      </div>

      <span className="tech-badge-label">{label}</span>
      <div className="tech-badge-outer-shadow" />
    </div>
  );
}
