import { useEffect, useState } from 'react';

interface MatrixRainProps {
  className?: string;
}

const MatrixRain = ({ className = "" }: MatrixRainProps) => {
  const [drops, setDrops] = useState<Array<{ id: number; left: number; delay: number; duration: number; chars: string }>>([]);

  useEffect(() => {
    const generateDrops = () => {
      const newDrops = Array.from({ length: 25 }, (_, i) => ({
        id: i,
        left: Math.random() * 100,
        delay: Math.random() * 5,
        duration: 3 + Math.random() * 4,
        chars: Array.from({ length: 15 + Math.random() * 10 }, () => 
          String.fromCharCode(0x30A0 + Math.random() * 96)
        ).join('')
      }));
      setDrops(newDrops);
    };

    generateDrops();
  }, []);

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {drops.map((drop) => (
        <div
          key={drop.id}
          className="absolute text-matrix-green text-xs font-mono opacity-60 animate-matrix-rain"
          style={{
            left: `${drop.left}%`,
            animationDelay: `${drop.delay}s`,
            animationDuration: `${drop.duration}s`,
            textShadow: '0 0 8px currentColor'
          }}
        >
          {drop.chars}
        </div>
      ))}
    </div>
  );
};

export default MatrixRain;