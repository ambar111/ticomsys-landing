import { motion } from 'motion/react';
import type { ReactNode } from 'react';

interface SectionHeadingProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: ReactNode;
  theme?: 'light' | 'dark';
  className?: string;
}

/**
 * Encabezado de sección estándar: badge + h2 + subtítulo.
 * Se repetía casi idéntico en Services, Products, Clients, Partners, About, Contact y Stats,
 * así que se centraliza aquí para mantener consistencia visual y reducir duplicación.
 */
export function SectionHeading({ eyebrow, title, subtitle, theme = 'light', className = '' }: SectionHeadingProps) {
  const badgeClasses =
    theme === 'dark'
      ? 'bg-blue-900/50 text-blue-300'
      : 'bg-blue-100 text-blue-700';
  const titleClasses = theme === 'dark' ? 'text-white' : 'text-gray-900';
  const subtitleClasses = theme === 'dark' ? 'text-gray-300' : 'text-gray-600';

  return (
    <motion.div
      className={`text-center mb-16 ${className}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <motion.span
        className={`inline-block px-4 py-2 rounded-full text-sm font-semibold mb-4 ${badgeClasses}`}
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
      >
        {eyebrow}
      </motion.span>
      <h2 className={`text-4xl md:text-5xl mb-4 ${titleClasses}`}>{title}</h2>
      {subtitle && (
        <p className={`text-xl max-w-2xl mx-auto ${subtitleClasses}`}>{subtitle}</p>
      )}
    </motion.div>
  );
}
