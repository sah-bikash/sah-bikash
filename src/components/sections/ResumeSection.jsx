import { motion } from 'framer-motion';
import { Download, FileText, ExternalLink } from 'lucide-react';
import GlassCard from '@/components/common/GlassCard';
import Button from '@/components/common/Button';
import { PERSONAL_INFO } from '@/data/personal';

export default function ResumeSection() {
  return (
    <section className="section-padding relative" aria-label="Resume">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl mx-auto"
        >
          <GlassCard glow className="p-8 sm:p-12 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[300px] h-[200px] rounded-full bg-white/[0.02] dark:bg-white/[0.02] blur-3xl" />
            </div>

            <div className="relative z-10">
              {/* Icon */}
              <div className="w-16 h-16 rounded-2xl bg-white/[0.05] dark:bg-white/[0.05] border border-white/[0.08] flex items-center justify-center mx-auto mb-6">
                <FileText size={28} className="text-muted" />
              </div>

              <h2 className="text-heading-xl sm:text-display gradient-text mb-4">
                Download My Resume
              </h2>
              <p className="text-body-lg text-muted max-w-lg mx-auto mb-8 leading-relaxed">
                Get a comprehensive overview of my skills, experience, and achievements 
                in a beautifully formatted document.
              </p>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a href={PERSONAL_INFO.resumeUrl} download>
                  <Button size="lg" variant="primary">
                    <Download size={18} />
                    Download PDF
                  </Button>
                </a>
                <a href={PERSONAL_INFO.resumeUrl} target="_blank" rel="noopener noreferrer">
                  <Button size="lg" variant="secondary">
                    <ExternalLink size={18} />
                    View Online
                  </Button>
                </a>
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </section>
  );
}