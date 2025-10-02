
import React, { useState, useEffect, useRef } from 'react';
import { PortfolioFile } from '../types';
import NeonCard from './NeonCard';

interface PasswordModalProps {
  file: PortfolioFile | null;
  onClose: () => void;
}

const CORRECT_PASSWORD = '10998';

const PasswordModal: React.FC<PasswordModalProps> = ({ file, onClose }) => {
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Reset state and focus input when modal is opened
    if (file) {
      setPassword('');
      setError('');
      // Timeout to allow the element to be rendered before focusing
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [file]);

  // Add keyboard listener for 'Escape' key to close modal
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!file) {
    return null;
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === CORRECT_PASSWORD) {
      window.open(file.url, '_blank', 'noopener,noreferrer');
      onClose();
    } else {
      setError('// ACCESS DENIED: INVALID PASSCODE');
      setPassword('');
    }
  };

  return (
    <div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center animate-fade-in"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div 
        className="w-full max-w-md mx-4"
        onClick={(e) => e.stopPropagation()} // Prevent closing modal when clicking inside
      >
        <NeonCard borderColor="pink">
          <h3 className="text-2xl font-bold uppercase mb-4 text-center neon-text-pink glitch-effect" data-text="[ ACCESS REQUIRED ]">
            [ ACCESS REQUIRED ]
          </h3>
          <p className="text-center text-cyan-400/80 mb-6">
            Attempting to access: <span className="font-bold text-fuchsia-400">{file.title}</span>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-col gap-4">
              <input
                ref={inputRef}
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="> Enter Passcode..."
                className="bg-black/70 border-2 border-fuchsia-500/50 focus:border-fuchsia-400 text-cyan-300 w-full px-4 py-2 text-lg tracking-widest focus:outline-none focus:ring-2 focus:ring-fuchsia-500/50 neon-border-pink transition-all"
                aria-label="Password for file access"
                required
              />
              {error && (
                <p className="text-red-500 text-center animate-pulse text-sm uppercase tracking-wider">{error}</p>
              )}
              <div className="flex justify-between gap-4 mt-4">
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full text-center border-2 border-gray-600 text-gray-400 font-bold py-2 px-4 uppercase tracking-widest transition-all duration-300 hover:bg-gray-600/30 hover:text-white"
                >
                  // Abort
                </button>
                <button
                  type="submit"
                  className="w-full text-center bg-fuchsia-500/20 border-2 border-fuchsia-500 text-fuchsia-300 font-bold py-2 px-4 uppercase tracking-widest transition-all duration-300 hover:bg-fuchsia-500 hover:text-black hover:neon-border-pink"
                >
                  // Unlock
                </button>
              </div>
            </div>
          </form>
        </NeonCard>
      </div>
    </div>
  );
};

export default PasswordModal;
