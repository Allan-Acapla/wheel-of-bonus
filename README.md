# :ferris_wheel: Wheel of Fortune - Promotional Site

A gamified affiliate landing page built as an interactive prize wheel experience. Players spin the wheel to discover an exclusive casino welcome bonus.

---

## How the Game Works

1. **The Wheel** — The player is presented with a premium, 8-segment prize wheel featuring various rewards like "Credits", "Bonus", and "Jackpots".
2. **First Spin** — Click the **SPIN NOW** button. The first spin is programmed to land on **FREE SPIN**, building anticipation and giving the player a second chance.
3. **Second Spin** — The second spin lands on the **2.5K CREDITS** (Jackpot). A celebratory modal appears with sparkles and a gold burst effect.
4. **Claim** — Once the jackpot is won, a **CLAIM NOW** button appears. Clicking it redirects the player to the partner casino's official offer page to collect their reward.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Bundler | Vite 6 |
| Styling | Tailwind CSS 4 |
| Routing | React Router v7 |
| Deployment | Vercel / Netlify |

---

## Run Locally

**Prerequisites:** Node.js v18+

```bash
# 1. Install dependencies
npm install

```bash
# 2. Start the development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser (or the port specified by Vite).

### Build for Production

```bash
npm run build
```

---

## Project Structure

```
wheel-of-bonus/
├── components/
│   ├── FloatingCoins.tsx  # Animated background coins effect
│   ├── Footer.tsx         # Page footer with legal links and disclaimers
│   ├── InfoPanel.tsx      # Welcome and informational panel
│   ├── PageLayout.tsx     # Shared layout wrapper for legal pages
│   ├── ResultModal.tsx    # Game result and reward claim modal
│   └── Wheel.tsx          # Main interactive prize wheel component
├── pages/
│   ├── Home.tsx           # Main game page with wheel logic & state
│   ├── About.tsx          # About Us informational page
│   ├── Contact.tsx        # Contact support/information page
│   ├── Privacy.tsx        # Privacy Policy documentation
│   └── Terms.tsx          # Terms of Service documentation
├── App.tsx                # React Router and routing setup
├── index.tsx              # React entry point
├── constants.ts           # Game configuration and prize data
├── types.ts               # Shared TypeScript interfaces
└── vite.config.ts         # Vite build and development config
```

---

## Pages

| Route | Description |
|---|---|
| `/` | Main game (Wheel of Bonus) |
| `/privacy` | Privacy Policy |
| `/terms` | Terms of Service |
| `/about` | About Us |
| `/contact` | Contact page |

---

## Responsible Gaming

This site is an independent informational portal and not a gambling operator. All users must be **21+**. If you or someone you know has a gambling problem, call **1-800-GAMBLER**.
