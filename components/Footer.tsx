
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="relative z-10 bg-black/30 backdrop-blur-sm border-t-2 border-cyan-500/50 neon-border-cyan p-4">
      <div className="container mx-auto text-center text-cyan-400/70 text-sm">
        <p className="neon-text-cyan">© {new Date().getFullYear()} </p>
      </div>
    </footer>
  );
};

export default Footer;
