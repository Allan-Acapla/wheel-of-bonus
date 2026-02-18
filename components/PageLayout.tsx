import React from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';
import { ArrowLeft } from 'lucide-react';

interface PageLayoutProps {
    children: React.ReactNode;
    title: string;
    intro?: string;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children, title, intro }) => {
    return (
        <div className="relative min-h-[100dvh] w-full bg-[#020617] overflow-x-hidden flex flex-col font-sans text-white">
            {/* Background Layers (Simplified from App but consistent) */}
            <div className="fixed inset-0 bg-gradient-to-b from-[#0f172a] via-[#1e1b4b] to-[#020617] z-0"></div>
            <div className="fixed inset-0 bg-[radial-gradient(#FFD700_1px,transparent_1px)] [background-size:32px_32px] opacity-[0.03] pointer-events-none z-0"></div>

            {/* Content Container */}
            <div className="relative z-10 flex flex-col w-full max-w-3xl mx-auto px-6 py-8 md:py-12 flex-grow">

                {/* Header / Nav */}
                <div className="flex items-center mb-8 md:mb-12">
                    <Link
                        to="/"
                        className="flex items-center gap-2 text-blue-200/60 hover:text-blue-200 transition-colors text-sm font-medium"
                    >
                        <ArrowLeft className="w-4 h-4" />
                        Back to Home
                    </Link>
                </div>

                {/* Page Title */}
                <h1 className="text-3xl md:text-4xl font-['Cinzel'] font-bold text-[#FFD700] mb-4 drop-shadow-md">
                    {title}
                </h1>

                {/* Intro */}
                {intro && (
                    <p className="text-lg text-blue-100/80 leading-relaxed mb-8 md:mb-10 font-['Inter']">
                        {intro}
                    </p>
                )}

                {/* Main Content Area */}
                <div className="prose prose-invert prose-blue max-w-none text-blue-50/70 font-['Inter'] leading-7 space-y-6">
                    {children}
                </div>

            </div>

            {/* Footer */}
            <div className="relative z-10 w-full bg-[#020617]/50 backdrop-blur-sm border-t border-white/5 pb-safe mt-auto">
                <Footer />
            </div>

            <style>{`
        .pb-safe {
            padding-bottom: env(safe-area-inset-bottom, 2rem);
        }
      `}</style>
        </div>
    );
};

export default PageLayout;
