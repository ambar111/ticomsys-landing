import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { FaFacebook, FaXTwitter, FaInstagram, FaWhatsapp, FaLinkedin } from 'react-icons/fa6';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Card } from './ui/card';

const contactInfo = [
  {
    icon: Phone,
    title: 'Teléfono',
    value: '+1 (809) 732-0289',
    link: 'tel:+18097320289',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'info@ticomsys.com',
    link: 'mailto:info@ticomsys.com',
  },
];

export function Contact() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('¡Gracias por tu mensaje! Nos pondremos en contacto pronto.');
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <motion.span
            className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            CONTACTO
          </motion.span>
          <h2 className="text-4xl md:text-5xl text-gray-900 mb-4">
            Conversemos sobre tu{' '}
            <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
              próximo proyecto
            </span>
          </h2>
          <p className="text-gray-600 text-xl max-w-2xl mx-auto">
            Estamos listos para escucharte y ofrecerte la mejor solución tecnológica
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Información de contacto
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8">
                Nuestro equipo está disponible para atender tus consultas y
                brindarte el apoyo que necesitas. No dudes en contactarnos.
              </p>
            </div>

            <div className="space-y-6">
              {contactInfo.map((info, index) => {
                const Icon = info.icon;
                return (
                  <motion.a
                    key={info.title}
                    href={info.link}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6 hover:shadow-lg transition-all duration-300 border-gray-200 group cursor-pointer">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon className="text-white" size={24} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-500 mb-1">{info.title}</div>
                          <div className="font-semibold text-gray-900 group-hover:text-blue-700 transition-colors">
                            {info.value}
                          </div>
                        </div>
                      </div>
                    </Card>
                  </motion.a>
                );
              })}
            </div>

            {/* Redes sociales */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.25 }}
            >
              <h4 className="font-semibold text-gray-900 text-lg mb-3">Síguenos</h4>
              <div className="flex gap-3">
                {[
                  { icon: FaFacebook, href: 'https://www.facebook.com/Ticomsys/', label: 'Facebook', color: 'bg-[#1877F2]' },
                  { icon: FaXTwitter, href: 'https://x.com/ticomsys', label: 'X', color: 'bg-black' },
                  { icon: FaInstagram, href: '#', label: 'Instagram', color: 'bg-gradient-to-br from-[#F58529] via-[#DD2A7B] to-[#8134AF]' },
                  { icon: FaLinkedin, href: '#', label: 'LinkedIn', color: 'bg-[#0A66C2]' },
                  { icon: FaWhatsapp, href: 'https://api.whatsapp.com/send?phone=%2B18097563290', label: 'WhatsApp', color: 'bg-[#25D366]' },
                ].map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className={`w-11 h-11 rounded-xl flex items-center justify-center text-white shadow-sm ${social.color} transition-all duration-300`}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Icon size={20} />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-4"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-700 to-blue-900 rounded-lg flex items-center justify-center">
                  <MapPin className="text-white" size={24} />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 text-lg">Ubicación</h4>
                  <p className="text-sm text-gray-500">
                    Edificio Flor de Loto, Calle Luis Amiama Tió 58, Santo Domingo
                  </p>
                </div>
              </div>
              <div className="rounded-xl overflow-hidden shadow-lg border border-gray-200" style={{ height: '300px' }}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3784.2!2d-69.9381441!3d18.4922302!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8eaf8a288029d2b9%3A0xbb5ecaef887ecbed!2sTicomsys!5e0!3m2!1ses!2sdo!4v1700000000000"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Ubicación de TICOMSYS"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Card className="p-8 shadow-xl border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nombre completo
                  </label>
                  <Input id="name" type="text" placeholder="Tu nombre" required className="w-full" />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <Input id="email" type="email" placeholder="tu@email.com" required className="w-full" />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Teléfono
                  </label>
                  <Input id="phone" type="tel" placeholder="+1 (809) 000-0000" className="w-full" />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                    Empresa (opcional)
                  </label>
                  <Input id="company" type="text" placeholder="Nombre de tu empresa" className="w-full" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Mensaje
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Cuéntanos sobre tu proyecto o consulta..."
                    rows={5}
                    required
                    className="w-full resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-700 to-blue-900 hover:from-blue-800 hover:to-blue-950 group"
                  size="lg"
                >
                  Enviar mensaje
                  <Send className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                </Button>
              </form>
            </Card>

            <motion.div
              className="bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="font-semibold text-gray-900 mb-4 text-lg">Horario de atención</h4>
              <div className="space-y-2 text-gray-600">
                <p className="flex justify-between">
                  <span>Lunes a Viernes:</span>
                  <span className="font-medium">8:00 AM - 6:00 PM</span>
                </p>
                <p className="flex justify-between">
                  <span>Sábados:</span>
                  <span className="font-medium">9:00 AM - 1:00 PM</span>
                </p>
                <div className="pt-3 mt-3 border-t border-blue-200">
                  <p className="text-sm text-blue-700">
                    ⚡ Soporte técnico de emergencia disponible 24/7
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}