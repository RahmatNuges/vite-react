export interface Testimonial {
  name: string;
  city: string;
  quote: string;
  rating: number;
  project: string;
  avatar?: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Bpk. Santoso",
    city: "Sleman, DIY",
    project: "Rumah Tropis Cendana",
    quote: "Arsiteku benar-benar memahami kebutuhan keluarga kami. Desain tropis yang dihasilkan membuat rumah sejuk tanpa AC, dan proses komunikasinya sangat profesional dari awal hingga akhir.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Ibu Sari Wijayanti",
    city: "Bantul, DIY",
    project: "Renovasi Rumah Joglo",
    quote: "Renovasi rumah joglo warisan keluarga dipercayakan ke Arsiteku. Hasilnya luar biasa - tradisional tapi tetap fungsional untuk keluarga modern. Terima kasih untuk kesabarannya!",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Bpk. Wijaya",
    city: "Pakem, Sleman",
    project: "Villa Minimalis Merapi",
    quote: "Villa weekend dengan view Merapi ini menjadi tempat favorit keluarga. Desainnya simpel tapi berkarakter, dan yang paling saya suka adalah bagaimana Arsiteku memanfaatkan view alami.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Dr. Amelia Putri",
    city: "Yogyakarta",
    project: "Klinik Modern",
    quote: "Desain klinik yang sangat fungsional dan menenangkan untuk pasien. Arsiteku memperhatikan detail sirkulasi udara dan pencahayaan yang sangat penting untuk fasilitas kesehatan.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/3845457/pexels-photo-3845457.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "Keluarga Hartono",
    city: "Kalasan, Sleman",
    project: "Rumah Keluarga Besar",
    quote: "Rumah untuk 3 generasi ini dirancang dengan sangat detail. Setiap anggota keluarga punya privacy tapi tetap bisa berkumpul bersama. Arsiteku paham betul dinamika keluarga Indonesia.",
    rating: 5,
    avatar: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=150"
  },
  {
    name: "PT. Kaliurang Residence",
    city: "Kaliurang, Sleman",
    project: "Townhouse Development",
    quote: "Sebagai developer, kami sangat puas dengan kualitas desain Arsiteku. Townhouse project kami sold out lebih cepat dari target karena desain yang menarik dan fungsional.",
    rating: 5
  }
];