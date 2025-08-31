import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, Clock, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { services } from '../dataA/services';

const Layanan: React.FC = () => {
  const seoData = {
    title: "Layanan Jasa Arsitek Rumah | Desain, RAB, Perizinan | Arsiteku",
    description: "Layanan lengkap jasa arsitek: desain arsitektur rumah, interior, gambar kerja & RAB, perizinan PBG/IMB, pengawasan konstruksi. Konsultasi gratis.",
    keywords: "jasa arsitek, desain rumah, gambar kerja, RAB, perizinan PBG IMB, pengawasan konstruksi, renovasi rumah",
    canonicalUrl: "https://www.arsiteku.com/layanan"
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
              className="text-center max-w-4xl mx-auto"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-primary mb-6">
                Layanan Arsitektur{' '}
                <span className="text-accent">Komprehensif</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed mb-8">
                Dari konsep awal hingga serah terima, kami menyediakan solusi lengkap 
                untuk mewujudkan rumah impian Anda dengan pendekatan yang profesional dan terintegrasi.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-600">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Konsultasi gratis 30 menit</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Timeline transparan</span>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-5 h-5 text-accent" />
                  <span>Harga competitive</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-16 lg:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
              {services.map((service, index) => (
                <motion.div
                  key={service.slug}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="group"
                >
                  <div className="bg-neutral-50 p-8 lg:p-10 rounded-3xl border border-neutral-100 hover:shadow-xl transition-all duration-500 h-full">
                    {/* Header */}
                    <div className="mb-8">
                      <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4 group-hover:text-accent transition-colors">
                        {service.title}
                      </h2>
                      <p className="text-lg text-neutral-600 leading-relaxed">
                        {service.summary}
                      </p>
                    </div>

                    {/* Value Propositions */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-neutral-800 mb-4">Nilai Utama:</h3>
                      <ul className="space-y-3">
                        {service.value.map((item, idx) => (
                          <li key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                            <span className="text-neutral-600">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Key Deliverables Preview */}
                    <div className="mb-8">
                      <h3 className="font-semibold text-neutral-800 mb-4">Deliverables Utama:</h3>
                      <div className="grid grid-cols-1 gap-2">
                        {service.deliverables.slice(0, 3).map((item, idx) => (
                          <div key={idx} className="flex items-center space-x-3 text-sm text-neutral-600">
                            <div className="w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0"></div>
                            <span>{item}</span>
                          </div>
                        ))}
                        {service.deliverables.length > 3 && (
                          <div className="text-sm text-accent font-medium">
                            +{service.deliverables.length - 3} deliverables lainnya
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Bottom info */}
                    <div className="grid grid-cols-2 gap-6 mb-8">
                      <div className="bg-white p-4 rounded-xl">
                        <div className="flex items-center space-x-2 text-accent mb-2">
                          <Clock className="w-4 h-4" />
                          <span className="text-sm font-medium">Timeline</span>
                        </div>
                        <div className="text-neutral-700 font-semibold">
                          {service.timeline.length} tahapan
                        </div>
                      </div>
                      
                      <div className="bg-white p-4 rounded-xl">
                        <div className="flex items-center space-x-2 text-accent mb-2">
                          <DollarSign className="w-4 h-4" />
                          <span className="text-sm font-medium">Investasi</span>
                        </div>
                        <div className="text-neutral-700 font-semibold text-sm">
                          Mulai dari range yang kompetitif
                        </div>
                      </div>
                    </div>

                    {/* CTA */}
                    <Link
                      to={`/layanan/${service.slug}`}
                      className="inline-flex items-center justify-center space-x-3 w-full bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 group"
                    >
                      <span>Pelajari Detail Layanan</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Process Overview */}
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
                Proses Kerja yang Terstruktur
              </h2>
              <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
                Kami menjalankan metodologi yang telah teruji untuk memastikan 
                setiap proyek berjalan sesuai timeline dan budget yang disepakati.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  title: "Konsultasi & Planning",
                  description: "Brief lengkap, analisis kebutuhan, dan penyusunan proposal kerja yang detail.",
                  features: ["Site survey", "Need analysis", "Budget planning", "Timeline setting"]
                },
                {
                  title: "Design & Development", 
                  description: "Pengembangan konsep, desain detail, dan koordinasi dengan semua stakeholder.",
                  features: ["Concept design", "3D visualization", "Technical drawing", "Material specs"]
                },
                {
                  title: "Implementation Support",
                  description: "Dukungan implementasi, pengawasan kualitas, dan koordinasi dengan kontraktor.",
                  features: ["Construction docs", "Quality control", "Progress monitoring", "Final handover"]
                }
              ].map((phase, index) => (
                <motion.div
                  key={phase.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100"
                >
                  <div className="text-center mb-6">
                    <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <span className="text-2xl font-bold text-accent">{index + 1}</span>
                    </div>
                    <h3 className="text-xl font-bold text-primary mb-3">{phase.title}</h3>
                    <p className="text-neutral-600">{phase.description}</p>
                  </div>
                  
                  <ul className="space-y-2">
                    {phase.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center space-x-3">
                        <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                        <span className="text-sm text-neutral-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
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
                Siap Memulai Proyek Rumah Impian?
              </h2>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Konsultasi gratis untuk membahas kebutuhan, timeline, dan budget proyek Anda. 
                Tidak ada kewajiban, hanya diskusi informatif untuk solusi terbaik.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={`https://wa.me/628123456789?text=${encodeURIComponent('Halo Arsiteku, saya tertarik untuk konsultasi tentang layanan arsitektur. Bisa bantu saya?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  <span>Konsultasi via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <Link
                  to="/kontak"
                  className="inline-flex items-center space-x-3 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/30"
                >
                  <span>Kirim Brief Detail</span>
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Layanan;