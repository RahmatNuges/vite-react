import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Maximize } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../../dataA/projects';

interface PortfolioGridProps {
  projects: Project[];
}

const PortfolioGrid: React.FC<PortfolioGridProps> = ({ projects }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={project.slug}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="group"
        >
          <div className="bg-white rounded-2xl shadow-lg border border-neutral-100 hover:shadow-xl transition-all duration-300 overflow-hidden">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Floating info */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-start">
                <div className="bg-white/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <span className="text-sm font-medium text-primary">{project.style}</span>
                </div>
                <div className="bg-accent/90 backdrop-blur-sm px-3 py-2 rounded-lg">
                  <span className="text-sm font-medium text-white">{project.budget}</span>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-6">
              <h3 className="font-heading font-bold text-xl text-primary mb-3 group-hover:text-accent transition-colors">
                {project.title}
              </h3>
              
              <p className="text-neutral-600 text-sm leading-relaxed mb-4">
                {project.summary}
              </p>

              {/* Project details */}
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

              {/* CTA */}
              <Link
                to={`/portofolio/${project.slug}`}
                className="inline-flex items-center space-x-2 text-primary font-medium hover:text-accent transition-colors group"
              >
                <span>Lihat Detail Proyek</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default PortfolioGrid;