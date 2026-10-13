import React, { useState } from 'react';
import { X, Copy, Check, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface ShareModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ShareModal: React.FC<ShareModalProps> = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handleCopy = () => {
    const invitationText = `👑 NENAPINA AMBARI — A Majestic Day in Mysuru
With Bhavya Ma'am & The Gang

"A golden procession of memories with our favourite faculty"
🗓 One Day | Six People | A Hundred Memories
📍 Chamundi Hill • Thindi Mane • Badminton • Khanavali • UNO • Palace Lights

With love from Lakshmi, Janya, Akshay , Dhanush and majorly Abhinandan!!! ✨`;

    navigator.clipboard.writeText(invitationText).then(() => {
      setCopied(true);
      confetti({
        particleCount: 40,
        spread: 50,
        origin: { y: 0.5 },
        colors: ['#D4AF37', '#F5DE88'],
      });
      setTimeout(() => setCopied(false), 2500);
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-sm rounded-2xl bg-gradient-to-b from-[#0E172E] to-[#070B19] border-2 border-[#D4AF37]/60 p-5 shadow-2xl text-center filigree-box">
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-3 right-3 text-[#FAF8F5]/60 hover:text-[#FAF8F5] p-1 rounded-full border border-transparent hover:border-[#D4AF37]/30 transition-all"
        >
          <X className="w-4 h-4" />
        </button>

        {/* Royal Crest */}
        <div className="w-12 h-12 rounded-full border border-[#D4AF37] bg-[#070B19] flex items-center justify-center text-xl mx-auto mb-3 shadow-[0_0_15px_rgba(212,175,55,0.4)]">
          👑
        </div>

        <span className="text-[10px] font-cinzel text-[#E7C85C] tracking-[0.25em] uppercase font-bold">
          Royal Seal &amp; Invitation
        </span>

        <h3 className="font-cinzel text-xl font-bold text-[#FAF8F5] mt-0.5">
          Nenapina Ambari
        </h3>

        <p className="text-xs text-[#FAF8F5]/80 italic font-serif mt-1">
          A Day in Mysuru with Bhavya Ma&apos;am
        </p>

        {/* Parchment Box */}
        <div className="my-3.5 p-3.5 rounded-xl bg-[#FAF8F5] text-[#070B19] text-left border border-[#D4AF37]/60 space-y-1.5 shadow-inner">
          <div className="flex justify-between items-center text-[10px] text-[#73570F] font-mono font-bold">
            <span>PASS: ROYAL GUEST</span>
            <span>DATE: MYSURU DAY</span>
          </div>
          <p className="text-xs font-serif font-bold text-neutral-900 leading-tight">
            Honouring Our Mentor Bhavya Ma&apos;am
          </p>
          <p className="text-[11px] text-neutral-800 font-sans font-medium">
            With love from Lakshmi, Janya, Akshay , Dhanush and majorly Abhinandan!!!
          </p>
          <div className="pt-1 border-t border-[#D4AF37]/30 flex justify-between text-[10px] text-neutral-500 italic">
            <span>Special Edition</span>
            <span>Mysore Dasara Ambari</span>
          </div>
        </div>

        {/* Buttons */}
        <div className="space-y-2">
          <button
            onClick={handleCopy}
            className="w-full py-2 px-4 rounded-xl bg-gradient-to-r from-[#D4AF37] to-[#B89225] text-[#070B19] font-bold text-xs uppercase tracking-wider flex items-center justify-center gap-1.5 shadow-lg hover:brightness-110 active:scale-95 transition-all"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Invitation Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Royal Invitation</span>
              </>
            )}
          </button>

          <button
            onClick={() => {
              confetti({
                particleCount: 70,
                spread: 70,
                colors: ['#D4AF37', '#F5DE88', '#E67E22'],
              });
            }}
            className="w-full py-2 px-4 rounded-xl border border-[#D4AF37]/40 text-[#F5DE88] text-xs font-medium hover:bg-[#D4AF37]/15 active:scale-95 transition-all flex items-center justify-center gap-1"
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>Shower Royal Petals</span>
          </button>
        </div>
      </div>
    </div>
  );
};
