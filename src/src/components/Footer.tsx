import React from 'react';
import { Heart, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand Section */}
          <div>
            <div className="flex items-center mb-4">
              <img src="LogoFooter.svg" alt="WebJadi" className="h-8 w-auto" />
              <span className="ml-2 text-xl font-bold text-blue-400">NAIKIN</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Membangun kesuksesan digital untuk bisnis Anda melalui website modern dan profesional yang mendorong pertumbuhan serta keterlibatan.
            </p>
            <div className="flex items-center text-gray-400">
              <Heart className="w-4 h-4 text-red-500 mr-2" />
              <span className="text-sm">Dibuat dengan semangat demi kesuksesan Anda</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Tautan Cepat</h3>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('home');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Beranda
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('about');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Tentang
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('portfolio');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Portofolio
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('services');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Layanan
                </button>
              </li>
              <li>
                <button 
                  onClick={() => {
                    const element = document.getElementById('contact');
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Kontak
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Info Kontak</h3>
            <div className="space-y-3">
              <div className="flex items-center text-gray-400">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-sm">hello@webjadi.com</span>
              </div>
              <div className="flex items-center text-gray-400">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center text-gray-400">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-sm">Tersedia di Seluruh Dunia</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {currentYear} NAIKIN. Seluruh hak cipta dilindungi. Membangun kesuksesan digital, satu website dalam satu waktu.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;