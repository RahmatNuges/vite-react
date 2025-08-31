import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare, MapPin, Pen, FileText, Eye, Home } from 'lucide-react';

const ProcessSteps: React.FC = () => {
  const steps = [
    {
      icon: MessageSquare,
      title: "Konsultasi & Brief",
      description: "Diskusi kebutuhan, preferensi, dan budget untuk memahami visi rumah impian Anda.",
      duration: "1-2 hari"
    },
    {
      icon: MapPin,
      title: "Survey Lokasi", 
      description: "Analisis kondisi lahan, orientasi, dan potensi untuk optimasi desain.",
      duration: "1 hari"
    },
    {
      icon: Pen,
      title: "Konsep Desain",
      description: "Pengembangan ide desain awal dengan sketsa dan mood board untuk approval.",
      duration: "1-2 minggu"
    },
    {
      icon: FileText,
      title: "Desain Detail",
      description: "Finalisasi denah, tampak, potongan, dan 3D visualization yang detail.",
      duration: "2-3 minggu"
    },
    {
      icon: Eye,
      title: "Gambar Kerja",
      description: "Penyusunan gambar teknis lengkap dan RAB untuk keperluan konstruksi.",
      duration: "1-2 minggu"
    },
    {
      icon: Home,
      title: "Serah Terima",
      description: "Handover dokumen lengkap dan konsultasi implementasi dengan kontraktor.",
      duration: "1 hari"
    }
  ];

  return (
    <div className="relative">
      {/* Connection line */}
      <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary opacity-20" />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="relative"
          >
            {/* Step number background */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm font-bold z-10">
              {index + 1}
            </div>
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-shadow duration-300 h-full">
              <div className="flex items-start space-x-4 mb-4">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center">
                    <step.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="font-heading font-semibold text-xl text-primary mb-2">
                    {step.title}
                  </h3>
                  <div className="inline-flex items-center bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-medium mb-3">
                    {step.duration}
                  </div>
                </div>
              </div>
              
              <p className="text-neutral-600 leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Total timeline */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="mt-12 text-center"
      >
        <div className="inline-flex items-center space-x-4 bg-primary/5 px-8 py-4 rounded-2xl">
          <div className="text-primary">
            <div className="text-2xl font-bold">6-10 Minggu</div>
            <div className="text-sm text-neutral-600">Total Timeline</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProcessSteps;