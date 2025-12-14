import React from 'react';
import { SEO } from '../components/SEO';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  return (
    <>
      <SEO 
        title="Shuklaji — Official Website"
        description="Official knowledge hub of Shuklaji. Expert analysis on UPSC preparation, Crypto markets, and Technology."
      />
      
      {/* Hero Section */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center md:text-left">
          {/* Using font-display (Belion/DM Serif) without font-bold for cleaner rendering */}
          <h1 className="font-display text-5xl md:text-7xl text-slate-900 mb-8 leading-tight tracking-tight transition-colors">
            Clarity in a Complex World.
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed font-light mb-10 max-w-2xl transition-colors">
            Welcome to the official digital archive of <strong>Shuklaji</strong>. 
            Here, I deconstruct the complexities of Civil Services (UPSC), 
            navigate the volatility of Crypto markets, and explore the 
            tools of Digital Sovereignty.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link to="/articles" className="bg-slate-900 text-white px-8 py-3 rounded-2xl font-medium hover:bg-slate-800 transition-colors">
              Read Analysis
            </Link>
            <Link to="/about" className="bg-white border border-slate-300 text-slate-700 px-8 py-3 rounded-2xl font-medium hover:bg-slate-50 transition-colors">
              About Me
            </Link>
          </div>
        </div>
      </section>

      {/* Pillars Section */}
      <section className="bg-slate-50 py-20 px-6 border-y border-slate-100 transition-colors duration-300">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-12">
            
            <div className="space-y-4">
              <h2 className="font-display text-2xl text-slate-900 transition-colors">UPSC & Policy</h2>
              <p className="text-slate-600 leading-relaxed text-sm transition-colors">
                Moving beyond rote learning. Developing the 'Officer Mindset' required to understand Indian polity, economy, and administrative ethics.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl text-slate-900 transition-colors">Tech & Tools</h2>
              <p className="text-slate-600 leading-relaxed text-sm transition-colors">
                Leveraging digital tools like Obsidian and Notion to build a 'Second Brain'. Technology should serve your intellect, not distract it.
              </p>
            </div>

            <div className="space-y-4">
              <h2 className="font-display text-2xl text-slate-900 transition-colors">Crypto & Markets</h2>
              <p className="text-slate-600 leading-relaxed text-sm transition-colors">
                Long-form analysis of Bitcoin cycles and decentralized finance. separating the signal of innovation from the noise of speculation.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Latest Updates Teaser */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="font-display text-3xl text-slate-900 transition-colors">Recent Thinking</h2>
            <Link to="/articles" className="text-sm text-slate-500 hover:text-slate-900 border-b border-transparent hover:border-slate-900 transition-all">View Archive &rarr;</Link>
          </div>
          
          <div className="space-y-8">
             <div className="group cursor-pointer">
                <Link to="/articles/upsc-mindset-digital-age" className="block">
                  <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">UPSC Strategy</span>
                  <h3 className="text-xl font-medium text-slate-900 mt-1 group-hover:text-blue-900 transition-colors">The UPSC Mindset in a Digital Age</h3>
                  <p className="text-slate-500 mt-2 line-clamp-2">How to maintain deep focus in an era of constant algorithmic distraction and building a digital library.</p>
                </Link>
             </div>
             <div className="w-full h-px bg-slate-100 transition-colors"></div>
             <div className="group cursor-pointer">
                <Link to="/articles/crypto-cycles-economic-history" className="block">
                  <span className="text-xs font-bold tracking-wider text-slate-400 uppercase">Market Analysis</span>
                  <h3 className="text-xl font-medium text-slate-900 mt-1 group-hover:text-blue-900 transition-colors">Crypto Market Cycles vs. Economic History</h3>
                  <p className="text-slate-500 mt-2 line-clamp-2">Analyzing the volatility of digital assets not as chaos, but as the natural growing pains of a new monetary standard.</p>
                </Link>
             </div>
          </div>
        </div>
      </section>
    </>
  );
};