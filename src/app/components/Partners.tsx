import { motion } from 'motion/react';
import { SectionHeading } from './shared/SectionHeading';
import { InfiniteMarquee } from './shared/InfiniteMarquee';
import { partners, featuredPartner } from '../data/partners';

export function Partners() {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NUESTROS SOCIOS"
          theme="dark"
          title={
            <>
              Alianzas{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                estratégicas
              </span>
            </>
          }
          subtitle="Trabajamos con los líderes tecnológicos más importantes del mundo"
        />

         {/* Aliado principal */}
        <motion.div
          className="flex flex-col items-center gap-6 mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg">
            ALIADO PRINCIPAL
          </span>
          <img
            src={featuredPartner.logo}
            alt={featuredPartner.name}
            className="h-32 sm:h-36 w-auto object-contain"
          />
        </motion.div>
      </div>

                       <InfiniteMarquee
        items={partners}
        direction="left"
        durationSeconds={70}
        cardClassName="bg-white rounded-2xl shadow-lg w-60 h-24"
        renderItem={(item) => (
          <img
            src={item.logo}
            alt={item.name}
            className="max-h-14 max-w-[85%] w-auto object-contain"
            style={{ transform: `scale(${item.scale ?? 1})` }}
          />
        )}
      />
    </section>
  );
}