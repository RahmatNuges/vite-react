import React from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowLeft, MapPin, Calendar, User, Maximize, DollarSign, CheckCircle, ArrowRight, MessageCircle, Mail } from 'lucide-react';
import { getProjectBySlug } from '../dataA/projects';

const ProyekDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = getProjectBySlug(slug || '');

  if (!project) {
    return <Navigate to="/portofolio" replace />;
  }

  const whatsappNumber = "628123456789";
  const email = "hello@arsiteku.com";
  const whatsappMessage = `Halo Arsiteku, saya tertarik dengan proyek ${project.title}. Bisa konsultasi untuk proyek serupa?`;

  const seoData = {
    title: `${project.title} | Portfolio Arsiteku`,
    description: project.summary,
    keywords: `${project.title.toLowerCase()}, ${project.style.toLowerCase()}, ${project.location.toLowerCase()}, portfolio arsitek`,
    canonicalUrl: `https://www.arsiteku.com/portofolio/${project.slug}`
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
        <meta property="og:image" content={project.image} />
      </Helmet>

      <main>
        {/* Back Navigation */}
        <section className="pt-20 lg:pt-24 pb-8 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link
              to="/portofolio"
              className="inline-flex items-center space-x-2 text-neutral-600 hover:text-primary transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Kembali ke Portfolio</span>
            </Link>
          </div>
        </section>

        {/* Hero Image */}
        <section className="pb-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[16/9] lg:aspect-[21/9] rounded-2xl overflow-hidden"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent" />
              
              {/* Project badges */}
              <div className="absolute top-6 left-6 right-6 flex justify-between items-start">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-primary">{project.type}</span>
                </div>
                <div className="bg-accent/90 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <span className="text-sm font-medium text-white">{project.style}</span>
                </div>
              </div>

              {/* Project title overlay */}
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <h1 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
                  {project.title}
                </h1>
                <div className="flex flex-wrap items-center gap-6 text-white/90">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-5 h-5" />
                    <span>{project.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Maximize className="w-5 h-5" />
                    <span>{project.area}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="w-5 h-5" />
                    <span>{project.year}</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-6">
                    Ringkasan Proyek
                  </h2>
                  <p className="text-lg text-neutral-700 leading-relaxed mb-8">
                    {project.summary}
                  </p>
                </motion.div>

                {/* Challenges */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-6">Tantangan Desain</h3>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                        </div>
                        <p className="text-neutral-700">{challenge}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Solutions */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-6">Solusi Desain</h3>
                  <div className="space-y-4">
                    {project.solutions.map((solution, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <CheckCircle className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                        <p className="text-neutral-700">{solution}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Results */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <h3 className="text-xl font-bold text-primary mb-6">Hasil & Dampak</h3>
                  <div className="space-y-4">
                    {project.results.map((result, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                          <CheckCircle className="w-4 h-4 text-green-600" />
                        </div>
                        <p className="text-neutral-700">{result}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Sidebar */}
              <div className="space-y-8">
                
                {/* Project Details */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="bg-neutral-50 p-8 rounded-2xl"
                >
                  <h3 className="text-lg font-bold text-primary mb-6">Detail Proyek</h3>
                  <div className="space-y-4">
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Klien</div>
                      <div className="font-medium text-neutral-800">{project.client}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Lokasi</div>
                      <div className="font-medium text-neutral-800">{project.location}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Luas Bangunan</div>
                      <div className="font-medium text-neutral-800">{project.area}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Gaya Arsitektur</div>
                      <div className="font-medium text-neutral-800">{project.style}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Tahun Selesai</div>
                      <div className="font-medium text-neutral-800">{project.year}</div>
                    </div>
                    <div>
                      <div className="text-sm text-neutral-500 mb-1">Range Budget</div>
                      <div className="font-medium text-neutral-800">{project.budget}</div>
                    </div>
                  </div>
                </motion.div>

                {/* CTA Card */}
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-primary p-8 rounded-2xl text-white"
                >
                  <h3 className="text-lg font-bold mb-4">Tertarik Proyek Serupa?</h3>
                  <p className="text-white/90 mb-6">
                    Konsultasi gratis untuk membahas kebutuhan dan visi proyek Anda.
                  </p>
                  
                  <div className="space-y-3">
                    <a
                      href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 bg-accent hover:bg-accent/90 text-white p-3 rounded-xl transition-colors"
                    >
                      <MessageCircle className="w-5 h-5" />
                      <span className="font-medium">WhatsApp</span>
                    </a>
                    
                    <a
                      href={`mailto:${email}?subject=${encodeURIComponent(`Konsultasi Proyek Serupa: ${project.title}`)}&body=${encodeURIComponent(`Halo Arsiteku,\n\nSaya tertarik dengan proyek ${project.title} dan ingin konsultasi untuk proyek serupa.\n\nDetail proyek saya:\n- Lokasi:\n- Luas tanah/bangunan:\n- Budget range:\n- Timeline:\n\nTerima kasih.`)}`}
                      className="flex items-center space-x-3 bg-white/15 hover:bg-white/25 text-white p-3 rounded-xl transition-colors border border-white/30"
                    >
                      <Mail className="w-5 h-5" />
                      <span className="font-medium">Email Brief</span>
                    </a>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Materials & Systems */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              
              {/* Materials */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-8">
                  Material & Finishing
                </h2>
                <div className="space-y-4">
                  {project.materials.map((material, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                      <p className="text-neutral-700">{material}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Systems */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-8">
                  Sistem & Teknologi
                </h2>
                <div className="space-y-4">
                  {project.systems.map((system, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-neutral-100">
                      <p className="text-neutral-700">{system}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-2xl lg:text-3xl font-heading font-bold text-primary mb-4">
                Galeri Proyek
              </h2>
              <p className="text-lg text-neutral-600">
                Dokumentasi visual dari berbagai sudut dan detail proyek
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {project.gallery.map((image, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="aspect-[4/3] rounded-xl overflow-hidden group cursor-pointer"
                >
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 1}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Related Projects CTA */}
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
                Siap Mewujudkan Proyek Serupa?
              </h2>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Setiap proyek adalah solusi unik. Mari diskusikan bagaimana kami dapat 
                membantu mewujudkan visi arsitektur rumah impian Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  <MessageCircle className="w-5 h-5" />
                  <span>Konsultasi via WhatsApp</span>
                  <ArrowRight className="w-5 h-5" />
                </a>

                <Link
                  to="/portofolio"
                  className="inline-flex items-center space-x-3 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/30"
                >
                  <span>Lihat Portfolio Lainnya</span>
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

export default ProyekDetail;