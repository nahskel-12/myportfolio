
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  const navLinkClass = ({ isActive }: { isActive: boolean }): string => {
    const baseClasses = 'px-4 py-2 uppercase tracking-widest transition-all duration-300 hover:neon-text-pink';
    return isActive ? `${baseClasses} neon-text-pink` : `${baseClasses} text-cyan-400`;
  };

  return (
    <header className="relative z-20 bg-black/30 backdrop-blur-sm border-b-2 border-fuchsia-500/50 neon-border-pink">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl md:text-3xl font-bold uppercase glitch-effect" data-text="Nahid's World">
              Nahid's World
            </h1>
          </div>
          <nav className="hidden md:flex md:space-x-4">
            <NavLink to="/" className={navLinkClass}>// About</NavLink>
            <NavLink to="/files" className={navLinkClass}>// Files</NavLink>
            <NavLink to="/contact" className={navLinkClass}>// Contact</NavLink>
          </nav>
        </div>
        {/* Mobile Nav */}
        <nav className="md:hidden flex justify-around p-2 border-t border-fuchsia-500/30">
            <NavLink to="/" className={navLinkClass}>// About</NavLink>
            <NavLink to="/files" className={navLinkClass}>// Files</NavLink>
            <NavLink to="/contact" className={navLinkClass}>// Contact</NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
