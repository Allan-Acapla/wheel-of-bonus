import React, { useEffect, useState } from 'react';

const FloatingCoins: React.FC = () => {
  const [coins, setCoins] = useState<number[]>([]);

  useEffect(() => {
    // Generate static IDs for coins to render
    setCoins(Array.from({ length: 15 }, (_, i) => i));
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
      {coins.map((i) => (
        <div
          key={i}
          className="absolute opacity-0 animate-float"
          style={{
            left: `${Math.random() * 100}%`,
            top: '110%',
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${5 + Math.random() * 5}s`,
            transform: `scale(${0.5 + Math.random() * 0.5})`,
          }}
        >
           {/* Simple Gold Coin SVG */}
           <svg width="40" height="40" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="50" cy="50" r="45" fill="#FFD700" stroke="#B8860B" strokeWidth="5" />
            <circle cx="50" cy="50" r="35" fill="#F4C430" stroke="#DAA520" strokeWidth="2" />
            <path d="M50 25 L58 42 L75 42 L61 54 L66 71 L50 62 L34 71 L39 54 L25 42 L42 42 Z" fill="#FFD700" stroke="#B8860B" strokeWidth="1" />
           </svg>
        </div>
      ))}
      <style>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
        .animate-float {
          animation-name: float;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
        }
      `}</style>
    </div>
  );
};

export default FloatingCoins;