import { BlogPost, ResourceItem } from './types';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: '1',
    slug: 'upsc-mindset-digital-age',
    title: 'The UPSC Mindset in a Digital Age: Focus vs. Noise',
    date: 'October 24, 2023',
    category: 'UPSC',
    readTime: '8 min read',
    excerpt: 'Civil service preparation is no longer just about books; it is about information management. Here is how to maintain deep focus in an era of constant algorithmic distraction.',
    content: `
      <p>The modern aspirant faces a challenge that their predecessors never encountered: the weaponization of attention. While the syllabus of the UPSC remains static, the environment in which we study has become volatile.</p>
      <h3>The Myth of "More Information"</h3>
      <p>In the age of PDF collectors and Telegram channels, the primary scarce resource is not material, but synthesis. To clear the examination, one must transition from a consumer of content to an analyst of patterns.</p>
      <p>We see this in the changing nature of General Studies papers. The questions demand interdisciplinary linking—connecting geography to economics, and polity to ethics. This requires a "Slow Thinking" approach, modeled after Kahneman's System 2, rather than the rapid-fire consumption encouraged by social media feeds.</p>
      <h3>Digital Hygiene as a Prep Strategy</h3>
      <p>Successful candidates today are those who treat their digital input with the same rigor as their diet. This involves:</p>
      <ul>
        <li>Aggressive curation of news sources.</li>
        <li>Active recall over passive reading.</li>
        <li>Using technology for retrieval practice, not just consumption.</li>
      </ul>
      <p>The goal is to build a "Second Brain" that serves your intellect, rather than enslaving your attention span.</p>
    `
  },
  {
    id: '2',
    slug: 'crypto-cycles-economic-history',
    title: 'Crypto Market Cycles: Viewing Bitcoin Through Economic History',
    date: 'November 12, 2023',
    category: 'Crypto',
    readTime: '12 min read',
    excerpt: 'Analyzing the volatility of digital assets not as chaos, but as the natural growing pains of a new monetary standard, drawing parallels to the Gold Standard era.',
    content: `
      <p>To understand the current state of cryptocurrency, we must look backward before we look forward. The volatility we witness in Bitcoin is often dismissed by traditional economists as speculative mania. However, a study of monetary history suggests a different narrative: monetization is a violent process.</p>
      <h3>The Austrian Perspective</h3>
      <p>Sound money does not emerge overnight. It passes through stages: collectible, store of value, medium of exchange, and finally, unit of account. We are currently firmly in the transition between the first two stages.</p>
      <p>When we look at the 4-year halving cycles, we aren't just seeing supply shocks; we are witnessing the market attempting to price a scarce asset in a world drowning in fiat liquidity.</p>
      <h3>Institutional Adoption</h3>
      <p>The approval of ETFs and the entry of BlackRock signals the end of the "Wild West" era. For the retail investor, this changes the thesis. It is no longer about finding the next 100x altcoin, but about understanding position sizing within a diversified portfolio that accounts for macroeconomic shifts.</p>
    `
  },
  {
    id: '3',
    slug: 'digital-sovereignty',
    title: 'Digital Sovereignty: Why Owning Your Data is the New Land Ownership',
    date: 'December 05, 2023',
    category: 'Tech',
    readTime: '10 min read',
    excerpt: 'In the 21st century, feudalism has returned in digital form. Understanding self-hosting, encryption, and open source is crucial for personal liberty.',
    content: `
      <p>We live on rented land. Our social graphs belong to Meta, our professional networks to Microsoft, and our search intent to Google. This is Digital Feudalism.</p>
      <h3>The Case for Self-Hosting</h3>
      <p>Running your own server or managing your own keys is often seen as a hobby for geeks. I argue it is a civic duty. Just as literacy was the prerequisite for citizenship in the 20th century, "technical literacy"—specifically the ability to manage one's digital identity—is the prerequisite for freedom in the 21st.</p>
      <p>Tools like Nextcloud, Obsidian, and hardware wallets are not just gadgets; they are instruments of sovereignty. They ensure that your intellectual output remains yours, immune to de-platforming or algorithmic suppression.</p>
      <p>Shuklaji.org is built on these principles: minimal tracking, maximum ownership, and long-form thought.</p>
    `
  }
];

export const RESOURCES: ResourceItem[] = [
  {
    id: '1',
    title: 'Notion',
    description: 'The operating system for knowledge management. I use this for tracking UPSC syllabus progress.',
    link: 'https://notion.so',
    category: 'Productivity'
  },
  {
    id: '2',
    title: 'Obsidian',
    description: 'A local-first markdown knowledge base. Essential for connecting distinct ideas and "Zettelkasten" note-taking.',
    link: 'https://obsidian.md',
    category: 'Writing'
  },
  {
    id: '3',
    title: 'CoinGecko',
    description: 'The only objective source for crypto data, free from exchange bias.',
    link: 'https://coingecko.com',
    category: 'Crypto'
  },
  {
    id: '4',
    title: 'PRS Legislative Research',
    description: 'Indispensable for understanding Bills and Acts for Polity preparation.',
    link: 'https://prsindia.org',
    category: 'UPSC'
  }
];