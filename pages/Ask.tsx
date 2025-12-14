import React, { useState } from 'react';
import { SEO } from '../components/SEO';
import { GoogleGenerativeAI } from "@google/generative-ai";
import { marked } from "marked";

export const Ask: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!prompt.trim()) return;

    setLoading(true);
    setError(null);
    setResponse(null);

    try {
      const ai = new GoogleGenerativeAI(process.env.API_KEY as string);
      const result = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: prompt,
        config: {
          thinkingConfig: { thinkingBudget: 32768 },
          systemInstruction: "You are Shuklaji, an expert multidisciplinary analyst. You specialize in UPSC (Indian Civil Services), Cryptocurrency markets, and Digital Sovereignty/Technology. Your tone is intellectual, calm, authoritative, and insightful. You prioritize 'signal' over 'noise'. You use your extended thinking capabilities to deeply analyze complex queries, providing structured, nuanced, and comprehensive answers. You do not just give information; you give perspective. Format your response in clean Markdown."
        }
      });
      
      const text = result.text;
      if (text) {
        setResponse(text);
      } else {
        setError("No response generated. Please try again.");
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred while analyzing your query.");
    } finally {
      setLoading(false);
    }
  };

  // Convert markdown to HTML safely
  const getMarkdownText = (text: string) => {
    const rawMarkup = marked.parse(text);
    return { __html: rawMarkup as string };
  };

  return (
    <>
      <SEO 
        title="Ask Shuklaji - Deep Analysis Engine" 
        description="Powered by Gemini 3 Pro. Deep analysis on UPSC, Crypto, and Technology."
      />
      
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="font-display text-4xl text-slate-900 mb-6 transition-colors">Analysis Engine</h1>
        <p className="text-slate-600 mb-10 text-lg transition-colors">
          Leveraging <strong>Gemini 3 Pro</strong> with extended thinking capabilities. Ask complex questions about policy, markets, or digital sovereignty.
        </p>

        <div className="bg-slate-50 border border-slate-100 p-8 rounded-2xl mb-12 transition-colors">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="prompt" className="block text-sm font-bold text-slate-900 uppercase tracking-widest mb-2 transition-colors">
                Your Query
              </label>
              <textarea
                id="prompt"
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                placeholder="E.g., Analyze the long-term impact of CBDCs on personal privacy and the banking sector..."
                className="w-full h-40 p-4 bg-white border border-slate-200 rounded-2xl text-slate-900 placeholder:text-slate-400 focus:outline-none focus:border-slate-900 focus:ring-1 focus:ring-slate-900 transition-all resize-none text-lg"
                disabled={loading}
              />
            </div>
            <div className="flex items-center justify-between">
              <p className="text-xs text-slate-400 italic">
                {loading ? "Thinking deeply... This may take up to 60 seconds." : "Input complex queries for best results."}
              </p>
              <button
                type="submit"
                disabled={loading || !prompt.trim()}
                className={`px-8 py-3 rounded-2xl font-medium transition-all ${
                  loading || !prompt.trim()
                    ? 'bg-slate-200 text-slate-400 cursor-not-allowed'
                    : 'bg-slate-900 text-white hover:bg-slate-800'
                }`}
              >
                {loading ? (
                  <span className="flex items-center gap-2">
                    <svg className="animate-spin h-4 w-4 text-slate-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Analyzing...
                  </span>
                ) : 'Run Analysis'}
              </button>
            </div>
          </form>
        </div>

        {error && (
          <div className="p-4 mb-8 bg-red-50 text-red-700 rounded-xl border border-red-100">
            {error}
          </div>
        )}

        {response && (
          <div className="animate-fade-in-up">
            <h2 className="font-display text-2xl text-slate-900 mb-6 flex items-center gap-3">
              <span className="w-8 h-8 bg-slate-900 rounded-full flex items-center justify-center text-white text-sm font-serif transition-colors">S</span>
              Analysis
            </h2>
            <div 
              className="prose prose-lg prose-slate prose-headings:font-display prose-headings:font-normal prose-a:text-blue-900 hover:prose-a:text-blue-700 max-w-none text-slate-800 bg-white p-6 md:p-8 rounded-2xl transition-colors"
              dangerouslySetInnerHTML={getMarkdownText(response)}
            />
             <div className="mt-8 pt-8 border-t border-slate-100 flex justify-end">
                <button 
                  onClick={() => {
                    setPrompt('');
                    setResponse(null);
                  }}
                  className="text-sm text-slate-500 hover:text-slate-900 transition-colors"
                >
                  Clear & Start New Analysis
                </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};
