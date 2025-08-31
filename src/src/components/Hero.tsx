import React from 'react';
import { ArrowRight, Eye, MessageCircle } from 'lucide-react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="pt-24 pb-16 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 mb-12 lg:mb-0 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Buat
              <span className="text-blue-600"> Websitemu</span>
              <br />
              Sekarang
            </h1>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Saya akan membantu Anda membangun website profesional dengan cepat dan menarik untuk bisnis atau proyek Anda.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button
                onClick={() => scrollToSection('portfolio')}
                className="inline-flex items-center px-8 py-4 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Lihat Portfolio
                <Eye className="ml-2" size={20} />
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="inline-flex items-center px-8 py-4 border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200"
              >
                Hubungi Saya
                <MessageCircle className="ml-2" size={20} />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 flex justify-center">
            <div className="relative w-80 h-80 flex items-center justify-center">
              {/* Animated "Website" Illustration */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Browser window */}
                <div className="w-64 h-40 bg-white rounded-2xl shadow-2xl border-2 border-blue-200 relative overflow-hidden animate-float">
                  {/* Browser top bar */}
                  <div className="flex items-center px-4 py-2 bg-blue-100 border-b border-blue-200">
                    <div className="w-3 h-3 bg-red-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full mr-2"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    <div className="ml-auto w-16 h-3 bg-blue-200 rounded"></div>
                  </div>
                  {/* Content blocks */}
                  <div className="p-4 space-y-2">
                    <div className="w-32 h-4 bg-blue-300 rounded animate-pulse"></div>
                    <div className="w-40 h-3 bg-blue-100 rounded"></div>
                    <div className="w-24 h-3 bg-blue-200 rounded"></div>
                    <div className="flex space-x-2 mt-4">
                      <div className="w-10 h-10 bg-blue-200 rounded-lg animate-bounce"></div>
                      <div className="w-10 h-10 bg-blue-100 rounded-lg"></div>
                      <div className="w-10 h-10 bg-blue-300 rounded-lg animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
                {/* Floating code icon */}
                <div className="absolute -top-6 -right-6 bg-blue-600 text-white rounded-full p-4 shadow-lg animate-spin-slow">
                  <svg width="32" height="32" fill="none" viewBox="0 0 24 24">
                    <path d="M16 18l6-6-6-6M8 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              </div>
              {/* Caption */}
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2">
                <span className="text-blue-600 font-bold">Website Modern & Interaktif</span>
                <span className="text-xl">✨</span>
              </div>
              {/* Animations */}
              <style>
                {`
                  .animate-float {
                    animation: float 3s ease-in-out infinite;
                  }
                  @keyframes float {
                    0%, 100% { transform: translateY(0); }
                    50% { transform: translateY(-16px); }
                  }
                  .animate-spin-slow {
                    animation: spin 6s linear infinite;
                  }
                  @keyframes spin {
                    100% { transform: rotate(360deg); }
                  }
                `}
              </style>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;