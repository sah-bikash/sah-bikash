import { cn } from '@/lib/utils';

const icons = {
  React: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <circle cx="12" cy="12" r="1.5" fill="currentColor" stroke="none" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(0 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" />
    </svg>
  ),

  JavaScript: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Inter, system-ui, sans-serif">JS</text>
    </svg>
  ),

  TypeScript: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <rect x="2" y="2" width="20" height="20" rx="4" />
      <text x="12" y="16.5" textAnchor="middle" fontSize="9" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Inter, system-ui, sans-serif">TS</text>
    </svg>
  ),

  'Tailwind CSS': (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
      <path d="M4 10c2-3 5-3 7 0s5 3 7 0" />
      <path d="M4 14c2-3 5-3 7 0s5 3 7 0" opacity="0.5" />
    </svg>
  ),

  'Node.js': (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <path d="M12 2l8.66 5v10L12 22l-8.66-5V7z" />
      <text x="12" y="15.5" textAnchor="middle" fontSize="8" fontWeight="700" fill="currentColor" stroke="none" fontFamily="Inter, system-ui, sans-serif">N</text>
    </svg>
  ),

  'Express.js': (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" {...props}>
      <rect x="3" y="5" width="18" height="3.5" rx="1" />
      <rect x="3" y="10.25" width="18" height="3.5" rx="1" />
      <rect x="3" y="15.5" width="18" height="3.5" rx="1" />
    </svg>
  ),

  MongoDB: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...props}>
      <path d="M12 2c0 0-4 4-4 9c0 4 2 7 4 11c2-4 4-7 4-11c0-5-4-9-4-9z" />
      <path d="M12 6v10" opacity="0.3" />
    </svg>
  ),

  SQL: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <ellipse cx="12" cy="6" rx="8" ry="3" />
      <path d="M4 6v12c0 1.66 3.58 3 8 3s8-1.34 8-3V6" />
      <path d="M4 12c0 1.66 3.58 3 8 3s8-1.34 8-3" />
    </svg>
  ),

  Git: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <circle cx="6" cy="6" r="2" fill="currentColor" />
      <circle cx="6" cy="18" r="2" fill="currentColor" />
      <circle cx="18" cy="18" r="2" fill="currentColor" />
      <path d="M6 8v8" />
      <path d="M6 14h6c2 0 4-1.5 4-3.5V6" />
    </svg>
  ),

  GitHub: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <path d="M12 2C6.48 2 2 6.48 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12c0-5.52-4.48-10-10-10z" />
    </svg>
  ),

  'VS Code': (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      <polyline points="16 3 24 12 16 21" />
      <polyline points="8 3 0 12 8 21" />
    </svg>
  ),
    Docker: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...props}>
      {/* container grid */}
      <rect x="3"  y="13" width="3" height="3" />
      <rect x="6.5" y="13" width="3" height="3" />
      <rect x="10" y="13" width="3" height="3" />
      <rect x="6.5" y="9.5" width="3" height="3" />
      <rect x="10" y="9.5" width="3" height="3" />
      <rect x="10" y="6"   width="3" height="3" />
      {/* whale body */}
      <path d="M2 16h13c2.5 0 4.5-1.2 5.5-3 .5 .3 1.2 .4 1.7 .2-.3 1.8-1.7 3.3-3.5 3.8C17 18 14 19 11 19c-4 0-7-1-9-3z" />
      {/* spout */}
      <path d="M17 8c.5-.8 1.5-1 2.3-.5" strokeLinecap="round" />
    </svg>
  ),

  Vercel: (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" stroke="none" {...props}>
      <path d="M12 3 L22 20 H2 Z" />
    </svg>
  ),

  MySQL: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* dolphin-inspired cylinder */}
      <ellipse cx="12" cy="5.5" rx="8" ry="2.5" />
      <path d="M4 5.5v6c0 1.4 3.6 2.5 8 2.5s8-1.1 8-2.5v-6" />
      <path d="M4 11.5v6c0 1.4 3.6 2.5 8 2.5 1.5 0 2.9-.1 4.2-.4" />
      {/* tail accent */}
      <path d="M16 18l3 3 1-2-2-1z" fill="currentColor" stroke="none" />
    </svg>
  ),

  PostgreSQL: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
      {/* elephant head silhouette */}
      <path d="M5 9c0-3 2.5-5 6-5s6 2 6 5v3c0 2-1 3.5-2.5 4.5L13 18l-.5 2.5h-2L10 18l-1.5-1.5C7 15.5 6 14 6 12" />
      {/* trunk */}
      <path d="M14 16c1 .5 2 1.5 2 3" />
      {/* eye */}
      <circle cx="9.5" cy="9" r="0.6" fill="currentColor" stroke="none" />
      {/* tusk hint */}
      <path d="M12 14l1 1.5" />
    </svg>
  ),

  PHP: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" {...props}>
      <ellipse cx="12" cy="12" rx="10" ry="6" />
      <text
        x="12" y="15"
        textAnchor="middle"
        fontSize="6.5"
        fontWeight="700"
        fill="currentColor"
        stroke="none"
        fontFamily="Inter, system-ui, sans-serif"
        letterSpacing="0.5"
      >PHP</text>
    </svg>
  ),

  Python: (props) => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" {...props}>
      {/* top snake body */}
      <path d="M12 2c-3 0-5 1-5 3v3h6v1H5c-2 0-3 1.5-3 4s1 4 3 4h2v-3c0-2 1.5-3 3.5-3h4c2 0 3.5-1 3.5-3V5c0-2-2-3-5-3z" />
      {/* bottom snake body */}
      <path d="M12 22c3 0 5-1 5-3v-3h-6v-1h8c2 0 3-1.5 3-4s-1-4-3-4h-2v3c0 2-1.5 3-3.5 3h-4c-2 0-3.5 1-3.5 3v3c0 2 2 3 5 3z" opacity="0.55" />
      {/* eyes */}
      <circle cx="10" cy="5.2" r="0.5" fill="currentColor" stroke="none" />
      <circle cx="14" cy="18.8" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  ),
};

export default function TechIcon({ name, className }) {
  const Icon = icons[name] || icons['React'];
  return <Icon className={cn('w-full h-full', className)} />;
}