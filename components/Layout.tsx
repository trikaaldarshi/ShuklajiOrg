import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Lock body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const isActive = (path: string) => {
    const baseClasses = "transition-colors duration-200";
    return location.pathname === path 
      ? `${baseClasses} text-slate-900 font-medium border-b-2 border-slate-900` 
      : `${baseClasses} text-slate-500 hover:text-slate-900 border-b-2 border-transparent`;
  };

  const mobileLinkClass = (path: string) => {
    return location.pathname === path
      ? "text-2xl font-serif font-bold text-slate-900"
      : "text-2xl font-serif text-slate-500 hover:text-slate-900 transition-colors";
  };

  return (
    <div className="min-h-screen flex flex-col font-sans selection:bg-slate-200">
      <header 
        className={`sticky top-0 z-50 transition-all duration-300 ${
          isMenuOpen 
            ? 'bg-transparent border-transparent' 
            : 'border-b border-slate-100 bg-white/80 backdrop-blur-md'
        }`}
      >
        <div className="max-w-4xl mx-auto px-6 h-20 flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className="text-2xl font-serif font-bold tracking-tight text-slate-900 z-50 relative">
            Shuklaji<span className="text-slate-400">.org</span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8 text-sm tracking-wide">
            <Link to="/" className={isActive('/')}>Home</Link>
            <Link to="/about" className={isActive('/about')}>About</Link>
            <Link to="/articles" className={isActive('/articles')}>Articles</Link>
            <Link to="/ask" className={isActive('/ask')}>Ask AI</Link>
            <Link to="/resources" className={isActive('/resources')}>Resources</Link>
            <Link to="/contact" className={isActive('/contact')}>Contact</Link>
          </nav>
          
          <div className="md:hidden flex items-center gap-4 z-50 relative">
             {/* Mobile Menu Toggle Button */}
             <button 
                className="p-2 -mr-2 text-slate-900 focus:outline-none"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle menu"
            >
                <div className="w-8 h-8 flex items-center justify-center">
                {isMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-transform duration-300 rotate-90">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 transition-transform duration-300">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
                    </svg>
                )}
                </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay - Liquid Glass Theme */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden flex items-center justify-center">
          {/* Glass Background Layer */}
          <div className="absolute inset-0 bg-white/95 backdrop-blur-2xl transition-opacity duration-300"></div>
          
          {/* Menu Content */}
          <nav className="relative z-50 flex flex-col items-center space-y-8 p-6 animate-fade-in-up">
            <Link to="/" className={mobileLinkClass('/')}>Home</Link>
            <Link to="/about" className={mobileLinkClass('/about')}>About</Link>
            <Link to="/articles" className={mobileLinkClass('/articles')}>Articles</Link>
            <Link to="/ask" className={mobileLinkClass('/ask')}>Ask AI</Link>
            <Link to="/resources" className={mobileLinkClass('/resources')}>Resources</Link>
            <Link to="/contact" className={mobileLinkClass('/contact')}>Contact</Link>
            
            <div className="pt-12 flex gap-8">
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="text-slate-400 hover:text-slate-900 transition-colors">
                <span className="sr-only">Telegram</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                   <path d="M12 0C5.37 0 0 5.37 0 12s5.37 12 12 12 12-5.37 12-12S18.63 0 12 0zm5.88 8.16l-1.97 9.44c-.15.65-.54.81-1.09.5l-3.02-2.23-1.46 1.41c-.16.16-.3.3-.61.3l.22-3.09 5.63-5.11c.24-.22-.06-.34-.37-.12l-6.96 4.39-3-.94c-.65-.21-.66-.64.14-.95l11.7-4.5c.54-.2 1.01.13.75 1.05z"/>
                </svg>
              </a>
            </div>
          </nav>
        </div>
      )}

      <main className="flex-grow">
        {children}
      </main>

      <footer className="border-t border-slate-100 bg-slate-50 mt-20 transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-6 py-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="font-serif font-bold text-lg mb-4 text-slate-900">Shuklaji</h3>
              <p className="text-slate-600 text-sm leading-relaxed max-w-xs">
                Analyzing the intersection of policy, technology, and economics. 
                Dedicated to clarity in a noisy world.
              </p>
            </div>
            <div className="md:text-right">
              <h4 className="font-medium text-slate-900 mb-4">Connect</h4>
              <div className="flex flex-col md:items-end gap-2 text-sm text-slate-500">
                <a href="#" className="hover:text-slate-900">Twitter / X</a>
                <a href="#" className="hover:text-slate-900">Telegram</a>
                <a href="#" className="hover:text-slate-900">Email</a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400 uppercase tracking-widest gap-4">
            <div>
              &copy; {new Date().getFullYear()} Shuklaji.org. All Rights Reserved.
            </div>
            <div className="flex gap-6">
              <Link to="/privacy" className="hover:text-slate-600 transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-slate-600 transition-colors">Terms of Service</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};