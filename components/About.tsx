
import React from 'react';
import NeonCard from './NeonCard';

const About: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 neon-text-pink glitch-effect" data-text="[About Me]">
        [About Me]
      </h2>
      <NeonCard borderColor="pink" className="w-full max-w-4xl">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <div className="w-48 h-48 md:w-64 md:h-64 flex-shrink-0">
            <img 
              src="https://github.com/AshrafulShohab/Nahid-s-Portfolio/blob/main/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover border-4 border-fuchsia-500 neon-border-pink animate-pulse" 
            />
          </div>
          <div className="text-cyan-300 space-y-4 text-center md:text-left">
            <h3 className="text-3xl font-bold text-fuchsia-400">// Nahid Bhuiya</h3>
            <p className="text-lg tracking-wider">
              Hello! I'm Nahid, a passionate and driven Computer Science and Engineering student on a mission to make learning more accessible and collaborative. Welcome to my personal space on the web, where I share a collection of educational resources that I've created and curated throughout my academic journey.Here, you'll find a variety of educational materials, from my own notes and projects to helpful resources I've discovered. My goal is to create a hub for fellow students and lifelong learners to find the information they need to succeed in their own studies.

            </p>
            <p className="text-cyan-400/80">
              I am always eager to connect with like-minded individuals, so feel free to explore my files and reach out with any questions or opportunities for collaboration. Let's learn and grow together
            </p>
          </div>
        </div>
      </NeonCard>
    </div>
  );
};

export default About;
