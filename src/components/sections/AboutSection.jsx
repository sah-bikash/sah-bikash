import { motion } from 'framer-motion';
import { Code2, Lightbulb, Layers, Sparkles } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import GlassCard from '@/components/common/GlassCard';
import { AnimatedStagger, AnimatedChild } from '@/components/common/AnimatedContainer';
import { ABOUT_TEXT } from '@/data/personal';

const highlights = [
  {
    icon: Code2,
    title: 'Clean Code',
    description: 'Writing maintainable, well-structured code that stands the test of time.',
  },
  {
    icon: Lightbulb,
    title: 'Problem Solver',
    description: 'Transforming complex challenges into elegant, efficient solutions.',
  },
  {
    icon: Layers,
    title: 'Full Stack',
    description: 'End-to-end development from responsive UIs to robust backend systems.',
  },
  {
    icon: Sparkles,
    title: 'Always Learning',
    description: 'Staying current with emerging technologies and industry best practices.',
  },
];

export default function AboutSection() {
  const paragraphs = ABOUT_TEXT.split('\n\n');

  return (
    <section id="about" className="section-padding relative" aria-label="About Me">
      <div className="section-container">
        <SectionTitle
          title="About Me"
          subtitle="A passionate engineer with a love for building exceptional digital products."
        />

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16 items-start">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3 space-y-5"
          >
            {paragraphs.map((p, i) => (
              <p key={i} className="text-body-lg text-muted leading-relaxed">
                {p}
              </p>
            ))}
          </motion.div>

          {/* Highlight Cards */}
          <AnimatedStagger className="lg:col-span-2 grid grid-cols-2 gap-4">
            {highlights.map((item) => (
              <AnimatedChild key={item.title}>
                <GlassCard className="p-5 text-center group">
                  <div className="w-11 h-11 rounded-xl bg-white/[0.04] dark:bg-white/[0.04] border border-white/[0.06] flex items-center justify-center mx-auto mb-4 group-hover:bg-white/[0.08] transition-colors duration-300">
                    <item.icon size={20} className="text-muted group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-body font-semibold text-white dark:text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-caption text-muted leading-relaxed">
                    {item.description}
                  </p>
                </GlassCard>
              </AnimatedChild>
            ))}
          </AnimatedStagger>
        </div>
      </div>
    </section>
  );
}