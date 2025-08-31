import React, { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { 
  Search, 
  Filter, 
  Clock, 
  User, 
  Calendar,
  ArrowRight,
  BookOpen
} from 'lucide-react';
import { articles, getArticleCategories } from '../dataA/articles';

const Artikel: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [sortBy, setSortBy] = useState<'latest' | 'popular' | 'readTime'>('latest');

  const categories = ['Semua', ...getArticleCategories()];

  const filteredAndSortedArticles = useMemo(() => {
    let filtered = articles;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(article =>
        article.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        article.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()))
      );
    }

    // Filter by category
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(article => article.category === selectedCategory);
    }

    // Sort articles
    switch (sortBy) {
      case 'latest':
        filtered = [...filtered].sort((a, b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime());
        break;
      case 'popular':
        // Simulate popularity based on read time and tags
        filtered = [...filtered].sort((a, b) => {
          const aScore = a.readTime + (a.tags.includes('tren') ? 2 : 0) + (a.tags.includes('tips') ? 1 : 0);
          const bScore = b.readTime + (b.tags.includes('tren') ? 2 : 0) + (b.tags.includes('tips') ? 1 : 0);
          return bScore - aScore;
        });
        break;
      case 'readTime':
        filtered = [...filtered].sort((a, b) => a.readTime - b.readTime);
        break;
    }

    return filtered;
  }, [searchTerm, selectedCategory, sortBy]);

  const featuredArticle = articles[0]; // First article as featured

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('id-ID', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-neutral-50 to-primary-50">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-r from-primary to-primary-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative z-10 container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Artikel & Inspirasi
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Temukan ide, tips, dan tren terbaru dalam desain arsitektur tropis Indonesia. 
              Dari panduan praktis hingga studi kasus inspiratif.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-neutral-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Cari artikel, tips, atau tren..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="w-5 h-5 text-neutral-600" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
              >
                {categories.map(category => (
                  <option key={category} value={category}>{category}</option>
                ))}
              </select>
            </div>

            {/* Sort Options */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-600">Urutkan:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as 'latest' | 'popular' | 'readTime')}
                className="px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
              >
                <option value="latest">Terbaru</option>
                <option value="popular">Terpopuler</option>
                <option value="readTime">Waktu Baca</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      {featuredArticle && (
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">
                Artikel Unggulan
              </h2>
              <p className="text-lg text-neutral-600">
                Artikel pilihan yang wajib dibaca untuk inspirasi desain rumah Anda
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              <div className="bg-gradient-to-br from-neutral-50 to-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden">
                <div className="grid lg:grid-cols-2 gap-0">
                  <div className="relative h-80 lg:h-full">
                    <img
                      src={featuredArticle.cover}
                      alt={featuredArticle.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {featuredArticle.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 flex flex-col justify-center">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(featuredArticle.publishDate)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{featuredArticle.readTime} menit baca</span>
                      </div>
                    </div>
                    
                    <h3 className="text-2xl lg:text-3xl font-heading font-bold text-neutral-800 mb-4 leading-tight">
                      {featuredArticle.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {featuredArticle.tags.slice(0, 4).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-primary/10 text-primary px-3 py-1 rounded-full text-sm font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={`/artikel/${featuredArticle.slug}`}
                      className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors group"
                    >
                      <span>Baca Artikel Lengkap</span>
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Articles Grid */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">
              {selectedCategory === 'Semua' ? 'Semua Artikel' : `Artikel ${selectedCategory}`}
            </h2>
            <p className="text-lg text-neutral-600">
              {filteredAndSortedArticles.length} artikel ditemukan
            </p>
          </motion.div>

          {filteredAndSortedArticles.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {filteredAndSortedArticles.map((article, index) => (
                <motion.article
                  key={article.slug}
                  variants={itemVariants}
                  className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden hover:shadow-xl transition-all duration-300 group"
                >
                  <div className="relative">
                    <img
                      src={article.cover}
                      alt={article.title}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-accent text-white px-3 py-1 rounded-full text-sm font-medium">
                        {article.category}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 text-neutral-700 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {article.readTime}m
                      </span>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-neutral-500 mb-3">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        <span>{formatDate(article.publishDate)}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-heading font-bold text-neutral-800 mb-3 leading-tight group-hover:text-primary transition-colors">
                      {article.title}
                    </h3>
                    
                    <p className="text-neutral-600 mb-4 leading-relaxed line-clamp-3">
                      {article.excerpt}
                    </p>
                    
                    <div className="flex flex-wrap gap-2 mb-4">
                      {article.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-neutral-100 text-neutral-600 px-2 py-1 rounded-full text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                    
                    <a
                      href={`/artikel/${article.slug}`}
                      className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-700 transition-colors group"
                    >
                      <span>Baca Selengkapnya</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <BookOpen className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-600 mb-2">
                Tidak ada artikel ditemukan
              </h3>
              <p className="text-neutral-500">
                Coba ubah kata kunci pencarian atau pilih kategori yang berbeda
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold mb-4">
              Dapatkan Update Artikel Terbaru
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Berlangganan newsletter kami untuk mendapatkan artikel terbaru, tips desain, 
              dan inspirasi langsung ke email Anda.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Masukkan email Anda"
                className="flex-1 px-4 py-3 rounded-xl text-neutral-800 focus:ring-2 focus:ring-accent/50 focus:outline-none"
              />
              <button className="bg-accent hover:bg-accent/90 text-white px-6 py-3 rounded-xl font-semibold transition-colors">
                Berlangganan
              </button>
            </div>
            
            <p className="text-sm text-white/70 mt-4">
              Gratis dan tanpa spam. Dapat berhenti berlangganan kapan saja.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Artikel;