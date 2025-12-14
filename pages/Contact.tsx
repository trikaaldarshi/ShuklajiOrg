import React from 'react';
import { SEO } from '../components/SEO';

export const Contact: React.FC = () => {
  return (
    <>
      <SEO 
        title="Contact Shuklaji" 
        description="Get in touch for collaboration, queries, or consultation."
      />

      <div className="max-w-2xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl text-slate-900 mb-6 transition-colors">Contact</h1>
        <p className="text-slate-600 mb-10 text-lg transition-colors">
          I am available for speaking engagements, UPSC strategy consultation, and tech commentary.
        </p>

        <div className="bg-slate-50 p-8 rounded-sm border border-slate-100 transition-colors">
          <h3 className="font-bold text-slate-900 mb-4 transition-colors">Direct Channels</h3>
          <ul className="space-y-4 text-slate-700">
            <li className="flex items-center">
              <span className="w-24 font-medium text-slate-400 text-sm uppercase tracking-wide">Email</span>
              <a href="mailto:contact@shuklaji.org" className="hover:text-black transition-colors">contact@shuklaji.org</a>
            </li>
            <li className="flex items-center">
              <span className="w-24 font-medium text-slate-400 text-sm uppercase tracking-wide">Twitter</span>
              <a href="#" className="hover:text-black transition-colors">@shuklaji</a>
            </li>
            <li className="flex items-center">
              <span className="w-24 font-medium text-slate-400 text-sm uppercase tracking-wide">Telegram</span>
              <a href="#" className="hover:text-black transition-colors">t.me/shuklaji_official</a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};