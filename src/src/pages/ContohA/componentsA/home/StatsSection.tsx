import React from 'react';
import { motion } from 'framer-motion';
import { Users, Home, Award, Clock } from 'lucide-react';

const StatsSection: React.FC = () => {
  const stats = [
    {
      icon: Home,
      number: "20+",
      label: "Proyek Selesai",
      description: "Rumah tinggal di berbagai kota"
    },
    {
      icon: Users,
      number: "100%",
      label: "Klien Puas",
      description: "Testimoni positif semua klien"
    },
    {
      icon: Clock,
      number: "8+",
      label: "Tahun Pengalaman",
      description: "Melayani keluarga Indonesia"
    },
    {
      icon: Award,
      number: "95%",
      label: "On Time & Budget",
      description: "Sesuai timeline dan anggaran"
    }
  ];

  return (
    <section className="py-16 bg-neutral-50 border-t border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="mb-4">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-primary" />
                </div>
                <div className="text-3xl lg:text-4xl font-bold text-primary mb-2">
                  {stat.number}
                </div>
                <div className="font-semibold text-neutral-900 mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-neutral-600">
                  {stat.description}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;