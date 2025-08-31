import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, MessageCircle, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const whatsappNumber = "628123456789";
  const email = "hello@arsiteku.com";
  const whatsappMessage = "Halo Arsiteku, saya tertarik untuk konsultasi desain rumah.";
  const emailSubject = "Konsultasi Desain Rumah";
  const emailBody = "Halo Arsiteku,\n\nSaya tertarik untuk konsultasi tentang:\n- Tipe bangunan:\n- Lokasi:\n- Luas bangunan:\n- Budget estimasi:\n\nTerima kasih.";

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=1920"
          alt="Modern tropical house design"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="text-white space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-accent/20 backdrop-blur-sm text-accent px-4 py-2 rounded-full text-sm font-medium border border-accent/30"
            >
              <CheckCircle className="w-4 h-4" />
              <span>Studio Arsitektur Terpercaya</span>
            </motion.div>

            {/* Main Headline */}
            <div className="space-y-4">
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold leading-tight"
              >
                Arsitek Rumah yang{' '}
                <span className="text-accent">Mengerti</span>{' '}
                Cara Anda Hidup
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-xl lg:text-2xl text-white/90 leading-relaxed max-w-2xl"
              >
                Dari konsep hingga bangun, Arsiteku merancang rumah fungsional, 
                indah, dan efisien biaya untuk iklim tropis Indonesia.
              </motion.p>
            </div>

            {/* Proof Points */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-wrap items-center gap-6 text-white/90"
            >
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">20+ proyek rumah tinggal</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="font-medium">8+ tahun pengalaman</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center space-x-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 hover:scale-105 shadow-xl"
                onClick={() => {
                  // GTM tracking
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                      event: 'cta_click',
                      cta_type: 'whatsapp_hero',
                      cta_location: 'hero_section'
                    });
                  }
                }}
              >
                <MessageCircle className="w-6 h-6" />
                <span>Konsultasi Gratis via WhatsApp</span>
              </a>

              <a
                href={`mailto:${email}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`}
                className="inline-flex items-center justify-center space-x-3 bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all duration-300 border border-white/30"
                onClick={() => {
                  // GTM tracking
                  if (typeof window !== 'undefined' && (window as any).dataLayer) {
                    (window as any).dataLayer.push({
                      event: 'cta_click',
                      cta_type: 'email_hero',
                      cta_location: 'hero_section'
                    });
                  }
                }}
              >
                <Mail className="w-6 h-6" />
                <span>Kirim Brief via Email</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Image/Visual Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main image card */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl border border-white/30">
                <img
                  src="https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=600"
                  alt="Interior design sample"
                  className="w-full h-64 object-cover rounded-xl"
                />
                <div className="mt-4 text-white">
                  <h3 className="font-semibold text-lg">Rumah Tropis Modern</h3>
                  <p className="text-white/80 text-sm">Ventilasi optimal, pencahayaan alami</p>
                </div>
              </div>

              {/* Floating stats cards */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className="absolute -top-6 -right-6 bg-accent p-4 rounded-2xl shadow-xl"
              >
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">95%</div>
                  <div className="text-xs">On Budget</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.0 }}
                className="absolute -bottom-6 -left-6 bg-primary p-4 rounded-2xl shadow-xl"
              >
                <div className="text-center text-white">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-xs">Satisfied</div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/60"
      >
        <div className="flex flex-col items-center space-y-2">
          <span className="text-sm font-medium">Scroll untuk eksplorasi</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center"
          >
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-1 h-3 bg-white/60 rounded-full mt-2"
            />
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;