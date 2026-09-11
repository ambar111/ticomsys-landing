import { ShieldCheck, HeartHandshake, Lock, Lightbulb, Users, type LucideIcon } from 'lucide-react';

export interface CoreValue {
  icon: LucideIcon;
  title: string;
}

/** Nuestros Valores — solicitado en Cambios_a_Pagina_WEB_2026.docx */
export const coreValues: CoreValue[] = [
  { icon: ShieldCheck, title: 'Responsabilidad' },
  { icon: HeartHandshake, title: 'Honestidad, Transparencia y Compromiso' },
  { icon: Lock, title: 'Confianza, Integridad y Ética Profesional' },
  { icon: Lightbulb, title: 'Innovación y Mejora Continua' },
  { icon: Users, title: 'Vocación de Servicio y Cercanía' },
];
