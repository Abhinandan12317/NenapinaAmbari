import React, { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';
import { ROADMAP_DATA, SQUAD_DATA, PACKING_ITEMS } from '../data';

interface CinemaViewProps {
  currentScene: number;
  onGoToScene: (index: number) => void;
  onReplay: () => void;
  isPlaying: boolean;
}

export const CinemaView: React.FC<CinemaViewProps> = ({
  currentScene,
  onGoToScene,
  onReplay,
  isPlaying,
}) => {
  // Roadmap sub-timeline state (Scene 5 / index 5)
  const [activeRoadmapStop, setActiveRoadmapStop] = useState<number>(0);

  // Packing checked state
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  // Cycle roadmap stops when on scene 5
  useEffect(() => {
    if (currentScene !== 5) {
      setActiveRoadmapStop(0);
      return;
    }

    if (!isPlaying) return;

    const interval = setInterval(() => {
      setActiveRoadmapStop((prev) => (prev + 1) % ROADMAP_DATA.length);
    }, 2200);

    return () => clearInterval(interval);
  }, [currentScene, isPlaying]);

  // Trigger celebration confetti on grand finale (scene 8)
  useEffect(() => {
    if (currentScene === 8) {
      confetti({
        particleCount: 60,
        spread: 70,
        origin: { y: 0.65 },
        colors: ['#D4AF37', '#F5DE88', '#E67E22', '#FDF0BA'],
      });
    }
  }, [currentScene]);

  const togglePackingItem = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const fireGrandCelebration = () => {
    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ['#D4AF37', '#F5DE88', '#E67E22', '#FFFFFF', '#FFB347'],
    });
  };

  return (
    <main
      id="cinema-container"
      className="relative z-20 flex-1 flex flex-col justify-center items-center px-4 py-2 min-h-[calc(100vh-145px)] max-w-lg mx-auto w-full transition-opacity duration-500"
    >
      {/* SCENE 0: OVERTURE */}
      {currentScene === 0 && (
        <section className="w-full flex flex-col items-center justify-center text-center py-4 animate-fadeIn">
          {/* Royal Crest Tag */}
          <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 bg-[#0E172E]/70 backdrop-blur-sm shadow-[0_0_15px_rgba(212,175,55,0.18)]">
            <span className="text-[10px]">👑</span>
            <span className="text-[10px] tracking-[0.25em] text-[#F5DE88] uppercase font-semibold">
              The Heritage Invitation
            </span>
            <span className="text-[10px]">👑</span>
          </div>

          {/* Glowing Diya & Mysore Palace Aura */}
          <div className="my-1.5 relative w-36 h-28 flex items-center justify-center">
            <div className="absolute inset-0 bg-[#F39C12]/20 rounded-full filter blur-xl animate-halo" />
            <svg
              aria-label="Diya flame lighting the darkness"
              className="w-28 h-28 filter drop-shadow-[0_0_20px_rgba(243,156,18,0.85)] relative z-10"
              viewBox="0 0 120 120"
            >
              {/* Flame glow pulse */}
              <circle
                className="animate-pulse"
                cx="60"
                cy="50"
                fill="url(#flameGlow)"
                opacity="0.8"
                r="32"
              />
              {/* Diya Base - Ornate Brass Style */}
              <path
                d="M30 68 C30 87, 90 87, 90 68 C80 77, 40 77, 30 68 Z"
                fill="#D4AF37"
                stroke="#947217"
                strokeWidth="1.8"
              />
              <path
                d="M22 66 Q60 84 98 66 Q60 73 22 66 Z"
                fill="#E5C158"
              />
              <circle cx="60" cy="74" fill="#FAF8F5" opacity="0.85" r="2" />
              {/* Wick Flame with flicker animation */}
              <path
                d="M60 30 C66 43, 71 54, 60 62 C49 54, 54 43, 60 30 Z"
                fill="#F39C12"
              >
                <animate
                  attributeName="d"
                  dur="1.8s"
                  repeatCount="indefinite"
                  values="M60 30 C66 43, 71 54, 60 62 C49 54, 54 43, 60 30 Z; M60 26 C70 41, 68 54, 60 62 C52 54, 50 41, 60 26 Z; M60 30 C66 43, 71 54, 60 62 C49 54, 54 43, 60 30 Z"
                />
              </path>
              <path
                d="M60 38 C63 47, 65 53, 60 59 C55 53, 57 47, 60 38 Z"
                fill="#FFF2B2"
              />
              <defs>
                <radialGradient cx="50%" cy="50%" id="flameGlow" r="50%">
                  <stop offset="0%" stopColor="#FFD700" stopOpacity="0.9" />
                  <stop offset="60%" stopColor="#FF7A00" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#FF4500" stopOpacity="0" />
                </radialGradient>
              </defs>
            </svg>
          </div>

          {/* Mysore Palace Silhouette with stroke-draw + golden bulbs */}
          <div className="w-full max-w-sm my-1 px-1">
            <svg
              aria-label="Mysore Palace Silhouette Outline"
              className="w-full h-auto text-[#D4AF37] filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.35)]"
              viewBox="0 0 280 85"
            >
              {/* Arches and Palace Turrets */}
              <path
                d="M8 75 L30 75 L30 52 Q40 38 50 52 L50 75 L70 75 L70 42 Q82 26 95 42 L95 75 L115 75 L115 28 Q125 6 140 6 Q155 6 165 28 L165 75 L185 75 L185 42 Q198 26 210 42 L210 75 L230 75 L230 52 Q240 38 250 52 L250 75 L272 75"
                fill="none"
                stroke="#D4AF37"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.2"
                style={{
                  strokeDasharray: 700,
                  strokeDashoffset: 0,
                  animation: 'dashDraw 3s ease forwards',
                }}
              />
              {/* Center Main Durbar Dome & Kalasha */}
              <path
                d="M122 28 Q140 10 158 28 Z"
                fill="rgba(212,175,55,0.25)"
                stroke="#E7C85C"
                strokeWidth="1.5"
              />
              <path d="M138 6 L142 6 L140 0 Z" fill="#FAF8F5" />
              {/* Illumination Glowing Bulbs */}
              <g className="palace-bulbs">
                <circle cx="18" cy="73" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.1s' }} />
                <circle cx="40" cy="48" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.3s' }} />
                <circle cx="60" cy="73" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.5s' }} />
                <circle cx="82" cy="36" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.2s' }} />
                <circle cx="105" cy="73" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.7s' }} />
                <circle cx="140" cy="8" fill="#FFF2B2" r="2.8" style={{ animation: 'bulbFlicker 1.4s infinite 0.1s' }} />
                <circle cx="175" cy="73" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.4s' }} />
                <circle cx="198" cy="36" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.6s' }} />
                <circle cx="220" cy="73" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.2s' }} />
                <circle cx="240" cy="48" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.8s' }} />
                <circle cx="262" cy="73" fill="#FFE28A" r="2.2" style={{ animation: 'bulbFlicker 1.8s infinite 0.3s' }} />
              </g>
            </svg>
          </div>

          <div className="flex items-center gap-2 justify-center mt-1">
            <span className="h-px w-6 bg-gradient-to-r from-transparent to-[#E7C85C]" />
            <p className="font-serif italic text-[#FDF0BA] text-sm tracking-wide">
              A Majestic Day in Mysuru
            </p>
            <span className="h-px w-6 bg-gradient-to-l from-transparent to-[#E7C85C]" />
          </div>

          <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold tracking-wider shimmer-gold mt-1 uppercase drop-shadow-lg">
            Nenapina Ambari
          </h1>

          <p className="text-xs text-[#FAF8F5]/80 mt-2 font-light max-w-xs mx-auto leading-relaxed italic">
            &ldquo;A golden procession of memories with our favourite faculty&rdquo;
          </p>

          <div className="mt-4 flex items-center justify-center gap-1.5 text-[11px] text-[#E7C85C]/80">
            <span>✦</span>
            <span className="tracking-widest uppercase font-mono text-[9px]">
              Mysuru Heritage Outing
            </span>
            <span>✦</span>
          </div>
        </section>
      )}

      {/* SCENE 1: HERO TEXT & INVITATION */}
      {currentScene === 1 && (
        <section className="w-full flex flex-col items-center justify-center text-center py-4 animate-fadeIn">
          <div className="w-16 h-0.5 bg-gradient-to-r from-transparent via-[#E7C85C] to-transparent mx-auto mb-3" />
          <div className="flex items-center gap-1.5 justify-center mb-1">
            <span className="text-[#E7C85C] text-xs">⚜</span>
            <span className="text-xs uppercase tracking-[0.24em] text-[#E7C85C] font-bold font-cinzel">
              Royal Decree
            </span>
            <span className="text-[#E7C85C] text-xs">⚜</span>
          </div>

          <h2 className="font-cinzel text-3xl font-extrabold text-[#FAF8F5] leading-tight mb-3">
            A Day in Mysuru
          </h2>

          {/* Filigree Ornate Card */}
          <div className="filigree-box royal-border px-5 py-4 rounded-xl bg-gradient-to-b from-[#0E172E]/90 to-[#070B19]/90 backdrop-blur-md max-w-sm mx-auto shadow-2xl">
            <div className="flex justify-center mb-2">
              <span className="text-xs px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/35 text-[#F5DE88] font-cinzel tracking-wider">
                HONOURING OUR MENTOR
              </span>
            </div>
            <p className="font-serif italic text-[#FDF0BA] text-base mb-2 font-medium">
              &ldquo;Good food. Friendly matches. Unforgettable memories.&rdquo;
            </p>
            <div className="h-px w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/40 to-transparent mx-auto my-3" />
            <p className="text-xs text-[#FAF8F5]/85 leading-relaxed font-light mb-4">
              A golden royal getaway, planned with heartfelt thought, for our favourite faculty member and the gang.
            </p>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-gradient-to-r from-[#B89225]/20 via-[#D4AF37]/15 to-[#B89225]/20 border border-[#D4AF37]/45 shadow-inner">
              <span className="text-[#E7C85C] text-sm">👑</span>
              <span className="text-xs font-semibold tracking-wide text-[#FDF0BA]">
                Featuring Bhavya Ma&apos;am &amp; The Gang
              </span>
            </div>
          </div>
        </section>
      )}

      {/* SCENE 2: DASARA PROCESSION */}
      {currentScene === 2 && (
        <section className="w-full flex flex-col items-center justify-center text-center py-4 animate-fadeIn">
          <div className="inline-flex items-center gap-2 mb-2 px-4 py-1 rounded-full bg-gradient-to-r from-[#D4AF37]/20 to-[#B89225]/20 border border-[#D4AF37]/50 shadow-md">
            <span className="text-[#E7C85C]">✨</span>
            <h3 className="font-serif text-lg text-[#FDF0BA] font-semibold italic">
              Dear Bhavya Ma&apos;am,
            </h3>
            <span className="text-[#E7C85C]">✨</span>
          </div>

          {/* Parallax Animated Procession Stage */}
          <div className="filigree-box relative w-full h-44 rounded-2xl overflow-hidden border border-[#D4AF37]/35 bg-gradient-to-b from-[#1B142F]/60 via-[#0E172E] to-[#03060E] shadow-2xl flex items-end justify-center p-3">
            {/* Background Chamundi Hills & Palace Glow */}
            <div className="absolute inset-x-0 bottom-8 h-28 opacity-50 pointer-events-none">
              <svg className="w-full h-full text-[#B89225]/35 fill-current" viewBox="0 0 320 100">
                <path d="M0 90 Q80 20 180 70 T320 90 L320 100 L0 100 Z" />
                <path d="M85 30 L95 8 L105 30 L100 50 L90 50 Z" fill="#D4AF37" opacity="0.9" />
              </svg>
            </div>

            {/* The Royal Ambari Elephant SVG with Golden Ornaments */}
            <div className="relative z-10 animate-float mb-1">
              <svg
                aria-label="Decorated Dasara Elephant carrying Golden Ambari"
                className="w-44 h-auto filter drop-shadow-[0_4px_12px_rgba(212,175,55,0.4)]"
                viewBox="0 0 160 110"
              >
                {/* Golden Ambari (Howdah) on Elephant Back */}
                <path
                  d="M66 26 L94 26 L100 42 L60 42 Z"
                  fill="#D4AF37"
                  stroke="#73570F"
                  strokeWidth="1.2"
                />
                {/* Ambari Canopy / Kalasha */}
                <path d="M72 26 Q80 8 88 26 Z" fill="#F39C12" />
                <circle className="animate-pulse" cx="80" cy="8" fill="#FFF2B2" r="3" />
                <path d="M68 32 H92 M71 37 H89" stroke="#FAF8F5" strokeWidth="1" />
                {/* Elephant Body */}
                <path
                  d="M48 60 C42 50 55 45 70 45 C95 45 110 50 115 65 C120 78 116 95 114 98 L105 98 L108 78 L95 78 L92 98 L82 98 L85 75 L68 75 L65 98 L56 98 L60 68 C52 68 45 78 38 90 C34 96 28 92 32 82 C36 72 42 65 48 60 Z"
                  fill="#313E56"
                  stroke="#1D2636"
                  strokeWidth="1.3"
                />
                {/* Elephant Ear */}
                <path
                  d="M68 50 C55 50 54 68 66 70 C72 70 74 58 68 50 Z"
                  fill="#42506E"
                />
                {/* Tusks */}
                <path d="M42 75 Q30 78 26 83 Q34 86 44 80 Z" fill="#FAF8F5" />
                {/* Royal Headpiece (Nettipattam) */}
                <path d="M50 50 Q56 62 62 50 Z" fill="#D4AF37" />
                <path
                  d="M68 52 C72 66 105 66 110 52 C108 72 72 72 68 52 Z"
                  fill="#D4AF37"
                  opacity="0.9"
                />
                {/* Decorative Marigold Bells */}
                <circle cx="74" cy="62" fill="#E67E22" r="2.2" />
                <circle cx="84" cy="64" fill="#E67E22" r="2.2" />
                <circle cx="94" cy="63" fill="#E67E22" r="2.2" />
                <circle cx="104" cy="61" fill="#E67E22" r="2.2" />
              </svg>
            </div>

            {/* Bottom Stage Gold Regal Pathway */}
            <div className="absolute inset-x-0 bottom-0 h-3 bg-gradient-to-r from-[#B89225]/30 via-[#E7C85C]/60 to-[#B89225]/30 border-t border-[#E7C85C]/60 shadow-[0_-2px_10px_rgba(212,175,55,0.4)]" />
          </div>

          <p className="text-xs text-[#F5DE88] font-serif italic mt-3">
            Step into a royal journey specially created for you...
          </p>
        </section>
      )}

      {/* SCENE 3: PERSONAL NOTE */}
      {currentScene === 3 && (
        <section className="w-full flex flex-col items-center justify-center text-center py-3 animate-fadeIn">
          {/* Ivory Royal Parchment Letter Card */}
          <div className="filigree-box relative w-full max-w-sm bg-gradient-to-b from-[#FDFBF7] via-[#FAF6EF] to-[#F2E8DC] text-[#070B19] rounded-2xl p-5 shadow-2xl border-2 border-[#D4AF37]/65 text-left">
            {/* Letter Header Wax Seal & Arch */}
            <div className="flex items-center justify-between border-b border-[#B89225]/35 pb-2.5 mb-2.5">
              <div className="flex items-center gap-1.5">
                <span className="text-[#947217] text-xs">⚜</span>
                <span className="font-cinzel text-xs font-bold text-[#73570F] tracking-wider">
                  A NOTE FROM THE GANG
                </span>
              </div>
              {/* Wax Seal Badge */}
              <div className="wax-seal w-7 h-7 rounded-full text-[#FDF0BA] flex items-center justify-center text-xs shadow-md border border-[#E7C85C]/40">
                👑
              </div>
            </div>

            {/* Letter Body Text */}
            <p className="text-xs sm:text-[13px] leading-relaxed font-sans text-neutral-800 font-normal">
              &ldquo;Some of the best college memories happen outside the classroom. So, we thought of taking a little break from assignments, deadlines and lectures to spend a day exploring Mysuru, enjoying good food, playing a few games and making memories together.&rdquo;
            </p>

            <div className="my-2.5 p-2.5 rounded-lg bg-[#D4AF37]/15 border-l-3 border-[#B89225]">
              <p className="text-xs font-semibold text-neutral-900 font-serif italic leading-snug">
                No presentations. No submissions. Just a day of fun, laughter and good company!
              </p>
            </div>

            <div className="text-right pt-1.5 text-[11px] font-serif italic text-neutral-600 border-t border-[#B89225]/20 flex justify-between items-center">
              <span className="text-[9px] uppercase tracking-wider text-[#947217] font-mono">
                With gratitude
              </span>
              <span>— The 5 Friends (Your Students)</span>
            </div>
          </div>
        </section>
      )}

      {/* SCENE 4: DAY AT A GLANCE */}
      {currentScene === 4 && (
        <section className="w-full flex flex-col items-center justify-center text-center py-3 animate-fadeIn">
          <div className="flex items-center gap-1.5 justify-center mb-1">
            <span className="text-[#E7C85C] text-xs">✦</span>
            <span className="text-xs font-cinzel text-[#E7C85C] tracking-[0.2em] uppercase font-bold">
              Schedule Summary
            </span>
            <span className="text-[#E7C85C] text-xs">✦</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] mb-3">
            Day at a Glance
          </h3>

          {/* 6 Quick-Glance Cards */}
          <div className="grid grid-cols-3 gap-2 w-full max-w-sm">
            {ROADMAP_DATA.map((stop, idx) => (
              <div
                key={idx}
                onClick={() => {
                  onGoToScene(5);
                  setActiveRoadmapStop(idx);
                }}
                className="p-2 rounded-xl bg-[#0E172E]/80 border border-[#D4AF37]/35 flex flex-col items-center shadow-lg hover:border-[#E7C85C] hover:bg-[#0E172E] active:scale-95 transition-all cursor-pointer group"
              >
                <span className="text-xl mb-0.5 group-hover:scale-110 transition-transform">
                  {stop.icon}
                </span>
                <span className="text-[9px] text-[#E7C85C] font-bold tracking-wide">
                  {stop.time.split('-')[0].trim()}
                </span>
                <span className="text-[11px] font-medium text-[#FAF8F5] mt-0.5 truncate max-w-[80px]">
                  {stop.title.split(' ')[0]}
                </span>
              </div>
            ))}
          </div>

          <p className="text-[11px] text-[#FAF8F5]/70 mt-3.5 italic font-serif">
            Six wonderful chapters carefully crafted from dawn to dusk.
          </p>
        </section>
      )}

      {/* SCENE 5: THE ROADMAP (Interactive / Auto-advancing Stops) */}
      {currentScene === 5 && (
        <section className="w-full flex flex-col items-center justify-center text-center py-2 animate-fadeIn">
          <div className="flex items-center justify-between w-full max-w-sm mb-2 px-1">
            <span className="text-xs font-cinzel text-[#E7C85C] tracking-wider uppercase font-bold flex items-center gap-1">
              <span>⚜</span> The Itinerary Roadmap
            </span>
            <span className="text-[10px] bg-[#D4AF37]/20 text-[#F5DE88] px-2 py-0.5 rounded-full border border-[#D4AF37]/45 font-mono font-medium">
              Stop {activeRoadmapStop + 1} of {ROADMAP_DATA.length}
            </span>
          </div>

          {/* Dynamic Roadmap Card */}
          {(() => {
            const stop = ROADMAP_DATA[activeRoadmapStop];
            return (
              <div className="filigree-box w-full max-w-sm bg-gradient-to-b from-[#0E172E] via-[#070B19] to-[#03060E] rounded-2xl p-4 border border-[#D4AF37]/40 shadow-2xl relative min-h-[265px] flex flex-col justify-between text-left">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-[#D4AF37]/20 text-[#F5DE88] border border-[#D4AF37]/40">
                      {stop.time}
                    </span>
                    <div className="text-2xl filter drop-shadow">{stop.icon}</div>
                  </div>

                  <h4 className="font-serif text-xl font-bold text-[#FAF8F5] mb-1">
                    {stop.title}
                  </h4>
                  <p className="text-[10px] text-[#E7C85C] font-mono mb-1.5 flex items-center gap-1">
                    <span>📍</span> {stop.location}
                  </p>
                  <p className="text-xs text-[#FAF8F5]/85 leading-relaxed font-light mb-2">
                    {stop.desc}
                  </p>
                </div>

                {/* Mini SVG Scene Illustration */}
                <div className="h-16 w-full rounded-xl bg-[#070B19]/80 border border-[#D4AF37]/25 flex items-center justify-center p-2 mb-2">
                  {activeRoadmapStop === 0 && (
                    <svg viewBox="0 0 160 55" className="w-36 h-auto text-[#D4AF37]">
                      <path d="M70 48 L80 12 L90 48 Z" fill="#D4AF37" />
                      <circle cx="80" cy="9" r="3" fill="#FFF" />
                      <path d="M10 50 Q50 28 150 50" stroke="#B89225" strokeWidth="1.5" fill="none" />
                    </svg>
                  )}
                  {activeRoadmapStop === 1 && (
                    <svg viewBox="0 0 160 55" className="w-32 h-auto text-[#D4AF37]">
                      <ellipse cx="80" cy="38" rx="45" ry="12" fill="#FAF8F5" stroke="#D4AF37" />
                      <circle cx="70" cy="36" r="8" fill="#F39C12" />
                      <circle cx="95" cy="36" r="7" fill="#D4AF37" />
                      <path d="M78 24 Q80 14 82 20" stroke="#FAF8F5" strokeWidth="1.5" fill="none" opacity="0.6" />
                    </svg>
                  )}
                  {activeRoadmapStop === 2 && (
                    <svg viewBox="0 0 160 55" className="w-32 h-auto text-[#D4AF37]">
                      <ellipse cx="50" cy="26" rx="14" ry="18" fill="none" stroke="#D4AF37" strokeWidth="1.5" />
                      <line x1="50" y1="44" x2="50" y2="52" stroke="#D4AF37" strokeWidth="2" />
                      <circle cx="100" cy="22" r="4" fill="#FAF8F5" />
                      <path d="M100 22 L112 30 M100 22 L115 25" stroke="#FAF8F5" strokeWidth="1" />
                    </svg>
                  )}
                  {activeRoadmapStop === 3 && (
                    <svg viewBox="0 0 160 55" className="w-36 h-auto">
                      <path d="M30 36 Q80 16 130 36 Q80 50 30 36 Z" fill="#2E7D32" stroke="#1B5E20" />
                      <circle cx="65" cy="34" r="6" fill="#FAF8F5" />
                      <circle cx="85" cy="34" r="5" fill="#E67E22" />
                      <circle cx="102" cy="34" r="4" fill="#F39C12" />
                    </svg>
                  )}
                  {activeRoadmapStop === 4 && (
                    <svg viewBox="0 0 160 55" className="w-32 h-auto">
                      <rect x="55" y="10" width="22" height="34" rx="3" fill="#D32F2F" stroke="#FFF" transform="rotate(-10 66 27)" />
                      <rect x="80" y="10" width="22" height="34" rx="3" fill="#1976D2" stroke="#FFF" transform="rotate(10 91 27)" />
                      <text x="85" y="32" fill="#FFF" fontSize="10" fontWeight="bold">+4</text>
                    </svg>
                  )}
                  {activeRoadmapStop === 5 && (
                    <svg viewBox="0 0 160 55" className="w-36 h-auto text-[#D4AF37]">
                      <path d="M20 48 L50 22 L80 12 L110 22 L140 48" fill="none" stroke="#D4AF37" strokeWidth="2" />
                      <circle cx="80" cy="12" r="4" fill="#FFF2B2" className="animate-pulse" />
                    </svg>
                  )}
                </div>

                {/* Footnote if Stop 6 */}
                {stop.footnote && (
                  <div className="text-[10px] text-[#F5DE88]/90 italic border-t border-[#D4AF37]/20 pt-1 mb-1">
                    Note: The evening plan depends on crowd conditions and the official illumination schedule.
                  </div>
                )}

                {/* Step navigation mini-pills */}
                <div className="flex items-center justify-center gap-2 pt-1.5 border-t border-[#D4AF37]/15">
                  {ROADMAP_DATA.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setActiveRoadmapStop(idx);
                      }}
                      aria-label={`Switch to Stop ${idx + 1}`}
                      className={`transition-all rounded-full ${
                        idx === activeRoadmapStop
                          ? 'w-3 h-3 bg-[#E7C85C] shadow-[0_0_8px_#D4AF37]'
                          : 'w-2 h-2 bg-[#E7C85C]/35 hover:bg-[#E7C85C]/70'
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          })()}
        </section>
      )}

      {/* SCENE 6: THE SQUAD */}
      {currentScene === 6 && (
        <section className="w-full flex flex-col items-center justify-center text-center py-2.5 animate-fadeIn">
          <div className="flex items-center gap-1.5 justify-center mb-0.5">
            <span className="text-[#E7C85C] text-xs">👑</span>
            <span className="text-xs font-cinzel text-[#E7C85C] tracking-[0.2em] uppercase font-bold">
              Royal Contingent
            </span>
            <span className="text-[#E7C85C] text-xs">👑</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] mb-2">
            The Squad
          </h3>

          <div className="space-y-2.5 w-full max-w-sm">
            {SQUAD_DATA.map((item) => (
              <div
                key={item.id}
                className="filigree-box p-3 rounded-xl bg-gradient-to-r from-[#0E172E] via-[#141d36] to-[#070B19] border border-[#D4AF37]/35 text-left shadow-lg hover:border-[#E7C85C]/60 transition-colors"
              >
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-2.5">
                    <div className="w-9 h-9 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/50 flex items-center justify-center text-base shrink-0 shadow-inner">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-xs font-cinzel font-bold text-[#F5DE88] uppercase tracking-wider">
                        {item.name}
                      </h4>
                      <p className="text-[11px] text-[#FAF8F5]/80 font-light">
                        {item.question}
                      </p>
                    </div>
                  </div>
                  <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#F5DE88] font-mono">
                    {item.badge}
                  </span>
                </div>

                {/* Roster Members */}
                <div className="mt-2 pt-2 border-t border-[#D4AF37]/15 flex items-center justify-between">
                  <div className="flex flex-wrap gap-1.5">
                    {item.members.map((member, mIdx) => (
                      <span
                        key={mIdx}
                        className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#FAF8F5] bg-[#070B19]/80 px-2 py-0.5 rounded-md border border-[#D4AF37]/30"
                      >
                        <span className="text-[9px] text-[#E7C85C]">{item.symbol}</span>
                        {member}
                      </span>
                    ))}
                  </div>
                  <span className="text-[9px] text-[#E7C85C]/80 font-serif italic hidden sm:inline">
                    {item.role.split('&')[0]}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* SCENE 7: PACK FOR THE DAY */}
      {currentScene === 7 && (
        <section className="w-full flex flex-col items-center justify-center text-center py-3 animate-fadeIn">
          <div className="flex items-center gap-1.5 justify-center mb-1">
            <span className="text-[#E7C85C] text-xs">✦</span>
            <span className="text-xs font-cinzel text-[#E7C85C] tracking-[0.2em] uppercase font-bold">
              Royal Preparations
            </span>
            <span className="text-[#E7C85C] text-xs">✦</span>
          </div>

          <h3 className="font-serif text-2xl font-bold text-[#FAF8F5] mb-2.5">
            Pack For The Day
          </h3>

          <div className="filigree-box w-full max-w-sm bg-gradient-to-b from-[#0E172E]/90 to-[#070B19]/90 rounded-2xl p-3.5 border border-[#D4AF37]/35 text-left space-y-2 shadow-xl">
            {PACKING_ITEMS.map((item) => {
              const isChecked = !!checkedItems[item.id];
              return (
                <div
                  key={item.id}
                  onClick={() => togglePackingItem(item.id)}
                  className={`flex items-center gap-2.5 p-2 rounded-lg border transition-all cursor-pointer ${
                    isChecked
                      ? 'bg-[#070B19]/70 border-[#D4AF37]/35 text-[#FAF8F5]'
                      : 'bg-[#070B19]/30 border-dashed border-[#D4AF37]/20 text-[#FAF8F5]/60 opacity-70'
                  }`}
                >
                  <span className="text-base">{item.icon}</span>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-medium block truncate">
                      {item.text}
                    </span>
                  </div>
                  <span
                    className={`text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center transition-all ${
                      isChecked
                        ? 'bg-[#D4AF37]/25 text-[#E7C85C] border border-[#D4AF37]/50 shadow-[0_0_6px_rgba(212,175,55,0.4)]'
                        : 'bg-transparent text-transparent border border-white/20'
                    }`}
                  >
                    ✓
                  </span>
                </div>
              );
            })}
          </div>
          <p className="text-[10px] text-[#FAF8F5]/60 mt-2 italic font-serif">
            Tap any item to check off your day-pack essentials!
          </p>
        </section>
      )}

      {/* SCENE 8: GRAND FINALE */}
      {currentScene === 8 && (
        <section className="w-full flex flex-col items-center justify-center text-center py-3 animate-fadeIn">
          {/* Golden Illuminated Palace Climax */}
          <div className="w-full max-w-sm mb-2 px-2 relative">
            <div className="absolute inset-0 bg-[#F39C12]/15 filter blur-xl rounded-full" />
            <svg
              aria-label="Illuminated Grand Palace Finale"
              className="w-full h-auto text-[#D4AF37] animate-glow relative z-10"
              viewBox="0 0 260 85"
            >
              <path
                d="M10 75 L30 75 L30 48 Q40 34 50 48 L50 75 L70 75 L70 38 Q82 22 95 38 L95 75 L115 75 L115 22 Q130 5 145 22 L145 75 L165 75 L165 38 Q178 22 190 38 L190 75 L210 75 L210 48 Q220 34 230 48 L230 75 L250 75"
                fill="rgba(212,175,55,0.25)"
                stroke="#FFE28A"
                strokeWidth="2"
              />
              <circle className="animate-pulse" cx="130" cy="10" fill="#FFF" r="3.5" />
            </svg>
          </div>

          <div className="flex items-center gap-1.5 justify-center mb-1">
            <span className="text-[#E7C85C] text-xs">👑</span>
            <span className="text-[10px] font-cinzel text-[#E7C85C] tracking-[0.25em] uppercase font-bold">
              The Grand Outing
            </span>
            <span className="text-[#E7C85C] text-xs">👑</span>
          </div>

          <h2 className="font-cinzel text-2xl sm:text-3xl font-extrabold text-[#FAF8F5] mt-0.5 mb-2 leading-tight">
            One Day. Six People.
            <br />
            <span className="shimmer-gold">A Hundred Memories.</span>
          </h2>

          <p className="text-xs text-[#FAF8F5]/80 max-w-xs mx-auto leading-relaxed font-light mb-3">
            &ldquo;Here&apos;s to good company, shared laughter and memories we&apos;ll carry long after the day ends.&rdquo;
          </p>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-2 w-full max-w-xs">
            <button
              onClick={() => onGoToScene(0)}
              className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E7C85C] to-[#B89225] text-[#070B19] font-bold text-xs tracking-wider uppercase shadow-lg shadow-[#D4AF37]/25 hover:brightness-110 active:scale-95 transition-all"
            >
              Back to Beginning ↑
            </button>
            <button
              onClick={onReplay}
              className="w-full py-2.5 px-4 rounded-xl bg-[#0E172E] border border-[#D4AF37]/50 text-[#F5DE88] font-semibold text-xs tracking-wider uppercase hover:bg-[#D4AF37]/15 active:scale-95 transition-all shadow-md"
            >
              Watch Again ↺
            </button>
          </div>

          <div className="flex items-center justify-center gap-3 mt-2">
            <button
              onClick={fireGrandCelebration}
              className="text-xs text-[#FDF0BA] hover:text-white flex items-center gap-1 font-mono tracking-wider underline cursor-pointer"
            >
              <span>🎊</span> Celebrate with Royal Confetti Shower
            </button>
          </div>

          <div className="mt-3 pt-2.5 border-t border-[#D4AF37]/25 w-full max-w-xs text-[11px] text-[#FAF8F5]/70 space-y-0.5">
            <p className="font-serif italic text-[#F5DE88] font-medium">
              Thoughtfully planned for Bhavya Ma&apos;am
            </p>
            <p className="font-medium text-[#FDF0BA]">
              With love from Lakshmi, Janya, Akshay , Dhanush and majorly Abhinandan!!!
            </p>
          </div>
        </section>
      )}
    </main>
  );
};
