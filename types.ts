export interface Prize {
  id: string;
  label: string;
  subLabel?: string; // e.g. "JACKPOT"
  color: string;
  textColor?: string;
  value?: number; // monetary value for the popup
  icon?: 'coin' | 'gem' | 'star';
}

export interface WheelState {
  isSpinning: boolean;
  rotation: number;
  winnerIndex: number | null;
}