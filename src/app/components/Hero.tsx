import { motion } from 'motion/react';

import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-blue-900 to-slate-800">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1580983553600-c49a1d083f54?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB0ZWNobm9sb2d5JTIwb2ZmaWNlJTIwdGVhbXxlbnwxfHx8fDE3NzQwMDU4MTB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern technology team"
          className="w-full h-full object-cover opacity-10"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 to-blue-900/80" />
      </div>

      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.5, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-block mb-4 px-4 py-2 bg-blue-500/20 backdrop-blur-md rounded-full border border-blue-400/30"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
            >
              <span className="text-blue-200 text-xs sm:text-sm font-medium">
                Excelencia tecnológica desde 1999
              </span>
            </motion.div>

            <h1 className="text-white text-3xl sm:text-4xl md:text-7xl mb-6 leading-tight">
              Transformamos tu{' '}
              <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                negocio
              </span>{' '}
              con tecnología
            </h1>

            <p className="text-blue-100 text-base sm:text-lg md:text-xl mb-8 leading-relaxed">
              Soluciones TI (Tecnología de la Información) integrales y profesionales. Desde infraestructura de redes 
              y ciberseguridad hasta desarrollo de software a medida, tratamiento archivístico, 
              organización documental y digitalización masiva de documentos.
            </p>

            
          </motion.div>

          <motion.div
            className="relative hidden md:block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-4 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-2xl blur-2xl opacity-20"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.2, 0.3, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
              />
              <div className="relative bg-white/5 backdrop-blur-xl rounded-2xl p-8 border border-white/10">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1762163516269-3c143e04175c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXR3b3JrJTIwaW5mcmFzdHJ1Y3R1cmUlMjBzZXJ2ZXJ8ZW58MXx8fHwxNzc0MDE4ODUxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                  alt="Network infrastructure"
                  className="rounded-lg w-full h-auto"
                />
              </div>


            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-blue-400/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            className="w-1 h-2 bg-blue-400 rounded-full"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
}