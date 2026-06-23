import { motion } from 'framer-motion';
import { ArrowDown, Download, Eye } from 'lucide-react';
import Button from '@/components/common/Button';
import { PERSONAL_INFO } from '@/data/personal';

export default function HeroSection() {
  const handleScroll = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 80;
      const top = el.getBoundingClientRect().top + window.scrollY - offset;
      window.scrollTo({ top, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full bg-white/[0.02] dark:bg-white/[0.02] blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] rounded-full bg-white/[0.015] dark:bg-white/[0.015] blur-3xl animate-float-delayed" />
        {/* Grid Pattern */}
        <div
          className="absolute inset-0 opacity-[0.015]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '64px 64px',
          }}
        />
        {/* Radial gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-dark-bg dark:to-dark-bg" />
      </div>

      <div className="section-container relative z-10 pt-24 pb-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="mb-8"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-caption font-medium bg-white/[0.05] dark:bg-white/[0.05] border border-white/[0.08] dark:border-white/[0.08] text-muted backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for opportunities
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-display-lg sm:text-display-xl lg:text-[5.5rem] leading-[1.05] tracking-[-0.03em] font-bold gradient-text mb-6"
          >
            {PERSONAL_INFO.name}
          </motion.h1>

          {/* Role */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-subheading sm:text-heading text-muted font-medium mb-6"
          >
            {PERSONAL_INFO.role}
          </motion.p>

          {/* Headline */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="text-body-lg sm:text-subheading text-muted/70 max-w-2xl mx-auto mb-12 text-balance leading-relaxed"
          >
            {PERSONAL_INFO.subheadline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Button
              size="lg"
              variant="primary"
              onClick={() => handleScroll('projects')}
            >
              <Eye size={18} />
              View Projects
            </Button>
            <a href={PERSONAL_INFO.resumeUrl} download>
              <Button size="lg" variant="secondary">
                <Download size={18} />
                Download Resume
              </Button>
            </a>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="mt-20 flex justify-center"
          >
            <button
              onClick={() => handleScroll('about')}
              className="flex flex-col items-center gap-2 text-muted/40 hover:text-muted transition-colors duration-300 group"
              aria-label="Scroll to About section"
            >
              <span className="text-caption tracking-widest uppercase">Scroll</span>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
              >
                <ArrowDown size={16} className="group-hover:text-white transition-colors" />
              </motion.div>
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}