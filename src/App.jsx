import { lazy, Suspense } from 'react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/sections/HeroSection';

// Lazy load below-the-fold sections for performance
const AboutSection = lazy(() => import('@/components/sections/AboutSection'));
const SkillsSection = lazy(() => import('@/components/sections/SkillsSection'));
const ProjectsSection = lazy(() => import('@/components/sections/ProjectsSection'));
const ExperienceSection = lazy(() => import('@/components/sections/ExperienceSection'));
const ResumeSection = lazy(() => import('@/components/sections/ResumeSection'));
const ContactSection = lazy(() => import('@/components/sections/ContactSection'));

function SectionFallback() {
  return (
    <div className="flex items-center justify-center py-32">
      <div className="w-8 h-8 border-2 border-white/10 border-t-white/50 rounded-full animate-spin" />
    </div>
  );
}

export default function App() {
  return (
    <div className="relative min-h-screen">
      {/* Background noise texture */}
      <div
        className="fixed inset-0 pointer-events-none opacity-[0.015] z-0"
        aria-hidden="true"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
        }}
      />

      <Navbar />

      <main className="relative z-10">
        <HeroSection />

        <Suspense fallback={<SectionFallback />}>
          <AboutSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <SkillsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ProjectsSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ExperienceSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ResumeSection />
        </Suspense>

        <Suspense fallback={<SectionFallback />}>
          <ContactSection />
        </Suspense>
      </main>

      <Footer />
      <SpeedInsights />
    </div>
  );
}