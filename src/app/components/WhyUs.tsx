import { motion } from 'motion/react';
import { CheckCircle2, Users, Award, Zap, Heart, TrendingUp } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

const features = [
  {
    icon: Users,
    title: 'Atención Personalizada',
    description: 'Compromiso genuino con cada cliente y sus necesidades específicas',
  },
  {
    icon: Award,
    title: '25+ Años de Experiencia',
    description: 'Trayectoria comprobada desde 1999 en el mercado tecnológico',
  },
  {
    icon: Zap,
    title: 'Soluciones Rápidas',
    description: 'Respuesta inmediata y resolución eficiente de problemas',
  },
  {
    icon: Heart,
    title: 'Pasión por la Tecnología',
    description: 'Equipo apasionado y actualizado en las últimas tendencias',
  },
  {
    icon: TrendingUp,
    title: 'Crecimiento Sostenible',
    description: 'Soluciones escalables que crecen con tu negocio',
  },
  {
    icon: CheckCircle2,
    title: 'Garantía de Calidad',
    description: 'Certificaciones y estándares internacionales de calidad',
  },
];

export function WhyUs() {
  return (
    <section id="why-us" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.span
              className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              ¿POR QUÉ ELEGIRNOS?
            </motion.span>

            <h2 className="text-4xl md:text-5xl text-gray-900 mb-6">
              Tu socio tecnológico de{' '}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                confianza
              </span>
            </h2>

            <p className="text-gray-600 text-lg mb-8 leading-relaxed">
              Con más de dos décadas de experiencia en el mercado, TICOMSYS combina 
              conocimiento técnico de vanguardia con un servicio personalizado y cercano 
              que garantiza el éxito de cada proyecto.
            </p>

            <div className="space-y-4">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="flex gap-4 items-start group"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                      <Icon className="text-white" size={24} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900 text-lg mb-1">
                        {feature.title}
                      </h3>
                      <p className="text-gray-600">
                        {feature.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Right Column - Image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative">
              {/* Decorative Elements */}
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-3xl opacity-20"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
              />

              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1745847768380-2caeadbb3b71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGhhbmRzaGFrZSUyMHBhcnRuZXJzaGlwfGVufDF8fHx8MTc3MzkyODMzMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Business partnership"
                  className="w-full h-auto"
                />
              </div>

              {/* Stats Card Overlay */}
              <motion.div
                className="absolute -bottom-3 -left-3 sm:-bottom-6 sm:-left-6 bg-white rounded-xl shadow-2xl p-4 sm:p-6 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                    <CheckCircle2 className="text-white" size={32} />
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-gray-900">98%</div>
                    <div className="text-gray-600 text-sm">Satisfacción del cliente</div>
                  </div>
                </div>
              </motion.div>

              {/* Experience Badge */}
              <motion.div
                className="absolute -top-3 -right-3 sm:-top-6 sm:-right-6 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl shadow-2xl p-4 sm:p-6 text-white"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <div className="text-2xl sm:text-4xl font-bold mb-1">25+</div>
                <div className="text-sm text-white/90">Años de experiencia</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}