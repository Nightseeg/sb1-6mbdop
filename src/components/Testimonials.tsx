import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import RevealSection from './RevealSection';
import Container from './ui/Container';
import Card from './ui/Card';
import StarRating from './ui/StarRating';

const testimonials = [
  {
    name: "Sophie Martin",
    role: "Directrice Commerciale",
    company: "TechVision SA",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "Grâce à IA-26, nous avons réduit de 40% le temps passé sur les appels de qualification. Notre équipe peut désormais se concentrer sur les prospects les plus prometteurs."
  },
  {
    name: "Thomas Dubois",
    role: "Responsable Support Client",
    company: "InnovaCorp",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "L'assistant vocal est bluffant de naturel. Nos clients ne font souvent pas la différence, et notre taux de satisfaction a significativement augmenté."
  },
  {
    name: "Marie Lambert",
    role: "CEO",
    company: "Digital Solutions",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&h=150&q=80",
    rating: 5,
    text: "Un investissement qui a révolutionné notre approche client. La personnalisation des scénarios nous permet d'être pertinents à chaque interaction."
  }
];

export default function Testimonials() {
  return (
    <RevealSection className="py-24 bg-gradient-to-b from-dark-900 to-dark-800">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-primary-400/20 px-4 py-2 rounded-full text-primary-400 mb-4"
            whileHover={{ scale: 1.05 }}
          >
            <Star className="w-4 h-4" />
            <span className="font-semibold">Témoignages</span>
          </motion.div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Ils nous font confiance
          </h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto">
            Découvrez comment nos clients transforment leur communication
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Card hover>
                <div className="flex items-start space-x-4 mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {testimonial.name}
                    </h3>
                    <p className="text-white/60 text-sm">
                      {testimonial.role}
                    </p>
                    <p className="text-primary-400 text-sm">
                      {testimonial.company}
                    </p>
                  </div>
                </div>

                <StarRating rating={testimonial.rating} />
                
                <p className="mt-4 text-white/80 leading-relaxed">
                  {testimonial.text}
                </p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </RevealSection>
  );
}