import React from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, DollarSign, MessageCircle, Mail, AlertCircle, Target } from 'lucide-react';
import { services } from '../dataA/services';

const LayananDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const service = services.find(s => s.slug === slug);

  if (!service) {
    return <Navigate to="/layanan" replace />;
  }

  const whatsappNumber = "628123456789";
  const email = "hello@arsiteku.com";
  const whatsappMessage = `Halo Arsiteku, saya tertarik dengan layanan ${service.title}. Bisa konsultasi lebih detail?`;

  const seoData = {
    title: `${service.title} | Jasa Arsitek Professional | Arsiteku`,
    description: service.summary,
    keywords: `${service.title.toLowerCase()}, jasa arsitek, desain rumah`,
    canonicalUrl: `https://www.arsiteku.com/layanan/${service.slug}`
  };

  return (
    <>
      <Helmet>
        <title>{seoData.title}</title>
        <meta name="description" content={seoData.description} />
        <meta name="keywords" content={seoData.keywords} />
        <link rel="canonical" href={seoData.canonicalUrl} />
        
        <meta property="og:title" content={seoData.title} />
        <meta property="og:description" content={seoData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={seoData.canonicalUrl} />
      </Helmet>

      <main>
        {/* Hero Section */}
        <section className="pt-20 lg:pt-32 pb-16 bg-gradient-to-br from-primary/5 via-white to-accent/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto text-center"
            >
              <div className="inline-flex items-center space-x-2 bg-accent/10 text-accent px-4 py-2 rounded-full text-sm font-medium mb-6">
                <span>Layanan Unggulan</span>
              </div>
              
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
                {service.title}
              </h1>
              
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed mb-8">
                {service.summary}
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>{service.cta}</span>
                </a>

                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(`Konsultasi ${service.title}`)}&body=${encodeURIComponent(`Halo Arsiteku,\n\nSaya tertarik dengan layanan ${service.title}.\n\nDetail proyek:\n- Lokasi:\n- Luas bangunan:\n- Timeline diharapkan:\n- Budget range:\n\nTerima kasih.`)}`}
                  className="inline-flex items-center space-x-3 bg-white hover:bg-neutral-50 text-primary px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-neutral-300"
                >
                  <Mail className="w-5 h-5" />
                  <span>Kirim Brief Email</span>
                </a>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problems Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                  Masalah Yang Sering Dihadapi
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Berdasarkan pengalaman kami, berikut adalah tantangan umum yang dihadapi 
                  klien sebelum menggunakan layanan {service.title.toLowerCase()}:
                </p>
                
                <div className="space-y-4">
                  {service.problems.map((problem, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <AlertCircle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                      <p className="text-neutral-700">{problem}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-red-50 p-8 rounded-2xl border border-red-200"
              >
                <h3 className="text-xl font-bold text-red-800 mb-4">
                  Dampak Jika Tidak Ditangani Profesional:
                </h3>
                <ul className="space-y-3 text-red-700">
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Budget membengkak hingga 30-50%</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Timeline terlambat berbulan-bulan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Hasil tidak sesuai ekspektasi</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-red-500 rounded-full flex-shrink-0 mt-2"></div>
                    <span>Stress dan ketidakpastian berkepanjangan</span>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Approach Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-green-50 p-8 rounded-2xl border border-green-200"
              >
                <h3 className="text-xl font-bold text-green-800 mb-4">
                  Keunggulan Pendekatan Arsiteku:
                </h3>
                <ul className="space-y-3 text-green-700">
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Metodologi teruji 8+ tahun pengalaman</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Timeline transparan dengan milestone jelas</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Budget terkontrol dengan contingency plan</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-1" />
                    <span>Komunikasi rutin dan dokumentasi lengkap</span>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                  Pendekatan Solusi Kami
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Tim Arsiteku menggunakan metodologi yang telah teruji untuk memastikan 
                  setiap proyek berjalan optimal dan sesuai harapan Anda:
                </p>
                
                <div className="space-y-4">
                  {service.approach.map((approach, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="flex items-start space-x-4"
                    >
                      <Target className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                      <p className="text-neutral-700">{approach}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Deliverables Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                Apa Yang Anda Terima
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Deliverables lengkap dan professional yang memastikan proyek Anda 
                siap untuk tahap implementasi dengan standar industri terbaik.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {service.deliverables.map((deliverable, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100"
                >
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-accent font-bold text-sm">{index + 1}</span>
                    </div>
                    <div>
                      <h3 className="font-semibold text-primary mb-2">{deliverable}</h3>
                      <p className="text-sm text-neutral-600">
                        Dokumen professional sesuai standar industri dan kebutuhan implementasi.
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                Timeline Pelaksanaan
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Proses kerja yang terstruktur dengan milestone yang jelas 
                untuk memastikan transparansi dan akuntabilitas di setiap tahap.
              </p>
            </motion.div>

            <div className="relative">
              {/* Timeline line */}
              <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-accent/30"></div>
              
              <div className="space-y-8">
                {service.timeline.map((phase, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.2 }}
                    className={`flex items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
                  >
                    {/* Content */}
                    <div className={`flex-1 ${index % 2 === 0 ? 'lg:pr-8' : 'lg:pl-8'}`}>
                      <div className="bg-white p-6 rounded-xl shadow-lg border border-neutral-100">
                        <div className="flex items-center space-x-3 mb-3">
                          <div className="w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                            <span className="text-white font-bold text-sm">{index + 1}</span>
                          </div>
                          <div className="flex items-center space-x-2 text-accent">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm font-medium">Fase {index + 1}</span>
                          </div>
                        </div>
                        <p className="text-neutral-700 font-medium">{phase}</p>
                      </div>
                    </div>

                    {/* Center dot (for larger screens) */}
                    <div className="hidden lg:block w-4 h-4 bg-accent rounded-full border-4 border-white shadow-lg z-10"></div>

                    {/* Spacer */}
                    <div className="flex-1"></div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Price Range Section */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                  Investasi & Nilai
                </h2>
                <p className="text-lg text-neutral-600 mb-8">
                  Investasi yang transparan dengan nilai jangka panjang. 
                  Harga kompetitif dengan kualitas professional yang terjamin.
                </p>
                
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100">
                  <div className="flex items-center space-x-3 mb-4">
                    <DollarSign className="w-6 h-6 text-accent" />
                    <h3 className="font-semibold text-primary text-lg">Range Investasi</h3>
                  </div>
                  <div className="text-2xl font-bold text-accent mb-4">
                    {service.priceRange}
                  </div>
                  <p className="text-neutral-600 text-sm">
                    *Harga final disesuaikan dengan kompleksitas proyek, luas bangunan, 
                    dan kebutuhan spesifik. Konsultasi gratis untuk estimasi akurat.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-primary mb-6">
                  Mengapa Investasi Ini Worth It?
                </h3>
                <div className="space-y-4">
                  {[
                    "Hemat waktu dan stress dengan proses yang profesional",
                    "Hindari kesalahan mahal yang bisa terjadi tanpa panduan ahli",
                    "Hasil optimal yang sesuai budget dan ekspektasi",
                    "Dokumentasi lengkap untuk kemudahan implementasi",
                    "Garansi revisi dan support konsultasi berkelanjutan"
                  ].map((benefit, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                      <p className="text-neutral-700">{benefit}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold text-primary mb-6">
                Pertanyaan Yang Sering Diajukan
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Jawaban untuk pertanyaan umum tentang layanan {service.title.toLowerCase()}.
              </p>
            </motion.div>

            <div className="max-w-4xl mx-auto space-y-6">
              {service.faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-neutral-50 p-8 rounded-2xl border border-neutral-100"
                >
                  <h3 className="font-semibold text-primary text-lg mb-4">
                    {faq.q}
                  </h3>
                  <p className="text-neutral-700 leading-relaxed">
                    {faq.a}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <h2 className="text-3xl lg:text-4xl font-heading font-bold">
                Siap Memulai Proyek {service.title}?
              </h2>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Konsultasi gratis 30 menit untuk membahas kebutuhan spesifik proyek Anda. 
                Dapatkan estimasi timeline dan budget yang akurat tanpa komitmen.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                  onClick={() => {
                    // GTM tracking
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: 'cta_click',
                        cta_type: 'whatsapp_service_detail',
                        service_name: service.title,
                        cta_location: 'service_detail_bottom'
                      });
                    }
                  }}
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Konsultasi via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <a
                  href={`mailto:${email}?subject=${encodeURIComponent(`Brief ${service.title}`)}&body=${encodeURIComponent(`Halo Arsiteku,\n\nSaya tertarik dengan layanan ${service.title}.\n\nInformasi proyek:\n- Nama: \n- Lokasi proyek: \n- Luas tanah/bangunan: \n- Timeline diharapkan: \n- Budget range: \n- Kebutuhan khusus: \n\nTerima kasih.`)}`}
                  className="inline-flex items-center space-x-3 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/30"
                  onClick={() => {
                    // GTM tracking
                    if (typeof window !== 'undefined' && (window as any).dataLayer) {
                      (window as any).dataLayer.push({
                        event: 'cta_click',
                        cta_type: 'email_service_detail',
                        service_name: service.title,
                        cta_location: 'service_detail_bottom'
                      });
                    }
                  }}
                >
                  <Mail className="w-5 h-5" />
                  <span>Kirim Brief Detail</span>
                  <ArrowRight className="w-5 h-5" />
                </a>
              </div>

              <div className="pt-8 text-white/70 text-sm">
                <p>
                  ⚡ Respon dalam 5 menit di jam kerja &nbsp;•&nbsp; 
                  🔒 Data dan informasi proyek dijamin kerahasiaannya &nbsp;•&nbsp; 
                  💬 Konsultasi dalam Bahasa Indonesia
                </p>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LayananDetail;