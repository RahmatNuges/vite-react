export interface Project {
  slug: string;
  title: string;
  location: string;
  area: string;
  style: string;
  budget: string;
  summary: string;
  image: string;
  gallery: string[];
  type: string;
  year: number;
  client: string;
  challenges: string[];
  solutions: string[];
  results: string[];
  materials: string[];
  systems: string[];
}

export const projects: Project[] = [
  {
    slug: "rumah-tropis-cendana",
    title: "Rumah Tropis Cendana",
    location: "Sleman, DIY",
    area: "180 m²",
    style: "Tropis Modern",
    budget: "800-1M",
    type: "Rumah Tinggal",
    year: 2023,
    client: "Keluarga Santoso",
    summary: "Optimalisasi pencahayaan & ventilasi silang pada lahan hook dengan pendekatan desain tropis modern yang mengutamakan kenyamanan alami.",
    image: "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1396132/pexels-photo-1396132.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    challenges: [
      "Lahan hook dengan orientasi timur-barat yang kurang ideal",
      "Budget terbatas namun ekspektasi kualitas tinggi",
      "Kebutuhan privacy dari 2 sisi jalan"
    ],
    solutions: [
      "Desain courtyard tengah untuk pencahayaan dan ventilasi optimal",
      "Material lokal berkualitas dengan finishing premium",
      "Vegetasi sebagai buffer alami dan elemen estetis"
    ],
    results: [
      "Rumah terasa sejuk tanpa AC di siang hari",
      "Biaya konstruksi sesuai budget dengan kualitas premium",
      "Rumah menjadi landmark positif di lingkungan"
    ],
    materials: [
      "Dinding: Bata ekspose dengan finishing natural",
      "Atap: Genteng keramik glazur dengan insulasi",
      "Lantai: Terrazzo custom dengan motif geometris",
      "Kusen: Kayu jati grade A dengan finishing natural"
    ],
    systems: [
      "Ventilasi silang dengan bukaan yang diperhitungkan",
      "Rainwater harvesting untuk taman",
      "Solar panel untuk water heater",
      "Septic tank biofilter ramah lingkungan"
    ]
  },
  {
    slug: "villa-minimalis-merapi",
    title: "Villa Minimalis Merapi",
    location: "Pakem, Sleman",
    area: "220 m²",
    style: "Minimalis Tropis",
    budget: "1.2-1.5M",
    type: "Villa",
    year: 2023,
    client: "Bpk. Wijaya",
    summary: "Villa weekend dengan view Gunung Merapi, menggabungkan kesederhanaan minimalis dengan kenyamanan tropis untuk retreat keluarga.",
    image: "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/2082087/pexels-photo-2082087.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    challenges: [
      "Lahan miring dengan kemiringan 15 derajat",
      "View gunung yang harus dimaksimalkan",
      "Akses jalan yang terbatas untuk material berat"
    ],
    solutions: [
      "Desain split level mengikuti kontur alami",
      "Bukaan besar menghadap view dengan sun shading",
      "Material ringan dan prefab untuk akses mudah"
    ],
    results: [
      "View 180 derajat ke Gunung Merapi dan hamparan sawah",
      "Biaya earthwork minimal karena mengikuti kontur",
      "Proses konstruksi lebih cepat dengan sistem prefab"
    ],
    materials: [
      "Struktur: Baja ringan dengan panel sandwich",
      "Cladding: Fiber cement board dengan finishing kayu",
      "Lantai: Polished concrete dengan heated floor",
      "Kaca: Low-E double glass untuk efisiensi energi"
    ],
    systems: [
      "Geothermal cooling system",
      "Smart home automation",
      "Infinity pool dengan natural filtration",
      "Off-grid solar system dengan battery storage"
    ]
  },
  {
    slug: "townhouse-modern-kaliurang",
    title: "Townhouse Modern Kaliurang",
    location: "Kaliurang, Sleman",
    area: "145 m²",
    style: "Modern Kontemporer",
    budget: "750-950jt",
    type: "Townhouse",
    year: 2022,
    client: "PT. Kaliurang Residence",
    summary: "Konsep townhouse modern untuk kawasan wisata dengan optimasi lahan sempit dan view pegunungan yang memukau.",
    image: "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
    gallery: [
      "https://images.pexels.com/photos/1396122/pexels-photo-1396122.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2581922/pexels-photo-2581922.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/1571470/pexels-photo-1571470.jpeg?auto=compress&cs=tinysrgb&w=800",
      "https://images.pexels.com/photos/2724748/pexels-photo-2724748.jpeg?auto=compress&cs=tinysrgb&w=800"
    ],
    challenges: [
      "Lahan sempit 6x15 meter dengan orientasi utara-selatan",
      "Kebutuhan privacy antar unit yang berdekatan",
      "Target harga jual yang kompetitif di market"
    ],
    solutions: [
      "Desain vertikal 3 lantai dengan void untuk pencahayaan",
      "Staggered layout untuk privacy dan view",
      "Standardisasi komponen untuk efisiensi biaya"
    ],
    results: [
      "15 unit townhouse sold out dalam 6 bulan",
      "Menjadi benchmark untuk developer lain di kawasan",
      "Penghargaan Best Design dari asosiasi REI"
    ],
    materials: [
      "Struktur: Beton bertulang dengan sistem precast",
      "Fasad: Kombinasi batu alam dan metal cladding",
      "Interior: Engineered wood dan ceramic tile",
      "Landscape: Tanaman lokal low maintenance"
    ],
    systems: [
      "Central air conditioning dengan VRV system",
      "Smart electrical panel dengan monitoring",
      "Community water treatment plant",
      "Integrated security system"
    ]
  }
];

export const getProjectBySlug = (slug: string): Project | undefined => {
  return projects.find(project => project.slug === slug);
};

export const getProjectsByFilter = (filters: { type?: string; style?: string; location?: string; budget?: string }) => {
  return projects.filter(project => {
    if (filters.type && project.type !== filters.type) return false;
    if (filters.style && project.style !== filters.style) return false;
    if (filters.location && !project.location.includes(filters.location)) return false;
    if (filters.budget && project.budget !== filters.budget) return false;
    return true;
  });
};