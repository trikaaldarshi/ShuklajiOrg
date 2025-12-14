import React, { useState } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { SEO } from '../components/SEO';
import { BLOG_POSTS } from '../data';

export const BlogPost: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [copied, setCopied] = useState(false);
  const post = BLOG_POSTS.find(p => p.slug === slug);

  if (!post) {
    return <Navigate to="/articles" replace />;
  }

  // Schema for Article
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "image": "https://shuklaji.org/default-og.png", // Placeholder
    "editor": "Shuklaji",
    "genre": post.category,
    "keywords": `${post.category} preparation, Shuklaji, strategy`,
    "wordcount": "1200", // Approx
    "publisher": {
      "@type": "Organization",
      "name": "Shuklaji.org"
    },
    "url": `https://shuklaji.org/articles/${post.slug}`,
    "datePublished": post.date,
    "dateCreated": post.date,
    "description": post.excerpt,
    "articleBody": post.content.replace(/<[^>]*>?/gm, '') // Strip HTML for schema body preview
  };

  const shareUrl = typeof window !== 'undefined' ? window.location.href : '';
  const shareText = `Read "${post.title}" by Shuklaji`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      <SEO 
        title={`${post.title} - Shuklaji`}
        description={post.excerpt}
        type="article"
        schema={articleSchema}
      />

      <article className="max-w-3xl mx-auto px-6 py-16">
        <div className="mb-10 text-center md:text-left">
          <Link to="/articles" className="text-xs font-bold text-slate-400 hover:text-slate-900 uppercase tracking-widest mb-4 inline-block transition-colors">
            &larr; Back to Articles
          </Link>
          <div className="flex gap-3 text-sm text-slate-500 mb-4 justify-center md:justify-start">
             <span>{post.category}</span>
             <span>&bull;</span>
             <span>{post.date}</span>
          </div>
          <h1 className="font-display text-3xl md:text-5xl text-slate-900 leading-tight mb-6 transition-colors">
            {post.title}
          </h1>
          <p className="text-xl text-slate-600 font-light leading-relaxed transition-colors">
            {post.excerpt}
          </p>
        </div>

        <div className="w-full h-px bg-slate-200 mb-10 transition-colors"></div>

        {/* Prose Content */}
        <div 
          className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-normal prose-a:text-blue-900 hover:prose-a:text-blue-700 max-w-none text-slate-800 transition-colors"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        {/* Social Sharing Section */}
        <div className="mt-10 pt-8 border-t border-slate-100 transition-colors">
          <h4 className="font-serif font-bold text-slate-900 mb-4 text-sm uppercase tracking-widest">Share this article</h4>
          <div className="flex flex-wrap gap-3">
            <a 
              href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 px-4 py-2 rounded-xl hover:border-slate-900 transition-colors"
            >
              Twitter / X
            </a>
            <a 
              href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 px-4 py-2 rounded-xl hover:border-slate-900 transition-colors"
            >
              LinkedIn
            </a>
            <button 
              onClick={handleCopyLink}
              className="text-sm font-medium text-slate-600 hover:text-slate-900 border border-slate-200 px-4 py-2 rounded-xl hover:border-slate-900 transition-colors min-w-[100px]"
            >
              {copied ? 'Copied!' : 'Copy Link'}
            </button>
          </div>
        </div>
        
        <div className="mt-12 pt-10 border-t border-slate-200 transition-colors">
           <h3 className="font-serif font-bold text-slate-900 mb-2">Shuklaji</h3>
           <p className="text-slate-500 text-sm">Official website. Copyright &copy; {new Date().getFullYear()}.</p>
        </div>
      </article>
    </>
  );
};