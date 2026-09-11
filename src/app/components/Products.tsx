import { motion } from 'motion/react';
import { Boxes, Users } from 'lucide-react';
import { Card } from './ui/card';
import { SectionHeading } from './shared/SectionHeading';

const products = [
  {
    title: 'AQuarius Software',
    subtitle: 'Digitalización Masiva de Documentos',
    description:
      'Solución completa orientada al manejo de documentos digitales en las empresas. Permite digitalizar archivos físicos mediante escáneres de alta velocidad y crear una gestión documental eficiente.',
    features: [
      'Digitalización de documentos físicos a imágenes electrónicas',
      'Almacenamiento seguro con múltiples niveles de acceso',
      'Búsqueda avanzada e indexación automática',
      'Preservación a largo plazo de información importante',
    ],
    logo: '/images/AquariusLogos/Aquarius%20Azul%20Degradado.svg',
    scale: 1
  },
  {
    title: 'AQuarius WEB',
    subtitle: 'Consulta Documental en Línea',
    description:
      'Módulo web que permite consultar y buscar documentos desde cualquier navegador, sin instalar software adicional, con acceso controlado por usuario.',
    features: [
      'Búsqueda de documentos por cualquier persona autorizada',
      'Disponibilidad 24/7 desde cualquier ubicación',
      'Acceso vía navegador, sin instalaciones',
      'Control de permisos por usuario o departamento',
    ],
    logo: '/images/AquariusLogos/Aquarius%20WEB.svg',
    scale: 1.4
  },
  {
    title: 'AQuarius WebCan',
    subtitle: 'Captura y Digitalización Web',
    description:
      'Módulo de captura que permite tomar datos complementarios, capturarlos en cualquier formato de imagen editable, hacer OCR y cargar índices de forma automática mediante etiquetas programadas.',
    features: [
      'Captura de documentos en formatos estándar',
      'OCR automático con levantamiento inteligente',
      'Indexación automática mediante etiquetas',
      'Integración directa con el flujo de digitalización',
    ],
    logo: '/images/AquariusLogos/Aquarius%20WEBCAN.svg',
    scale: 1
  },
  {
    title: 'AQuarius DMS',
    subtitle: 'Document Management Software',
    description:
      'Módulo para el manejo de documentos desde diversas fuentes. Permite almacenar archivos en medios electrónicos y que los usuarios recuperen documentos desde sus computadoras.',
    features: [
      'Gestión completa de documentos corporativos',
      'Control, procesamiento y almacenamiento centralizado',
      'Indexación y anotaciones en documentos',
      'Distribución ágil a usuarios autorizados',
    ],
    logo: '/images/AquariusLogos/Aquarius%20DMS.svg',
    scale: 1
  },
  {
    title: 'AQuarius Cloud',
    subtitle: 'Solución en la Nube',
    description:
      'Módulo especializado que permite digitalizar documentos localmente y almacenarlos en línea en servidores de TICOMSYS, accesible desde cualquier lugar sin necesidad de invertir en equipos o software de terceros.',
    features: [
      'Digitalización y almacenamiento en la nube',
      'Acceso remoto desde cualquier dispositivo',
      'Sin inversión en infraestructura local',
      'Escalabilidad según necesidades del negocio',
    ],
    logo: '/images/AquariusLogos/Aquarius%20CLOUD.svg',
    scale: 1
  },
  {
    title: 'AQuarius Forms',
    subtitle: 'Captura Digital de Formularios',
    description:
      'Módulo para el diseño y captura de formularios digitales, que sustituye el llenado en papel y alimenta directamente el flujo documental de AQuarius.',
    features: [
      'Diseño de formularios digitales personalizados',
      'Captura de datos validada en tiempo real',
      'Integración directa con AQuarius DMS',
      'Reducción de errores frente al llenado en papel',
    ],
    logo: '/images/AquariusLogos/Aquarius%20FORMS.svg',
    scale: 1
  },
];

const integrations = [
  { name: 'SQL Server', logo: '/images/Base%20de%20datos/SQLserver.png' },
  { name: 'Oracle', logo: '/images/Base%20de%20datos/Oracle.webp' },
  { name: 'ERP Systems', icon: Boxes },
  { name: 'CRM Systems', icon: Users },
];

export function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="NUESTROS PRODUCTOS"
          title={
            <>
              Software empresarial{' '}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                de clase mundial
              </span>
            </>
          }
          subtitle="Soluciones AQuarius para la gestión documental moderna, diseñadas para transformar la forma en que tu empresa maneja la información"
          className="max-w-3xl mx-auto"
        />

        {/* Products Grid */}
        <div className="space-y-16 mb-20">
          {products.map((product, index) => {
            const isEven = index % 2 === 0;

            return (
              <motion.div
                key={product.title}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  isEven ? '' : 'lg:grid-flow-dense'
                }`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                {/* Product logo — sin recuadro, sin fondo, solo el logo */}
                <motion.div
                  className={`${isEven ? '' : 'lg:col-start-2'} flex items-center justify-center h-80`}
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <img
                    src={product.logo}
                    alt={product.title}
                    className="max-h-full max-w-full object-contain"
                    style={{ transform: `scale(${product.scale ?? 1})` }}
                  />
                </motion.div>

                {/* Content */}
                <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -30 : 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                  >
                    <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
                      {product.title}
                    </h3>
                    <p className="text-blue-700 font-semibold mb-4">{product.subtitle}</p>
                    <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                      {product.description}
                    </p>

                    <div className="space-y-3">
                      {product.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-start gap-3"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + idx * 0.1 }}
                        >
                          <div className="w-6 h-6 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                            <svg
                              className="w-4 h-4 text-white"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Integrations Section */}
        <motion.div
          className="mt-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <Card className="bg-gradient-to-br from-blue-700 to-blue-900 border-0 p-12 text-center">
            <h3 className="text-3xl font-bold text-white mb-4">
              Integración con tus sistemas existentes
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              AQuarius puede integrarse con bases de datos y sistemas empresariales como:
            </p>
             <div className="flex flex-wrap justify-center gap-6">
              {integrations.map((integration, index) => (
                <motion.div
                  key={integration.name}
                  className="flex items-center gap-3 bg-white rounded-xl px-10 py-5 min-w-[200px] justify-center shadow-sm"
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  {'logo' in integration ? (
                    <img
                      src={integration.logo}
                      alt={integration.name}
                      className="h-7 w-auto object-contain"
                    />
                  ) : (
                    <>
                      <integration.icon className="text-blue-700" size={26} />
                      <span className="text-gray-800 font-semibold">{integration.name}</span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}