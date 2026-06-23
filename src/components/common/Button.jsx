import { forwardRef } from 'react';
import { cn } from '@/lib/utils';

const variants = {
  primary:
    'bg-white text-gray-900 hover:bg-gray-100 dark:bg-white dark:text-gray-900 dark:hover:bg-gray-200 shadow-lg hover:shadow-xl',
  secondary:
    'bg-transparent border border-white/20 text-white hover:bg-white/5 dark:border-white/20 dark:text-white dark:hover:bg-white/5 light:border-gray-900/20 light:text-gray-900 light:hover:bg-gray-900/5',
  ghost:
    'bg-transparent text-white hover:bg-white/5 dark:text-white dark:hover:bg-white/5',
  outline:
    'bg-transparent border border-white/10 text-white/80 hover:border-white/25 hover:text-white dark:border-white/10 dark:text-white/80',
};

const sizes = {
  sm: 'px-4 py-2 text-body-sm rounded-lg',
  md: 'px-6 py-3 text-body rounded-xl',
  lg: 'px-8 py-4 text-body-lg rounded-xl',
};

const Button = forwardRef(
  ({ className, variant = 'primary', size = 'md', children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          'inline-flex items-center justify-center gap-2 font-medium transition-all duration-300 ease-out',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/30 focus-visible:ring-offset-2 focus-visible:ring-offset-dark-bg',
          'disabled:opacity-50 disabled:pointer-events-none',
          'active:scale-[0.97]',
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;