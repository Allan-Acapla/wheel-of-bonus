import { Prize } from './types';

// The offer link for the "Claim Reward" button
export const OFFER_URL = "https://caesarspalaceonline.com/?AR=a-26543b-2662c-&bc=KFULAUNCH&utm_offer=KFULAUNCH&siteid=26543&af_c_id=KFULAUNCH";

// Premium Casino Palette
export const WHEEL_COLORS = {
  // Metals
  gold: '#FFD700',
  goldDark: '#B8860B',
  goldLight: '#FFFACD',
  silver: '#C0C0C0',
  bronze: '#CD7F32',

  // Gem Tones
  ruby: '#990000',
  rubyBright: '#FF0000',
  emerald: '#005500',
  emeraldBright: '#00AA00',
  sapphire: '#000080',
  sapphireBright: '#0000FF',
  amethyst: '#4B0082',
  amethystBright: '#8A2BE2',

  // Neutrals
  jet: '#111111',
  charcoal: '#2c2c2c',
  white: '#FFFFFF',
};

// 8 Segments
export const PRIZES: Prize[] = [
  {
    id: '1',
    label: 'FREE',
    subLabel: 'SPIN',
    color: WHEEL_COLORS.jet,
    textColor: WHEEL_COLORS.gold,
    icon: 'star',
    value: 0
  },
  {
    id: '2',
    label: '2.5K',
    subLabel: 'CREDITS',
    color: WHEEL_COLORS.ruby,
    textColor: WHEEL_COLORS.white,
    icon: 'coin',
    value: 2500
  },
  {
    id: '3',
    label: '$50',
    subLabel: 'BONUS',
    color: WHEEL_COLORS.sapphire,
    textColor: WHEEL_COLORS.white,
    icon: 'gem',
    value: 50
  },
  {
    id: '4',
    label: '500',
    subLabel: 'CREDITS',
    color: WHEEL_COLORS.goldDark,
    textColor: WHEEL_COLORS.white,
    icon: 'coin',
    value: 500
  },
  {
    id: '5',
    label: 'DOUBLE',
    subLabel: 'CHANCE',
    color: WHEEL_COLORS.jet,
    textColor: WHEEL_COLORS.gold,
    icon: 'star',
    value: 0
  },
  {
    id: '6',
    label: '$100',
    subLabel: 'BONUS',
    color: WHEEL_COLORS.amethyst,
    textColor: WHEEL_COLORS.white,
    icon: 'gem',
    value: 100
  },
  {
    id: '7',
    label: '1K',
    subLabel: 'CREDITS',
    color: WHEEL_COLORS.ruby,
    textColor: WHEEL_COLORS.white,
    icon: 'coin',
    value: 1000
  },
  {
    id: '8',
    label: 'JACKPOT',
    subLabel: 'WINNER',
    color: WHEEL_COLORS.emerald,
    textColor: WHEEL_COLORS.goldLight,
    icon: 'gem',
    value: 10000
  },
];

export const SPIN_DURATION_SECONDS = 5;
export const SPIN_ROTATIONS = 8; // Faster, more spins