import { motion } from 'motion/react';
import { SectionHeading } from './shared/SectionHeading';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from './ui/accordion';
import { faqs } from '../data/faqs';

export function Faq() {
  const midpoint = Math.ceil(faqs.length / 2);
  const columnOne = faqs.slice(0, midpoint);
  const columnTwo = faqs.slice(midpoint);

  return (
    <section id="faq" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
        <SectionHeading
          eyebrow="PREGUNTAS FRECUENTES"
          title={
            <>
              Resolvemos tus{' '}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                dudas
              </span>
            </>
          }
          subtitle="Todo lo que necesitas saber antes de empezar a trabajar con nosotros"
        />

        <motion.div
          className="grid md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[columnOne, columnTwo].map((column, colIndex) => (
            <Accordion key={colIndex} type="single" collapsible className="space-y-4">
              {column.map((faq, index) => (
                <AccordionItem
                  key={faq.question}
                  value={`item-${colIndex}-${index}`}
                  className="bg-white rounded-2xl shadow-sm border border-gray-100 px-6 overflow-hidden"
                >
                  <AccordionTrigger className="text-left text-base font-semibold text-gray-900 hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          ))}
        </motion.div>
      </div>
    </section>
  );
}