import React from 'react';
import { Play, Pause, ChevronLeft, ChevronRight, RotateCcw } from 'lucide-react';
import { SCENES_META } from '../data';

interface CinemaControlsProps {
  currentScene: number;
  totalScenes: number;
  isPlaying: boolean;
  onGoToScene: (index: number) => void;
  onTogglePlay: () => void;
  onNext: () => void;
  onPrev: () => void;
  onReplay: () => void;
  onSwitchToFull: () => void;
}

export const CinemaControls: React.FC<CinemaControlsProps> = ({
  currentScene,
  totalScenes,
  isPlaying,
  onGoToScene,
  onTogglePlay,
  onNext,
  onPrev,
  onReplay,
  onSwitchToFull,
}) => {
  return (
    <footer className="relative z-30 w-full px-4 py-2.5 bg-[#070B19]/95 backdrop-blur-md border-t border-[#D4AF37]/25 max-w-lg mx-auto shadow-2xl rounded-t-xl sm:rounded-xl mb-0 sm:mb-2 border-x sm:border-x-[#D4AF37]/25">
      {/* Progress Bar & Scene Dots */}
      <div className="flex items-center justify-between mb-2 px-1">
        <div className="flex items-center space-x-1.5 overflow-x-auto py-1 scrollbar-none" id="scene-dots">
          {SCENES_META.map((scene, idx) => {
            const isActive = idx === currentScene;
            return (
              <button
                key={scene.index}
                onClick={() => onGoToScene(idx)}
                aria-label={`Scene ${idx + 1}: ${scene.title}`}
                title={`Scene ${idx + 1}: ${scene.title} — ${scene.subtitle}`}
                className={`transition-all rounded-full ${
                  isActive
                    ? 'w-3 h-3 bg-[#E7C85C] shadow-[0_0_10px_#D4AF37] scale-110'
                    : 'w-2 h-2 bg-[#D4AF37]/35 hover:bg-[#D4AF37]/70 hover:scale-110'
                }`}
              />
            );
          })}
        </div>
        <span className="text-[10px] sm:text-[11px] text-[#F5DE88] font-mono tracking-wider uppercase ml-2 shrink-0">
          Scene {currentScene + 1} / {totalScenes}
        </span>
      </div>

      {/* Action Buttons Row */}
      <div className="flex items-center justify-between gap-2">
        {/* Prev & Next Jump Buttons */}
        <div className="flex items-center space-x-2">
          <button
            onClick={onPrev}
            aria-label="Previous scene"
            className="w-8 h-8 rounded-full border border-[#D4AF37]/40 bg-[#0E172E]/90 text-[#F5DE88] flex items-center justify-center text-xs hover:bg-[#D4AF37]/20 active:scale-95 transition-all shadow"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <button
            onClick={onTogglePlay}
            aria-label={isPlaying ? "Pause invitation film" : "Play invitation film"}
            className="px-3.5 py-1.5 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E7C85C] to-[#B89225] text-[#070B19] flex items-center gap-1.5 text-xs font-bold shadow-md hover:brightness-110 active:scale-95 transition-all"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 fill-current" />
                <span>Pause</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Play</span>
              </>
            )}
          </button>

          <button
            onClick={onNext}
            aria-label="Next scene"
            className="w-8 h-8 rounded-full border border-[#D4AF37]/40 bg-[#0E172E]/90 text-[#F5DE88] flex items-center justify-center text-xs hover:bg-[#D4AF37]/20 active:scale-95 transition-all shadow"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* Replay & Full View Switch */}
        <div className="flex items-center space-x-2 sm:space-x-3">
          <button
            onClick={onReplay}
            className="text-[11px] text-[#FAF8F5]/80 hover:text-[#F5DE88] px-1.5 py-1 transition-colors flex items-center gap-1"
            title="Replay from Scene 1"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Replay</span>
          </button>

          <button
            onClick={onSwitchToFull}
            className="text-[11px] text-[#E7C85C] underline font-medium hover:text-[#FDF0BA] transition-colors"
          >
            Full view
          </button>
        </div>
      </div>

      {/* Credits line */}
      <div className="mt-2 pt-1.5 border-t border-[#D4AF37]/15 text-center text-[9px] text-[#FAF8F5]/50 tracking-wider">
        Nenapina Ambari • Mysuru Royal Heritage Edition • Planned with love
      </div>
    </footer>
  );
};
