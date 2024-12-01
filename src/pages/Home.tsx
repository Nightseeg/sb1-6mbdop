import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Testimonials from '@/components/Testimonials';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import RevealSection from '@/components/RevealSection';
import SectionSeparator from '@/components/SectionSeparator';

const stats = [
  {
    title: "Appels automatisés",
    value: "1M+",
    description: "Appels gérés par notre IA"
  },
  {
    title: "Satisfaction client",
    value: "95%",
    description: "Taux de satisfaction moyen"
  },
  {
    title: "Temps économisé",
    value: "40h",
    description: "Par mois et par agent"
  }
];

export default function Home() {
  return (
    <main className="relative">
      <Hero />

      <SectionSeparator variant="wave" />

      {/* Stats Section */}
      <RevealSection className="py-20">
        <Container>
          <div className="grid md:grid-cols-3 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8 hover:border-primary-400/50 transition-all duration-300"
              >
                <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
                <p className="text-lg font-semibold text-white mb-2">{stat.title}</p>
                <p className="text-white/60">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </RevealSection>

      <SectionSeparator variant="dots" />

      <Features />

      <Testimonials />

      {/* CTA Section */}
      <RevealSection className="py-20">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-400/20 to-primary-400/5 rounded-3xl p-12 backdrop-blur-xl border border-primary-400/10 text-center relative overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-primary-400/0 via-primary-400/10 to-primary-400/0"
              animate={{
                x: ['100%', '-100%'],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear",
              }}
            />
            
            <h2 className="text-3xl font-bold text-white mb-4 relative z-10">
              Prêt à commencer ?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto relative z-10">
              Rejoignez les entreprises qui font confiance à IA-26 pour leur communication client
            </p>
            <Link to="/register" className="relative z-10">
              <Button 
                size="lg"
                pulse
                glowEffect
              >
                Essayer gratuitement
                <motion.div
                  className="ml-2"
                  animate={{
                    x: [0, 5, 0],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <ArrowRight className="w-5 h-5" />
                </motion.div>
              </Button>
            </Link>
          </motion.div>
        </Container>
      </RevealSection>
    </main>
  );
}