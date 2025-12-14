import React from 'react';
import { SEO } from '../components/SEO';
import { RESOURCES } from '../data';

export const Resources: React.FC = () => {
  return (
    <>
      <SEO 
        title="Recommended Resources - Shuklaji" 
        description="Curated list of digital tools, websites, and readings recommended by Shuklaji."
      />

      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl text-slate-900 mb-6 transition-colors">Resources</h1>
        <p className="text-slate-600 mb-12 text-lg transition-colors">
          A curated list of tools, platforms, and readings that I personally use and recommend for productivity, research, and market analysis.
        </p>

        <div className="grid gap-8">
          {RESOURCES.map((resource) => (
            <div key={resource.id} className="bg-slate-50 border border-slate-100 p-6 rounded-sm hover:border-slate-300 transition-colors">
              <div className="flex justify-between items-start mb-2">
                <h3 className="font-display text-xl text-slate-900 transition-colors">{resource.title}</h3>
                <span className="text-xs bg-white border border-slate-200 px-2 py-1 text-slate-500 uppercase tracking-wide transition-colors">
                  {resource.category}
                </span>
              </div>
              <p className="text-slate-600 mb-4 leading-relaxed transition-colors">
                {resource.description}
              </p>
              <a 
                href={resource.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-sm font-bold text-slate-900 hover:underline"
              >
                Visit Website &rarr;
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};