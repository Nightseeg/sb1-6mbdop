import { InputHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, error, ...props }, ref) => {
    return (
      <motion.div
        whileFocus={{ scale: 1.02 }}
        className="relative"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary-400/10 to-primary-500/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
        
        <input
          className={cn(
            'relative w-full px-4 py-3 rounded-xl transition-all duration-200',
            'bg-white/5 border border-white/10 text-white placeholder-white/40',
            'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900',
            'backdrop-blur-sm',
            {
              'focus:border-primary-400 focus:ring-primary-400': !error,
              'border-red-500 focus:border-red-500 focus:ring-red-500': error,
            },
            className
          )}
          ref={ref}
          {...props}
        />
      </motion.div>
    );
  }
);

Input.displayName = 'Input';

export default Input;