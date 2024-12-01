import { motion } from 'framer-motion';

interface SectionSeparatorProps {
  variant?: 'wave' | 'dots' | 'gradient';
  className?: string;
}

export default function SectionSeparator({ variant = 'wave', className = '' }: SectionSeparatorProps) {
  if (variant === 'wave') {
    return (
      <div className={`relative h-24 ${className}`}>
        <motion.div
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <svg
            className="absolute w-full h-full"
            preserveAspectRatio="none"
            viewBox="0 0 1440 74"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 24C240 54 480 74 720 74C960 74 1200 54 1440 24V74H0V24Z"
              fill="url(#wave-gradient)"
              opacity="0.1"
            >
              <animate
                attributeName="d"
                dur="5s"
                repeatCount="indefinite"
                values="
                  M0 24C240 54 480 74 720 74C960 74 1200 54 1440 24V74H0V24Z;
                  M0 34C240 64 480 44 720 74C960 44 1200 64 1440 34V74H0V34Z;
                  M0 24C240 54 480 74 720 74C960 74 1200 54 1440 24V74H0V24Z
                "
              />
            </path>
            <defs>
              <linearGradient id="wave-gradient" x1="0" y1="0" x2="1440" y2="0">
                <stop offset="0%" stopColor="rgb(61, 220, 151)" stopOpacity="0.1" />
                <stop offset="50%" stopColor="rgb(61, 220, 151)" stopOpacity="0.2" />
                <stop offset="100%" stopColor="rgb(61, 220, 151)" stopOpacity="0.1" />
              </linearGradient>
            </defs>
          </svg>
        </motion.div>
      </div>
    );
  }

  if (variant === 'dots') {
    return (
      <div className={`relative h-24 ${className}`}>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex space-x-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-primary-400/20 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.2, 0.8, 0.2],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative h-24 ${className}`}>
      <motion.div
        className="h-full bg-gradient-to-r from-transparent via-primary-400/10 to-transparent"
        animate={{
          opacity: [0.1, 0.2, 0.1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );
}