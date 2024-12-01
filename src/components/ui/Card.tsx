import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}

export default function Card({ children, className, hover = true }: CardProps) {
  return (
    <motion.div
      className={cn(
        'relative overflow-hidden',
        'bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-6',
        hover && 'hover:border-primary-400/50 transition-all duration-300',
        className
      )}
      whileHover={hover ? { scale: 1.02 } : undefined}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
    >
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
      
      {/* Inner glow */}
      <div className="absolute inset-0 bg-gradient-radial from-primary-400/[0.03] via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
}