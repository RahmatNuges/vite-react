import React from 'react';
import { Code, Palette, Zap, Users } from 'lucide-react';

const About = () => {
  const skills = [
    { name: 'React & TypeScript', level: 95 },
    { name: 'UI/UX Design', level: 90 },
    { name: 'WordPress', level: 85 },
    { name: 'E-commerce', level: 88 },
  ];

  const tools = [
    { icon: Code, name: 'Development', description: 'React, Next.js, WordPress' },
    { icon: Palette, name: 'Design', description: 'Figma, Adobe Creative Suite' },
    { icon: Zap, name: 'Performance', description: 'SEO, Speed Optimization' },
    { icon: Users, name: 'Collaboration', description: 'Client Communication' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Tentang Saya
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Saya adalah seorang web developer yang berdedikasi untuk membantu bisnis anda 
            membangun profil online yang kuat.
          </p>
        </div>
    </section>
  );
};

export default About;