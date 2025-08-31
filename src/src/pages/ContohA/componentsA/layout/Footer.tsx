import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const whatsappNumber = "628123456789";
  const email = "hello@arsiteku.com";
  const address = "Jl. Kaliurang Km 5.5, Sleman, DIY 55281";

  const services = [
    { to: "/layanan/desain-arsitektur", label: "Desain Arsitektur" },
    { to: "/layanan/desain-interior", label: "Desain Interior" },
    { to: "/layanan/gambar-kerja-rab", label: "Gambar Kerja & RAB" },
    { to: "/layanan/perizinan", label: "Perizinan PBG/IMB" },
    { to: "/layanan/pengawasan", label: "Pengawasan Konstruksi" },
    { to: "/layanan/renovasi", label: "Renovasi & Ekstensi" },
  ];

  const company = [
    { to: "/tentang", label: "Tentang Kami" },
    { to: "/portofolio", label: "Portfolio" },
    { to: "/artikel", label: "Blog & Artikel" },
    { to: "/faq", label: "FAQ" },
    { to: "/kontak", label: "Kontak" },
    { to: "/estimasi", label: "Estimasi Biaya" },
  ];

  const legal = [
    { to: "/privasi", label: "Kebijakan Privasi" },
    { to: "/syarat-ketentuan", label: "Syarat & Ketentuan" },
  ];

  return (
    <footer className="bg-primary text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center space-x-3 group">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center group-hover:bg-accent/80 transition-colors">
                <div className="w-7 h-7">
                  <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-white">
                    <path 
                      d="M12 2L2 7v10c0 5.55 3.84 10 9 10s9-4.45 9-10V7l-8-5z" 
                      fill="currentColor"
                    />
                    <path 
                      d="M12 2v15M8 12h8" 
                      stroke="rgba(255,255,255,0.3)" 
                      strokeWidth="1"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <h2 className="text-xl font-heading font-bold">ARSITEKU</h2>
                <p className="text-sm text-white/80">Studio Arsitektur</p>
              </div>
            </Link>

            <p className="text-white/80 leading-relaxed">
              Studio arsitektur profesional yang mengkhususkan diri pada desain rumah tinggal tropis. 
              Kami merancang rumah yang fungsional, indah, dan efisien biaya.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <p className="text-sm text-white/80">{address}</p>
              </div>
              
              <a 
                href={`https://wa.me/${whatsappNumber}`}
                className="flex items-center space-x-3 text-white/80 hover:text-accent transition-colors"
              >
                <Phone className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">+62 812 3456 7890</span>
              </a>
              
              <a 
                href={`mailto:${email}`}
                className="flex items-center space-x-3 text-white/80 hover:text-accent transition-colors"
              >
                <Mail className="w-5 h-5 flex-shrink-0" />
                <span className="text-sm">{email}</span>
              </a>
              
              <div className="flex items-center space-x-3">
                <Clock className="w-5 h-5 text-accent flex-shrink-0" />
                <div className="text-sm text-white/80">
                  <p>Senin - Jumat: 08:00 - 17:00</p>
                  <p>Sabtu: 08:00 - 14:00</p>
                </div>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Layanan Kami</h3>
            <nav className="space-y-3">
              {services.map((service) => (
                <Link
                  key={service.to}
                  to={service.to}
                  className="block text-sm text-white/80 hover:text-accent transition-colors hover:translate-x-1 transform duration-200"
                >
                  {service.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Perusahaan</h3>
            <nav className="space-y-3">
              {company.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="block text-sm text-white/80 hover:text-accent transition-colors hover:translate-x-1 transform duration-200"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-heading font-semibold mb-6">Tetap Terhubung</h3>
            
            {/* Social Media */}
            <div className="space-y-4 mb-8">
              <p className="text-sm text-white/80">Ikuti kami untuk inspirasi desain terbaru</p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors"
                  aria-label="YouTube"
                >
                  <Youtube className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* CTA */}
            <div className="bg-accent/20 p-6 rounded-lg">
              <h4 className="font-semibold mb-2">Konsultasi Gratis</h4>
              <p className="text-sm text-white/80 mb-4">
                Ceritakan impian rumah Anda kepada kami
              </p>
              <a
                href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent('Halo Arsiteku, saya tertarik untuk konsultasi gratis.')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-accent hover:bg-accent/90 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Hubungi Via WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © {currentYear} Arsiteku Studio. Semua hak cipta dilindungi.
            </p>
            
            <nav className="flex items-center space-x-6">
              {legal.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="text-sm text-white/60 hover:text-white transition-colors"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
          
          <div className="mt-4 pt-4 border-t border-white/10">
            <p className="text-xs text-white/50 text-center">
              Website dirancang dengan ❤️ untuk memberikan pengalaman terbaik dalam mencari solusi arsitektur rumah impian Anda.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;