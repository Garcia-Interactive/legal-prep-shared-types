import type { DocumentCategoryLabel, DocumentCategoryCode } from './document-categories';

// UI display label type (backwards compatible export)
export type DocumentCategory = DocumentCategoryLabel;

export type FileStatus = 'uploading' | 'completed' | 'error';

export interface DocumentFile {
  id: string;
  name: string;
  size: number;
  category: DocumentCategory; // UI label used in components
  categoryCode?: DocumentCategoryCode; // snake_case code used by API/backend
  status: FileStatus;
  progress: number;
  type: string;
  file?: File;
}

export type PackageStatus = 'completed' | 'processing' | 'pending';

export interface PackageSection {
  id: string;
  title: string;
  description: string;
  pages: number;
  status: PackageStatus;
}

export interface GenerationProgress {
  isGenerating: boolean;
  progress: number;
  currentSection: string;
}
