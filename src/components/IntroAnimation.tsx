import { useState, useEffect } from 'react';

interface IntroAnimationProps {
  onComplete: () => void;
}

const IntroAnimation = ({ onComplete }: IntroAnimationProps) => {
  const [stage, setStage] = useState(0);

  useEffect(() => {
    const timer1 = setTimeout(() => setStage(1), 500);
    const timer2 = setTimeout(() => setStage(2), 2000);
    const timer3 = setTimeout(() => setStage(3), 3500);
    const timer4 = setTimeout(() => {
      setStage(4);
      setTimeout(onComplete, 1000);
    }, 4500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(timer4);
    };
  }, [onComplete]);

  return (
    <div className={`fixed inset-0 z-50 flex items-center justify-center transition-all duration-1000 ${
      stage === 4 ? 'bg-transparent animate-intro-fade-out' : 'bg-gradient-to-br from-brand via-brand-light to-brand-dark'
    }`}>
      <div className="text-center relative">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-2 h-2 bg-white/20 rounded-full animate-pulse ${
                stage >= 1 ? 'opacity-100' : 'opacity-0'
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 100}ms`,
                animationDuration: `${2 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        {/* Main title with letter-by-letter animation */}
        {stage >= 1 && (
          <div className="overflow-hidden relative z-10">
            <h1 className="font-display text-6xl md:text-9xl font-bold text-white mb-4">
              {'SeedToStack'.split('').map((letter, index) => (
                <span
                  key={index}
                  className={`inline-block transition-all duration-500 ${
                    stage >= 1 ? 'animate-text-reveal opacity-100 transform-none' : 'opacity-0 translate-y-full'
                  }`}
                  style={{ 
                    animationDelay: `${index * 100}ms`,
                    textShadow: '0 0 30px rgba(255,255,255,0.5)'
                  }}
                >
                  {letter}
                </span>
              ))}
            </h1>
          </div>
        )}
        
        {/* Subtitle with typewriter effect */}
        {stage >= 2 && (
          <div className="mt-8 overflow-hidden relative z-10">
            <p className="font-sans text-2xl md:text-3xl text-white/90 animate-fade-in">
              <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                From Idea to Empire
              </span>
            </p>
          </div>
        )}

        {/* Animated line with glow effect */}
        {stage >= 3 && (
          <div className="mt-12 flex justify-center relative z-10">
            <div className="relative">
              <div className={`w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full ${
                stage >= 3 ? 'animate-scale-in' : ''
              }`} 
              style={{ 
                boxShadow: '0 0 20px rgba(255,255,255,0.8)',
                animationDelay: '300ms'
              }} />
              <div className="absolute inset-0 w-64 h-1 bg-gradient-to-r from-transparent via-white to-transparent rounded-full animate-pulse" />
            </div>
          </div>
        )}

        {/* Final pulse effect */}
        {stage >= 3 && (
          <div className="absolute inset-0 rounded-full opacity-30 animate-ping bg-white/10" 
               style={{ animationDuration: '2s', animationDelay: '1s' }} />
        )}
      </div>
    </div>
  );
};

export default IntroAnimation;