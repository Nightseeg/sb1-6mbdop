import { ButtonHTMLAttributes, forwardRef } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  pulse?: boolean;
  glowEffect?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ 
    className, 
    children, 
    isLoading, 
    variant = 'primary', 
    size = 'md', 
    pulse = false,
    glowEffect = false,
    disabled, 
    ...props 
  }, ref) => {
    return (
      <motion.button
        className={cn(
          'relative inline-flex items-center justify-center rounded-xl font-medium transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-dark-900 disabled:opacity-50 disabled:cursor-not-allowed',
          {
            'bg-gradient-to-r from-primary-400 to-primary-500 text-dark-800 hover:from-primary-300 hover:to-primary-400': variant === 'primary',
            'bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm': variant === 'secondary',
            'border border-white/10 bg-transparent text-white hover:bg-white/5': variant === 'outline',
            'bg-transparent text-white hover:bg-white/5': variant === 'ghost',
            'px-3 py-2 text-sm': size === 'sm',
            'px-4 py-2 text-base': size === 'md',
            'px-6 py-3 text-lg': size === 'lg',
          },
          glowEffect && 'hover:shadow-glow',
          className
        )}
        ref={ref}
        disabled={isLoading || disabled}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        {...props}
      >
        {pulse && (
          <motion.span
            className="absolute inset-0 rounded-xl bg-primary-400/50"
            initial={{ opacity: 0.5, scale: 1 }}
            animate={{ 
              opacity: [0.5, 0, 0.5],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        {glowEffect && (
          <motion.span
            className="absolute inset-0 rounded-xl bg-gradient-to-r from-primary-400/20 to-primary-500/20"
            animate={{
              opacity: [0.5, 0.8, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        )}

        <span className="relative flex items-center justify-center">
          {isLoading && (
            <Loader2 className="w-4 h-4 animate-spin mr-2" />
          )}
          {children}
        </span>
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

export default Button;