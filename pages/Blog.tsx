import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';
import { BLOG_POSTS } from '../data';

export const Blog: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPosts = BLOG_POSTS.filter((post) => {
    const query = searchQuery.toLowerCase();
    return (
      post.title.toLowerCase().includes(query) ||
      post.excerpt.toLowerCase().includes(query) ||
      post.category.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <SEO 
        title="Articles & Analysis - Shuklaji.org"
        description="Long-form writing on UPSC strategy, Crypto markets, and Digital Tools."
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl text-slate-900 mb-4 transition-colors">Articles</h1>
        <p className="text-slate-500 mb-8 text-lg transition-colors">Thinking aloud on policy, tech, and markets.</p>

        {/* Search Bar */}
        <div className="mb-12 relative">
          <input 
            type="text" 
            placeholder="Search analysis..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-transparent border-b border-slate-200 py-3 text-lg text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 transition-colors"
          />
          <div className="absolute right-0 top-3 text-slate-400 pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>

        <div className="space-y-12">
          {filteredPosts.length > 0 ? (
            filteredPosts.map((post) => (
              <article key={post.id} className="flex flex-col group">
                <div className="flex items-center gap-3 text-xs font-bold tracking-widest text-slate-400 uppercase mb-2">
                  <span>{post.date}</span>
                  <span>&bull;</span>
                  <span>{post.category}</span>
                  <span>&bull;</span>
                  <span>{post.readTime}</span>
                </div>
                <Link to={`/articles/${post.slug}`}>
                  <h2 className="text-2xl font-display text-slate-900 mb-3 group-hover:text-blue-900 transition-colors">
                    {post.title}
                  </h2>
                </Link>
                <p className="text-slate-600 leading-relaxed mb-4 transition-colors">
                  {post.excerpt}
                </p>
                <Link to={`/articles/${post.slug}`} className="text-sm font-medium text-slate-900 border-b border-slate-200 self-start hover:border-slate-900 transition-all">
                  Read Full Article
                </Link>
              </article>
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-slate-500 italic">No articles found matching "{searchQuery}"</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};