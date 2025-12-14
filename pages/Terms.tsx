import React from 'react';
import { SEO } from '../components/SEO';

export const Terms: React.FC = () => {
  return (
    <>
      <SEO 
        title="Terms of Service - Shuklaji" 
        description="Terms of Service and Disclaimers for Shuklaji.org" 
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl text-slate-900 mb-8 transition-colors">Terms of Service</h1>
        
        <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-normal text-slate-700 leading-relaxed transition-colors">
           <p className="text-sm text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>

           <h3>1. Acceptance of Terms</h3>
           <p>
             By accessing and using <strong>Shuklaji.org</strong>, you accept and agree to be bound by the terms and provision of this agreement. In addition, when using these particular services, you shall be subject to any posted guidelines or rules applicable to such services.
           </p>

           <h3>2. Educational Purpose & Financial Disclaimer</h3>
           <p>
             <strong>Important:</strong> The content provided on this website, particularly relating to Cryptocurrency, Markets, and Economics, is for <strong>informational and educational purposes only</strong>.
           </p>
           <p>
             Nothing contained on this site constitutes a solicitation, recommendation, endorsement, or offer to buy or sell any securities or other financial instruments. I am an analyst, not a registered financial advisor. You should consult with a professional financial advisor before making any investment decisions.
           </p>

           <h3>3. Intellectual Property</h3>
           <p>
             The content, organization, graphics, design, compilation, and other matters related to the Site are protected under applicable copyrights and intellectual property rights. The copying, redistribution, use or publication by you of any such matters or any part of the Site is strictly prohibited without express written permission.
           </p>

           <h3>4. Accuracy of Information</h3>
           <p>
             While we strive to keep the information up-to-date and correct, we make no representations or warranties of any kind, express or implied, about the completeness, accuracy, reliability, suitability or availability with respect to the website or the information, products, services, or related graphics contained on the website for any purpose.
           </p>

           <h3>5. Limitation of Liability</h3>
           <p>
             In no event shall Shuklaji, nor any of its officers, directors and employees, be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Shuklaji, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
           </p>
        </div>
      </div>
    </>
  );
};