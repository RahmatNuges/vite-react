import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Service } from '../../dataA/services';

interface ServicesGridProps {
  services: Service[];
}

const ServicesGrid: React.FC<ServicesGridProps> = ({ services }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {services.map((service, index) => (
        <motion.div
          key={service.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <div className="bg-white p-8 rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            {/* Header */}
            <div className="mb-6">
              <h3 className="font-heading font-bold text-xl text-primary mb-4 group-hover:text-accent transition-colors">
                {service.title}
              </h3>
              <p className="text-neutral-600 leading-relaxed mb-4">
                {service.shortDescription}
              </p>
            </div>

            {/* Value propositions */}
            <div className="flex-1 mb-6">
              <h4 className="font-semibold text-neutral-800 mb-3">Yang Anda Dapatkan:</h4>
              <ul className="space-y-2">
                {service.value.map((item, idx) => (
                  <li key={idx} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                    <span className="text-neutral-600 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Price range */}
            <div className="mb-6">
              <div className="bg-accent/5 p-4 rounded-xl">
                <div className="text-sm text-neutral-600 mb-1">Kisaran Investasi:</div>
                <div className="font-semibold text-accent">{service.priceRange}</div>
              </div>
            </div>

            {/* CTA */}
            <Link
              to={`/layanan/${service.slug}`}
              className="inline-flex items-center justify-center space-x-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-xl font-medium transition-colors group"
            >
              <span>{service.cta}</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default ServicesGrid;