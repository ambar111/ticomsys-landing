import {
  Archive,
  Network,
  Shield,
  Cloud,
  Code,
  Smartphone,
  Database,
  Server,
  Headphones,
  Wrench,
  type LucideIcon,
} from 'lucide-react';

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  gradient: string;
}

export const services: Service[] = [
  {
    icon: Archive,
    title: 'Gestión Documental',
    description:
      'Tratamiento archivístico, organización documental y digitalización masiva de documentos físicos y digitales.',
    gradient: 'from-blue-800 to-cyan-600',
  },
  {
    icon: Network,
    title: 'Redes y Conectividad',
    description:
      'Diseño, implementación y mantenimiento de infraestructura de red corporativa con las últimas tecnologías.',
    gradient: 'from-blue-500 to-blue-700',
  },
  {
    icon: Shield,
    title: 'Ciberseguridad',
    description:
      'Protección integral de tu empresa con soluciones avanzadas de seguridad, auditorías y monitoreo 24/7.',
    gradient: 'from-blue-600 to-cyan-600',
  },
  {
    icon: Cloud,
    title: 'Soluciones Cloud',
    description:
      'Migración, gestión y optimización de servicios en la nube para maximizar tu eficiencia operativa.',
    gradient: 'from-cyan-500 to-blue-600',
  },
  {
    icon: Code,
    title: 'Desarrollo de Software',
    description:
      'Aplicaciones personalizadas y sistemas a medida que se adaptan a las necesidades de tu negocio.',
    gradient: 'from-blue-700 to-blue-900',
  },
  {
    icon: Smartphone,
    title: 'Aplicaciones Móviles',
    description:
      'Desarrollo de apps nativas y multiplataforma con diseño intuitivo y rendimiento óptimo.',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Database,
    title: 'Gestión de Datos',
    description:
      'Administración profesional de bases de datos, respaldos automáticos y soluciones de Big Data.',
    gradient: 'from-cyan-600 to-blue-700',
  },
  {
    icon: Server,
    title: 'Infraestructura IT',
    description:
      'Servidores, almacenamiento y virtualización para una infraestructura robusta y escalable.',
    gradient: 'from-blue-600 to-blue-800',
  },
  {
    icon: Wrench,
    title: 'Venta y Reparación de Equipos',
    description:
      'Comercialización de equipos tecnológicos y servicio técnico especializado para mantenimiento y reparación de hardware.',
    gradient: 'from-blue-600 to-cyan-500',
  },
  {
    icon: Headphones,
    title: 'Consultoría y Soporte',
    description:
      'Asesoría experta y soporte técnico profesional para mantener tus sistemas funcionando sin interrupciones.',
    gradient: 'from-blue-500 to-blue-700',
  },
];
