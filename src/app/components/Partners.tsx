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
          className="max-w-md mx-auto mb-14"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="relative bg-gradient-to-br from-blue-700/20 to-cyan-500/10 border border-blue-400/30 rounded-2xl p-10 text-center backdrop-blur-sm">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs font-semibold rounded-full shadow-lg">
              ALIADO PRINCIPAL
            </span>
             <img
              src={featuredPartner.logo}
              alt={featuredPartner.name}
              className="h-24 w-auto object-contain mx-auto mt-2"
            />
          </div>
        </motion.div>
      </div>

                  <InfiniteMarquee
        items={partners}
        direction="left"
        durationSeconds={70}
        cardClassName="bg-white rounded-2xl shadow-lg w-40 h-24"
        imgClassName="max-h-10 max-w-[75%] w-auto object-contain"
      />
    </section>
  );
}