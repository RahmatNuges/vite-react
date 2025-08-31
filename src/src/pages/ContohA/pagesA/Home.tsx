import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Users, Award, Clock, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import data
import { projects } from '../dataA/projects';
import { services } from '../dataA/services';
import { testimonials } from '../dataA/testimonials';

// Import components
import HeroSection from '../componentsA/home/HeroSection';
import ProcessSteps from '../componentsA/home/ProcessSteps';
import ServicesGrid from '../componentsA/home/ServicesGrid';
import PortfolioGrid from '../componentsA/home/PortfolioGrid';
import TestimonialCarousel from '../componentsA/home/TestimonialCarousel';
import StatsSection from '../componentsA/home/StatsSection';
import CTASection from '../componentsA/home/CTASection';

const Home: React.FC = () => {
  const whatsappNumber = "628123456789";
  const whatsappMessage = "Halo Arsiteku, saya tertarik untuk konsultasi desain rumah.";

  // SEO Data
  const seoData = {
    title: "Jasa Arsitek Rumah di Yogyakarta | Arsiteku Studio Arsitektur",
    description: "Arsiteku: studio arsitek profesional untuk desain rumah tinggal tropis. Konsep hingga bangun. Konsultasi gratis via WhatsApp. Pengalaman 8+ tahun, 20+ proyek selesai.",
    keywords: "arsitek rumah yogyakarta, jasa desain rumah, desain rumah minimalis tropis, gambar kerja dan RAB, jasa PBG IMB",
    canonicalUrl: "https://www.arsiteku.com/"
  };

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Arsiteku Studio Arsitektur",
    "url": "https://www.arsiteku.com",
    "telephone": "+62-812-3456-7890",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Jl. Kaliurang Km 5.5",
      "addressLocality": "Sleman",
      "addressRegion": "DIY",
      "postalCode": "55281",
      "addressCountry": "ID"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": -7.7489,
      "longitude": 110.3667
    },
    "openingHours": [
      "Mo-Fr 08:00-17:00",
      "Sa 08:00-14:00"
    ],
    "sameAs": [
      "https://www.instagram.com/arsiteku.studio",
      "https://www.facebook.com/arsiteku.studio"
    ],
    "description": seoData.description,
    "priceRange": "Rp 25.000.000 - Rp 100.000.000"
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        {/* Open Graph */}
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
        <meta property="og:image" content="https://www.arsiteku.com/og-image.jpg" />
        <meta property="og:locale" content="id_ID" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={seoData.title} />
        <meta name="twitter:description" content={seoData.description} />
        <meta name="twitter:image" content="https://www.arsiteku.com/og-image.jpg" />
        
        {/* JSON-LD */}
        <script type="application/ld+json">
          {JSON.stringify(jsonLd)}
        </script>
      </Helmet>

      <main className="overflow-hidden">
        {/* Hero Section */}
        <HeroSection />

        {/* Stats Section */}
        <StatsSection />

        {/* Process Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                Proses Kerja yang Terstruktur
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Dari konsultasi awal hingga serah terima, kami menjalankan proses yang jelas dan terintegrasi 
                untuk memastikan hasil yang optimal sesuai kebutuhan dan budget Anda.
              </p>
            </motion.div>

            <ProcessSteps />
          </div>
        </section>

        {/* Portfolio Section */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                Portfolio Proyek Terpilih
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Setiap proyek adalah solusi unik yang disesuaikan dengan kebutuhan klien, 
                kondisi lahan, dan karakteristik iklim lokal.
              </p>
            </motion.div>

            <PortfolioGrid projects={projects.slice(0, 6)} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-12"
            >
              <Link
                to="/portofolio"
                className="inline-flex items-center space-x-2 bg-primary text-white px-8 py-3 rounded-lg font-medium hover:bg-primary/90 transition-colors"
              >
                <span>Lihat Semua Portfolio</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                Layanan Arsitektur Komprehensif
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Solusi lengkap dari konsep desain hingga pengawasan konstruksi, 
                disesuaikan dengan kebutuhan dan anggaran proyek Anda.
              </p>
            </motion.div>

            <ServicesGrid services={services} />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-center mt-12"
            >
              <Link
                to="/layanan"
                className="inline-flex items-center space-x-2 bg-accent text-white px-8 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
              >
                <span>Lihat Semua Layanan</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* Case Study Highlight */}
        <section className="py-16 lg:py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={projects[0].image}
                    alt={projects[0].title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="space-y-6"
              >
                <div className="inline-flex items-center space-x-2 bg-accent/20 text-accent px-4 py-2 rounded-full text-sm font-medium">
                  <Award className="w-4 h-4" />
                  <span>Studi Kasus Unggulan</span>
                </div>

                <h2 className="text-3xl lg:text-4xl font-heading font-bold">
                  {projects[0].title}
                </h2>

                <p className="text-lg text-white/90 leading-relaxed">
                  {projects[0].summary} Proyek ini membuktikan bahwa desain rumah tropis yang baik 
                  dapat menciptakan kenyamanan alami tanpa mengorbankan estetika dan efisiensi biaya.
                </p>

                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <h4 className="font-semibold mb-2">Lokasi</h4>
                    <p className="text-white/80">{projects[0].location}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Luas Bangunan</h4>
                    <p className="text-white/80">{projects[0].area}</p>
                  </div>
                </div>

                <Link
                  to={`/portofolio/${projects[0].slug}`}
                  className="inline-flex items-center space-x-2 bg-accent text-white px-6 py-3 rounded-lg font-medium hover:bg-accent/90 transition-colors"
                >
                  <span>Pelajari Case Study</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 lg:py-24 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                Kepercayaan Klien adalah Prioritas Utama
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Testimoni dari klien yang puas dengan hasil kolaborasi bersama tim Arsiteku 
                dalam mewujudkan rumah impian mereka.
              </p>
            </motion.div>

            <TestimonialCarousel testimonials={testimonials} />
          </div>
        </section>

        {/* About Teaser */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                    Mengapa Memilih Arsiteku?
                  </h2>
                  <p className="text-lg text-neutral-600 leading-relaxed">
                    Dengan pengalaman lebih dari 8 tahun dan 20+ proyek yang telah diselesaikan, 
                    kami memahami kebutuhan unik setiap keluarga Indonesia.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Desain Tropis Berpengalaman</h4>
                      <p className="text-neutral-600">Spesialisasi desain untuk iklim tropis Indonesia dengan ventilasi dan pencahayaan optimal.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Proses Transparan</h4>
                      <p className="text-neutral-600">Timeline jelas, komunikasi rutin, dan dokumentasi lengkap di setiap tahapan proyek.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-primary mb-1">Budget Efisien</h4>
                      <p className="text-neutral-600">Optimasi desain untuk efisiensi struktur dan material tanpa mengorbankan kualitas.</p>
                    </div>
                  </div>
                </div>

                <Link
                  to="/tentang"
                  className="inline-flex items-center space-x-2 text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  <span>Pelajari Lebih Lanjut Tentang Kami</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="grid grid-cols-2 gap-6"
              >
                <div className="space-y-6">
                  <div className="bg-primary/5 p-6 rounded-2xl text-center">
                    <Users className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">20+</div>
                    <div className="text-sm text-neutral-600">Proyek Selesai</div>
                  </div>
                  
                  <div className="bg-accent/5 p-6 rounded-2xl text-center">
                    <Clock className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent mb-1">8+</div>
                    <div className="text-sm text-neutral-600">Tahun Pengalaman</div>
                  </div>
                </div>
                
                <div className="space-y-6 pt-8">
                  <div className="bg-accent/5 p-6 rounded-2xl text-center">
                    <Award className="w-8 h-8 text-accent mx-auto mb-3" />
                    <div className="text-2xl font-bold text-accent mb-1">100%</div>
                    <div className="text-sm text-neutral-600">Klien Puas</div>
                  </div>
                  
                  <div className="bg-primary/5 p-6 rounded-2xl text-center">
                    <Target className="w-8 h-8 text-primary mx-auto mb-3" />
                    <div className="text-2xl font-bold text-primary mb-1">95%</div>
                    <div className="text-sm text-neutral-600">On Time & Budget</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Big CTA */}
        <CTASection />
      </main>
    </>
  );
};

export default Home;