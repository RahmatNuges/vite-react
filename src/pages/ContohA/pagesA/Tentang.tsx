import React from 'react';
import { motion } from 'framer-motion';
import { 
  Award, 
  Users, 
  Target, 
  Heart, 
  CheckCircle, 
  Star,
  MapPin,
  Phone,
  Mail,
  Clock
} from 'lucide-react';
import { testimonials } from '../dataA/testimonials';

const Tentang: React.FC = () => {
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

  const stats = [
    { icon: Award, number: "50+", label: "Proyek Selesai", description: "Rumah, kantor, dan komersial" },
    { icon: Users, number: "100+", label: "Klien Puas", description: "Dari berbagai kota di Indonesia" },
    { icon: Target, number: "8+", label: "Tahun Pengalaman", description: "Dalam industri arsitektur" },
    { icon: Heart, number: "95%", label: "Rating Klien", description: "Berdasarkan testimoni" }
  ];

  const values = [
    {
      icon: CheckCircle,
      title: "Kualitas Terjamin",
      description: "Setiap detail desain diperhatikan dengan seksama untuk hasil terbaik"
    },
    {
      icon: Users,
      title: "Kolaborasi Tim",
      description: "Bekerja sama dengan klien untuk mewujudkan visi mereka"
    },
    {
      icon: Target,
      title: "Inovasi Berkelanjutan",
      description: "Selalu mengikuti tren dan teknologi terbaru"
    },
    {
      icon: Heart,
      title: "Kepuasan Klien",
      description: "Prioritas utama kami adalah kepuasan dan kebahagiaan klien"
    }
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
              Tentang Arsiteku
            </h1>
            <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
              Studio arsitektur yang berfokus pada desain inovatif dan solusi kreatif untuk hunian maupun komersial. 
              Kami percaya setiap ruang punya cerita, dan kami siap membantu mewujudkan visi Anda.
            </p>
          </motion.div>
        </div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 right-10 w-32 h-32 bg-accent/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-40 h-40 bg-accent/30 rounded-full blur-3xl"></div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4 group-hover:bg-primary/20 transition-colors">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-neutral-800 mb-1">
                  {stat.label}
                </div>
                <div className="text-sm text-neutral-600">
                  {stat.description}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Vision Mission Section */}
      <section className="py-16 bg-gradient-to-r from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-neutral-800 mb-6">
              Visi & Misi Kami
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Menjadi studio arsitektur terdepan yang menghadirkan desain berkualitas tinggi dengan 
              pendekatan personal dan solusi yang berkelanjutan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-4">
                Visi
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Menciptakan ruang hidup yang tidak hanya indah secara visual, tetapi juga 
                fungsional, nyaman, dan berkelanjutan. Kami berkomitmen untuk menghadirkan 
                desain yang menginspirasi dan meningkatkan kualitas hidup penghuninya.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-heading font-bold text-neutral-800 mb-4">
                Misi
              </h3>
              <p className="text-neutral-600 leading-relaxed">
                Memberikan layanan desain arsitektur terbaik dengan pendekatan personal, 
                memahami kebutuhan dan aspirasi klien, serta menghadirkan solusi yang 
                inovatif dan berkelanjutan untuk setiap proyek.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-neutral-800 mb-6">
              Nilai-Nilai Kami
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Prinsip-prinsip yang menjadi fondasi dalam setiap proyek dan hubungan dengan klien
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center group"
              >
                <div className="bg-gradient-to-br from-primary/5 to-accent/5 p-8 rounded-2xl border border-neutral-100 group-hover:shadow-lg transition-all duration-300">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-heading font-bold text-neutral-800 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-gradient-to-r from-neutral-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-neutral-800 mb-6">
              Tim Profesional Kami
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Dikelola oleh arsitek berpengalaman dengan dedikasi tinggi untuk setiap proyek
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Arsitek Senior"
                  className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-800 mb-2">
                Ir. Ahmad Fauzi
              </h3>
              <p className="text-accent font-semibold mb-2">Arsitek Senior</p>
              <p className="text-neutral-600 text-sm">
                15+ tahun pengalaman dalam desain arsitektur tropis dan sustainable design
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Desainer Interior"
                  className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-800 mb-2">
                S.T. Sarah Wijaya
              </h3>
              <p className="text-accent font-semibold mb-2">Desainer Interior</p>
              <p className="text-neutral-600 text-sm">
                Spesialis dalam interior design tropis dan space planning yang optimal
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-center group"
            >
              <div className="relative mb-6">
                <img
                  src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400"
                  alt="Project Manager"
                  className="w-48 h-48 mx-auto rounded-2xl object-cover shadow-lg group-hover:shadow-xl transition-shadow"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl"></div>
              </div>
              <h3 className="text-xl font-heading font-bold text-neutral-800 mb-2">
                Ir. Budi Santoso
              </h3>
              <p className="text-accent font-semibold mb-2">Project Manager</p>
              <p className="text-neutral-600 text-sm">
                Ahli dalam koordinasi proyek dan komunikasi dengan klien dan kontraktor
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold mb-6">
              Hubungi Kami
            </h2>
            <p className="text-xl text-white/90 max-w-3xl mx-auto">
              Siap membantu mewujudkan impian rumah Anda. Mari diskusikan proyek Anda bersama kami.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Alamat</h3>
              <p className="text-white/80">
                Jl. Malioboro No. 123<br />
                Yogyakarta 55271<br />
                Indonesia
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Telepon</h3>
              <p className="text-white/80">
                +62 812-3456-7890<br />
                +62 274-123-456
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="text-center">
              <div className="w-16 h-16 bg-white/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Jam Kerja</h3>
              <p className="text-white/80">
                Senin - Jumat: 08:00 - 17:00<br />
                Sabtu: 09:00 - 15:00
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-heading font-bold text-neutral-800 mb-6">
              Apa Kata Klien Kami
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Testimoni dari klien yang telah mempercayakan proyek mereka kepada Arsiteku
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {testimonials && testimonials.length > 0 ? (
              testimonials.slice(0, 6).map((t, idx) => (
                <motion.div
                  key={idx}
                  variants={itemVariants}
                  className="bg-gradient-to-br from-neutral-50 to-white rounded-2xl shadow-lg border border-neutral-100 p-6 hover:shadow-xl transition-shadow"
                >
                  <div className="flex items-center gap-3 mb-4">
                    {t.avatar ? (
                      <img src={t.avatar} alt={t.name || 'Klien'} className="w-12 h-12 rounded-full object-cover" />
                    ) : (
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <span className="text-primary font-semibold text-lg">
                          {t.name ? t.name.charAt(0) : 'K'}
                        </span>
                      </div>
                    )}
                    <div>
                      <div className="font-semibold text-neutral-800">{t.name || 'Klien'}</div>
                      <div className="text-sm text-neutral-500">{t.city && `${t.city}`}</div>
                    </div>
                  </div>
                  
                  <p className="text-neutral-700 mb-4 italic">"{t.quote}"</p>
                  
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-neutral-600">
                      {t.project && <span>Proyek: {t.project}</span>}
                    </div>
                    <div className="flex items-center gap-1">
                      {Array.from({ length: t.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))
            ) : (
              <p className="text-gray-500 col-span-full text-center">Belum ada testimoni.</p>
            )}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Tentang;