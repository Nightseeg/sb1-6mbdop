import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, MessageCircle } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import BackToTop from '@/components/BackToTop';
import AnimatedBackground from '@/components/AnimatedBackground';

const faqs = [
  {
    question: "Comment fonctionne votre assistant vocal ?",
    answer: "Notre assistant vocal utilise une technologie d'IA avancée pour gérer les appels de manière naturelle et professionnelle. Il peut comprendre le contexte, répondre aux questions et suivre des scénarios complexes."
  },
  {
    question: "Combien d'appels simultanés puis-je gérer ?",
    answer: "Selon votre forfait, vous pouvez gérer de 5 à 50 appels simultanés. Le plan Starter permet jusqu'à 5 appels, le plan Pro jusqu'à 10, et le plan Enterprise jusqu'à 50 appels simultanés."
  },
  {
    question: "Comment puis-je importer mes contacts ?",
    answer: "Vous pouvez facilement importer vos contacts via un fichier Google Sheets. Notre système synchronise automatiquement vos données et permet une gestion flexible de vos campagnes d'appels."
  },
  {
    question: "Les appels sont-ils enregistrés ?",
    answer: "Oui, tous les appels sont enregistrés et analysés pour assurer la qualité du service. Vous avez accès à des rapports détaillés et des statistiques pour chaque campagne."
  },
  {
    question: "Quelle est la qualité audio des appels ?",
    answer: "Nous utilisons une technologie HD Voice pour garantir une qualité audio optimale. Notre système s'adapte automatiquement à la qualité de la connexion pour maintenir la meilleure expérience possible."
  }
];

function FAQItem({ faq, index }: { faq: typeof faqs[0], index: number }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="border-b border-white/10 last:border-0"
    >
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex items-center justify-between text-left"
      >
        <span className="text-lg font-semibold text-white">{faq.question}</span>
        <motion.div
          initial={false}
          animate={{ rotate: isOpen ? 180 : 0 }}
          className="flex-shrink-0 ml-4"
        >
          {isOpen ? (
            <Minus className="w-5 h-5 text-primary-400" />
          ) : (
            <Plus className="w-5 h-5 text-primary-400" />
          )}
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="pb-6 text-white/60 leading-relaxed">
              {faq.answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

export default function FAQ() {
  return (
    <main className="relative pt-20">
      <AnimatedBackground />
      
      <Container>
        <PageHeader
          title="FAQ"
          description="Trouvez rapidement des réponses à vos questions sur notre assistant vocal intelligent."
        />

        <Section>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl mx-auto bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 p-8"
          >
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <FAQItem key={index} faq={faq} index={index} />
              ))}
            </div>
          </motion.div>
        </Section>

        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-400/20 to-primary-400/5 rounded-3xl p-12 backdrop-blur-xl border border-primary-400/10"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Vous avez d'autres questions ?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Notre équipe est là pour vous aider
            </p>
            <Button size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Contactez-nous
            </Button>
          </motion.div>
        </Section>
      </Container>

      <BackToTop />
    </main>
  );
}