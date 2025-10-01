// FIX: Import React to resolve 'Cannot find namespace 'React'' error.
import React from 'react';

export enum FileCategory {
  PDF = 'PDF',
  IMAGE = 'Image',
  DOCUMENT = 'Document',
}

export interface PortfolioFile {
  id: number;
  title: string;
  description: string;
  category: FileCategory;
  url: string; // URL for download/view
}

export interface ContactLink {
  id: number;
  name: string;
  url: string;
  icon: React.ComponentType<{ className?: string }>;
}