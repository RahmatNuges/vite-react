import React from 'react';

const LegalTerms: React.FC = () => (
  <section className="container mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4">Syarat & Ketentuan</h1>
    <div className="prose">
      <ol>
        <li>Layanan Arsiteku hanya untuk keperluan legal dan tidak melanggar hukum.</li>
        <li>Setiap desain adalah hak cipta Arsiteku, kecuali ada perjanjian tertulis.</li>
        <li>Pembayaran dilakukan sesuai kesepakatan dan tahapan proyek.</li>
      </ol>
      <p>
        Dengan menggunakan layanan kami, Anda dianggap telah membaca dan menyetujui syarat & ketentuan yang berlaku.
      </p>
    </div>
  </section>
);

export default LegalTerms;