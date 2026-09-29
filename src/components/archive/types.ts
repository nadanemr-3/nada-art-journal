export type ArchiveCategoryKey = 'all' | 'notice' | 'keep' | 'fascinations' | 'return';

export interface ArchiveItem {
  id: string;
  category: 'notice' | 'keep' | 'fascinations' | 'return';
  symbol: 'noticed' | 'thought' | 'connection' | 'spark' | 'return' | 'discarded';
  title: string;
  note: string;
  domain?: string;
  tag: string;
  date?: string;
  src?: string;
  alt?: string;
  aspect?: 'landscape' | 'portrait' | 'square';
  isPlaceholder?: boolean;
}
