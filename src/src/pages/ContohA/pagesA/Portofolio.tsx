import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Filter, Grid, List, MapPin, Maximize, Calendar } from 'lucide-react';
import { Link } from 'react-router-dom';
import { projects, getProjectsByFilter } from '../dataA/projects';

const Portofolio: React.FC = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [filters, setFilters] = useState({
    type: '',
    style: '',
    location: '',
    budget: ''
  });

  const filteredProjects = getProjectsByFilter(filters);

  const seoData = {
    title: "Portfolio Proyek Arsitektur Rumah | Arsiteku Studio",
    description: "Lihat portfolio lengkap proyek desain rumah tinggal tropis oleh Arsiteku. 20+ proyek selesai di Yogyakarta dan sekitarnya dengan berbagai gaya dan budget.",
    keywords: "portfolio arsitek, desain rumah yogyakarta, proyek arsitektur, rumah tropis modern, studi kasus desain",
    canonicalUrl: "https://www.arsiteku.com/portofolio"
  };

  const filterOptions = {
    type: ['Rumah Tinggal', 'Villa', 'Townhouse', 'Klinik'],
    style: ['Tropis Modern', 'Minimalis Tropis', 'Modern Kontemporer', 'Tradisional Modern'],
    location: ['Sleman', 'Bantul', 'Yogyakarta', 'Kulon Progo'],
    budget: ['500-750jt', '750-1M', '1-1.5M', '1.5M+']
  };

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters(prev => ({
      ...prev,
      [filterType]: prev[filterType as keyof typeof prev] === value ? '' : value
    }));
  };

  const clearFilters = () => {
    setFilters({
      type: '',
      style: '',
      location: '',
      budget: ''
    });
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
                Portfolio{' '}
                <span className="text-accent">Proyek Terpilih</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-neutral-600 leading-relaxed mb-8">
                Setiap proyek adalah solusi unik yang disesuaikan dengan kebutuhan klien, 
                kondisi lahan, dan karakteristik iklim lokal Indonesia.
              </p>

              <div className="flex flex-wrap items-center justify-center gap-6 text-neutral-600">
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>20+ proyek selesai</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Berbagai tipe & budget</span>
                </div>
                <div className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-accent rounded-full"></div>
                  <span>Dokumentasi lengkap</span>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Filters & Controls */}
        <section className="py-8 bg-white border-b border-neutral-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6">
              
              {/* Filters */}
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center space-x-2">
                  <Filter className="w-5 h-5 text-neutral-500" />
                  <span className="font-medium text-neutral-700">Filter:</span>
                </div>
                
                {Object.entries(filterOptions).map(([filterType, options]) => (
                  <div key={filterType} className="relative">
                    <select
                      value={filters[filterType as keyof typeof filters]}
                      onChange={(e) => handleFilterChange(filterType, e.target.value)}
                      className="appearance-none bg-neutral-50 border border-neutral-300 rounded-lg px-4 py-2 pr-8 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                    >
                      <option value="">{filterType.charAt(0).toUpperCase() + filterType.slice(1)}</option>
                      {options.map(option => (
                        <option key={option} value={option}>{option}</option>
                      ))}
                    </select>
                  </div>
                ))}
                
                {Object.values(filters).some(filter => filter !== '') && (
                  <button
                    onClick={clearFilters}
                    className="text-sm text-accent hover:text-accent/80 font-medium"
                  >
                    Clear Filters
                  </button>
                )}
              </div>

              {/* View Controls */}
              <div className="flex items-center space-x-4">
                <span className="text-sm text-neutral-600">
                  {filteredProjects.length} proyek
                </span>
                
                <div className="flex items-center bg-neutral-100 rounded-lg p-1">
                  <button
                    onClick={() => setViewMode('grid')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'grid' 
                        ? 'bg-white text-primary shadow-sm' 
                        : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode('list')}
                    className={`p-2 rounded-md transition-colors ${
                      viewMode === 'list' 
                        ? 'bg-white text-primary shadow-sm' 
                        : 'text-neutral-500 hover:text-neutral-700'
                    }`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Grid/List */}
        <section className="py-16 bg-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {filteredProjects.length === 0 ? (
              <div className="text-center py-16">
                <div className="w-16 h-16 bg-neutral-200 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Filter className="w-8 h-8 text-neutral-400" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-700 mb-2">
                  Tidak ada proyek yang sesuai filter
                </h3>
                <p className="text-neutral-500 mb-4">
                  Coba ubah atau hapus beberapa filter untuk melihat lebih banyak proyek.
                </p>
                <button
                  onClick={clearFilters}
                  className="text-primary hover:text-primary/80 font-medium"
                >
                  Hapus Semua Filter
                </button>
              </div>
            ) : (
              <div className={
                viewMode === 'grid' 
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'
                  : 'space-y-8'
              }>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.slug}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className="group"
                  >
                    {viewMode === 'grid' ? (
                      // Grid Card
                      <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          
                          <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                            <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                              <span className="text-sm font-medium text-primary">{project.style}</span>
                            </div>
                            <div className="bg-accent/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                              <span className="text-sm font-medium text-white">{project.budget}</span>
                            </div>
                          </div>
                        </div>

                        <div className="p-6">
                          <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                            {project.title}
                          </h3>
                          
                          <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                            {project.summary}
                          </p>

                          <div className="flex items-center justify-between mb-6 text-sm text-neutral-600">
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{project.location}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <Maximize className="w-4 h-4" />
                              <span>{project.area}</span>
                            </div>
                          </div>

                          <Link
                            to={`/portofolio/${project.slug}`}
                            className="inline-flex items-center space-x-2 text-primary font-medium hover:text-accent transition-colors group"
                          >
                            <span>Lihat Detail Proyek</span>
                            <div className="w-4 h-4 group-hover:translate-x-1 transition-transform">→</div>
                          </Link>
                        </div>
                      </div>
                    ) : (
                      // List Card
                      <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                          <div className="relative aspect-[4/3] lg:aspect-square overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                              loading="lazy"
                            />
                          </div>
                          
                          <div className="lg:col-span-2 p-6 lg:py-8">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                              <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium">
                                {project.type}
                              </span>
                              <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium">
                                {project.style}
                              </span>
                              <span className="bg-neutral-100 text-neutral-600 px-3 py-1 rounded-full text-sm">
                                {project.year}
                              </span>
                            </div>
                            
                            <h3 className="font-heading font-bold text-2xl text-primary mb-3 group-hover:text-accent transition-colors">
                              {project.title}
                            </h3>
                            
                            <p className="text-neutral-600 leading-relaxed mb-6">
                              {project.summary}
                            </p>

                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                              <div>
                                <div className="text-sm text-neutral-500 mb-1">Lokasi</div>
                                <div className="font-medium text-neutral-700">{project.location}</div>
                              </div>
                              <div>
                                <div className="text-sm text-neutral-500 mb-1">Luas</div>
                                <div className="font-medium text-neutral-700">{project.area}</div>
                              </div>
                              <div>
                                <div className="text-sm text-neutral-500 mb-1">Budget</div>
                                <div className="font-medium text-neutral-700">{project.budget}</div>
                              </div>
                              <div>
                                <div className="text-sm text-neutral-500 mb-1">Klien</div>
                                <div className="font-medium text-neutral-700">{project.client}</div>
                              </div>
                            </div>

                            <Link
                              to={`/portofolio/${project.slug}`}
                              className="inline-flex items-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium transition-colors"
                            >
                              <span>Lihat Studi Kasus Lengkap</span>
                              <div className="w-4 h-4">→</div>
                            </Link>
                          </div>
                        </div>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            )}
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
                Tertarik dengan Salah Satu Proyek Kami?
              </h2>
              
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Setiap proyek memiliki cerita dan solusi unik. Mari diskusikan bagaimana 
                kami bisa membantu mewujudkan visi rumah impian Anda.
              </p>

              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a
                  href={`https://wa.me/628123456789?text=${encodeURIComponent('Halo Arsiteku, saya tertarik dengan portfolio proyek Anda. Bisa konsultasi untuk proyek saya?')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-3 bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors"
                >
                  <span>Konsultasi Proyek Serupa</span>
                  <div className="w-5 h-5">→</div>
                </a>

                <Link
                  to="/layanan"
                  className="inline-flex items-center space-x-3 bg-white/15 hover:bg-white/25 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors border border-white/30"
                >
                  <span>Lihat Semua Layanan</span>
                  <div className="w-5 h-5">→</div>
                </Link>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Portofolio;