import { cn } from '@/lib/utils';
import {
  Github,
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  ExternalLink,
} from 'lucide-react';

const iconMap = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
  facebook: Facebook,
  instagram: Instagram,
  mail: Mail,
  phone: Phone,
  external: ExternalLink,
};

export default function SocialIcon({ icon, url, label, size = 'md', className }) {
  const Icon = iconMap[icon] || ExternalLink;

  const sizes = {
    sm: 'w-9 h-9',
    md: 'w-10 h-10',
    lg: 'w-12 h-12',
  };

  const iconSizes = {
    sm: 16,
    md: 18,
    lg: 20,
  };

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label || icon}
      className={cn(
        'inline-flex items-center justify-center rounded-xl',
        'bg-white/5 dark:bg-white/5 border border-white/10 dark:border-white/10',
        'hover:bg-white/10 dark:hover:bg-white/10 hover:border-white/20 dark:hover:border-white/20',
        'text-muted hover:text-white dark:hover:text-white',
        'transition-all duration-300 ease-out',
        'hover:-translate-y-0.5',
        sizes[size],
        className
      )}
    >
      <Icon size={iconSizes[size]} />
    </a>
  );
}