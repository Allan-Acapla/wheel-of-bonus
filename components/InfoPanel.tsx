import React from 'react';

const InfoPanel: React.FC = () => {
  return (
    <div className="relative w-full flex flex-col items-center z-10">
      
      {/* Title Group */}
      <div className="text-center mb-6 md:mb-8 relative w-full">
        
        {/* Subheading */}
        <h2 className="text-blue-200/80 font-['Inter'] font-semibold text-[10px] sm:text-xs tracking-[0.3em] uppercase mb-1 drop-shadow-md">
            You are eligible to spin the
        </h2>
        
        {/* Main Heading */}
        <h1 className="font-['Cinzel'] font-black text-4xl sm:text-5xl md:text-6xl leading-tight tracking-wide text-transparent bg-clip-text bg-gradient-to-b from-[#fff7cc] via-[#ffd700] to-[#b8860b] drop-shadow-[0_4px_10px_rgba(0,0,0,0.5)] filter pb-2">
            WHEEL OF BONUS
        </h1>
      </div>

      {/* Info Card */}
      <div className="w-full max-w-[90%] md:max-w-md mx-auto">
        <div className="bg-[#1e1b4b]/60 backdrop-blur-md border border-blue-400/20 rounded-xl p-4 md:p-5 text-center shadow-[0_8px_32px_rgba(0,0,0,0.4)] relative overflow-hidden">
            
            {/* Top Shine */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-300/30 to-transparent"></div>
            
            <p className="text-blue-50/90 text-xs sm:text-sm md:text-base font-['Inter'] font-normal leading-relaxed">
               New player bonus! Spin to reveal your potential <span className="text-yellow-400 font-bold">welcome bonus</span>
            </p>
        </div>
      </div>
    </div>
  );
};

export default InfoPanel;