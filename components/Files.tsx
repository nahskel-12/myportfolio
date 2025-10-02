import React, { useState } from 'react';
import { FileCategory, type PortfolioFile } from '../types';
import NeonCard from './NeonCard';
import PDFIcon from './icons/PDFIcon';
import ImageIcon from './icons/ImageIcon';
import DocumentIcon from './icons/DocumentIcon';
import PasswordModal from './PasswordModal';

const filesData: PortfolioFile[] = [
  { id: 1, title: 'Neural Networks 101', description: 'An introductory PDF on the fundamentals of neural network architecture.', category: FileCategory.PDF, url: '#' },
  { id: 2, title: 'Cybernetic Augmentations Concept Art', description: 'High-resolution concept images of futuristic cybernetics.', category: FileCategory.IMAGE, url: '#' },
  { id: 3, title: 'Quantum Computing Research Paper', description: 'A whitepaper detailing recent breakthroughs in quantum state manipulation.', category: FileCategory.DOCUMENT, url: '#' },
  { id: 4, title: 'React Hooks Deep Dive', description: 'Advanced guide to mastering React Hooks for state management.', category: FileCategory.PDF, url: '#' },
  { id: 5, title: 'Class 10 CQ Question', description: 'An exam question to test yourself.', category: FileCategory.PDF, url: 'https://drive.google.com/file/d/1ZAWGFETTgKGqTgom1Z3HH5hymYNm9Wkk/view?usp=sharing' },
  { id: 6, title: 'Class 10 CQ Question', description: 'An exam question to test yourself.', category: FileCategory.PDF, url: 'https://drive.google.com/file/d/1ZAWGFETTgKGqTgom1Z3HH5hymYNm9Wkk/view?usp=sharing' },
];

const FileIcon = ({ category }: { category: FileCategory }) => {
  switch (category) {
    case FileCategory.PDF:
      return <PDFIcon className="w-8 h-8 text-fuchsia-400" />;
    case FileCategory.IMAGE:
      return <ImageIcon className="w-8 h-8 text-fuchsia-400" />;
    case FileCategory.DOCUMENT:
      return <DocumentIcon className="w-8 h-8 text-fuchsia-400" />;
    default:
      return null;
  }
};

const Files: React.FC = () => {
  const [selectedFile, setSelectedFile] = useState<PortfolioFile | null>(null);

  return (
    <div className="animate-fade-in">
      <h2 className="text-4xl md:text-5xl font-bold uppercase mb-8 text-center neon-text-cyan glitch-effect" data-text="[Files Archive]">
        [Files Archive]
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filesData.map((file) => (
          <NeonCard key={file.id} borderColor="cyan" className="flex flex-col">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-2xl font-bold text-cyan-300 pr-4">{file.title}</h3>
              <FileIcon category={file.category} />
            </div>
            <p className="text-cyan-400/80 mb-4 flex-grow">{file.description}</p>
            <div className="mt-auto pt-4">
              <button 
                onClick={() => setSelectedFile(file)}
                className="inline-block w-full text-center bg-cyan-500/20 border-2 border-cyan-500 text-cyan-300 font-bold py-2 px-4 uppercase tracking-widest transition-all duration-300 hover:bg-cyan-500 hover:text-black hover:neon-border-cyan"
              >
                // Access File
              </button>
            </div>
          </NeonCard>
        ))}
      </div>
      <PasswordModal file={selectedFile} onClose={() => setSelectedFile(null)} />
    </div>
  );
};

export default Files;
