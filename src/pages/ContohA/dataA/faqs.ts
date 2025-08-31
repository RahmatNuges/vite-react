export interface FAQ {
  q: string;
  a: string;
  category: string;
}

export const faqs: FAQ[] = [
  {
    category: "Proses & Timeline",
    q: "Berapa lama proses desain rumah dari awal sampai selesai?",
    a: "Rata-rata 6-12 minggu tergantung kompleksitas proyek dan jumlah revisi. Kami akan memberikan timeline detail setelah konsultasi awal dan memahami scope proyek Anda."
  },
  {
    category: "Proses & Timeline", 
    q: "Bagaimana proses kerja sama dengan Arsiteku?",
    a: "1) Konsultasi gratis untuk memahami kebutuhan, 2) Survey lokasi dan briefing detail, 3) Kontrak kerja dan pembayaran DP, 4) Proses desain dengan presentasi berkala, 5) Finalisasi dan serah terima dokumen."
  },
  {
    category: "Biaya & Pembayaran",
    q: "Bagaimana struktur pembayaran jasa desain?",
    a: "DP 30% setelah kontrak, 40% saat presentasi desain awal, 30% sisanya saat serah terima final. Pembayaran dapat disesuaikan dengan cash flow proyek Anda."
  },
  {
    category: "Biaya & Pembayaran",
    q: "Apakah ada biaya tambahan diluar paket yang sudah disepakati?",
    a: "Tidak ada biaya tersembunyi. Semua scope sudah dijelaskan di kontrak. Biaya tambahan hanya untuk perubahan major yang diminta klien di luar scope awal."
  },
  {
    category: "Biaya & Pembayaran",
    q: "Berapa kisaran biaya jasa arsitek untuk rumah tinggal?",
    a: "Biaya desain umumnya 3-8% dari nilai konstruksi, tergantung kompleksitas. Untuk rumah 100-200m² berkisar Rp 25-75 juta. Konsultasi gratis untuk estimasi yang lebih akurat."
  },
  {
    category: "Layanan & Scope",
    q: "Apa saja yang didapat dari paket desain arsitektur?",
    a: "Konsep desain, 3D visualisasi, gambar kerja lengkap (denah, tampak, potongan), spesifikasi material, dan konsultasi selama proses desain. Detail lengkap sesuai paket yang dipilih."
  },
  {
    category: "Layanan & Scope",
    q: "Apakah Arsiteku melayani proyek di luar Yogyakarta?",
    a: "Ya, kami melayani seluruh Indonesia. Untuk proyek di luar Yogyakarta ada tambahan biaya transportasi dan akomodasi untuk survey lokasi dan pengawasan."
  },
  {
    category: "Layanan & Scope",
    q: "Bisa konsultasi untuk renovasi rumah lama?",
    a: "Tentu saja. Kami melayani renovasi mulai dari yang sederhana hingga major renovation. Akan dimulai dengan survey kondisi existing untuk menentukan scope yang optimal."
  },
  {
    category: "Teknis & Konstruksi",
    q: "Apakah Arsiteku juga mengerjakan pembangunan fisiknya?",
    a: "Kami fokus pada jasa desain dan konsultansi. Untuk konstruksi, kami dapat merekomendasikan kontraktor terpercaya atau klien bebas memilih kontraktor sendiri."
  },
  {
    category: "Teknis & Konstruksi",
    q: "Bagaimana dengan pengurusan IMB/PBG?",
    a: "Kami melayani pengurusan PBG/IMB lengkap dengan penyiapan dokumen teknis. Proses umumnya 1,5-3 bulan tergantung daerah dan kompleksitas bangunan."
  },
  {
    category: "Teknis & Konstruksi",
    q: "Apakah desain sudah termasuk struktur dan MEP?",
    a: "Paket dasar fokus pada arsitektur. Untuk struktur dan MEP detail, dapat ditambahkan dengan konsultan spesialis atau kami koordinasikan sesuai kebutuhan proyek."
  },
  {
    category: "Revisi & Garansi",
    q: "Berapa kali revisi yang diperbolehkan?",
    a: "Maksimal 3 kali revisi major sudah termasuk dalam paket. Revisi minor tidak dibatasi. Revisi major tambahan dikenakan fee 15-25% dari nilai kontrak."
  },
  {
    category: "Revisi & Garansi",
    q: "Bagaimana jika tidak puas dengan hasil desain?",
    a: "Kami berkomitmen pada kepuasan klien. Jika belum sesuai ekspektasi, akan dilakukan revisi hingga sesuai brief awal. Garansi revisi 6 bulan setelah serah terima."
  }
];

export const getFAQsByCategory = (category?: string) => {
  if (!category) return faqs;
  return faqs.filter(faq => faq.category === category);
};

export const getFAQCategories = () => {
  return [...new Set(faqs.map(faq => faq.category))];
};