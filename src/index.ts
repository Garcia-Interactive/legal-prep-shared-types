export * from './document';
export type { paths, components } from './api';

// Helpful top-level aliases for common schema types
import type { components as _components } from './api';
export type ListingResponse = _components['schemas']['ListingResponse'];
export type ListingListResponse = _components['schemas']['ListingListResponse'];
export type SingleListingResponse = _components['schemas']['SingleListingResponse'];
