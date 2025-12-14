export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string; // HTML string for rich text
  date: string;
  category: 'UPSC' | 'Tech' | 'Crypto' | 'Philosophy';
  readTime: string;
}

export interface ResourceItem {
  id: string;
  title: string;
  description: string;
  link: string;
  category: string;
}

export interface SEOMeta {
  title: string;
  description: string;
  type?: 'website' | 'article' | 'profile';
  schema?: Record<string, any>;
}