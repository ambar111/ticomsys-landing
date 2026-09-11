import { motion } from 'motion/react';
import { Card } from './ui/card';
import { SectionHeading } from './shared/SectionHeading';
import { IconBadge } from './shared/IconBadge';
import { services } from '../data/services';

export function Services() {
  return (
    <section id="services" className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NUESTROS SERVICIOS"
          title={
            <>
              Soluciones tecnológicas{' '}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                integrales
              </span>
            </>
          }
          subtitle="Ofrecemos un ecosistema completo de servicios IT para impulsar el crecimiento de tu empresa"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="p-8 h-full hover:shadow-2xl transition-all duration-300 border-gray-200 group cursor-pointer">
                <IconBadge icon={service.icon} gradient={service.gradient} size="lg" className="mb-6" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
