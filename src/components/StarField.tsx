import React, { useMemo } from 'react';

export const StarField: React.FC = () => {
  // Generate a fixed set of stars to avoid re-renders
  const stars = useMemo(() => {
    return Array.from({ length: 45 }).map((_, i) => ({
      id: i,
      x: (i * 23.7) % 100,
      y: (i * 17.3 + (i % 3) * 7) % 96,
      size: (i % 3 === 0 ? 2.5 : i % 2 === 0 ? 1.8 : 1.2),
      opacity: 0.25 + ((i % 5) * 0.15),
      pulseDelay: `${(i % 7) * 0.7}s`,
    }));
  }, []);

  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Radial Mysore night sky aura */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_70%_at_50%_-15%,rgba(55,40,110,0.55),rgba(14,23,46,0.92)_55%,rgba(4,7,17,0.99))]" />
      
      {/* Dasara Palace golden warm horizon glow */}
      <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-[#D4AF37]/15 via-[#F39C12]/8 to-transparent pointer-events-none" />

      {/* Stars */}
      <div className="absolute inset-0 opacity-70">
        {stars.map((s) => (
          <div
            key={s.id}
            className="absolute rounded-full bg-[#FAF8F5] transition-opacity"
            style={{
              left: `${s.x}%`,
              top: `${s.y}%`,
              width: `${s.size}px`,
              height: `${s.size}px`,
              opacity: s.opacity,
              boxShadow: s.size > 2 ? '0 0 4px rgba(255, 245, 192, 0.8)' : undefined,
              animation: `haloBreathe ${3 + (s.id % 4)}s ease-in-out infinite ${s.pulseDelay}`,
            }}
          />
        ))}
      </div>
    </div>
  );
};
