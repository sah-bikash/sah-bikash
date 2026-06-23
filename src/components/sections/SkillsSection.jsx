import { Monitor, Server, Database, Wrench } from 'lucide-react';
import SectionTitle from '@/components/common/SectionTitle';
import GlassCard from '@/components/common/GlassCard';
import TechIcon from '@/components/common/TechIcon';
import { AnimatedStagger, AnimatedChild } from '@/components/common/AnimatedContainer';
import { SKILLS_DATA } from '@/data/skills';
import { cn } from '@/lib/utils';

const CATEGORY_ICONS = {
  monitor: Monitor,
  server: Server,
  database: Database,
  wrench: Wrench,
};

function SkillItem({ skill }) {
  return (
    <div
      className={cn(
        'flex flex-col items-center gap-3 p-4 rounded-xl',
        'bg-white/[0.02] border border-white/[0.05]',
        'hover:bg-white/[0.05] hover:border-white/[0.12]',
        'hover:-translate-y-0.5',
        'transition-all duration-300 ease-out'
      )}
    >
      {/* Icon container */}
      <div className="w-10 h-10 text-white/60">
        <TechIcon name={skill.icon} />
      </div>

      {/* Name */}
      <span className="text-sm font-semibold text-white/80 tracking-tight">
        {skill.name}
      </span>
    </div>
  );
}

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding relative" aria-label="Skills">
      <div className="section-container">
        <SectionTitle
          title="Skills & Expertise"
          subtitle="Technologies and tools I use to bring ideas to life."
        />

        <AnimatedStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS_DATA.map((category) => {
            const CategoryIcon = CATEGORY_ICONS[category.icon] || Monitor;

            return (
              <AnimatedChild key={category.category}>
                <GlassCard className="p-6 h-full flex flex-col">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.05] border border-white/[0.08] flex items-center justify-center">
                      <CategoryIcon size={20} className="text-muted" />
                    </div>
                    <div>
                      <h3 className="text-heading font-semibold text-white">
                        {category.category}
                      </h3>
                    </div>
                  </div>

                  <p className="text-caption text-muted mb-6 leading-relaxed">
                    {category.description}
                  </p>

                  {/* Skills Grid */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    {category.skills.map((skill) => (
                      <SkillItem key={skill.name} skill={skill} />
                    ))}
                  </div>
                </GlassCard>
              </AnimatedChild>
            );
          })}
        </AnimatedStagger>
      </div>
    </section>
  );
}