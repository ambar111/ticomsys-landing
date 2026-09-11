import { motion } from 'motion/react';
import { Globe, Users } from 'lucide-react';
import { ImageWithFallback } from '../figma/ImageWithFallback';
import { Card } from '../ui/card';

export function CompanyHistory() {
  return (
    <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-2xl opacity-20" />
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1758691736843-90f58dce465e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0ZWFtJTIwY29sbGFib3JhdGlvbiUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzM5NTQ4ODd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            alt="TICOMSYS Team"
            className="relative rounded-2xl shadow-2xl w-full h-96 object-cover"
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <div>
          <h3 className="text-3xl font-bold text-gray-900 mb-4">Nuestra historia</h3>
          <p className="text-gray-600 leading-relaxed mb-4">
            Somos una empresa nacional formada por profesionales dedicados a la búsqueda de
            soluciones que ayudan a mejorar las labores tecnológicas de nuestros clientes.
            Nacemos en 1999 orientados a la venta de equipos tecnológicos, soporte técnico,
            implementación de redes de datos y asesorías informáticas.
          </p>
          <p className="text-gray-600 leading-relaxed mb-4">
            En 2009 firmamos un acuerdo con la compañía Document Control System en San Juan,
            Puerto Rico, para la venta y soporte técnico exclusivo de la suite{' '}
            <span className="font-semibold text-gray-800">AQuarius Software</span> en todo el
            territorio nacional, parte de Centroamérica, el Caribe y Sudamérica.
          </p>
          <p className="text-gray-600 leading-relaxed">
            A lo largo de más de 25 años, hemos evolucionado junto con la tecnología,
            incorporando constantemente nuevas soluciones como ciberseguridad, desarrollo de
            software a medida, infraestructura de redes y cloud computing. Nuestro equipo de
            especialistas cuenta con certificaciones internacionales y se mantiene actualizado
            en las últimas tendencias tecnológicas.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-4">
          <Card className="p-6 text-center border-blue-100 hover:border-blue-300 transition-colors">
            <Globe className="w-10 h-10 text-blue-700 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">500+</div>
            <div className="text-sm text-gray-600">Clientes activos</div>
          </Card>
          <Card className="p-6 text-center border-blue-100 hover:border-blue-300 transition-colors">
            <Users className="w-10 h-10 text-blue-700 mx-auto mb-2" />
            <div className="text-2xl font-bold text-gray-900">50+</div>
            <div className="text-sm text-gray-600">Profesionales</div>
          </Card>
        </div>
      </motion.div>
    </div>
  );
}
