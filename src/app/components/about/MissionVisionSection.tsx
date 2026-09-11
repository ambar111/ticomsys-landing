import { motion } from 'motion/react';
import { Target, Lightbulb, Heart } from 'lucide-react';
import { Card } from '../ui/card';
import { coreValues } from '../../data/coreValues';

export function MissionVisionSection() {
  return (
    <motion.div
      className="mt-20 grid md:grid-cols-3 gap-8 items-stretch"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Card className="bg-gradient-to-br from-blue-700 to-blue-900 text-white p-8 border-0 flex flex-col">
        <Target className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-bold mb-4">Nuestra Misión</h3>
        <p className="text-blue-100 leading-relaxed">
          Proveer soluciones tecnológicas innovadoras y de alta calidad que permitan a nuestros
          clientes optimizar sus procesos, mejorar su productividad y alcanzar sus objetivos
          empresariales mediante la implementación de sistemas de gestión documental y
          tecnologías de vanguardia.
        </p>
      </Card>

      <Card className="bg-gradient-to-br from-cyan-600 to-blue-700 text-white p-8 border-0 flex flex-col">
        <Lightbulb className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-bold mb-4">Nuestra Visión</h3>
        <p className="text-blue-100 leading-relaxed">
          Ser la empresa líder en Centroamérica en soluciones de gestión documental y tecnología
          empresarial, reconocida por nuestra excelencia en el servicio, innovación constante y
          compromiso con el éxito de nuestros clientes.
        </p>
      </Card>

      <Card className="bg-gradient-to-br from-indigo-700 to-blue-900 text-white p-8 border-0 flex flex-col">
        <Heart className="w-12 h-12 mb-4" />
        <h3 className="text-2xl font-bold mb-5">Nuestros Valores</h3>
        <ul className="space-y-3 flex-1">
          {coreValues.map((value) => (
            <li key={value.title} className="flex items-start gap-3">
              <span className="mt-2 w-1.5 h-1.5 rounded-full bg-white/70 flex-shrink-0" />
              <span className="text-blue-100 leading-snug">{value.title}</span>
            </li>
          ))}
        </ul>
      </Card>
    </motion.div>
  );
}
