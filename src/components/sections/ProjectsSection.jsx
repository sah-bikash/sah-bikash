import SectionTitle from '@/components/common/SectionTitle';
import ProjectCard from '@/components/common/ProjectCard';
import { AnimatedStagger } from '@/components/common/AnimatedContainer';
import { PROJECTS_DATA } from '@/data/projects';

export default function ProjectsSection() {
  return (
    <section id="projects" className="section-padding relative" aria-label="Projects">
      <div className="section-container">
        <SectionTitle
          title="Featured Projects"
          subtitle="A curated selection of projects that showcase my skills and passion for building."
        />

        <AnimatedStagger className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PROJECTS_DATA.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </AnimatedStagger>
      </div>
    </section>
  );
}