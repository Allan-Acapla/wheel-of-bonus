import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full max-w-4xl mx-auto px-6 py-10 text-center font-['Inter']">
      <div className="text-[10px] md:text-[11px] leading-relaxed text-blue-200/40 space-y-4">

        {/* Line 1 */}
        <p>© 2026 iGamingDeals. All Rights Reserved.</p>

        {/* Line 2 */}
        <p className="font-semibold text-blue-200/60">
          21+ | Play Responsibly. Gambling Problem? Call 1-800-GAMBLER.
        </p>

        {/* Paragraph 1 */}
        <p>
          The prize displayed reward credits represents the standard new player incentive currently offered by qualified registrants. No purchase is necessary to spin this wheel. The "spin" result is a gamified presentation of the available welcome offer and does not guarantee a unique or exclusive reward different from the standard public offer.
        </p>

        {/* Paragraph 2 */}
        <p>
          This website is an independent informational portal and is not owned or operated by Caesars Entertainment. We may receive a commission from the operator if you click links on this page and open a new account. This does not affect the cost of your bets or the value of your bonus.
        </p>

        {/* Line 3 (Nav Links) */}
        <nav className="pt-2 flex flex-wrap justify-center gap-x-1">
          <Link to="/privacy" className="hover:text-blue-200 hover:underline transition-colors">[Privacy Policy]</Link>
          <span>|</span>
          <Link to="/terms" className="hover:text-blue-200 hover:underline transition-colors">[Terms of Service]</Link>
          <span>|</span>
          <Link to="/about" className="hover:text-blue-200 hover:underline transition-colors">[About Us]</Link>
          <span>|</span>
          <Link to="/contact" className="hover:text-blue-200 hover:underline transition-colors">[Contact Us]</Link>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;