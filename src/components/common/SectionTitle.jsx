import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

export default function SectionTitle({ title, subtitle, className, align = 'center' }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={cn(
        'mb-16 md:mb-20',
        align === 'center' && 'text-center',
        align === 'left' && 'text-left',
        className
      )}
    >
      <h2 className="text-display-lg md:text-display gradient-text text-balance">{title}</h2>
      {subtitle && (
        <p className="mt-4 text-body-lg text-muted max-w-2xl mx-auto text-balance">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}