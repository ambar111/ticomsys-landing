import { motion } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const footerLinks = {
  servicios: [
    { label: 'Redes y Conectividad', href: '#services' },
    { label: 'Ciberseguridad', href: '#services' },
    { label: 'Desarrollo de Software', href: '#services' },
    { label: 'Consultoría IT', href: '#services' },
  ],
  empresa: [
    { label: 'Sobre Nosotros', href: '#about' },
    { label: 'Por qué Elegirnos', href: '#why-us' },
    { label: 'Casos de Éxito', href: '#' },
    { label: 'Carreras', href: '#' },
  ],
  recursos: [
    { label: 'Blog', href: '#' },
    { label: 'Documentación', href: '#' },
    { label: 'Soporte', href: '#' },
    { label: 'FAQ', href: '#' },
  ],
};


export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">

          {/* Brand Column */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            {/* Logo blanco directo sobre fondo oscuro — ya no requiere pill de fondo */}
              <a href="#home" className="inline-block mb-4">
                <img
                  src="/images/TicomsysLogos/Ticomsys Blanco.svg"
                  alt="TICOMSYS"
                  className="h-20 w-auto object-contain"
                />
              </a>

            <p className="text-gray-400 mb-6 leading-relaxed">
              Soluciones tecnológicas integrales con el compromiso y calidez de una empresa de servicios.
              Transformando negocios desde 1999.
            </p>

            <div className="space-y-3">
              <a href="tel:+18097320289" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Phone size={18} />
                <span>+1 (809) 732-0289</span>
              </a>
              <a href="mailto:info@ticomsys.com" className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors">
                <Mail size={18} />
                <span>info@ticomsys.com</span>
              </a>
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin size={18} />
                <span>Edificio Flor de Loto, Calle Luis Amiama Tió 58, Santo Domingo</span>
              </div>
            </div>
          </motion.div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="font-semibold text-lg mb-4 capitalize">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-gray-400 hover:text-white transition-colors inline-block"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              className="text-gray-400 text-sm"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              © {new Date().getFullYear()} TICOMSYS. Todos los derechos reservados.
            </motion.div>

            {/* Legal Links */}
            <motion.div
              className="flex gap-6 text-sm text-gray-400"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <a href="#" className="hover:text-white transition-colors">Privacidad</a>
              <a href="#" className="hover:text-white transition-colors">Términos</a>
              <a href="#" className="hover:text-white transition-colors">Cookies</a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}