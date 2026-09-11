import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 20 }}
          transition={{ duration: 0.3 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 w-14 h-14 bg-gradient-to-br from-blue-600 to-blue-800 hover:from-blue-700 hover:to-blue-900 text-white rounded-full shadow-2xl shadow-blue-500/50 flex items-center justify-center group cursor-pointer border-2 border-white/20"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          <ArrowUp 
            className="group-hover:-translate-y-1 transition-transform duration-300" 
            size={24} 
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
