import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'default' | 'success' | 'warning' | 'error';
}

export default function Badge({ children, className, variant = 'default' }: BadgeProps) {
  return (
    <motion.span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        'backdrop-blur-sm border border-white/10',
        {
          'bg-gradient-to-r from-primary-400/20 to-primary-500/20 text-primary-400 border-primary-400/20': variant === 'default',
          'bg-gradient-to-r from-green-400/20 to-green-500/20 text-green-400 border-green-400/20': variant === 'success',
          'bg-gradient-to-r from-yellow-400/20 to-yellow-500/20 text-yellow-400 border-yellow-400/20': variant === 'warning',
          'bg-gradient-to-r from-red-400/20 to-red-500/20 text-red-400 border-red-400/20': variant === 'error',
        },
        className
      )}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
    >
      {children}
    </motion.span>
  );
}