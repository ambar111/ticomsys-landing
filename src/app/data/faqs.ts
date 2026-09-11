export interface FaqItem {
  question: string;
  answer: string;
}

export const faqs: FaqItem[] = [
  {
    question: '¿Qué servicios ofrece TICOMSYS?',
    answer:
      'Ofrecemos gestión documental y digitalización, redes y conectividad, ciberseguridad, soluciones cloud, desarrollo de software, aplicaciones móviles, gestión de datos, infraestructura IT, venta y reparación de equipos, y consultoría y soporte técnico.',
  },
  {
    question: '¿Qué es AQuarius Software y cómo puede ayudar a mi empresa?',
    answer:
      'AQuarius es la suite de gestión documental que distribuimos de forma exclusiva en el territorio nacional. Permite digitalizar, indexar, almacenar y recuperar documentos de forma segura, con módulos para captura (WebScan/AQWeb), gestión (DMS) y almacenamiento en la nube.',
  },
  {
    question: '¿Desde cuándo opera TICOMSYS en el mercado?',
    answer:
      'TICOMSYS nace en 1999 como empresa nacional de soluciones tecnológicas. En 2009 firmamos un acuerdo con Document Control System para la distribución exclusiva de AQuarius Software, y desde entonces hemos seguido evolucionando junto con la tecnología.',
  },
  {
    question: '¿Ofrecen soporte técnico después de la implementación?',
    answer:
      'Sí. Contamos con un equipo de soporte y consultoría dedicado para acompañar a nuestros clientes después de cada implementación, con mantenimiento, soporte técnico y servicio de reparación de equipos.',
  },
  {
    question: '¿Con qué sistemas se puede integrar AQuarius?',
    answer:
      'AQuarius puede integrarse con bases de datos y sistemas empresariales como SQL Server y Oracle, así como con sistemas ERP y CRM existentes en tu empresa.',
  },
  {
    question: '¿Cómo puedo solicitar una cotización o demostración?',
    answer:
      'Puedes escribirnos a través del formulario de contacto, llamarnos al +1 809 732-0289, o escribirnos directo por WhatsApp al +1 809 756-3290 y coordinamos una demostración según tus necesidades.',
  },
];
