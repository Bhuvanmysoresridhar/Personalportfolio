import { useEffect, useState } from 'react';

interface SimpleWelcomeProps {
  onComplete: () => void;
}

export function SimpleWelcome({ onComplete }: SimpleWelcomeProps) {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onComplete, 500); // Wait for fade out
    }, 3000);

    return () => clearTimeout(timer);
  }, [onComplete]);

  if (!isVisible) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center welcome-fade-out">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center welcome-screen">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800"></div>
      <div className="relative z-10 text-center space-y-6">
        <div className="welcome-icon">
          <div className="w-20 h-20 mx-auto bg-gradient-to-br from-blue-500/30 to-purple-500/30 rounded-full flex items-center justify-center border border-blue-400/40">
            <svg className="w-10 h-10 text-blue-400" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
            </svg>
          </div>
        </div>
        <div className="welcome-text">
          <h1 className="text-5xl font-bold text-white mb-4">
            Welcome to my <span className="gradient-text">Portfolio</span>
          </h1>
          <p className="text-xl text-slate-300">Bhuvan Mysore Sridhar</p>
        </div>
        <div className="welcome-progress">
          <div className="w-48 h-1 bg-slate-700 rounded-full mx-auto overflow-hidden">
            <div className="welcome-progress-bar h-full bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}