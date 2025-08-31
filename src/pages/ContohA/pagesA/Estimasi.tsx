import React from 'react';

const Estimasi: React.FC = () => (
  <section className="container mx-auto py-16 px-4">
    <h1 className="text-3xl font-bold mb-4">Estimasi Biaya</h1>
    <p className="mb-6 text-lg text-gray-700">
      Dapatkan estimasi biaya desain dan pembangunan sesuai kebutuhan Anda. Silakan isi form berikut:
    </p>
    <form className="bg-white rounded-lg shadow p-8 max-w-lg mx-auto space-y-4">
      <input className="w-full border rounded px-4 py-2" type="text" placeholder="Nama Proyek" required />
      <input className="w-full border rounded px-4 py-2" type="number" placeholder="Luas Bangunan (m²)" required />
      <select className="w-full border rounded px-4 py-2" required>
        <option value="">Tipe Layanan</option>
        <option value="desain">Desain Saja</option>
        <option value="desain-bangun">Desain & Bangun</option>
      </select>
      <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition" type="submit">
        Hitung Estimasi
      </button>
    </form>
  </section>
);

export default Estimasi;