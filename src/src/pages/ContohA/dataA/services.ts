export interface Service {
  slug: string;
  title: string;
  summary: string;
  shortDescription: string;
  value: string[];
  deliverables: string[];
  timeline: string[];
  priceRange: string;
  faqs: Array<{ q: string; a: string }>;
  problems: string[];
  approach: string[];
  cta: string;
}

export const services: Service[] = [
  {
    slug: "desain-arsitektur",
    title: "Desain Arsitektur Rumah",
    shortDescription: "Konsep hingga gambar kerja dengan perhatian pada iklim tropis & efisiensi struktur.",
    summary: "Layanan desain arsitektur komprehensif yang mengutamakan fungsi ruang, pencahayaan alami, dan ventilasi silang yang optimal untuk iklim tropis Indonesia. Kami merancang dengan mempertimbangkan efisiensi struktur dan biaya konstruksi.",
    value: [
      "Fungsi ruang, pencahayaan/ventilasi tropis",
      "Efisiensi struktur & biaya"
    ],
    deliverables: [
      "Konsep massa & denah optimized",
      "3D eksterior/interior photorealistic", 
      "Gambar kerja lengkap sesuai standar",
      "Spesifikasi material dan finishing",
      "Perhitungan struktur dasar"
    ],
    timeline: [
      "Konsultasi & survey lokasi (1-2 hari)",
      "Konsep & sketsa awal (1-2 minggu)",
      "Pengembangan desain detail (2-3 minggu)",
      "Finalisasi gambar kerja & dokumen (1-2 minggu)"
    ],
    priceRange: "Rp 25-75 juta (tergantung kompleksitas & luas bangunan)",
    problems: [
      "Rumah panas dan pengap karena kurang ventilasi",
      "Biaya konstruksi membengkak akibat perencanaan buruk",
      "Ruang tidak efisien dan tidak sesuai gaya hidup",
      "Desain tidak mempertimbangkan orientasi dan iklim lokal"
    ],
    approach: [
      "Analisis mendalam kebutuhan keluarga dan gaya hidup",
      "Studi orientasi matahari dan arah angin untuk ventilasi optimal",
      "Pemilihan material lokal yang sesuai iklim tropis",
      "Desain modular yang memungkinkan pengembangan bertahap"
    ],
    faqs: [
      {
        q: "Berapa lama proses desain arsitektur?",
        a: "Rata-rata 6-10 minggu tergantung kompleksitas proyek dan jumlah revisi yang diperlukan."
      },
      {
        q: "Apa yang termasuk dalam paket desain arsitektur?",
        a: "Konsep desain, 3D visualisasi, gambar kerja lengkap (denah, tampak, potongan), spesifikasi material, dan konsultasi selama proses desain."
      },
      {
        q: "Apakah bisa konsultasi untuk renovasi rumah lama?",
        a: "Ya, kami juga melayani renovasi dengan survey kondisi eksisting terlebih dahulu."
      }
    ],
    cta: "Konsultasi Desain Gratis"
  },
  {
    slug: "desain-interior",
    title: "Desain Interior",
    shortDescription: "Penataan interior fungsional dengan material berkualitas dan optimasi penyimpanan.",
    summary: "Layanan desain interior yang mengutamakan kenyamanan, fungsi, dan estetika. Kami fokus pada pemilihan material berkualitas, optimasi ruang penyimpanan, dan penciptaan suasana yang mendukung aktivitas penghuni.",
    value: [
      "Material tahan lama",
      "Optimasi storage", 
      "3D render"
    ],
    deliverables: [
      "Konsep desain interior & mood board",
      "Layout furniture & pencahayaan",
      "3D rendering photorealistic",
      "Spesifikasi material & furniture",
      "Gambar detail custom furniture"
    ],
    timeline: [
      "Konsultasi kebutuhan & preferensi (1-2 hari)",
      "Konsep design & mood board (1 minggu)",
      "Pengembangan desain detail (2-3 minggu)",
      "Finalisasi & dokumentasi (1 minggu)"
    ],
    priceRange: "Rp 15-45 juta (desain only, belum termasuk furniture)",
    problems: [
      "Interior terasa monoton dan tidak mencerminkan kepribadian",
      "Ruang penyimpanan tidak optimal",
      "Pencahayaan interior kurang nyaman",
      "Koordinasi dengan vendor furniture & dekorasi rumit"
    ],
    approach: [
      "Analisis kebutuhan storage dan aktivitas harian",
      "Pemilihan palet warna yang timeless namun personal",
      "Desain pencahayaan berlapis untuk berbagai suasana",
      "Kombinasi furniture custom dan ready-made sesuai budget"
    ],
    faqs: [
      {
        q: "Apakah paket interior sudah termasuk furniture?",
        a: "Paket desain belum termasuk furniture. Kami menyediakan spesifikasi lengkap dan dapat membantu procurement dengan fee terpisah."
      },
      {
        q: "Bisa desain interior untuk rumah yang sudah jadi?",
        a: "Tentu saja. Kami akan melakukan survey existing condition terlebih dahulu."
      },
      {
        q: "Berapa kali revisi yang diperbolehkan?",
        a: "Maksimal 3 kali revisi mayor sudah termasuk dalam paket. Revisi minor tidak dibatasi."
      }
    ],
    cta: "Konsultasi Interior Gratis"
  },
  {
    slug: "gambar-kerja-rab",
    title: "Gambar Kerja & RAB",
    shortDescription: "Dokumentasi teknis lengkap siap tender dengan spesifikasi material dan RAB terukur.",
    summary: "Penyusunan gambar kerja detail dan Rencana Anggaran Biaya (RAB) yang akurat untuk keperluan tender dan pelaksanaan konstruksi. Dokumen lengkap sesuai standar industri dengan spesifikasi material yang jelas.",
    value: [
      "Paket tender lengkap",
      "Spesifikasi material",
      "RAB terukur"
    ],
    deliverables: [
      "Gambar kerja arsitektur lengkap",
      "Gambar struktur dan MEP",
      "RAB detail dengan analisa harga",
      "Spesifikasi teknis material",
      "Jadwal pelaksanaan konstruksi"
    ],
    timeline: [
      "Review desain existing (2-3 hari)",
      "Penyusunan gambar kerja (2-3 minggu)",
      "Kalkulasi RAB & spesifikasi (1-2 minggu)",
      "Review & finalisasi dokumen (1 minggu)"
    ],
    priceRange: "Rp 20-50 juta (tergantung kompleksitas bangunan)",
    problems: [
      "RAB tidak akurat menyebabkan cost overrun",
      "Gambar kerja tidak detail, banyak terjadi miss komunikasi",
      "Spesifikasi material tidak jelas, kualitas hasil tidak sesuai",
      "Kontraktor kesulitan memahami gambar desain"
    ],
    approach: [
      "Survey pasar material terbaru untuk harga akurat",
      "Koordinasi dengan konsultan struktur dan MEP",
      "Detail gambar sesuai standar SNI dan best practice",
      "Review berkala dengan tim konstruksi berpengalaman"
    ],
    faqs: [
      {
        q: "Apakah RAB sudah termasuk fee kontraktor?",
        a: "RAB kami fokus pada material dan upah. Fee kontraktor biasanya dinegosiasi terpisah (umumnya 15-25% dari nilai RAB)."
      },
      {
        q: "Seberapa akurat RAB yang dibuat?",
        a: "Akurasi 85-95% dengan asumsi tidak ada perubahan mayor dan harga pasar stabil."
      },
      {
        q: "Bisa bantu carikan kontraktor?",
        a: "Ya, kami memiliki database kontraktor terpercaya dan dapat membantu proses seleksi."
      }
    ],
    cta: "Konsultasi RAB Gratis"
  },
  {
    slug: "perizinan",
    title: "Perizinan (PBG/IMB)",
    shortDescription: "Pengurusan lengkap izin mendirikan bangunan dengan gambar teknis sesuai regulasi.",
    summary: "Layanan pengurusan Persetujuan Bangunan Gedung (PBG) atau Izin Mendirikan Bangunan (IMB) lengkap dengan penyiapan dokumen teknis yang sesuai regulasi setempat dan pendampingan proses perizinan.",
    value: [
      "Gambar teknis sesuai regulasi",
      "Pendampingan dokumen"
    ],
    deliverables: [
      "Gambar teknis untuk PBG/IMB",
      "Analisa struktur untuk perizinan",
      "Perhitungan utilitas dan drainase",
      "Surat pernyataan dan dokumen legal",
      "Pendampingan ke dinas terkait"
    ],
    timeline: [
      "Persiapan dokumen teknis (1-2 minggu)",
      "Submit aplikasi ke dinas (1 hari)",
      "Proses review dinas (2-4 minggu)",
      "Perbaikan jika ada revisi (1 minggu)",
      "Penerbitan izin (1-2 minggu)"
    ],
    priceRange: "Rp 8-20 juta (belum termasuk retribusi daerah)",
    problems: [
      "Proses perizinan berbelit dan memakan waktu lama",
      "Gambar tidak sesuai regulasi sehingga ditolak",
      "Tidak paham persyaratan teknis yang harus dipenuhi",
      "Revisi berulang karena dokumen tidak lengkap"
    ],
    approach: [
      "Koordinasi awal dengan petugas dinas untuk memahami requirement",
      "Penyusunan dokumen sesuai Perda dan regulasi terbaru",
      "Review internal sebelum submit untuk minimize revisi",
      "Komunikasi aktif dengan petugas untuk tracking progress"
    ],
    faqs: [
      {
        q: "Berapa lama proses pengurusan PBG/IMB?",
        a: "Umumnya 1,5-3 bulan tergantung kompleksitas dan responsivitas dinas setempat."
      },
      {
        q: "Apa saja yang diperlukan dari klien?",
        a: "Sertifikat tanah, KTP, NPWP, dan desain rumah yang sudah final."
      },
      {
        q: "Bagaimana jika ada revisi dari dinas?",
        a: "Kami akan handle revisi hingga approved tanpa biaya tambahan (kecuali ada perubahan desain mayor)."
      }
    ],
    cta: "Konsultasi Perizinan Gratis"
  },
  {
    slug: "pengawasan",
    title: "Pengawasan & Manajemen Konstruksi",
    shortDescription: "Kontrol mutu, progress, dan biaya dengan site visit berkala dan reporting.",
    summary: "Layanan pengawasan profesional selama masa konstruksi untuk memastikan kualitas, timeline, dan budget sesuai rencana. Meliputi kontrol material, progres pekerjaan, dan koordinasi dengan kontraktor.",
    value: [
      "Kontrol mutu, progres, biaya",
      "Site visit berkala"
    ],
    deliverables: [
      "Laporan progres mingguan",
      "Quality control checklist",
      "Foto dokumentasi berkala",
      "Koordinasi dengan kontraktor",
      "Final inspection & handover"
    ],
    timeline: [
      "Briefing & kontrak pengawasan (1 hari)",
      "Kick-off meeting dengan kontraktor (1 hari)",
      "Pengawasan berkala (sesuai durasi konstruksi)",
      "Final inspection & snagging list (2-3 hari)",
      "Handover & dokumentasi (1 hari)"
    ],
    priceRange: "Rp 5-15 juta/bulan (tergantung intensitas dan kompleksitas)",
    problems: [
      "Kualitas konstruksi tidak sesuai gambar kerja",
      "Progress terlambat tanpa komunikasi yang jelas",
      "Budget membengkak karena change order yang tidak terkontrol",
      "Koordinasi sulit antara owner dan kontraktor"
    ],
    approach: [
      "Site visit rutin sesuai tahapan konstruksi kritis",
      "Dokumentasi foto dan video untuk transparansi",
      "Meeting koordinasi mingguan dengan semua pihak",
      "Quality control checklist pada setiap tahapan"
    ],
    faqs: [
      {
        q: "Seberapa sering site visit dilakukan?",
        a: "Minimum 2x per minggu, lebih sering pada tahapan kritis seperti struktur dan finishing."
      },
      {
        q: "Apakah bisa handle change order dari klien?",
        a: "Ya, kami akan evaluasi impact terhadap cost dan schedule sebelum approve."
      },
      {
        q: "Bagaimana jika ada masalah dengan kontraktor?",
        a: "Kami akan mediasi dan memberikan solusi teknis. Jika perlu, dapat membantu mencari kontraktor pengganti."
      }
    ],
    cta: "Konsultasi Pengawasan Gratis"
  },
  {
    slug: "renovasi",
    title: "Renovasi & Ekstensi",
    shortDescription: "Audit struktur existing dan desain zonasi baru untuk transformasi rumah optimal.",
    summary: "Layanan renovasi dan ekstensi rumah existing dengan pendekatan yang hati-hati terhadap struktur lama dan integrasi yang harmonis dengan bagian baru. Termasuk audit kondisi dan perencanaan bertahap.",
    value: [
      "Audit struktur eksisting",
      "Zonasi & fasad baru"
    ],
    deliverables: [
      "Survey & audit kondisi existing",
      "Konsep renovasi & ekstensi",
      "Analisa struktur dan utilitas",
      "Desain integrasi lama-baru",
      "Phasing plan untuk minimize disruption"
    ],
    timeline: [
      "Survey & assessment existing (3-5 hari)",
      "Konsep renovasi & ekstensi (2 minggu)",
      "Desain detail & engineering (3-4 minggu)",
      "Dokumentasi & permit (1-2 minggu)"
    ],
    priceRange: "Rp 20-60 juta (design only, tergantung kompleksitas)",
    problems: [
      "Renovasi merusak struktur existing yang masih bagus",
      "Integrasi bagian lama dan baru tidak harmonis",
      "Cost overrun karena surprise condition",
      "Disruption berlebihan terhadap aktivitas harian"
    ],
    approach: [
      "Assessment menyeluruh kondisi struktur, MEP, dan finishing",
      "Perencanaan bertahap untuk minimize disruption",
      "Material matching untuk integrasi yang seamless",
      "Contingency planning untuk kondisi tak terduga"
    ],
    faqs: [
      {
        q: "Berapa umur minimum rumah untuk bisa direnovasi?",
        a: "Tidak ada batasan umur. Yang penting adalah kondisi struktur masih layak dan worth untuk direnovasi."
      },
      {
        q: "Apakah harus pindah selama renovasi?",
        a: "Tergantung scope. Untuk renovasi parsial, kami bisa design phasing agar tidak perlu pindah."
      },
      {
        q: "Bagaimana menentukan bagian mana yang perlu direnovasi?",
        a: "Melalui comprehensive audit yang meliputi struktur, utilitas, dan fungsi ruang."
      }
    ],
    cta: "Konsultasi Renovasi Gratis"
  }
];