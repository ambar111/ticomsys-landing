import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { timeline } from '../../data/timeline';

export function TimelineSection() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">Nuestra trayectoria</h3>
      <div className="relative">
        <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-700 to-cyan-500" />

        <div className="space-y-12">
          {timeline.map((item, index) => (
            <motion.div
              key={item.year}
              className={`flex flex-col lg:flex-row items-center gap-8 ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              }`}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={`w-full lg:flex-1 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                <Card className="p-6 inline-block hover:shadow-xl transition-shadow border-blue-100">
                  <div className="text-3xl font-bold text-blue-700 mb-2">{item.year}</div>
                  <h4 className="font-semibold text-xl text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.description}</p>
                </Card>
              </div>

              <div className="hidden lg:block relative z-10">
                <div className="w-6 h-6 bg-gradient-to-br from-blue-700 to-cyan-500 rounded-full border-4 border-white shadow-lg" />
              </div>

              <div className="hidden lg:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
