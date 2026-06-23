import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import GlassCard from './GlassCard';
import Button from './Button';

export default function ProjectCard({ project, index }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.16, 1, 0.3, 1],
            delay: index * 0.15,
          },
        },
      }}
    >
      <GlassCard className="group h-full flex flex-col overflow-hidden">

        {/* ── Image / Fallback ── */}
        <div className="relative h-52 sm:h-56 overflow-hidden bg-black/[0.04] dark:bg-white/[0.02] border-b border-white/[0.06]">
          {project.image ? (
            <>
              <img
                src={project.image}
                alt={`${project.title} preview`}
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* subtle overlay for legibility of badge */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent dark:from-black/40 pointer-events-none" />
            </>
          ) : (
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-16 h-16 rounded-2xl bg-white/5 dark:bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                <ArrowUpRight className="w-6 h-6 text-muted group-hover:text-white transition-colors duration-300" />
              </div>
            </div>
          )}

          {/* Category badge */}
          <div className="absolute top-4 left-4 z-10">
            <span className="px-3 py-1 text-xs font-medium rounded-full bg-black/40 dark:bg-white/10 text-white backdrop-blur-md border border-white/20">
              {project.category}
            </span>
          </div>
        </div>

        {/* ── Content ── */}
        <div className="flex flex-col flex-1 p-6 sm:p-7">
          <h3 className="text-heading-lg text-white group-hover:gradient-text transition-all duration-300 mb-3">
            {project.title}
          </h3>
          <p className="text-base text-muted leading-relaxed mb-6 flex-1">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1.5 text-xs font-medium rounded-lg bg-white/[0.04] text-white/60 border border-white/[0.06]"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-3">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="primary" size="sm" className="w-full">
                <ExternalLink size={15} />
                Live Demo
              </Button>
            </a>
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex-1">
              <Button variant="outline" size="sm" className="w-full">
                <Github size={15} />
                Source
              </Button>
            </a>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}