import React from 'react';
import { motion } from 'framer-motion';
import { MessageCircle, Mail, ArrowRight } from 'lucide-react';

const CTASection: React.FC = () => {
  const whatsappNumber = "628123456789";
  const email = "hello@arsiteku.com";
  const whatsappMessage = "Halo Arsiteku, saya tertarik untuk konsultasi desain rumah. Bisa bantu saya?";
  const emailSubject = "Konsultasi Desain Rumah";
  const emailBody = "Halo Arsiteku,\n\nSaya tertarik untuk konsultasi tentang:\n- Tipe bangunan:\n- Lokasi:\n- Luas bangunan:\n- Budget estimasi:\n\nTerima kasih.";

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-primary via-primary/95 to-primary text-white relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
            </pattern>
          </defs>
          <rect width="100" height="100" fill="url(#grid)" />
        </svg>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm text-accent px-6 py-3 rounded-full text-sm font-medium border border-accent/30">
            <span>✨ Konsultasi Gratis Tanpa Komitmen</span>
          </div>

          {/* Main headline */}
          <div className="space-y-6">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight max-w-4xl mx-auto">
              Siap Wujudkan Rumah{' '}
              <span className="text-accent">Impian</span>{' '}
              Anda?
            </h2>
            
            <p className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Ceritakan visi rumah ideal Anda. Tim Arsiteku siap membantu dari konsep hingga realisasi 
              dengan pendekatan yang personal dan profesional.
            </p>
          </div>

          {/* Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-wrap items-center justify-center gap-6 text-white/90"
          >
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Konsultasi 30 menit gratis</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>Estimasi biaya transparan</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-accent rounded-full"></div>
              <span>No hidden cost</span>
            </div>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
          >
            <a
              href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center space-x-4 bg-accent hover:bg-accent/90 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 shadow-2xl min-w-[280px]"
              onClick={() => {
                // GTM tracking
                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                  (window as any).dataLayer.push({
                    event: 'cta_click',
                    cta_type: 'whatsapp_big_cta',
                    cta_location: 'bottom_cta_section'
                  });
                }
              }}
            >
              <MessageCircle className="w-7 h-7" />
              <span>Konsultasi via WhatsApp</span>
              <ArrowRight className="w-6 h-6" />
            </a>

            <a
              href={`mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
              className="inline-flex items-center justify-center space-x-4 bg-white/15 backdrop-blur-sm hover:bg-white/25 text-white px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 border border-white/30 min-w-[280px]"
              onClick={() => {
                // GTM tracking
                if (typeof window !== 'undefined' && (window as any).dataLayer) {
                  (window as any).dataLayer.push({
                    event: 'cta_click',
                    cta_type: 'email_big_cta',
                    cta_location: 'bottom_cta_section'
                  });
                }
              }}
            >
              <Mail className="w-7 h-7" />
              <span>Kirim Brief Lengkap</span>
              <ArrowRight className="w-6 h-6" />
            </a>
          </motion.div>

          {/* Trust signals */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 text-white/70 text-sm"
          >
            <p>
              🔒 Data Anda aman dan tidak akan dishare ke pihak ketiga &nbsp;•&nbsp; 
              ⚡ Respon dalam 5 menit di jam kerja &nbsp;•&nbsp; 
              💬 Komunikasi dalam Bahasa Indonesia
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;