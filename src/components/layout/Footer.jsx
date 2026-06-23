import { Heart } from 'lucide-react';
import { SOCIAL_LINKS, PERSONAL_INFO } from '@/data/personal';
import SocialIcon from '@/components/common/SocialIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/[0.06] dark:border-white/[0.06]" role="contentinfo">
      <div className="section-container py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-white dark:bg-white flex items-center justify-center">
                <span className="text-xs font-bold text-gray-900">B</span>
              </div>
              <span className="text-body font-semibold text-white dark:text-white">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-body-sm text-muted text-center md:text-left">
              Building digital experiences that matter.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {SOCIAL_LINKS.map((social) => (
              <SocialIcon
                key={social.name}
                icon={social.icon}
                url={social.url}
                label={social.name}
                size="sm"
              />
            ))}
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-8 border-t border-white/[0.04] dark:border-white/[0.04] flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-caption text-muted flex items-center gap-1">
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </p>
          <p className="text-caption text-muted flex items-center gap-1.5">
            Built with <Heart size={12} className="text-red-400 fill-red-400" /> using React + Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}