import { motion } from 'framer-motion';
import { Check, ArrowRight, Bot, Star } from 'lucide-react';
import Container from '@/components/ui/Container';
import Section from '@/components/ui/Section';
import Card from '@/components/ui/Card';
import PageHeader from '@/components/PageHeader';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import AnimatedBackground from '@/components/AnimatedBackground';
import BackToTop from '@/components/BackToTop';

const plans = [
  {
    id: 'starter',
    name: 'Starter',
    price: '850',
    description: 'Pour les petites équipes',
    features: [
      '3000 minutes d\'appels',
      'Jusqu\'à 5 robots simultanés',
      'Import Google Sheets',
      'Support email',
      'Rapports basiques',
      'API REST',
      'Intégration CRM basique'
    ]
  },
  {
    id: 'pro',
    name: 'Pro',
    price: '1400',
    description: 'Pour les équipes en croissance',
    features: [
      '6000 minutes d\'appels',
      'Jusqu\'à 10 robots simultanés',
      'Import Google Sheets avancé',
      'Support prioritaire',
      'Rapports détaillés',
      'API personnalisée',
      'Intégration CRM avancée',
      'Personnalisation vocale',
      'Analyses prédictives'
    ],
    recommended: true
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    price: '2000',
    description: 'Pour les grandes entreprises',
    features: [
      '15000 minutes d\'appels',
      'Jusqu\'à 50 robots simultanés',
      'Import personnalisé',
      'Support dédié 24/7',
      'Rapports sur mesure',
      'API dédiée',
      'Intégration sur mesure',
      'Voix personnalisée',
      'IA adaptative',
      'SLA garanti'
    ]
  }
];

export default function Pricing() {
  return (
    <main className="relative pt-20">
      <AnimatedBackground />
      
      <Container>
        <PageHeader
          title="Tarifs"
          description="Choisissez le plan qui correspond à vos besoins. Tous nos plans incluent un essai gratuit de 14 jours."
        />

        <Section>
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`relative bg-white/5 backdrop-blur-xl rounded-2xl border ${
                  plan.recommended ? 'border-primary-400' : 'border-white/10'
                } p-8`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <Badge variant="primary">Recommandé</Badge>
                  </div>
                )}

                <div className="text-center mb-8">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.name}</h3>
                  <p className="text-white/60 mb-6">{plan.description}</p>
                  <div className="text-4xl font-bold text-white mb-2">
                    {plan.price}€
                    <span className="text-lg text-white/60">/mois</span>
                  </div>
                </div>

                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + (i * 0.05) }}
                      className="flex items-center space-x-3 text-white/80"
                    >
                      <Check className="w-5 h-5 text-primary-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </motion.li>
                  ))}
                </ul>

                <Button
                  variant={plan.recommended ? 'primary' : 'secondary'}
                  className="w-full"
                  glowEffect={plan.recommended}
                >
                  Choisir ce plan
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </motion.div>
            ))}
          </div>
        </Section>

        <Section className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-primary-400/20 to-primary-400/5 rounded-3xl p-12 backdrop-blur-xl border border-primary-400/10"
          >
            <div className="w-16 h-16 bg-primary-400/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Bot className="w-8 h-8 text-primary-400" />
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">
              Une question sur nos tarifs ?
            </h2>
            <p className="text-xl text-white/60 mb-8 max-w-2xl mx-auto">
              Notre équipe est là pour vous aider à choisir la meilleure solution pour votre entreprise
            </p>
            <Button size="lg" glowEffect>
              Contactez-nous
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </motion.div>
        </Section>
      </Container>

      <BackToTop />
    </main>
  );
}