import React, { useState } from 'react';
import { ROADMAP_DATA, SQUAD_DATA, PACKING_ITEMS } from '../data';
import { RoyalGroupPortrait } from './RoyalGroupPortrait';
import { CheckCircle2, Circle } from 'lucide-react';

interface FullViewProps {
  onSwitchToFilm: () => void;
  onGoToSceneInFilm: (sceneIndex: number) => void;
}

export const FullView: React.FC<FullViewProps> = ({
  onSwitchToFilm,
  onGoToSceneInFilm,
}) => {
  const [checkedItems, setCheckedItems] = useState<Record<number, boolean>>({
    1: true,
    2: true,
    3: true,
    4: true,
    5: true,
  });

  const toggleCheck = (id: number) => {
    setCheckedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  return (
    <div className="relative z-20 w-full max-w-2xl mx-auto px-4 py-8 space-y-10 animate-fadeIn">
      {/* Full View Hero */}
      <div className="text-center pt-2">
        <div className="inline-flex items-center gap-2 mb-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 bg-[#0E172E]/80 shadow-md">
          <span className="text-[#E7C85C] text-xs">⚜</span>
          <span className="text-[10px] font-cinzel text-[#F5DE88] tracking-[0.25em] uppercase font-bold">
            Complete Royal Itinerary
          </span>
          <span className="text-[#E7C85C] text-xs">⚜</span>
        </div>

        <h1 className="font-cinzel text-3xl sm:text-4xl font-extrabold shimmer-gold mt-1 uppercase">
          Nenapina Ambari
        </h1>
        <p className="font-serif italic text-[#FDF0BA] text-sm mt-1">
          A golden procession of memories with our favourite faculty
        </p>

        {/* Letter in Full View */}
        <div className="filigree-box my-6 p-5 sm:p-6 rounded-2xl bg-gradient-to-b from-[#FAF6EE] to-[#F1E7D7] text-[#070B19] border-2 border-[#D4AF37]/60 text-xs sm:text-[13px] text-neutral-800 leading-relaxed text-left shadow-2xl">
          <div className="flex justify-between items-center border-b border-[#B89225]/30 pb-2.5 mb-3">
            <span className="font-cinzel font-bold text-[#73570F] text-xs tracking-wider">
              A NOTE FROM THE GANG
            </span>
            <span className="wax-seal w-6 h-6 rounded-full flex items-center justify-center text-xs text-[#FAF8F5]">
              👑
            </span>
          </div>

          <p className="mb-2 font-serif italic text-neutral-900 font-semibold text-base">
            Dear Bhavya Ma&apos;am,
          </p>

          <p className="mb-2.5">
            Some of the best college memories happen outside the classroom. So, we thought of taking a little break from assignments, deadlines and lectures to spend a day exploring Mysuru, enjoying good food, playing a few games and making memories together.
          </p>

          <div className="p-3 rounded-lg bg-[#D4AF37]/15 border-l-3 border-[#B89225] my-2.5">
            <p className="font-semibold text-neutral-900 font-serif italic text-sm">
              &ldquo;No presentations. No submissions. Just a day of fun, laughter and good company!&rdquo;
            </p>
          </div>

          <p className="text-right text-[11px] text-neutral-600 italic mt-2 border-t border-[#B89225]/20 pt-1.5 flex justify-between items-center">
            <span className="text-[10px] uppercase tracking-wider text-[#947217] font-mono">
              With endless gratitude
            </span>
            <span>— With love from Lakshmi, Janya, Akshay , Dhanush and majorly Abhinandan!!!</span>
          </p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={() => {
              const el = document.getElementById('full-roadmap-section');
              el?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#D4AF37]/20 border border-[#D4AF37]/45 text-[#F5DE88] text-xs font-semibold hover:bg-[#D4AF37]/30 transition-all shadow"
          >
            Explore The Schedule ↓
          </button>

          <button
            onClick={onSwitchToFilm}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#070B19] text-xs font-bold hover:brightness-110 transition-all shadow-md"
          >
            ▶ Launch Film Mode
          </button>
        </div>
      </div>

      {/* Full View Roadmap Timeline Section */}
      <div className="space-y-4 pt-2" id="full-roadmap-section">
        <div className="text-center mb-4">
          <div className="flex items-center gap-2 justify-center">
            <span className="h-px w-8 bg-[#D4AF37]/40" />
            <span className="text-xs font-cinzel text-[#E7C85C] tracking-wider uppercase font-bold">
              The Schedule
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/40" />
          </div>
          <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] mt-1">
            Full Day Timeline
          </h2>
          <p className="text-xs text-[#FAF8F5]/70 italic font-serif">
            Click any chapter to jump directly to its film scene
          </p>
        </div>

        <div className="space-y-3.5">
          {ROADMAP_DATA.map((stop, idx) => (
            <div
              key={idx}
              className="filigree-box p-4 rounded-2xl bg-[#0E172E]/85 border border-[#D4AF37]/35 shadow-xl hover:border-[#E7C85C] transition-all group"
            >
              <div className="flex items-center justify-between text-xs text-[#E7C85C] font-semibold mb-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/30 font-mono">
                  {stop.time}
                </span>
                <span className="flex items-center gap-1">
                  <span>{stop.icon}</span>
                  <span className="text-[11px] text-[#FAF8F5]/70">Chapter {idx + 1}</span>
                </span>
              </div>

              <div className="flex items-start justify-between gap-3 mt-1.5">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FAF8F5] group-hover:text-[#FDF0BA] transition-colors">
                    {idx + 1}. {stop.title}
                  </h3>
                  <p className="text-[11px] text-[#E7C85C] font-mono mt-0.5">
                    📍 {stop.location}
                  </p>
                  <p className="text-xs sm:text-sm text-[#FAF8F5]/80 mt-1.5 leading-relaxed font-light">
                    {stop.desc}
                  </p>
                  {stop.footnote && (
                    <p className="text-[11px] text-[#F5DE88]/90 italic mt-2 border-t border-[#D4AF37]/20 pt-1.5">
                      Note: The evening plan depends on crowd conditions and the official illumination schedule.
                    </p>
                  )}
                </div>

                <button
                  onClick={() => {
                    onGoToSceneInFilm(idx === 0 ? 0 : 5);
                  }}
                  className="px-2.5 py-1 rounded bg-[#070B19] border border-[#D4AF37]/35 text-[10px] font-mono text-[#F5DE88] hover:border-[#E7C85C] shrink-0"
                >
                  Play Scene ↗
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Squad Roles in Full View */}
      <div className="space-y-4 pt-2">
        <div className="text-center">
          <div className="flex items-center gap-2 justify-center">
            <span className="h-px w-8 bg-[#D4AF37]/40" />
            <span className="text-xs font-cinzel text-[#E7C85C] tracking-wider uppercase font-bold">
              Royal Contingent
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/40" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#FAF8F5] mt-1">
            Squad Roles &amp; Rosters
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-xs">
          {SQUAD_DATA.map((squad) => (
            <div
              key={squad.id}
              className="filigree-box p-4 rounded-xl bg-[#0E172E]/75 border border-[#D4AF37]/35 space-y-2 shadow-lg flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="font-cinzel font-bold text-[#F5DE88]">
                    {squad.icon} {squad.name}
                  </span>
                  <span className="text-[9px] px-1.5 py-0.5 rounded bg-[#D4AF37]/15 border border-[#D4AF37]/30 text-[#E7C85C] font-mono">
                    {squad.badge}
                  </span>
                </div>
                <p className="text-[11px] text-[#E7C85C] font-serif italic mb-1.5">
                  {squad.role}
                </p>
                <p className="text-[#FAF8F5]/80 text-[11px]">
                  {squad.question}
                </p>
              </div>

              <div className="flex flex-wrap gap-1.5 pt-2 border-t border-[#D4AF37]/15">
                {squad.members.map((member, mIdx) => (
                  <span
                    key={mIdx}
                    className="bg-[#070B19] px-2 py-0.5 rounded border border-[#D4AF37]/30 text-[#FDF0BA] font-medium text-[11px]"
                  >
                    {squad.symbol} {member}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Packing Checklist in Full View */}
      <div className="space-y-4 pt-2">
        <div className="text-center">
          <div className="flex items-center gap-2 justify-center">
            <span className="h-px w-8 bg-[#D4AF37]/40" />
            <span className="text-xs font-cinzel text-[#E7C85C] tracking-wider uppercase font-bold">
              Preparations
            </span>
            <span className="h-px w-8 bg-[#D4AF37]/40" />
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#FAF8F5] mt-1">
            Checklist for the Outing
          </h2>
        </div>

        <div className="filigree-box bg-[#0E172E]/75 rounded-2xl p-4 border border-[#D4AF37]/35 shadow-xl divide-y divide-[#D4AF37]/15">
          {PACKING_ITEMS.map((item) => {
            const isChecked = !!checkedItems[item.id];
            return (
              <div
                key={item.id}
                onClick={() => toggleCheck(item.id)}
                className="py-2.5 first:pt-1 last:pb-1 flex items-start gap-3 cursor-pointer group"
              >
                <button
                  type="button"
                  aria-label={isChecked ? `Uncheck ${item.text}` : `Check ${item.text}`}
                  className="mt-0.5 text-[#E7C85C]"
                >
                  {isChecked ? (
                    <CheckCircle2 className="w-5 h-5 fill-[#D4AF37]/30" />
                  ) : (
                    <Circle className="w-5 h-5 text-[#FAF8F5]/30 group-hover:text-[#E7C85C]" />
                  )}
                </button>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-base">{item.icon}</span>
                    <span
                      className={`text-xs sm:text-sm font-medium ${
                        isChecked ? 'text-[#FAF8F5]' : 'line-through text-[#FAF8F5]/40'
                      }`}
                    >
                      {item.text}
                    </span>
                  </div>
                  <p className="text-[11px] text-[#FAF8F5]/65 mt-0.5 font-light">
                    {item.detail}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* THE 6 PEOPLE STANDING TOGETHER (3 Men & 3 Women) - ONLY IN FULL VIEW */}
      <div className="pt-2">
        <RoyalGroupPortrait />
      </div>

      {/* Return to Film View Button */}
      <div className="text-center pt-4 pb-8">
        <button
          onClick={onSwitchToFilm}
          className="px-7 py-3 rounded-full bg-gradient-to-r from-[#D4AF37] via-[#E7C85C] to-[#B89225] text-[#070B19] font-extrabold text-xs uppercase tracking-widest shadow-xl shadow-[#D4AF37]/20 hover:brightness-110 active:scale-95 transition-all"
        >
          ▶ Back to Cinematic Film
        </button>
      </div>
    </div>
  );
};
