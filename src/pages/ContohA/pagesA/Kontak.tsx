import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageCircle,
  Send,
  CheckCircle,
  User,
  Award,
  Users,
  Target
} from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  projectType: string;
  projectSize: string;
  budget: string;
  timeline: string;
  message: string;
  preferredContact: string;
}

const Kontak: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    projectSize: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email'
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Simulate success
    setSubmitStatus('success');
    setIsSubmitting(false);
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setSubmitStatus('idle');
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        projectType: '',
        projectSize: '',
        budget: '',
        timeline: '',
        message: '',
        preferredContact: 'email'
      });
    }, 3000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Alamat Kantor",
      details: [
        "Jl. Malioboro No. 123",
        "Yogyakarta 55271",
        "Indonesia"
      ],
      color: "primary"
    },
    {
      icon: Phone,
      title: "Telepon & WhatsApp",
      details: [
        "+62 812-3456-7890",
        "+62 274-123-456",
        "Senin - Sabtu, 08:00 - 17:00"
      ],
      color: "accent"
    },
    {
      icon: Mail,
      title: "Email",
      details: [
        "hello@arsiteku.com",
        "info@arsiteku.com",
        "Respon dalam 24 jam"
      ],
      color: "primary"
    },
    {
      icon: Clock,
      title: "Jam Kerja",
      details: [
        "Senin - Jumat: 08:00 - 17:00",
        "Sabtu: 09:00 - 15:00",
        "Minggu: Tutup"
      ],
      color: "accent"
    }
  ];

  const projectTypes = [
    "Rumah Tinggal",
    "Rumah Mewah",
    "Villa",
    "Kantor",
    "Toko/Ruko",
    "Hotel/Resort",
    "Renovasi",
    "Lainnya"
  ];

  const projectSizes = [
    "Dibawah 100m²",
    "100-200m²",
    "200-500m²",
    "500-1000m²",
    "Diatas 1000m²"
  ];

  const budgetRanges = [
    "Dibawah 500 juta",
    "500 juta - 1 miliar",
    "1-2 miliar",
    "2-5 miliar",
    "Diatas 5 miliar"
  ];

  const timelineOptions = [
    "Segera (1-3 bulan)",
    "Cepat (3-6 bulan)",
    "Normal (6-12 bulan)",
    "Tidak terburu-buru (1+ tahun)"
  ];

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
              Hubungi Kami
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Siap membantu mewujudkan impian rumah Anda. Mari diskusikan proyek Anda 
              bersama tim arsitek profesional kami.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
      </section>

      {/* Contact Info Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className={`w-16 h-16 bg-${info.color}/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-${info.color}/20 transition-colors`}>
                  <info.icon className={`w-8 h-8 text-${info.color}`} />
                </div>
                <h3 className="text-xl font-semibold text-neutral-800 mb-3">
                  {info.title}
                </h3>
                <div className="space-y-1">
                  {info.details.map((detail, idx) => (
                    <p key={idx} className="text-neutral-600 text-sm">
                      {detail}
                    </p>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 bg-gradient-to-r from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8">
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-heading font-bold text-neutral-800 mb-4">
                    Kirim Pesan
                  </h2>
                  <p className="text-neutral-600">
                    Isi form di bawah ini dan kami akan menghubungi Anda dalam 24 jam
                  </p>
                </div>

                {submitStatus === 'success' ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-green-600 mb-2">
                      Pesan Terkirim!
                    </h3>
                    <p className="text-neutral-600">
                      Terima kasih telah menghubungi kami. Tim kami akan segera menghubungi Anda.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Nama Lengkap *
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Masukkan nama lengkap"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="contoh@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Nomor Telepon
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="+62 812-3456-7890"
                        />
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Perusahaan
                        </label>
                        <input
                          type="text"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                          placeholder="Nama perusahaan (opsional)"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Jenis Proyek *
                        </label>
                        <select
                          name="projectType"
                          value={formData.projectType}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Pilih jenis proyek</option>
                          {projectTypes.map((type, index) => (
                            <option key={index} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Ukuran Proyek *
                        </label>
                        <select
                          name="projectSize"
                          value={formData.projectSize}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Pilih ukuran proyek</option>
                          {projectSizes.map((size, index) => (
                            <option key={index} value={size}>{size}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Budget Estimasi *
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Pilih range budget</option>
                          {budgetRanges.map((budget, index) => (
                            <option key={index} value={budget}>{budget}</option>
                          ))}
                        </select>
                      </div>
                      
                      <div>
                        <label className="block text-sm font-medium text-neutral-700 mb-2">
                          Timeline Proyek *
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          required
                          className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors bg-white"
                        >
                          <option value="">Pilih timeline</option>
                          {timelineOptions.map((timeline, index) => (
                            <option key={index} value={timeline}>{timeline}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Pesan Detail *
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        required
                        rows={4}
                        className="w-full px-4 py-3 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                        placeholder="Jelaskan detail proyek, kebutuhan, dan harapan Anda..."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-neutral-700 mb-2">
                        Preferensi Kontak
                      </label>
                      <div className="flex gap-4">
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="email"
                            checked={formData.preferredContact === 'email'}
                            onChange={handleInputChange}
                            className="text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-neutral-700">Email</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="phone"
                            checked={formData.preferredContact === 'phone'}
                            onChange={handleInputChange}
                            className="text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-neutral-700">Telepon</span>
                        </label>
                        <label className="flex items-center gap-2">
                          <input
                            type="radio"
                            name="preferredContact"
                            value="whatsapp"
                            checked={formData.preferredContact === 'whatsapp'}
                            onChange={handleInputChange}
                            className="text-primary focus:ring-primary"
                          />
                          <span className="text-sm text-neutral-700">WhatsApp</span>
                        </label>
                      </div>
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-primary text-white py-4 rounded-xl font-semibold text-lg hover:bg-primary-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors flex items-center justify-center gap-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span>Mengirim Pesan...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Kirim Pesan</span>
                        </>
                      )}
                    </button>

                    <p className="text-xs text-neutral-500 text-center">
                      * Wajib diisi. Data Anda akan dijaga kerahasiaannya.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Details & Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              {/* Why Choose Us */}
              <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8">
                <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-6">
                  Mengapa Memilih Arsiteku?
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Award className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">8+ Tahun Pengalaman</h4>
                      <p className="text-sm text-neutral-600">
                        Tim arsitek berpengalaman dengan ratusan proyek sukses
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Users className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">100+ Klien Puas</h4>
                      <p className="text-sm text-neutral-600">
                        Rating 5 bintang dari klien di seluruh Indonesia
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Target className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-800 mb-1">Konsultasi Gratis</h4>
                      <p className="text-sm text-neutral-600">
                        Sesi konsultasi awal tanpa biaya untuk memahami kebutuhan Anda
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Placeholder */}
              <div className="bg-white rounded-3xl shadow-xl border border-neutral-100 p-8">
                <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-6">
                  Lokasi Kantor
                </h3>
                <div className="bg-neutral-100 rounded-2xl h-64 flex items-center justify-center">
                  <div className="text-center text-neutral-500">
                    <MapPin className="w-16 h-16 mx-auto mb-4 text-neutral-400" />
                    <p className="text-lg font-medium">Peta Lokasi</p>
                    <p className="text-sm">Jl. Malioboro No. 123, Yogyakarta</p>
                  </div>
                </div>
                <div className="mt-4 text-center">
                  <a
                    href="https://maps.google.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-primary font-semibold hover:text-primary-700 transition-colors"
                  >
                    <MapPin className="w-4 h-4" />
                    <span>Buka di Google Maps</span>
                  </a>
                </div>
              </div>

              {/* Quick Contact */}
              <div className="bg-gradient-to-br from-primary to-primary-800 text-white rounded-3xl shadow-xl p-8">
                <h3 className="text-2xl font-heading font-bold mb-6">
                  Butuh Bantuan Cepat?
                </h3>
                <div className="space-y-4">
                  <a
                    href="https://wa.me/6281234567890"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors"
                  >
                    <MessageCircle className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">WhatsApp</div>
                      <div className="text-sm text-white/80">Respon dalam 1 jam</div>
                    </div>
                  </a>
                  
                  <a
                    href="tel:+6281234567890"
                    className="flex items-center gap-3 bg-white/10 hover:bg-white/20 p-4 rounded-2xl transition-colors"
                  >
                    <Phone className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">Telepon Langsung</div>
                      <div className="text-sm text-white/80">Senin - Sabtu, 08:00 - 17:00</div>
                    </div>
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-heading font-bold mb-6">
              Siap Memulai Proyek Anda?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Jangan ragu untuk menghubungi kami. Tim kami siap membantu mewujudkan 
              impian rumah impian Anda dengan desain yang berkualitas dan profesional.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://wa.me/6281234567890"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-accent hover:bg-accent/90 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                <MessageCircle className="w-6 h-6" />
                <span>Chat WhatsApp</span>
              </a>
              
              <a
                href="tel:+6281234567890"
                className="bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-colors inline-flex items-center gap-2"
              >
                <Phone className="w-6 h-6" />
                <span>Telepon Sekarang</span>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Kontak;