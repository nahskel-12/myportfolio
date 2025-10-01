
import React from 'react';
import { type ContactLink } from '../types';
import NeonCard from './NeonCard';
import FacebookIcon from './icons/FacebookIcon';
import WhatsAppIcon from './icons/WhatsAppIcon';
import EmailIcon from './icons/EmailIcon';
import GitHubIcon from './icons/GitHubIcon';

const contactLinks: ContactLink[] = [
  { id: 1, name: 'GitHub', url: 'https://github.com', icon: GitHubIcon },
  { id: 2, name: 'Email', url: 'mailto:mrnahid286@gmail.com', icon: EmailIcon },
  { id: 3, name: 'Facebook', url: 'https://facebook.com/nah.skel', icon: FacebookIcon },
  { id: 4, name: 'WhatsApp', url: 'https://wa.me/+8801403020637', icon: WhatsAppIcon },
];

const Contact: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 neon-text-pink glitch-effect" data-text="[Contact Channel]">
        [Contact Channel]
      </h2>
      <NeonCard borderColor="pink" className="w-full max-w-2xl">
        <p className="text-center text-cyan-300 mb-8 text-lg">
          Connect with me through the following secure channels. All communications are monitored for quality assurance.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          {contactLinks.map((link) => (
            <a
              key={link.id}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center justify-center p-4 bg-fuchsia-500/10 border-2 border-fuchsia-500/50 text-fuchsia-300 transition-all duration-300 hover:bg-fuchsia-500/30 hover:neon-border-pink hover:-translate-y-1 group"
            >
              <link.icon className="w-12 h-12 mb-2 transition-transform duration-300 group-hover:scale-110" />
              <span className="uppercase tracking-widest font-bold">{link.name}</span>
            </a>
          ))}
        </div>
      </NeonCard>
    </div>
  );
};

export default Contact;
