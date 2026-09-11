import type { LucideIcon } from 'lucide-react';

interface IconBadgeProps {
  icon: LucideIcon;
  gradient?: string;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: { box: 'w-12 h-12 rounded-lg', icon: 20 },
  md: { box: 'w-14 h-14 rounded-xl', icon: 26 },
  lg: { box: 'w-16 h-16 rounded-2xl', icon: 32 },
};

/**
 * Insignia cuadrada redondeada con degradado azul y ícono blanco (estilo iOS),
 * fiel a la decisión de diseño fijada en Figma. Reemplaza los ~10 bloques
 * casi idénticos repetidos entre Services, Contact, Products y About.
 */
export function IconBadge({ icon: Icon, gradient = 'from-blue-700 to-blue-900', size = 'md', className = '' }: IconBadgeProps) {
  const { box, icon } = sizeMap[size];
  return (
    <div
      className={`${box} bg-gradient-to-br ${gradient} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform ${className}`}
    >
      <Icon className="text-white" size={icon} />
    </div>
  );
}
