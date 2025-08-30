import { PackageSection, GenerationProgress } from './document';

// Error response structure
export interface ApiErrorResponse {
  error: {
    code: string;
    message: string;
    details?: Record<string, any>;
  };
}

// Package overview response
export interface PackageOverviewResponse {
  sections: PackageSection[];
  generation: GenerationProgress;
  totals: {
    pages: number;
    completedSections: number;
    sectionCount: number;
  };
}

// Package generation request
export interface PackageGenerateRequest {
  sections?: string[];
  options?: {
    regenerateCompleted?: boolean;
  };
}

// Package generation response
export interface PackageGenerateResponse {
  jobId: string;
  generation: GenerationProgress;
  message: string;
}

// Package status response
export interface PackageStatusResponse {
  generation: GenerationProgress;
  sections: PackageSection[];
}

// Section preview response
export interface SectionPreviewResponse {
  format: 'pdf' | 'html';
  url?: string;    // for PDF format
  html?: string;   // for HTML format
  pages?: number;  // for HTML format
}

// Download response
export interface DownloadResponse {
  url: string;
}

// SSE event types (unified)
export type SSEEventType = 'mediation.progress';

export interface SSEEvent {
  type: SSEEventType;
  data: Record<string, any>;
}

// Common error codes
export const ERROR_CODES = {
  INVALID_INPUT: 'INVALID_INPUT',
  UNAUTHORIZED: 'UNAUTHORIZED', 
  FORBIDDEN: 'FORBIDDEN',
  NOT_FOUND: 'NOT_FOUND',
  PAYLOAD_TOO_LARGE: 'PAYLOAD_TOO_LARGE',
  GENERATION_RUNNING: 'GENERATION_RUNNING',
  NO_READY_DOCUMENTS: 'NO_READY_DOCUMENTS',
  INTERNAL_ERROR: 'INTERNAL_ERROR',
} as const;

export type ErrorCode = typeof ERROR_CODES[keyof typeof ERROR_CODES];
