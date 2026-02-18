import React from 'react';
import { Prize } from '../types';
import { OFFER_URL } from '../constants';
import { X } from 'lucide-react';

interface ResultModalProps {
  prize: Prize | null;
  isOpen: boolean;
  onClose: () => void;
  isFreeSpinRound?: boolean;
}

const ResultModal: React.FC<ResultModalProps> = ({ prize, isOpen, onClose, isFreeSpinRound = false }) => {
  if (!isOpen || !prize) return null;

  const handleAction = () => {
    if (isFreeSpinRound) {
      onClose();
    } else {
      // Redirect to offer
      window.location.href = OFFER_URL;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-[2px] transition-opacity duration-300"
        onClick={onClose}
      />

      {/* Modal Content - Increased max-width to prevents text clipping */}
      <div className="relative bg-gradient-to-br from-yellow-600 via-yellow-400 to-yellow-700 rounded-3xl p-[2px] shadow-2xl w-[90vw] max-w-[500px] transform transition-all animate-modal-enter">
        {/* Inner Container */}
        <div className="bg-[#0f172a] rounded-[22px] p-6 md:p-8 text-center relative overflow-hidden border-4 border-[#5c4d00] flex flex-col items-center justify-center">

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 text-white/30 hover:text-white transition-colors z-20"
          >
            <X size={24} />
          </button>

          {/* Background Rays inside modal */}
          <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
            <div className="w-[200%] h-[200%] bg-[conic-gradient(from_0deg_at_50%_50%,transparent_0deg,rgba(255,215,0,0.3)_30deg,transparent_60deg)] animate-[spin_10s_linear_infinite]"></div>
          </div>

          {/* Header - Adjusted font size to fit "CONGRATULATIONS" */}
          <h2 className="text-yellow-400 font-['Cinzel'] font-black text-xl md:text-3xl mb-2 uppercase drop-shadow-[0_2px_0_rgba(0,0,0,1)] tracking-widest relative z-10 text-center w-full break-normal">
            {isFreeSpinRound ? 'Free Spin unlocked' : 'CONGRATULATIONS'}
          </h2>

          <div className="my-6 relative z-10 w-full">
            {/* The Actual Spin Result */}
            <div className="text-3xl md:text-4xl font-['Cinzel'] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-yellow-100 to-yellow-500 drop-shadow-sm mb-6">
              {prize.label}
            </div>

            {/* Required Body Text */}
            <div className="bg-white/5 rounded-lg p-4 border border-white/10 w-full">
              {isFreeSpinRound ? (
                <div className="text-blue-100/90 font-['Inter'] text-sm md:text-base leading-relaxed font-medium">
                  Spin again to reveal your bonus.
                </div>
              ) : (
                <div className="text-blue-100/90 font-['Inter'] text-sm md:text-base leading-relaxed font-medium">
                  You have unlocked: <br />
                  <span className="text-yellow-300 font-bold">2,500 Reward Credits</span><br />
                  + <span className="text-yellow-300 font-bold">$10 Sign-Up Bonus</span><br />
                  + <span className="text-yellow-300 font-bold">100% Deposit Match</span>.
                </div>
              )}
            </div>
          </div>

          <button
            onClick={handleAction}
            className="w-full bg-gradient-to-b from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500 text-[#3d2b00] font-['Cinzel'] font-black text-lg md:text-xl py-4 rounded-xl shadow-lg transform transition-transform active:scale-95 uppercase tracking-wider border-b-4 border-yellow-800 relative z-20"
          >
            {isFreeSpinRound ? 'Spin Again' : 'Claim Reward'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResultModal;