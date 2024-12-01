import { motion } from 'framer-motion';

export default function AnimatedGradient() {
  return (
    <motion.div
      className="absolute inset-0 z-0 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      {/* Base gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-950" />
      
      {/* Mesh pattern overlay */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-30" />
      
      {/* Animated gradient orbs */}
      <motion.div
        className="absolute inset-0"
        animate={{
          background: [
            'radial-gradient(600px circle at 0% 0%, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            'radial-gradient(600px circle at 100% 100%, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            'radial-gradient(600px circle at 0% 100%, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            'radial-gradient(600px circle at 100% 0%, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
            'radial-gradient(600px circle at 0% 0%, rgba(99, 102, 241, 0.3) 0%, transparent 70%)',
          ],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "linear",
        }}
      />

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * 100 + "%",
              y: Math.random() * 100 + "%",
              scale: Math.random() * 0.5 + 0.5,
            }}
            animate={{
              y: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              x: [
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
                Math.random() * 100 + "%",
              ],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />
        ))}
      </div>

      {/* Grid pattern */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Subtle blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[100px]" />
    </motion.div>
  );
}