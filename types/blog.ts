export interface BlogPostMeta {
  title: string;
  description: string;
  date: string;
  category?: string;
  tags?: string[];
}

export interface BlogPost extends BlogPostMeta {
  id: string;
  slug: string;
  contentHtml?: string;
  readTime?: number;
}

export interface BlogPostData extends BlogPost {
  contentHtml: string;
  nextPost: BlogPost | null;
  previousPost: BlogPost | null;
}