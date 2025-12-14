import React from 'react';
import { SEO } from '../components/SEO';

export const About: React.FC = () => {
  return (
    <>
      <SEO 
        title="About Shuklaji - Analyst & Educator" 
        description="Learn about Shuklaji's background in Civil Services mentoring, technology analysis, and economic theory."
      />
      
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl md:text-5xl text-slate-900 mb-10 transition-colors">About Shuklaji</h1>
        
        <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-normal text-slate-700 leading-8 transition-colors">
          <p>
            I am a multidisciplinary analyst bridging the gap between traditional civil service preparation and the emerging digital economy.
          </p>
          <p>
            In a world overflowing with information, clarity is power. My work focuses on three distinct but interconnected pillars: <strong>Public Policy</strong>, <strong>Technology</strong>, and <strong>Financial Sovereignty</strong>.
          </p>
          
          <h3>Background</h3>
          <p>
            With years of experience analyzing the UPSC syllabus and Indian polity, I recognized early on that the traditional methods of learning were failing to keep pace with the digital age. I began advocating for a hybrid approach—combining the rigour of classical study with modern knowledge management systems.
          </p>

          <h3>Philosophy</h3>
          <p>
            I believe that true expertise is calm. It does not shout. This website serves as a repository for deep work, away from the dopamine-driven loops of social media. Whether you are an aspirant aiming for the services, or an investor looking to understand the macro picture of crypto, my goal is to provide you with signal, not noise.
          </p>

          <blockquote>
            "The illiterate of the 21st century will not be those who cannot read and write, but those who cannot learn, unlearn, and relearn." — Alvin Toffler
          </blockquote>
        </div>
      </div>
    </>
  );
};