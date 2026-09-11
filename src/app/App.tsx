import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Stats } from './components/Stats';
import { Services } from './components/Services';
import { Products } from './components/Products';
import { Clients } from './components/Clients';
import { Partners } from './components/Partners';
import { WhyUs } from './components/WhyUs';
import { About } from './components/About';
import { Faq } from './components/Faq';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <Stats />
      <Services />
      <Products />
      <Clients />
      <Partners />
      <WhyUs />
      <About />
      <Faq />
      <Contact />
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
