export interface RoadmapStop {
  time: string;
  icon: string;
  title: string;
  desc: string;
  location: string;
  footnote?: boolean;
}

export const ROADMAP_DATA: RoadmapStop[] = [
  {
    time: "8:00 AM - 10:30 AM",
    icon: "🛕",
    title: "Chamundi Hill",
    desc: "Begin the day with a visit, seek blessings, enjoy scenic views and take group pictures.",
    location: "Sri Chamundeshwari Temple & Viewpoint",
    footnote: false,
  },
  {
    time: "10:30 AM - 11:15 AM",
    icon: "🥞",
    title: "Breakfast at Thindi Mane",
    desc: "Good food and conversation with hot idlis, crispy dosas and filter coffee.",
    location: "Thindi Mane, Mysuru",
    footnote: false,
  },
  {
    time: "12:00 PM - 2:00 PM",
    icon: "🏸",
    title: "Badminton",
    desc: "Friendly competition, doubles matches and lots of fun on court.",
    location: "Mysuru Indoor Sports Arena",
    footnote: false,
  },
  {
    time: "2:00 PM - 3:30 PM",
    icon: "🍱",
    title: "Lunch at a Khanavali",
    desc: "Enjoy a traditional Karnataka meal served warmly on banana leaves.",
    location: "Authentic North Karnataka Khanavali",
    footnote: false,
  },
  {
    time: "4:00 PM - 6:00 PM",
    icon: "🃏",
    title: "UNO Battles",
    desc: "Two hours of cards, dramatic +4 cards and friendly rivalries.",
    location: "Cozy Café & Game Lounge",
    footnote: false,
  },
  {
    time: "6:00 PM - 8:00 PM",
    icon: "✨",
    title: "Mysuru Dasara round & Palace Illumination",
    desc: "Enjoy the festive atmosphere and take group pictures.",
    location: "Mysuru Royal Palace Grounds",
    footnote: true,
  },
];

export interface SquadCategory {
  id: string;
  name: string;
  role: string;
  badge: string;
  question: string;
  members: string[];
  icon: string;
  symbol: string;
  color: string;
}

export const SQUAD_DATA: SquadCategory[] = [
  {
    id: "athletes",
    name: "THE ATHLETES",
    role: "Court Champions & Racket Rulers",
    badge: "COURT",
    question: "Who will dominate the badminton court?",
    members: ["Akshay N", "Abhinandan"],
    icon: "🏸",
    symbol: "⚡",
    color: "#E7C85C",
  },
  {
    id: "strategists",
    name: "THE STRATEGISTS",
    role: "+4 Masters & Mind-Game Architects",
    badge: "+4 TACTIC",
    question: "Who will survive UNO?",
    members: ["Dhanush M", "Abhinandan", "Janya U Singh"],
    icon: "🃏",
    symbol: "♠",
    color: "#E67E22",
  },
  {
    id: "foodies",
    name: "THE FOODIES",
    role: "Ghee Roast Connoisseurs & Thindi Critics",
    badge: "FEAST",
    question: "Who is already thinking about lunch?",
    members: ["Lakshmi M", "Abhinandan"],
    icon: "🍛",
    symbol: "🍯",
    color: "#F39C12",
  },
];

export interface PackingItem {
  id: number;
  text: string;
  icon: string;
  detail: string;
}

export const PACKING_ITEMS: PackingItem[] = [
  {
    id: 1,
    text: "Comfy shoes for walking & steps",
    icon: "👟",
    detail: "Essential for the sacred Chamundi Hill steps and garden walks.",
  },
  {
    id: 2,
    text: "Badminton racket",
    icon: "🏸",
    detail: "Bring your favorite weapon for the legendary doubles tournament.",
  },
  {
    id: 3,
    text: "Hearty appetite for Mysuru delicacies",
    icon: "😋",
    detail: "Butter masala dosas, benne thindi, and hot jolada rotti await.",
  },
  {
    id: 4,
    text: "Charged phone for endless group photos",
    icon: "📱",
    detail: "For portrait mode shots at the Palace and scenic ridge views.",
  },
  {
    id: 5,
    text: "A big smile & joyful festive energy",
    icon: "✨",
    detail: "No PPTs, zero assignments, just wholesome camaraderie.",
  },
];

export interface SceneMeta {
  index: number;
  title: string;
  subtitle: string;
  durationMs: number;
}

export const SCENES_META: SceneMeta[] = [
  { index: 0, title: "Overture", subtitle: "The Heritage Invitation", durationMs: 9500 },
  { index: 1, title: "Royal Decree", subtitle: "A Day in Mysuru", durationMs: 8500 },
  { index: 2, title: "Ambari Welcome", subtitle: "Dear Bhavya Ma'am", durationMs: 9500 },
  { index: 3, title: "Personal Note", subtitle: "A Note From The Gang", durationMs: 11000 },
  { index: 4, title: "Schedule Summary", subtitle: "Day at a Glance", durationMs: 8500 },
  { index: 5, title: "Roadmap", subtitle: "Timed Mysuru Stops", durationMs: 13000 },
  { index: 6, title: "Royal Contingent", subtitle: "The Squad", durationMs: 9500 },
  { index: 7, title: "Preparations", subtitle: "Pack For The Day", durationMs: 9000 },
  { index: 8, title: "Grand Finale", subtitle: "A Hundred Memories", durationMs: 12000 },
];
