import React from 'react';
import { SEO } from '../components/SEO';

export const Privacy: React.FC = () => {
  return (
    <>
      <SEO 
        title="Privacy Policy - Shuklaji" 
        description="Privacy Policy for Shuklaji.org" 
      />
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl text-slate-900 mb-8 transition-colors">Privacy Policy</h1>
        
        <div className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-normal text-slate-700 leading-relaxed transition-colors">
          <p className="text-sm text-slate-500 mb-8">Last updated: {new Date().toLocaleDateString()}</p>
          
          <p>
            Your privacy is important to us. It is Shuklaji's policy to respect your privacy regarding any information we may collect from you across our website.
          </p>

          <h3>1. Information We Collect</h3>
          <p>
            We adhere to a principle of data minimization. We only ask for personal information when we truly need it to provide a service to you. We collect it by fair and lawful means, with your knowledge and consent. We also let you know why we’re collecting it and how it will be used.
          </p>

          <h3>2. Log Data</h3>
          <p>
            When you visit our website, our servers (hosted via standard web infrastructure) may automatically log the standard data provided by your web browser. This data is considered "non-identifying information", as it does not personally identify you on its own. It may include your computer’s Internet Protocol (IP) address, your browser type and version, the pages you visit, the time and date of your visit, the time spent on each page, and other details.
          </p>

          <h3>3. Cookies</h3>
          <p>
            We use "cookies" to collect information about you and your activity across our site. A cookie is a small piece of data that our website stores on your computer, and accesses each time you visit, so we can understand how you use our site. This helps us serve you content based on preferences you have specified.
          </p>

          <h3>4. Security</h3>
          <p>
            We take security seriously. Since this site is statically generated and hosted securely, the attack surface is minimal. However, remember that no method of transmission over the internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
          </p>

          <h3>5. Links to Other Sites</h3>
          <p>
            Our website may contain links to other sites that are not operated by us (e.g., Notion, Twitter, Telegram). If you click on a third-party link, you will be directed to that third party's site. We strongly advise you to review the Privacy Policy of every site you visit. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.
          </p>

          <h3>6. Contact Us</h3>
          <p>
            If you have any questions about this Privacy Policy, you can contact us at: <a href="mailto:contact@shuklaji.org">contact@shuklaji.org</a>
          </p>
        </div>
      </div>
    </>
  );
};