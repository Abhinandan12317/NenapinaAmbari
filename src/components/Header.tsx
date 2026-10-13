import React from 'react';
import { Scroll, Film, Share2 } from 'lucide-react';

interface HeaderProps {
  isFullView: boolean;
  onToggleView: () => void;
  onOpenShareModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  isFullView,
  onToggleView,
  onOpenShareModal,
}) => {
  return (
    <header className="relative z-30 w-full px-4 sm:px-6 pt-3 pb-2.5 flex items-center justify-between border-b border-[#D4AF37]/25 backdrop-blur-md bg-[#070B19]/85 shadow-lg shadow-black/40">
      <div className="flex items-center space-x-3">
        {/* Mysore Royal Emblem / Diya Icon */}
        <div className="relative w-8 h-8 rounded-full border border-[#E7C85C]/50 bg-[#0E172E] flex items-center justify-center shadow-[0_0_12px_rgba(212,175,55,0.35)] shrink-0">
          <span aria-hidden="true" className="text-sm select-none">🪔</span>
        </div>
        <div>
          <div className="flex items-center gap-1.5 flex-wrap">
            <span className="font-cinzel text-xs sm:text-sm tracking-[0.22em] text-[#E7C85C] font-bold uppercase drop-shadow-sm">
              Nenapina Ambari
            </span>
            <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D4AF37]/20 text-[#F5DE88] font-mono border border-[#D4AF37]/35 tracking-wider font-semibold">
              MYSURU
            </span>
          </div>
          <span className="text-[10px] sm:text-[11px] text-[#FAF8F5]/70 font-light tracking-wide block">
            A Royal Day with Bhavya Ma&apos;am &amp; Gang
          </span>
        </div>
      </div>

      <div className="flex items-center space-x-2">
        {/* Share / Card action */}
        <button
          onClick={onOpenShareModal}
          aria-label="Royal Invitation Card"
          className="w-8 h-8 rounded-full border border-[#D4AF37]/30 bg-[#0E172E]/70 text-[#FAF8F5]/80 hover:text-[#E7C85C] hover:border-[#D4AF37]/60 flex items-center justify-center transition-all shadow-sm"
          title="Royal Invitation Seal"
        >
          <Share2 className="w-3.5 h-3.5" />
        </button>

        {/* Mode Switch: Film vs Full Scroll View */}
        <button
          onClick={onToggleView}
          className="text-xs px-3 sm:px-3.5 py-1.5 rounded-full border border-[#D4AF37]/50 text-[#F5DE88] bg-[#D4AF37]/15 hover:bg-[#D4AF37]/25 active:scale-95 transition-all flex items-center gap-1.5 font-medium tracking-wide shadow-sm"
          title={isFullView ? "Switch to Auto-Play Cinematic Film" : "Switch to Full Scrollable Itinerary"}
        >
          {isFullView ? (
            <>
              <Film className="w-3.5 h-3.5 text-[#E7C85C]" />
              <span className="font-cinzel text-[11px] font-semibold">Film Mode</span>
            </>
          ) : (
            <>
              <Scroll className="w-3.5 h-3.5 text-[#E7C85C]" />
              <span className="font-cinzel text-[11px] font-semibold">Full View</span>
            </>
          )}
        </button>
      </div>
    </header>
  );
};
