import { motion } from 'framer-motion';
import { Briefcase, MapPin, Calendar } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import GlassCard from '@/components/common/GlassCard';
import { EXPERIENCE_DATA } from '@/data/experience';

function ExperienceCard({ experience, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="relative flex gap-6 md:gap-10"
    >
      {/* ── Timeline ── */}
      <div className="hidden md:flex flex-col items-center">
        {/* Dot — uses currentColor-friendly tokens */}
        <div
          className="w-4 h-4 rounded-full flex-shrink-0 mt-2 relative z-10
                     bg-gray-900/15 border-2 border-gray-900/40
                     dark:bg-white/20 dark:border-white/40"
        />
        {/* Connecting line */}
        {!isLast && (
          <div
            className="w-px flex-1 mt-1
                       bg-gradient-to-b from-gray-900/25 to-gray-900/[0.04]
                       dark:from-white/25 dark:to-white/[0.04]"
          />
        )}
      </div>

      {/* ── Content ── */}
      <GlassCard className="flex-1 p-6 sm:p-8 mb-6 group">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-4">
          <div>
            <h3 className="text-heading-lg font-semibold text-white group-hover:gradient-text transition-all duration-300">
              {experience.position}
            </h3>
            <div className="flex items-center gap-2 mt-1">
              <Briefcase size={14} className="text-muted" />
              <span className="text-base font-medium text-white/70">
                {experience.company}
              </span>
            </div>
          </div>

          <div className="flex flex-col items-start sm:items-end gap-1 flex-shrink-0">
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <Calendar size={12} />
              {experience.duration}
            </span>
            <span className="inline-flex items-center gap-1.5 text-xs text-muted">
              <MapPin size={12} />
              {experience.location}
            </span>
          </div>
        </div>

        {/* Description */}
        <p className="text-base text-muted leading-relaxed mb-5">
          {experience.description}
        </p>

        {/* Achievements */}
        <ul className="space-y-2.5 mb-6">
          {experience.achievements.map((achievement, i) => (
            <li key={i} className="flex items-start gap-3 text-sm text-muted">
              <span className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0
                               bg-gray-900/30 dark:bg-white/30" />
              {achievement}
            </li>
          ))}
        </ul>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <span
              key={tech}
              className="px-3 py-1 text-xs font-medium rounded-lg
                         bg-white/[0.04] text-white/60 border border-white/[0.06]"
            >
              {tech}
            </span>
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}

export default function ExperienceSection() {
  return (
    <section id="experience" className="section-padding relative" aria-label="Experience">
      <div className="section-container">
        <SectionTitle
          title="Experience"
          subtitle="My professional journey building impactful software products."
        />

        <div className="max-w-4xl mx-auto">
          {EXPERIENCE_DATA.map((exp, index) => (
            <ExperienceCard
              key={exp.id}
              experience={exp}
              index={index}
              isLast={index === EXPERIENCE_DATA.length - 1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}