import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';

// Layout Components
import Navbar from './componentsA/layout/Navbar';
import Footer from './componentsA/layout/Footer';
import CTAFloat from './componentsA/layout/CTAFloat';

// Pages
import Home from './pagesA/Home';
import Layanan from './pagesA/Layanan';
import LayananDetail from './pagesA/LayananDetail';
import Portofolio from './pagesA/Portofolio';
import ProyekDetail from './pagesA/ProyekDetail';
import Tentang from './pagesA/Tentang';
import Artikel from './pagesA/Artikel';
import ArtikelDetail from './pagesA/ArtikelDetail';
import FAQ from './pagesA/FAQ';
import Kontak from './pagesA/Kontak';
import Estimasi from './pagesA/Estimasi';
import LegalPrivacy from './pagesA/LegalPrivacy';
import LegalTerms from './pagesA/LegalTerms';

function ContohA() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-neutral-50">
      <Navbar />
      
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route path="" element={<Home />} />
          <Route path="layanan" element={<Layanan />} />
          <Route path="layanan/:slug" element={<LayananDetail />} />
          <Route path="portofolio" element={<Portofolio />} />
          <Route path="portofolio/:slug" element={<ProyekDetail />} />
          <Route path="tentang" element={<Tentang />} />
          <Route path="artikel" element={<Artikel />} />
          <Route path="artikel/:slug" element={<ArtikelDetail />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="kontak" element={<Kontak />} />
          <Route path="estimasi" element={<Estimasi />} />
          <Route path="privasi" element={<LegalPrivacy />} />
          <Route path="syarat-ketentuan" element={<LegalTerms />} />
        </Routes>
      </AnimatePresence>

      <CTAFloat />
      <Footer />
    </div>
  );
}

export default ContohA;