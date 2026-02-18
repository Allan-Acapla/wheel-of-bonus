import React, { useEffect, useRef, useState } from 'react';
import { PRIZES, SPIN_DURATION_SECONDS, SPIN_ROTATIONS, WHEEL_COLORS } from '../constants';
import { Prize } from '../types';

interface WheelProps {
  onSpinEnd: () => void;
  isSpinning: boolean;
  setIsSpinning: (spinning: boolean) => void;
  winningIndex: number;
}

const Wheel: React.FC<WheelProps> = ({ onSpinEnd, isSpinning, setIsSpinning, winningIndex }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  
  // Pre-calculate randomized bulb colors for a festive look
  const [bulbIndices] = useState(() => Array.from({ length: 24 }, (_, i) => i));

  // --- DRAWING HELPERS ---

  const drawSlice = (
    ctx: CanvasRenderingContext2D, 
    cx: number, cy: number, 
    radius: number, 
    startAngle: number, endAngle: number, 
    color: string
  ) => {
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, radius, startAngle, endAngle);
    ctx.closePath();
    
    // Create a rich gradient for the slice to give it a curved, metallic feel
    const gradient = ctx.createRadialGradient(cx, cy, 0, cx, cy, radius);
    
    gradient.addColorStop(0, color); 
    gradient.addColorStop(0.8, color); 
    gradient.addColorStop(1, 'rgba(0,0,0,0.2)'); // Darker edge for depth

    ctx.fillStyle = gradient;
    ctx.fill();

    // Inner Gloss Overlay
    ctx.save();
    ctx.clip();
    const glossGrad = ctx.createLinearGradient(cx - radius, cy - radius, cx + radius, cy + radius);
    glossGrad.addColorStop(0, 'rgba(255,255,255,0.15)');
    glossGrad.addColorStop(0.5, 'rgba(255,255,255,0)');
    glossGrad.addColorStop(1, 'rgba(255,255,255,0.05)');
    ctx.fillStyle = glossGrad;
    ctx.fill();
    ctx.restore();
  };

  const drawIcon = (ctx: CanvasRenderingContext2D, prize: Prize, size: number) => {
    if (!prize.icon) return;
    
    const iconSize = size; 

    if (prize.icon === 'coin') {
        // Gold Coin
        ctx.beginPath();
        ctx.arc(0, 0, iconSize, 0, Math.PI * 2);
        const g = ctx.createLinearGradient(-iconSize, -iconSize, iconSize, iconSize);
        g.addColorStop(0, '#FFD700');
        g.addColorStop(1, '#B8860B');
        ctx.fillStyle = g;
        ctx.fill();
        ctx.strokeStyle = '#DAA520';
        ctx.lineWidth = 2;
        ctx.stroke();

        ctx.fillStyle = 'rgba(255,255,255,0.3)';
        ctx.font = 'bold 24px serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText('$', 0, 2);

    } else if (prize.icon === 'star') {
        // Glowing Star
        ctx.beginPath();
        const spikes = 5;
        const outer = iconSize;
        const inner = iconSize * 0.5;
        let rot = Math.PI / 2 * 3;
        let x = 0; let y = 0;
        const step = Math.PI / spikes;
        
        ctx.moveTo(0, 0 - outer);
        for (let i = 0; i < spikes; i++) {
            x = Math.cos(rot) * outer;
            y = Math.sin(rot) * outer;
            ctx.lineTo(x, y);
            rot += step;

            x = Math.cos(rot) * inner;
            y = Math.sin(rot) * inner;
            ctx.lineTo(x, y);
            rot += step;
        }
        ctx.lineTo(0, 0 - outer);
        ctx.closePath();
        ctx.fillStyle = '#FFFACD';
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 10;
        ctx.fill();
        ctx.shadowBlur = 0; // reset
    } else if (prize.icon === 'gem') {
        // Diamond shape
        ctx.beginPath();
        ctx.moveTo(0, -iconSize);
        ctx.lineTo(iconSize, 0);
        ctx.lineTo(0, iconSize);
        ctx.lineTo(-iconSize, 0);
        ctx.closePath();
        
        const g = ctx.createLinearGradient(-iconSize, -iconSize, iconSize, iconSize);
        g.addColorStop(0, '#E0FFFF');
        g.addColorStop(0.5, '#00FFFF');
        g.addColorStop(1, '#008B8B');
        ctx.fillStyle = g;
        ctx.fill();
    }
  };

  // --- EFFECT: RENDER LOOP ---
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // High resolution setup
    const size = 1000;
    canvas.width = size;
    canvas.height = size;
    
    const cx = size / 2;
    const cy = size / 2;
    const radius = size / 2 - 20; // Padding for outer glow
    
    const numSegments = PRIZES.length;
    const anglePerSegment = (2 * Math.PI) / numSegments;

    ctx.clearRect(0, 0, size, size);

    // 1. Draw Segments
    PRIZES.forEach((prize, i) => {
      const startAngle = i * anglePerSegment - Math.PI / 2;
      const endAngle = startAngle + anglePerSegment;
      
      drawSlice(ctx, cx, cy, radius, startAngle, endAngle, prize.color);
    });

    // 2. Separators (Gold Spokes)
    PRIZES.forEach((_, i) => {
      const angle = i * anglePerSegment - Math.PI / 2;
      ctx.beginPath();
      ctx.moveTo(cx, cy);
      ctx.lineTo(cx + Math.cos(angle) * radius, cy + Math.sin(angle) * radius);
      ctx.strokeStyle = WHEEL_COLORS.gold;
      ctx.lineWidth = 5;
      ctx.shadowColor = 'rgba(0,0,0,0.5)';
      ctx.shadowBlur = 4;
      ctx.stroke();
      ctx.shadowBlur = 0; // reset
    });

    // 3. Content (Text & Icons)
    PRIZES.forEach((prize, i) => {
      const startAngle = i * anglePerSegment - Math.PI / 2;
      const midAngle = startAngle + anglePerSegment / 2;
      
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(midAngle);
      
      // Translate to middle of wedge radius
      const contentRadius = radius * 0.60;
      ctx.translate(contentRadius, 0);
      
      // Rotate 90 degrees so text runs perpendicular to the spoke
      ctx.rotate(Math.PI / 2);

      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      ctx.fillStyle = prize.textColor || '#FFFFFF';
      
      // Text Shadow
      ctx.shadowColor = 'rgba(0,0,0,0.8)';
      ctx.shadowBlur = 4;
      ctx.shadowOffsetY = 2;

      // DRAW TEXT
      if (prize.subLabel) {
        ctx.font = '900 42px Cinzel';
        ctx.fillText(prize.label, 0, -15);
        
        ctx.font = '700 22px Cinzel';
        ctx.fillStyle = prize.id === '8' ? '#FFD700' : (prize.textColor || '#EEE'); 
        ctx.fillText(prize.subLabel, 0, 20);
      } else {
        ctx.font = '900 52px Cinzel';
        ctx.fillText(prize.label, 0, 0);
      }
      
      ctx.restore();
      
      // Draw Icon separately near rim
      ctx.save();
      ctx.translate(cx, cy);
      ctx.rotate(midAngle);
      ctx.translate(radius * 0.88, 0); 
      ctx.rotate(Math.PI / 2); 
      
      drawIcon(ctx, prize, 20); 
      
      ctx.restore();
    });
    
    // 4. Inner Decoration Ring
    ctx.beginPath();
    ctx.arc(cx, cy, radius * 0.35, 0, Math.PI * 2);
    ctx.strokeStyle = WHEEL_COLORS.goldDark;
    ctx.lineWidth = 3;
    ctx.stroke();

  }, []);

  // --- LOGIC ---
  const handleSpin = () => {
    // Use the passed winningIndex instead of random
    const segmentAngle = 360 / PRIZES.length;
    
    // Calculate landing
    const currentRotationMod = rotation % 360;
    const fullSpins = 360 * SPIN_ROTATIONS;
    
    // To land index I at top (-90deg), we need to rotate backwards by i*angle
    const targetAngleOffset = - (winningIndex * segmentAngle);
    
    let targetRotation = targetAngleOffset + fullSpins;
    
    // Adjust to be greater than current rotation to ensure forward spin
    while (targetRotation < rotation + 360 * 3) {
        targetRotation += 360;
    }
    
    // Add randomness within the slice
    const randomOffset = (Math.random() - 0.5) * (segmentAngle * 0.7);
    
    setRotation(targetRotation + randomOffset);

    setTimeout(() => {
      setIsSpinning(false);
      onSpinEnd();
    }, SPIN_DURATION_SECONDS * 1000);
  };

  useEffect(() => {
    if (isSpinning) handleSpin();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isSpinning]);

  return (
    <div className="relative max-[480px]:w-[70vw] w-[85vw] max-w-[400px] aspect-square mx-auto z-20 select-none">
      
      {/* Background Glow */}
      <div className="absolute inset-[-10%] bg-blue-500/20 blur-3xl rounded-full pointer-events-none"></div>

      {/* --- STATIC POINTER --- */}
      <div className="absolute -top-[25px] left-1/2 -translate-x-1/2 z-50 pointer-events-none">
        {/* Flapper housing */}
        <div className="relative w-14 h-16">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-slate-800 border-2 border-gray-400 shadow-lg z-20"></div>
            {/* The Flapper */}
            <div 
                className={`w-10 h-14 bg-gradient-to-b from-red-500 to-red-700 mx-auto rounded-b-full border-2 border-white/20 shadow-xl origin-top transition-transform duration-100 ease-linear`}
                style={{
                    transform: isSpinning ? 'rotate(-15deg)' : 'rotate(0deg)',
                    clipPath: 'polygon(0% 0%, 100% 0%, 50% 100%)'
                }}
            >
                <div className="w-[2px] h-8 bg-red-300/30 mx-auto mt-1"></div>
            </div>
        </div>
      </div>

      {/* --- WHEEL CONTAINER --- */}
      <div className="relative w-full h-full">
        
        {/* 1. OUTER BEZEL (Static) */}
        <div className="absolute inset-[-20px] rounded-full bg-gradient-to-br from-[#1e3a8a] via-[#172554] to-[#1e3a8a] border-[4px] border-[#B8860B] shadow-[0_10px_30px_rgba(0,0,0,0.8)] z-0">
            {/* Bulbs Container */}
            {bulbIndices.map((i) => (
                <div
                    key={i}
                    className="absolute w-3 h-3 md:w-4 md:h-4 rounded-full transition-all duration-300"
                    style={{
                        backgroundColor: '#FFF8DC',
                        marginLeft: '-6px',
                        marginTop: '-6px',
                        // Position on circle rim (approx 53% radius to sit on bezel)
                        left: `${50 + 53 * Math.cos((i * (360/24) - 90) * Math.PI / 180)}%`,
                        top: `${50 + 53 * Math.sin((i * (360/24) - 90) * Math.PI / 180)}%`,
                        
                        boxShadow: '0 0 5px #ffb700',
                        animation: `chase 1.5s infinite steps(24)`,
                        animationDelay: `-${i * (1.5/24)}s`,
                        opacity: 0.3
                    }}
                />
            ))}
        </div>

        {/* 2. SPINNING DISC */}
        <div 
            className="absolute inset-0 rounded-full overflow-hidden shadow-[inset_0_0_20px_rgba(0,0,0,0.5)] z-10"
            style={{
                transform: `rotate(${rotation}deg)`,
                transition: isSpinning ? `transform ${SPIN_DURATION_SECONDS}s cubic-bezier(0.15, 0.0, 0.2, 1)` : 'none',
            }}
        >
            <canvas ref={canvasRef} className="w-full h-full" />
        </div>
        
        {/* 3. CENTER HUB (Static) */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[22%] h-[22%] z-30">
            {/* Metal Ring */}
            <div className="w-full h-full rounded-full bg-gradient-to-br from-gray-200 to-gray-400 border-[6px] border-[#B8860B] shadow-2xl flex items-center justify-center relative overflow-hidden">
                {/* Shiny Reflection */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/80 to-transparent opacity-40"></div>
                
                {/* Logo/Text */}
                <div className="bg-[#0f172a] w-[90%] h-[90%] rounded-full flex items-center justify-center border-2 border-yellow-700 shadow-inner">
                     <span className="text-yellow-500 font-['Cinzel'] font-black text-xl md:text-2xl drop-shadow-md">
                        SPIN
                     </span>
                </div>
            </div>
        </div>
      </div>

      <style>{`
        @keyframes chase {
            0%, 10% { background-color: #fff; box-shadow: 0 0 15px #fff, 0 0 30px #ffaa00; opacity: 1; transform: scale(1.2); }
            11%, 100% { background-color: #553300; box-shadow: none; opacity: 0.4; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default Wheel;