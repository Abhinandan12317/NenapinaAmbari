import React, { useState } from 'react';
import confetti from 'canvas-confetti';

interface PersonMeta {
  id: string;
  name: string;
  tag: string;
  gender: 'man' | 'woman';
  trait: string;
  description: string;
  badge: string;
  heightLabel: string;
  color: string;
}

const PEOPLE_DATA: PersonMeta[] = [
  {
    id: 'akshay',
    name: 'Akshay',
    tag: '⚡ Akshay',
    gender: 'man',
    trait: 'Short & Spirited',
    description: 'Badminton lover with non-stop enthusiasm on the court!',
    badge: 'Short',
    heightLabel: 'Same height as Lakshmi',
    color: '#E5C158',
  },
  {
    id: 'abhinandan',
    name: 'Abhinandan',
    tag: '👑 Abhinandan',
    gender: 'man',
    trait: 'Lean & Major Contributor',
    description: 'The master planner and heart behind the royal outing!',
    badge: 'Lean',
    heightLabel: 'Tall & Slender',
    color: '#FAF8F5',
  },
  {
    id: 'bhavya',
    name: "Bhavya Ma'am",
    tag: "✨ Bhavya Ma'am ✨",
    gender: 'woman',
    trait: 'Tall • Beloved Mentor',
    description: 'The royal centre of our universe, our favourite faculty!',
    badge: 'Centre • Tall',
    heightLabel: 'Tallest at Centre',
    color: '#D4AF37',
  },
  {
    id: 'dhanush',
    name: 'Dhanush',
    tag: '💪 Dhanush',
    gender: 'man',
    trait: 'Fit & Athletic',
    description: 'Fit, athletic frame with a tactical mind for UNO showdowns!',
    badge: 'Fit',
    heightLabel: 'Athletic & Strong',
    color: '#162244',
  },
  {
    id: 'janya',
    name: 'Janya',
    tag: '🌸 Janya',
    gender: 'woman',
    trait: 'Lean & Elegant',
    description: 'Slender, graceful, keeping the gang coordinated with wit!',
    badge: 'Lean',
    heightLabel: 'Slender & Graceful',
    color: '#C0392B',
  },
  {
    id: 'lakshmi',
    name: 'Lakshmi',
    tag: '🍬 Lakshmi',
    gender: 'woman',
    trait: 'Short & Foodie',
    description: 'Sweet and cheerful, already craving Mysore pak & dosas!',
    badge: 'Short',
    heightLabel: 'Same height as Akshay',
    color: '#27AE60',
  },
];

export const RoyalGroupPortrait: React.FC = () => {
  const [selectedPerson, setSelectedPerson] = useState<string>('bhavya');

  const handleCelebrate = () => {
    confetti({
      particleCount: 85,
      spread: 90,
      origin: { y: 0.65 },
      colors: ['#D4AF37', '#F5DE88', '#E67E22', '#FAF8F5', '#FF8A80'],
    });
  };

  return (
    <div className="filigree-box p-4 sm:p-6 rounded-3xl bg-gradient-to-b from-[#0E172E] via-[#0A1022] to-[#040711] border-2 border-[#D4AF37]/50 shadow-2xl space-y-4 text-center relative overflow-hidden">
      {/* Decorative Golden Aura */}
      <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-[#D4AF37]/15 to-transparent pointer-events-none" />

      {/* Header Crest */}
      <div className="relative z-10">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full border border-[#D4AF37]/40 bg-[#070B19]/80 shadow-md">
          <span className="text-[#E7C85C] text-xs">👑</span>
          <span className="text-[10px] font-cinzel text-[#F5DE88] tracking-[0.25em] uppercase font-bold">
            The Royal Squad of Six
          </span>
          <span className="text-[#E7C85C] text-xs">👑</span>
        </div>
        <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#FAF8F5] mt-1.5">
          Standing Together in Mysuru
        </h3>
        <p className="text-xs text-[#FAF8F5]/75 font-light italic mt-0.5">
          3 Gentlemen &amp; 3 Ladies, standing shoulder-to-shoulder with Bhavya Ma&apos;am at the centre
        </p>
      </div>

      {/* 6 People Cute Figurine SVG (No hands, named above each character) */}
      <div className="relative z-10 w-full max-w-xl mx-auto py-1 px-1">
        <div className="w-full bg-[#070B19]/80 rounded-2xl border border-[#D4AF37]/35 p-2 sm:p-4 shadow-inner relative">
          {/* Subtle Palace Arch in background */}
          <div className="absolute inset-0 opacity-15 pointer-events-none flex items-center justify-center">
            <svg viewBox="0 0 540 240" className="w-full h-full text-[#D4AF37]">
              <path d="M40 200 Q270 20 500 200 Z" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="6 6" />
              <circle cx="270" cy="50" r="16" fill="none" stroke="currentColor" strokeWidth="1.5" />
            </svg>
          </div>

          <svg
            viewBox="0 0 530 250"
            className="w-full h-auto filter drop-shadow-[0_8px_16px_rgba(0,0,0,0.6)] select-none"
            aria-label="Illustration of 6 cute people standing together: Akshay, Abhinandan, Bhavya Ma'am, Dhanush, Janya, Lakshmi"
          >
            {/* Ground stage line */}
            <line x1="15" y1="225" x2="515" y2="225" stroke="#D4AF37" strokeWidth="2.5" opacity="0.75" />
            <line x1="30" y1="229" x2="500" y2="229" stroke="#E67E22" strokeWidth="1" opacity="0.5" />

            {/* ================================================================= */}
            {/* 1. AKSHAY (Short Man, left edge)                                  */}
            {/* Height: Short (~105px). Same height as Lakshmi.                   */}
            {/* X: 52, Ground Y: 225. Head Top: Y: 120                           */}
            {/* ================================================================= */}
            <g
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedPerson('akshay')}
            >
              {/* Cute Name Tag Above Character */}
              <g transform="translate(52, 90)">
                <rect x="-34" y="-18" width="68" height="20" rx="10" fill={selectedPerson === 'akshay' ? '#D4AF37' : '#0E172E'} stroke="#D4AF37" strokeWidth="1.2" />
                <text x="0" y="-4" fill={selectedPerson === 'akshay' ? '#070B19' : '#FDF0BA'} fontSize="9.5" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">
                  ⚡ Akshay
                </text>
                {/* Pointer down */}
                <polygon points="0,4 -3,0 3,0" fill="#D4AF37" />
              </g>

              {/* Head */}
              <circle cx="52" cy="130" r="14" fill="#F0C299" stroke="#7A4E2A" strokeWidth="1.2" />
              {/* Short modern hair */}
              <path d="M38 127 Q52 110 66 127 Q63 115 52 114 Q41 115 38 127 Z" fill="#2C1B10" />
              {/* Cute Chibi Face: Eyes, Smile & Rosy Blush */}
              <circle cx="47" cy="129" r="1.6" fill="#1C140E" />
              <circle cx="57" cy="129" r="1.6" fill="#1C140E" />
              <circle cx="48" cy="128" r="0.6" fill="#FFFFFF" />
              <circle cx="58" cy="128" r="0.6" fill="#FFFFFF" />
              <circle cx="43" cy="133" r="2.5" fill="#FF8A80" opacity="0.65" />
              <circle cx="61" cy="133" r="2.5" fill="#FF8A80" opacity="0.65" />
              <path d="M48 134 Q52 138 56 134" stroke="#7A4E2A" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              {/* Cute Kurta Body (No hands!) */}
              <path d="M38 144 Q52 142 66 144 L64 185 Q52 188 40 185 Z" fill="#E5C158" stroke="#B89225" strokeWidth="1.4" />
              <line x1="52" y1="144" x2="52" y2="170" stroke="#B89225" strokeWidth="1.2" />
              {/* Trousers */}
              <rect x="42" y="185" width="9" height="36" fill="#1A243B" rx="3" />
              <rect x="53" y="185" width="9" height="36" fill="#1A243B" rx="3" />
              {/* Cute Shoes */}
              <ellipse cx="46" cy="223" rx="6.5" ry="3.5" fill="#5A3825" />
              <ellipse cx="58" cy="223" rx="6.5" ry="3.5" fill="#5A3825" />
            </g>

            {/* ================================================================= */}
            {/* 2. ABHINANDAN (Lean Man, between Akshay & Ma'am)                  */}
            {/* Height: Tall & Slender / Lean (~145px). Top Y: 80                  */}
            {/* X: 136, Ground Y: 225                                             */}
            {/* ================================================================= */}
            <g
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedPerson('abhinandan')}
            >
              {/* Cute Name Tag Above Character */}
              <g transform="translate(136, 55)">
                <rect x="-42" y="-18" width="84" height="20" rx="10" fill={selectedPerson === 'abhinandan' ? '#D4AF37' : '#0E172E'} stroke="#D4AF37" strokeWidth="1.2" />
                <text x="0" y="-4" fill={selectedPerson === 'abhinandan' ? '#070B19' : '#FDF0BA'} fontSize="9.5" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">
                  👑 Abhinandan
                </text>
                <polygon points="0,4 -3,0 3,0" fill="#D4AF37" />
              </g>

              {/* Head */}
              <circle cx="136" cy="94" r="14" fill="#E8B88A" stroke="#7A4E2A" strokeWidth="1.2" />
              {/* Hair */}
              <path d="M122 92 Q136 74 150 92 Q147 80 136 78 Q125 80 122 92 Z" fill="#1E1611" />
              {/* Chibi Face */}
              <circle cx="131" cy="93" r="1.6" fill="#1E1611" />
              <circle cx="141" cy="93" r="1.6" fill="#1E1611" />
              <circle cx="132" cy="92" r="0.6" fill="#FFFFFF" />
              <circle cx="142" cy="92" r="0.6" fill="#FFFFFF" />
              <circle cx="127" cy="98" r="2.5" fill="#FF8A80" opacity="0.6" />
              <circle cx="145" cy="98" r="2.5" fill="#FF8A80" opacity="0.6" />
              <path d="M132 99 Q136 103 140 99" stroke="#7A4E2A" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              {/* Lean / Slender Silk Kurta & Stole (No hands!) */}
              <path d="M124 108 Q136 106 148 108 L146 172 Q136 175 126 172 Z" fill="#FAF8F5" stroke="#D4AF37" strokeWidth="1.4" />
              {/* Royal Stole (Angavastram) */}
              <path d="M131 108 Q138 138 133 172" stroke="#E67E22" strokeWidth="3.5" fill="none" strokeLinecap="round" />
              {/* Slender Trousers */}
              <rect x="128" y="172" width="7" height="49" fill="#0E172E" rx="3" />
              <rect x="137" y="172" width="7" height="49" fill="#0E172E" rx="3" />
              {/* Shoes */}
              <ellipse cx="131" cy="223" rx="6" ry="3.5" fill="#2C1B10" />
              <ellipse cx="141" cy="223" rx="6" ry="3.5" fill="#2C1B10" />
            </g>

            {/* ================================================================= */}
            {/* 3. BHAVYA MA'AM (Tall Lady, AT THE CENTRE)                        */}
            {/* Height: Tallest (~160px). Stately, graceful, dignified.           */}
            {/* X: 240, Ground Y: 225. Head Top: Y: 65                            */}
            {/* ================================================================= */}
            <g
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedPerson('bhavya')}
            >
              {/* Golden Mentor Aura behind Bhavya Ma'am */}
              <ellipse cx="240" cy="145" rx="35" ry="85" fill="#D4AF37" opacity={selectedPerson === 'bhavya' ? 0.25 : 0.12} />

              {/* Cute Name Tag Above Character */}
              <g transform="translate(240, 36)">
                <rect x="-48" y="-20" width="96" height="22" rx="11" fill={selectedPerson === 'bhavya' ? '#D4AF37' : '#0E172E'} stroke="#D4AF37" strokeWidth="1.6" />
                <text x="0" y="-5" fill={selectedPerson === 'bhavya' ? '#070B19' : '#FDF0BA'} fontSize="10.5" fontWeight="bold" fontFamily="Cinzel, serif" textAnchor="middle">
                  ✨ Bhavya Ma&apos;am ✨
                </text>
                <polygon points="0,4 -3,0 3,0" fill="#D4AF37" />
              </g>

              {/* Hair bun with floral jasmine gajra */}
              <ellipse cx="240" cy="74" rx="17" ry="16" fill="#1C140E" />
              <circle cx="253" cy="70" r="5.5" fill="#FAF8F5" stroke="#E7C85C" strokeWidth="1" /> {/* Gajra */}
              {/* Head */}
              <circle cx="240" cy="80" r="15" fill="#E8B88A" stroke="#8C4A28" strokeWidth="1.2" />
              {/* Traditional Red Bindi */}
              <circle cx="240" cy="74" r="1.8" fill="#BF2A2D" />
              {/* Chibi Eyes with sparkles, warm smile, blush */}
              <circle cx="234" cy="78" r="1.8" fill="#1C140E" />
              <circle cx="246" cy="78" r="1.8" fill="#1C140E" />
              <circle cx="235" cy="77" r="0.7" fill="#FFFFFF" />
              <circle cx="247" cy="77" r="0.7" fill="#FFFFFF" />
              <circle cx="230" cy="84" r="3" fill="#FF8A80" opacity="0.65" />
              <circle cx="250" cy="84" r="3" fill="#FF8A80" opacity="0.65" />
              <path d="M236 85 Q240 89 244 85" stroke="#BF2A2D" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              {/* Gold Jhumkas */}
              <circle cx="225" cy="83" r="2.2" fill="#D4AF37" />
              <circle cx="255" cy="83" r="2.2" fill="#D4AF37" />

              {/* Royal Mysore Silk Saree (Tall, elegant drape, NO HANDS!) */}
              {/* Blouse top */}
              <path d="M226 95 L254 95 L252 110 L228 110 Z" fill="#8C1D24" stroke="#D4AF37" strokeWidth="1" />
              {/* Saree Fall & Pleats */}
              <path d="M225 106 Q240 102 255 106 L260 222 L220 222 Z" fill="#D4AF37" stroke="#947217" strokeWidth="1.5" />
              {/* Rich Maroon & Gold Zari Pallu */}
              <path d="M227 96 Q238 135 258 190" stroke="#8C1D24" strokeWidth="5.5" fill="none" strokeLinecap="round" />
              <path d="M228 98 Q239 137 259 192" stroke="#FAF8F5" strokeWidth="1.5" fill="none" />
              {/* Auspicious Garland */}
              <path d="M228 98 Q240 128 252 98" stroke="#F39C12" strokeWidth="2.5" strokeDasharray="3 3" fill="none" />
              {/* Saree Bottom Gold Hem */}
              <rect x="220" y="217" width="40" height="6" fill="#8C1D24" stroke="#D4AF37" strokeWidth="1" rx="1" />
              {/* Juttis */}
              <ellipse cx="234" cy="224" rx="5.5" ry="2.5" fill="#947217" />
              <ellipse cx="246" cy="224" rx="5.5" ry="2.5" fill="#947217" />
            </g>

            {/* ================================================================= */}
            {/* 4. DHANUSH (Fit Man, right of Ma'am)                              */}
            {/* Height: Fit & Athletic (~140px). Broad athletic torso.            */}
            {/* X: 334, Ground Y: 225. Head Top: Y: 85                            */}
            {/* ================================================================= */}
            <g
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedPerson('dhanush')}
            >
              {/* Cute Name Tag Above Character */}
              <g transform="translate(334, 60)">
                <rect x="-36" y="-18" width="72" height="20" rx="10" fill={selectedPerson === 'dhanush' ? '#D4AF37' : '#0E172E'} stroke="#D4AF37" strokeWidth="1.2" />
                <text x="0" y="-4" fill={selectedPerson === 'dhanush' ? '#070B19' : '#FDF0BA'} fontSize="9.5" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">
                  💪 Dhanush
                </text>
                <polygon points="0,4 -3,0 3,0" fill="#D4AF37" />
              </g>

              {/* Head */}
              <circle cx="334" cy="98" r="14" fill="#E5B284" stroke="#7A4E2A" strokeWidth="1.2" />
              {/* Stylish short hair */}
              <path d="M320 96 Q334 78 348 96 Q344 84 334 82 Q324 84 320 96 Z" fill="#241B15" />
              {/* Chibi Face */}
              <circle cx="329" cy="97" r="1.6" fill="#241B15" />
              <circle cx="339" cy="97" r="1.6" fill="#241B15" />
              <circle cx="330" cy="96" r="0.6" fill="#FFFFFF" />
              <circle cx="340" cy="96" r="0.6" fill="#FFFFFF" />
              <circle cx="325" cy="102" r="2.5" fill="#FF8A80" opacity="0.6" />
              <circle cx="343" cy="102" r="2.5" fill="#FF8A80" opacity="0.6" />
              <path d="M330 103 Q334 107 338 103" stroke="#7A4E2A" strokeWidth="1.4" fill="none" strokeLinecap="round" />
              {/* Fit / Athletic Kurta Body (Broad shoulders, NO HANDS!) */}
              <path d="M318 112 Q334 110 350 112 L347 174 Q334 177 321 174 Z" fill="#162244" stroke="#D4AF37" strokeWidth="1.4" />
              <line x1="334" y1="112" x2="334" y2="148" stroke="#D4AF37" strokeWidth="1.2" />
              {/* Athletic Trousers */}
              <rect x="325" y="174" width="8" height="48" fill="#FAF8F5" rx="3" />
              <rect x="335" y="174" width="8" height="48" fill="#FAF8F5" rx="3" />
              {/* Shoes */}
              <ellipse cx="329" cy="223" rx="6.5" ry="3.5" fill="#3D2619" />
              <ellipse cx="339" cy="223" rx="6.5" ry="3.5" fill="#3D2619" />
            </g>

            {/* ================================================================= */}
            {/* 5. JANYA (Lean Woman, right side)                                 */}
            {/* Height: Slender / Lean (~130px). Top Y: 95                        */}
            {/* X: 412, Ground Y: 225                                             */}
            {/* ================================================================= */}
            <g
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedPerson('janya')}
            >
              {/* Cute Name Tag Above Character */}
              <g transform="translate(412, 70)">
                <rect x="-32" y="-18" width="64" height="20" rx="10" fill={selectedPerson === 'janya' ? '#D4AF37' : '#0E172E'} stroke="#D4AF37" strokeWidth="1.2" />
                <text x="0" y="-4" fill={selectedPerson === 'janya' ? '#070B19' : '#FDF0BA'} fontSize="9.5" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">
                  🌸 Janya
                </text>
                <polygon points="0,4 -3,0 3,0" fill="#D4AF37" />
              </g>

              {/* Long Elegant Hair */}
              <path d="M398 108 Q412 86 426 108 L428 150 L422 150 L418 120 L406 120 L402 150 L396 150 Z" fill="#20150E" />
              {/* Head */}
              <circle cx="412" cy="108" r="13" fill="#E9BC8F" stroke="#7A4E2A" strokeWidth="1.2" />
              {/* Cute Bindi & Chibi Face */}
              <circle cx="412" cy="103" r="1.3" fill="#BF2A2D" />
              <circle cx="408" cy="107" r="1.5" fill="#20150E" />
              <circle cx="416" cy="107" r="1.5" fill="#20150E" />
              <circle cx="409" cy="106" r="0.6" fill="#FFFFFF" />
              <circle cx="417" cy="106" r="0.6" fill="#FFFFFF" />
              <circle cx="404" cy="112" r="2.5" fill="#FF8A80" opacity="0.6" />
              <circle cx="420" cy="112" r="2.5" fill="#FF8A80" opacity="0.6" />
              <path d="M409 113 Q412 116 415 113" stroke="#BF2A2D" strokeWidth="1.3" fill="none" strokeLinecap="round" />
              {/* Lean Crimson Silk Anarkali (No hands!) */}
              <path d="M403 122 Q412 120 421 122 L424 182 Q412 186 400 182 Z" fill="#C0392B" stroke="#D4AF37" strokeWidth="1.3" />
              {/* Leggings & Juttis */}
              <rect x="406" y="182" width="5.5" height="40" fill="#FAF8F5" rx="2" />
              <rect x="414" y="182" width="5.5" height="40" fill="#FAF8F5" rx="2" />
              <ellipse cx="408" cy="223" rx="5" ry="3" fill="#D4AF37" />
              <ellipse cx="417" cy="223" rx="5" ry="3" fill="#D4AF37" />
            </g>

            {/* ================================================================= */}
            {/* 6. LAKSHMI (Short Woman, right edge)                              */}
            {/* Height: Short (~105px). Exact same height as Akshay! Top Y: 120    */}
            {/* X: 478, Ground Y: 225                                             */}
            {/* ================================================================= */}
            <g
              className="cursor-pointer transition-transform hover:scale-105"
              onClick={() => setSelectedPerson('lakshmi')}
            >
              {/* Cute Name Tag Above Character */}
              <g transform="translate(478, 90)">
                <rect x="-36" y="-18" width="72" height="20" rx="10" fill={selectedPerson === 'lakshmi' ? '#D4AF37' : '#0E172E'} stroke="#D4AF37" strokeWidth="1.2" />
                <text x="0" y="-4" fill={selectedPerson === 'lakshmi' ? '#070B19' : '#FDF0BA'} fontSize="9.5" fontWeight="bold" fontFamily="system-ui" textAnchor="middle">
                  🍬 Lakshmi
                </text>
                <polygon points="0,4 -3,0 3,0" fill="#D4AF37" />
              </g>

              {/* Hair bun with marigold blossom */}
              <circle cx="478" cy="128" r="15" fill="#20150E" />
              <circle cx="488" cy="123" r="4.5" fill="#E67E22" stroke="#FFE088" strokeWidth="1" /> {/* Flower */}
              {/* Head */}
              <circle cx="478" cy="130" r="13" fill="#E8B88A" stroke="#7A4E2A" strokeWidth="1.2" />
              {/* Cute Bindi & Face */}
              <circle cx="478" cy="125" r="1.3" fill="#BF2A2D" />
              <circle cx="474" cy="129" r="1.5" fill="#20150E" />
              <circle cx="482" cy="129" r="1.5" fill="#20150E" />
              <circle cx="475" cy="128" r="0.6" fill="#FFFFFF" />
              <circle cx="483" cy="128" r="0.6" fill="#FFFFFF" />
              <circle cx="470" cy="134" r="2.5" fill="#FF8A80" opacity="0.65" />
              <circle cx="486" cy="134" r="2.5" fill="#FF8A80" opacity="0.65" />
              <path d="M475 135 Q478 139 481 135" stroke="#BF2A2D" strokeWidth="1.3" fill="none" strokeLinecap="round" />
              {/* Short Traditional Emerald Silk Kurti (No hands!) */}
              <path d="M468 144 Q478 142 488 144 L492 186 Q478 190 464 186 Z" fill="#27AE60" stroke="#D4AF37" strokeWidth="1.3" />
              {/* Leggings & Anklets */}
              <rect x="472" y="186" width="5.5" height="35" fill="#FAF8F5" rx="2" />
              <rect x="480" y="186" width="5.5" height="35" fill="#FAF8F5" rx="2" />
              <ellipse cx="474" cy="223" rx="5" ry="3" fill="#947217" />
              <ellipse cx="483" cy="223" rx="5" ry="3" fill="#947217" />
            </g>
          </svg>
        </div>
      </div>

      {/* Selected Person Bio Card */}
      {(() => {
        const p = PEOPLE_DATA.find((item) => item.id === selectedPerson) || PEOPLE_DATA[2];
        return (
          <div className="bg-[#070B19]/90 border border-[#D4AF37]/45 rounded-2xl p-3.5 max-w-md mx-auto text-center shadow-lg transition-all animate-fadeIn">
            <div className="flex items-center justify-between gap-2 border-b border-[#D4AF37]/20 pb-1.5 mb-1.5">
              <span className="font-cinzel font-bold text-sm text-[#FDF0BA]">
                {p.name}
              </span>
              <div className="flex gap-1.5 items-center">
                <span className="text-[9px] px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#E7C85C] font-mono border border-[#D4AF37]/35">
                  {p.badge}
                </span>
                <span className="text-[9px] text-[#FAF8F5]/60 font-serif italic">
                  {p.heightLabel}
                </span>
              </div>
            </div>
            <p className="text-xs text-[#FAF8F5]/90 font-light">
              <span className="text-[#E7C85C] font-medium">{p.trait}:</span> {p.description}
            </p>
          </div>
        );
      })()}

      {/* Quick Select Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 pt-1">
        {PEOPLE_DATA.map((p) => {
          const isSelected = p.id === selectedPerson;
          return (
            <button
              key={p.id}
              onClick={() => setSelectedPerson(p.id)}
              className={`text-xs px-2.5 py-1 rounded-lg border transition-all ${
                isSelected
                  ? 'bg-[#D4AF37] text-[#070B19] border-[#D4AF37] font-bold shadow-[0_0_10px_rgba(212,175,55,0.4)]'
                  : 'bg-[#070B19] text-[#FAF8F5]/75 border-[#D4AF37]/30 hover:border-[#D4AF37] hover:text-[#FAF8F5]'
              }`}
            >
              {p.name}
              <span className="text-[9px] opacity-75 ml-1 font-mono">
                ({p.badge.split(' ')[0]})
              </span>
            </button>
          );
        })}
      </div>

      {/* The Specific Signoff Quote Requested by User */}
      <div className="mt-4 pt-4 border-t border-[#D4AF37]/35 space-y-2">
        <p className="font-serif text-sm sm:text-base italic text-[#FDF0BA] font-semibold tracking-wide">
          &ldquo;With love from Lakshmi, Janya, Akshay , Dhanush and majorly Abhinandan!!!&rdquo;
        </p>

        {/* Confetti Celebration Shower Button */}
        <div className="flex items-center justify-center gap-2 pt-1">
          <button
            onClick={handleCelebrate}
            className="px-5 py-2.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E7C85C] to-[#B89225] text-[#070B19] font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-[#D4AF37]/25 hover:brightness-110 active:scale-95 transition-all"
          >
            <span>🎊</span>
            <span>Celebrate the Squad with Confetti</span>
          </button>
        </div>
      </div>
    </div>
  );
};
