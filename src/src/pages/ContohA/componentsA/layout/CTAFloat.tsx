import React, { useState, useEffect } from 'react';
import { MessageCircle, Mail, X, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const CTAFloat: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const whatsappNumber = "628123456789";
  const email = "hello@arsiteku.com";
  const whatsappMessage = "Halo Arsiteku, saya tertarik untuk konsultasi desain rumah. Bisa bantu saya?";

  useEffect(() => {
    const handleScroll = () => {
      // Show after scrolling 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="mb-4 bg-white rounded-2xl shadow-2xl border border-neutral-200 p-4 w-72"
          >
            {/* Header */}
            <div className="flex items-center justify-between mb-4">
              <div>
                <h3 className="font-semibold text-neutral-900">Konsultasi Gratis</h3>
                <p className="text-sm text-neutral-600">Ceritakan proyek impian Anda</p>
              </div>
              <button
                onClick={() => setIsExpanded(false)}
                className="p-1 hover:bg-neutral-100 rounded-lg transition-colors"
              >
                <X className="w-4 h-4 text-neutral-500" />
              </button>
            </div>

            {/* Actions */}
            <div className="space-y-3">
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 bg-green-50 hover:bg-green-100 rounded-xl transition-colors group"
                onClick={() => {
                  // GTM tracking
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                      event: 'cta_click',
                      cta_type: 'whatsapp_float',
                      cta_location: 'floating_widget'
                    });
                  }
                }}
              >
                <div className="w-10 h-10 bg-green-500 text-white rounded-xl flex items-center justify-center group-hover:bg-green-600 transition-colors">
                  <MessageCircle className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">WhatsApp</p>
                  <p className="text-sm text-neutral-600">Respon dalam 5 menit</p>
                </div>
              </a>

              <a
                href={`mailto:${email}?subject=Konsultasi Desain Rumah&body=Halo Arsiteku,%0D%0A%0D%0ASaya tertarik untuk konsultasi tentang:%0D%0A- Tipe bangunan:%0D%0A- Lokasi:%0D%0A- Luas bangunan:%0D%0A- Budget estimasi:%0D%0A%0D%0ATerima kasih.`}
                className="flex items-center space-x-3 p-3 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors group"
                onClick={() => {
                  // GTM tracking
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                      event: 'cta_click',
                      cta_type: 'email_float',
                      cta_location: 'floating_widget'
                    });
                  }
                }}
              >
                <div className="w-10 h-10 bg-blue-500 text-white rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-neutral-900">Email</p>
                  <p className="text-sm text-neutral-600">Brief lengkap project</p>
                </div>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Button */}
      <motion.button
        onClick={() => setIsExpanded(!isExpanded)}
        className={`w-14 h-14 rounded-full shadow-2xl flex items-center justify-center transition-all duration-300 ${
          isExpanded 
            ? 'bg-neutral-600 hover:bg-neutral-700' 
            : 'bg-accent hover:bg-accent/90'
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
      >
        <AnimatePresence mode="wait">
          {isExpanded ? (
            <motion.div
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <X className="w-6 h-6 text-white" />
            </motion.div>
          ) : (
            <motion.div
              key="phone"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              <Phone className="w-6 h-6 text-white" />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.button>

      {/* Floating notification dot */}
      {!isExpanded && (
        <motion.div
          className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"
          animate={{ scale: [1, 1.2, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      )}
    </div>
  );
};

export default CTAFloat;