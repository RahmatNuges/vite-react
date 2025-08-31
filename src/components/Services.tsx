import React from 'react';
import { Globe, ShoppingCart, Smartphone, Search, Palette, Headphones } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: 'Company Profile Websites',
      description: 'Professional corporate websites that establish credibility and showcase your business effectively.',
      features: ['Responsive Design', 'SEO Optimized', 'Content Management', 'Contact Forms'],
      price: 'Starting from $800'
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce Solutions',
      description: 'Complete online stores with payment integration, inventory management, and customer accounts.',
      features: ['Payment Gateway', 'Product Catalog', 'Order Management', 'Customer Portal'],
      price: 'Starting from $1,200'
    },
    {
      icon: Smartphone,
      title: 'Landing Pages',
      description: 'High-converting landing pages designed to capture leads and drive specific business goals.',
      features: ['Conversion Focused', 'A/B Testing Ready', 'Analytics Integration', 'Fast Loading'],
      price: 'Starting from $400'
    },
    {
      icon: Search,
      title: 'SEO Optimization',
      description: 'Improve your website\'s visibility on search engines and attract more organic traffic.',
      features: ['Keyword Research', 'On-page SEO', 'Technical SEO', 'Performance Reports'],
      price: 'Starting from $300'
    },
    {
      icon: Palette,
      title: 'Website Redesign',
      description: 'Modernize your existing website with fresh design and improved user experience.',
      features: ['Modern Design', 'UX Improvements', 'Mobile Optimization', 'Speed Enhancement'],
      price: 'Starting from $600'
    },
    {
      icon: Headphones,
      title: 'Maintenance & Support',
      description: 'Ongoing website maintenance, updates, and technical support to keep your site running smoothly.',
      features: ['Regular Updates', 'Security Monitoring', 'Backup Services', '24/7 Support'],
      price: 'Starting from $100/month'
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            My Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            I offer comprehensive web development services tailored to help your 
            business succeed online and reach your target audience effectively.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 rounded-xl p-8 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="bg-blue-100 w-16 h-16 rounded-lg flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-blue-600" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <div className="border-t border-gray-200 pt-4">
                <p className="text-lg font-semibold text-blue-600">
                  {service.price}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Need a custom solution? Let's discuss your specific requirements.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="inline-flex items-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
          >
            Get Custom Quote
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;