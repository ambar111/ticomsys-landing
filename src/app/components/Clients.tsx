import { motion } from 'motion/react';
import { FileStack, Wrench } from 'lucide-react';
import { SectionHeading } from './shared/SectionHeading';
import { InfiniteMarquee } from './shared/InfiniteMarquee';
import { clientsAquarius, clientsSoporte } from '../data/clients';

export function Clients() {
  return (
    <section id="clients" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NUESTROS CLIENTES"
          title={
            <>
              Empresas que{' '}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                confían en nosotros
              </span>
            </>
          }
          subtitle="Más de 500 empresas han transformado su infraestructura tecnológica con nuestras soluciones"
        />
      </div>

      <motion.div
        className="space-y-12"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100">
              <FileStack className="text-blue-700" size={16} />
              <span className="text-xs font-bold tracking-wide text-blue-700 uppercase">
                AQuarius &amp; Digitalización
              </span>
            </div>
          </div>
          <InfiniteMarquee
            items={clientsAquarius}
            direction="left"
            durationSeconds={90}
            cardClassName="bg-white rounded-xl shadow-sm border border-gray-100 w-56 h-32"
            imgClassName="max-h-20 max-w-[85%] object-contain"
          />
        </div>

        <div>
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-50 border border-cyan-100">
              <Wrench className="text-cyan-700" size={16} />
              <span className="text-xs font-bold tracking-wide text-cyan-700 uppercase">
                Venta y Soporte Técnico
              </span>
            </div>
          </div>
          <InfiniteMarquee
            items={clientsSoporte}
            direction="right"
            durationSeconds={70}
            cardClassName="bg-white rounded-xl shadow-sm border border-gray-100 w-56 h-32"
            imgClassName="max-h-20 max-w-[85%] object-contain"
          />
        </div>
      </motion.div>
    </section>
  );
}