
import React from 'react';

interface NeonCardProps {
  children: React.ReactNode;
  className?: string;
  borderColor?: 'cyan' | 'pink';
}

const NeonCard: React.FC<NeonCardProps> = ({ children, className = '', borderColor = 'cyan' }) => {
  const borderClass = borderColor === 'cyan' ? 'neon-border-cyan' : 'neon-border-pink';

  return (
    <div className={`bg-black/50 backdrop-blur-md p-6 border-2 border-opacity-50 ${borderColor === 'cyan' ? 'border-cyan-500' : 'border-fuchsia-500'} ${borderClass} transition-all duration-300 hover:bg-black/70 ${className}`}>
      {children}
    </div>
  );
};

export default NeonCard;
