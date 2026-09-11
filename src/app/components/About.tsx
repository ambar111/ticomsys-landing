import { SectionHeading } from './shared/SectionHeading';
import { CompanyHistory } from './about/CompanyHistory';
import { TimelineSection } from './about/TimelineSection';
import { MissionVisionSection } from './about/MissionVisionSection';

export function About() {
  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="SOBRE NOSOTROS"
          title={
            <>
              Experiencia y{' '}
              <span className="bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
                compromiso
              </span>
            </>
          }
          subtitle="TICOMSYS es una empresa nacional con más de 25 años de trayectoria, especializada en brindar soluciones tecnológicas empresariales de vanguardia"
          className="max-w-3xl mx-auto"
        />

        <CompanyHistory />
        <TimelineSection />
        <MissionVisionSection />
      </div>
    </section>
  );
}
