import React, { useState } from 'react';
import Wheel from '../components/Wheel';
import InfoPanel from '../components/InfoPanel';
import FloatingCoins from '../components/FloatingCoins';
import ResultModal from '../components/ResultModal';
import Footer from '../components/Footer';
import { PRIZES } from '../constants';
import { Prize } from '../types';

const Home: React.FC = () => {
    const [isSpinning, setIsSpinning] = useState(false);
    const [modalOpen, setModalOpen] = useState(false);
    const [wonPrize, setWonPrize] = useState<Prize | null>(null);

    // Logic State
    const [spinCount, setSpinCount] = useState(0);
    const [targetIndex, setTargetIndex] = useState(0);

    // Helper to find index by label
    const findPrizeIndex = (targetLabel: string, targetSubLabel?: string) => {
        const index = PRIZES.findIndex(p => p.label === targetLabel && (!targetSubLabel || p.subLabel === targetSubLabel));
        if (index === -1) {
            console.warn(`Prize not found: ${targetLabel} ${targetSubLabel}`);
            return 0; // Fallback
        }
        return index;
    };

    const handleSpinClick = () => {
        if (isSpinning) return;

        setModalOpen(false);

        // Determine Logic Flow
        let currentSpinCount = spinCount;

        // Reset flow if we are at step 2 or more (already claimed jackpot)
        if (currentSpinCount >= 2) {
            currentSpinCount = 0;
            setSpinCount(0);
        }

        let targetIdx = 0;

        // Spin 1: Force "FREE SPIN"
        if (currentSpinCount === 0) {
            targetIdx = findPrizeIndex('FREE', 'SPIN');
        }
        // Spin 2: Force "2.5K CREDITS"
        else {
            targetIdx = findPrizeIndex('2.5K', 'CREDITS');
        }

        setTargetIndex(targetIdx);
        setIsSpinning(true);
    };

    const handleSpinEnd = () => {
        const prize = PRIZES[targetIndex];
        setWonPrize(prize);

        // Update count for next time
        setSpinCount(prev => prev + 1);

        // Small delay before showing modal for effect
        setTimeout(() => {
            setModalOpen(true);
        }, 500);
    };

    // Generate random sparkles for the celebration effect
    const sparkles = Array.from({ length: 18 }, (_, i) => ({
        id: i,
        left: 20 + Math.random() * 60, // 20% to 80% width
        top: 40 + Math.random() * 40,  // 40% to 80% height (around wheel)
        delay: Math.random() * 1.5,
        tx: (Math.random() - 0.5) * 100 // random x movement
    }));

    return (
        <div className="relative min-h-[100dvh] w-full bg-[#020617] overflow-x-hidden flex flex-col font-sans">

            {/* --- BACKGROUND LAYERS --- */}

            {/* 1. Base Gradient */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#020617] z-0"></div>

            {/* 2. Dotted Particle Field (Subtle) */}
            <div className="fixed inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none z-0"></div>

            {/* 3. Gold Burst (Behind Wheel) */}
            <div
                className={`fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[140vmax] h-[140vmax] pointer-events-none transition-all duration-1000 z-0
          ${modalOpen ? 'opacity-100 scale-110 animate-gold-pulse' : 'opacity-40 scale-100'}
        `}
                style={{
                    background: 'radial-gradient(circle, rgba(255, 215, 0, 0.12) 0%, transparent 60%)'
                }}
            ></div>

            {/* 4. Vignette (Dark Edges) */}
            <div className="fixed inset-0 bg-[radial-gradient(circle_at_center,transparent_20%,rgba(0,0,0,0.8)_120%)] pointer-events-none z-0 mix-blend-multiply"></div>

            {/* 5. Floating Coins (Existing) */}
            <div className="fixed inset-0 z-0 pointer-events-none">
                <FloatingCoins />
            </div>

            {/* 6. Celebration Sparkles (Only when modal is open) */}
            {modalOpen && (
                <div className="fixed inset-0 z-[25] pointer-events-none overflow-hidden">
                    {sparkles.map((s) => (
                        <div
                            key={s.id}
                            className="sparkle animation-fill-forwards"
                            style={{
                                left: `${s.left}%`,
                                top: `${s.top}%`,
                                '--tx': `${s.tx}px`,
                                animation: `sparkleFloat 2.5s ease-out infinite`,
                                animationDelay: `${s.delay}s`
                            } as React.CSSProperties}
                        />
                    ))}
                </div>
            )}

            {/* --- MAIN CONTENT --- */}
            <main className="relative z-10 flex flex-col items-center w-full max-w-lg mx-auto min-h-[100dvh]">

                {/* Spacer for top safe area */}
                <div className="h-6 md:h-12 flex-shrink-0"></div>

                {/* Header Section */}
                <div className="w-full flex-shrink-0 px-4">
                    <InfoPanel />
                </div>

                {/* Wheel Section - Flex grow to take available space, with minimum padding */}
                <div className="flex-grow flex items-center justify-center w-full py-8 md:py-12">
                    <Wheel
                        isSpinning={isSpinning}
                        setIsSpinning={setIsSpinning}
                        onSpinEnd={handleSpinEnd}
                        winningIndex={targetIndex}
                    />
                </div>

                {/* Action Section */}
                <div className="w-full flex-shrink-0 flex flex-col items-center px-6 pb-8">
                    <button
                        onClick={handleSpinClick}
                        disabled={isSpinning}
                        className={`
                    group relative w-full max-w-[340px] h-16 md:h-20 rounded-full 
                    font-['Cinzel'] font-black text-2xl md:text-3xl uppercase tracking-widest 
                    transition-all duration-150 transform z-20
                    ${isSpinning
                                ? 'bg-gray-800 text-gray-500 cursor-not-allowed border-4 border-gray-700 shadow-none translate-y-1'
                                : 'text-[#3d2b00] hover:-translate-y-1 active:translate-y-[2px]'}
                `}
                        style={!isSpinning ? {
                            background: 'linear-gradient(180deg, #FFD700 0%, #FDB931 50%, #DAA520 100%)',
                            boxShadow: '0 6px 0 #8B6914, 0 15px 30px rgba(0,0,0,0.5), inset 0 2px 0 rgba(255,255,255,0.5)',
                            border: '2px solid #FFFACD'
                        } : {}}
                    >
                        {/* Text & Content */}
                        <span className="relative z-10 flex items-center justify-center gap-2 drop-shadow-sm">
                            {isSpinning ? 'Spinning...' : 'SPIN NOW'}
                        </span>

                        {/* Shine Effect */}
                        {!isSpinning && (
                            <div className="absolute inset-0 rounded-full overflow-hidden pointer-events-none">
                                <div className="absolute top-0 left-0 w-full h-[40%] bg-gradient-to-b from-white/40 to-transparent"></div>
                                <div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-t from-[#B8860B]/20 to-transparent"></div>
                            </div>
                        )}
                    </button>

                    <div className="mt-4 text-blue-200/40 font-['Inter'] text-[10px] md:text-xs font-medium uppercase tracking-[0.2em] text-center">
                        No Purchase Necessary
                    </div>
                </div>

                {/* Footer Section - Scrollable if needed */}
                <div className="w-full bg-[#020617]/50 backdrop-blur-sm border-t border-white/5 pb-safe">
                    <Footer />
                </div>

            </main>

            {/* Result Popup */}
            <ResultModal
                isOpen={modalOpen}
                prize={wonPrize}
                onClose={() => setModalOpen(false)}
                isFreeSpinRound={spinCount === 1} // Passed true if we just finished the first spin
            />

            <style>{`
        .pb-safe {
            padding-bottom: env(safe-area-inset-bottom, 2rem);
        }
      `}</style>
        </div>
    );
};

export default Home;
