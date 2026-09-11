import { motion, useInView } from 'motion/react';
import { useRef, useEffect, useState } from 'react';

interface StatItemProps {
  end: number;
  suffix?: string;
  label: string;
  duration?: number;
}

function StatItem({ end, suffix = '', label, duration = 2 }: StatItemProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 1000 / 60);

      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <motion.div
      ref={ref}
      className="text-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="text-5xl md:text-6xl font-bold text-white mb-2"
        initial={{ scale: 0.5 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true }}
        transition={{ type: 'spring', stiffness: 200, delay: 0.2 }}
      >
        {count}{suffix}
      </motion.div>
      <div className="text-blue-100 font-medium">{label}</div>
    </motion.div>
  );
}

export function Stats() {
  return (
    <section className="py-24 bg-gradient-to-br from-blue-800 via-blue-700 to-cyan-600 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
        }} />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl text-white mb-4">
            Números que hablan por sí mismos
          </h2>
          <p className="text-blue-100 text-xl max-w-2xl mx-auto">
            La confianza de nuestros clientes se refleja en cada proyecto exitoso
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          <StatItem end={25} suffix="+" label="Años de experiencia" />
          <StatItem end={500} suffix="+" label="Clientes satisfechos" />
          <StatItem end={1200} suffix="+" label="Proyectos completados" />
          <StatItem end={98} suffix="%" label="Tasa de satisfacción" />
        </div>
      </div>
    </section>
  );
}