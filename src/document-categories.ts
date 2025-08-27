// Shared mapping between UI labels and API/backend snake_case codes for document categories.
// Frontend should prefer labels for display; backend and APIs should use codes.

export type DocumentCategoryLabel =
  | 'Medical Records'
  | 'Police Reports'
  | 'Depositions'
  | 'Photos'
  | 'Witness Statements'
  | 'Expert Reports'
  | 'Insurance Documents'
  | 'Other';

export type DocumentCategoryCode =
  | 'medical_records'
  | 'police_reports'
  | 'depositions'
  | 'photos'
  | 'witness_statements'
  | 'expert_reports'
  | 'insurance_documents'
  | 'other';

export const CATEGORY_CODE_TO_LABEL: Record<DocumentCategoryCode, DocumentCategoryLabel> = {
  medical_records: 'Medical Records',
  police_reports: 'Police Reports',
  depositions: 'Depositions',
  photos: 'Photos',
  witness_statements: 'Witness Statements',
  expert_reports: 'Expert Reports',
  insurance_documents: 'Insurance Documents',
  other: 'Other',
};

export const CATEGORY_LABEL_TO_CODE: Record<DocumentCategoryLabel, DocumentCategoryCode> = {
  'Medical Records': 'medical_records',
  'Police Reports': 'police_reports',
  'Depositions': 'depositions',
  Photos: 'photos',
  'Witness Statements': 'witness_statements',
  'Expert Reports': 'expert_reports',
  'Insurance Documents': 'insurance_documents',
  Other: 'other',
};

export function toCategoryLabel(
  value: DocumentCategoryLabel | DocumentCategoryCode | string
): DocumentCategoryLabel {
  if ((CATEGORY_CODE_TO_LABEL as any)[value]) {
    return (CATEGORY_CODE_TO_LABEL as any)[value] as DocumentCategoryLabel;
  }
  return (value as DocumentCategoryLabel) ?? 'Other';
}

export function toCategoryCode(
  value: DocumentCategoryLabel | DocumentCategoryCode | string
): DocumentCategoryCode {
  if ((CATEGORY_LABEL_TO_CODE as any)[value]) {
    return (CATEGORY_LABEL_TO_CODE as any)[value] as DocumentCategoryCode;
  }
  return (value as DocumentCategoryCode) ?? 'other';
}

