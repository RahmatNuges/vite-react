import React from 'react';

const LegalPrivacy: React.FC = () => (
  <section className="container mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4">Kebijakan Privasi</h1>
    <div className="prose">
      <p>
        Kami menghargai privasi Anda. Informasi yang Anda berikan hanya digunakan untuk keperluan layanan Arsiteku dan tidak akan dibagikan ke pihak ketiga tanpa izin Anda.
      </p>
      <ul>
        <li>Data Anda aman dan terenkripsi.</li>
        <li>Kami tidak menyimpan data sensitif tanpa persetujuan.</li>
        <li>Anda dapat meminta penghapusan data kapan saja.</li>
      </ul>
    </div>
  </section>
);

export default LegalPrivacy;