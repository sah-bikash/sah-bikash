import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const GlassCard = forwardRef(({ className, hover = true, glow = false, children, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        'relative rounded-2xl overflow-hidden',
        'glass gradient-border',
        hover && 'transition-all duration-500 ease-out hover:shadow-card-hover dark:hover:shadow-card-hover hover:-translate-y-1',
        glow && 'shadow-glow',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});

GlassCard.displayName = 'GlassCard';

export default GlassCard;