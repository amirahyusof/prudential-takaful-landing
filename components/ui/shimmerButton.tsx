"use client"

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import Particles from 'react-particles';
import { cn } from '@/lib/utils';

type AnimatedButtonProps = {
  children: React.ReactNode;
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const AnimatedButton: React.FC<AnimatedButtonProps> = ({ children, className, ...props }) => {
  const [showParticles, setShowParticles] = useState(false);

  const handleClick = () => {
    setShowParticles(true);
    setTimeout(() => setShowParticles(false), 1000);
  };

  return (
    <div className="relative inline-block">
      <div className="absolute inset-0 border-2 border-white rounded-lg animate-spin-slow"></div>
      <Button
        onClick={handleClick}
        className={cn(
          'relative overflow-hidden border-2 border-transparent bg-red-700 text-xl font-bold px-6 py-3 rounded-lg shadow-lg',
          className
        )}
        {...props}
      >
        {children}
      </Button>
      {showParticles && (
        <Particles
          id="particles"
          options={{
            particles: {
              number: { value: 10 },
              shape: { type: 'star' },
              size: { value: 5 },
              move: { speed: 5, direction: 'none' },
              opacity: { value: 1 },
              color: { value: '#ffffff' }
            }
          }}
          className="absolute inset-0 pointer-events-none"
        />
      )}
    </div>
  );
};

export default AnimatedButton;

