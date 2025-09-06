import { useState, useEffect, useRef } from 'react';

interface SkillBarProps {
  skill: string;
  percentage: number;
  delay?: number;
}

const SkillBar = ({ skill, percentage, delay = 0 }: SkillBarProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [animationStarted, setAnimationStarted] = useState(false);
  const skillRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setTimeout(() => {
            setAnimationStarted(true);
          }, delay);
        }
      },
      { threshold: 0.5 }
    );

    if (skillRef.current) {
      observer.observe(skillRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  return (
    <div 
      ref={skillRef}
      className={`mb-6 transition-all duration-500 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
      }`}
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-cyber-dark">{skill}</span>
        <span className="text-sm font-orbitron text-cyber-teal">{percentage}%</span>
      </div>
      <div className="w-full bg-secondary rounded-full h-2 overflow-hidden">
        <div
          className={`h-full bg-gradient-to-r from-cyber-teal to-cyber-purple rounded-full transition-all duration-1000 ease-out relative ${
            animationStarted ? '' : 'w-0'
          }`}
          style={{ 
            width: animationStarted ? `${percentage}%` : '0%',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default SkillBar;