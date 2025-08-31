import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  ChevronUp,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
  BookOpen,
  Clock,
  Users,
  DollarSign,
  Wrench,
  Shield,
  FileText
} from 'lucide-react';
import { faqs, getFAQCategories } from '../dataA/faqs';

const FAQ: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('Semua');
  const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());

  const categories = ['Semua', ...getFAQCategories()];

  const filteredFAQs = useMemo(() => {
    let filtered = faqs;

    // Filter by search term
    if (searchTerm) {
      filtered = filtered.filter(faq =>
        faq.q.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.a.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    // Filter by category
    if (selectedCategory !== 'Semua') {
      filtered = filtered.filter(faq => faq.category === selectedCategory);
    }

    return filtered;
  }, [searchTerm, selectedCategory]);

  const toggleItem = (index: number) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedItems(newExpanded);
  };

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

  const categoryIcons: { [key: string]: React.ComponentType<any> } = {
    'Proses & Timeline': Clock,
    'Biaya & Pembayaran': DollarSign,
    'Layanan & Scope': Wrench,
    'Teknis & Konstruksi': FileText,
    'Revisi & Garansi': Shield
  };

  const getCategoryIcon = (category: string) => {
    return categoryIcons[category] || HelpCircle;
  };

  const groupedFAQs = useMemo(() => {
    const grouped: { [key: string]: typeof faqs } = {};
    
    if (selectedCategory === 'Semua') {
      // Group by category
      filteredFAQs.forEach(faq => {
        if (!grouped[faq.category]) {
          grouped[faq.category] = [];
        }
        grouped[faq.category].push(faq);
      });
    } else {
      // Single category
      grouped[selectedCategory] = filteredFAQs;
    }
    
    return grouped;
  }, [filteredFAQs, selectedCategory]);

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
              Pertanyaan yang Sering Diajukan
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Temukan jawaban untuk pertanyaan umum seputar layanan Arsiteku. 
              Jika tidak menemukan jawaban yang Anda cari, jangan ragu untuk menghubungi kami.
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
                placeholder="Cari pertanyaan atau jawaban..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <span className="text-sm text-neutral-600">Kategori:</span>
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
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto"
          >
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <HelpCircle className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">{faqs.length}</div>
              <div className="text-sm text-neutral-600">Total FAQ</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-2">{getFAQCategories().length}</div>
              <div className="text-sm text-neutral-600">Kategori</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-primary" />
              </div>
              <div className="text-2xl font-bold text-primary mb-2">24/7</div>
              <div className="text-sm text-neutral-600">Dukungan</div>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-accent" />
              </div>
              <div className="text-2xl font-bold text-accent mb-2">100%</div>
              <div className="text-sm text-neutral-600">Responsif</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Content */}
      <section className="py-16 bg-gradient-to-br from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          {filteredFAQs.length > 0 ? (
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              {Object.entries(groupedFAQs).map(([category, categoryFAQs]) => (
                <motion.div
                  key={category}
                  variants={itemVariants}
                  className="mb-12"
                >
                  <div className="flex items-center gap-3 mb-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center">
                      {React.createElement(getCategoryIcon(category), { 
                        className: "w-6 h-6 text-primary" 
                      })}
                    </div>
                    <h2 className="text-2xl font-heading font-bold text-neutral-800">
                      {category}
                    </h2>
                  </div>
                  
                  <div className="space-y-4">
                    {categoryFAQs.map((faq, index) => {
                      const globalIndex = faqs.findIndex(f => f.q === faq.q);
                      const isExpanded = expandedItems.has(globalIndex);
                      
                      return (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.3 }}
                          className="bg-white rounded-2xl shadow-lg border border-neutral-100 overflow-hidden"
                        >
                          <button
                            onClick={() => toggleItem(globalIndex)}
                            className="w-full p-6 text-left flex items-center justify-between hover:bg-neutral-50 transition-colors"
                          >
                            <h3 className="text-lg font-semibold text-neutral-800 pr-4">
                              {faq.q}
                            </h3>
                            <div className="flex-shrink-0">
                              {isExpanded ? (
                                <ChevronUp className="w-6 h-6 text-primary" />
                              ) : (
                                <ChevronDown className="w-6 h-6 text-neutral-400" />
                              )}
                            </div>
                          </button>
                          
                          <AnimatePresence>
                            {isExpanded && (
                              <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                className="overflow-hidden"
                              >
                                <div className="px-6 pb-6">
                                  <div className="pt-4 border-t border-neutral-100">
                                    <p className="text-neutral-700 leading-relaxed">
                                      {faq.a}
                                    </p>
                                  </div>
                                </div>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </motion.div>
                      );
                    })}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-center py-16"
            >
              <HelpCircle className="w-16 h-16 text-neutral-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-neutral-600 mb-2">
                Tidak ada FAQ ditemukan
              </h3>
              <p className="text-neutral-500 mb-6">
                Coba ubah kata kunci pencarian atau pilih kategori yang berbeda
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('Semua');
                }}
                className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:bg-primary-700 transition-colors"
              >
                Reset Pencarian
              </button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Contact Support Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-6">
              Masih Punya Pertanyaan?
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Tim kami siap membantu menjawab pertanyaan Anda. 
              Jangan ragu untuk menghubungi kami melalui berbagai saluran yang tersedia.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <Phone className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Telepon</h3>
                <p className="text-neutral-600 mb-3">
                  Hubungi kami langsung untuk konsultasi cepat
                </p>
                <a
                  href="tel:+6281234567890"
                  className="text-primary font-semibold hover:text-primary-700 transition-colors"
                >
                  +62 812-3456-7890
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                  <Mail className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">Email</h3>
                <p className="text-neutral-600 mb-3">
                  Kirim pertanyaan detail melalui email
                </p>
                <a
                  href="mailto:hello@arsiteku.com"
                  className="text-accent font-semibold hover:text-accent/80 transition-colors"
                >
                  hello@arsiteku.com
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors">
                  <MessageCircle className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">WhatsApp</h3>
                <p className="text-neutral-600 mb-3">
                  Chat langsung dengan tim kami
                </p>
                <a
                  href="https://wa.me/6281234567890"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary font-semibold hover:text-primary-700 transition-colors"
                >
                  Chat WhatsApp
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Additional Resources */}
      <section className="py-16 bg-gradient-to-r from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-6">
              Sumber Daya Tambahan
            </h2>
            <p className="text-lg text-neutral-600 mb-8">
              Jelajahi sumber daya lain yang dapat membantu Anda memahami layanan kami
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Panduan Lengkap
                </h3>
                <p className="text-neutral-600 mb-4">
                  Download panduan lengkap proses desain dan konstruksi rumah
                </p>
                <button className="bg-primary text-white px-4 py-2 rounded-lg font-medium hover:bg-primary-700 transition-colors">
                  Download PDF
                </button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white p-6 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/10 rounded-2xl flex items-center justify-center mb-4">
                  <Users className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-2">
                  Konsultasi Gratis
                </h3>
                <p className="text-neutral-600 mb-4">
                  Jadwalkan sesi konsultasi gratis dengan tim arsitek kami
                </p>
                <a
                  href="/kontak"
                  className="bg-accent text-white px-4 py-2 rounded-lg font-medium hover:bg-accent/90 transition-colors inline-block"
                >
                  Jadwalkan Sekarang
                </a>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FAQ;