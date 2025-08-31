export interface PortfolioItem {
  title: string;
  description: string;
  route: string;
  category: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Website Company Profile',
    description: 'Tunjukkan profesionalisme bisnis Anda dengan website company profile yang elegan dan mudah diakses. Cocok untuk membangun kepercayaan klien baru!',
    route: '/contoh-a',
    category: 'Company Profile',
  },
  {
    title: 'Landing Page Produk',
    description: 'Buat produk Anda jadi pusat perhatian! Landing page ini didesain untuk meningkatkan penjualan dan menarik minat pelanggan secara instan.',
    route: '/contoh-b',
    category: 'Landing Page',
  },
  {
    title: 'Toko Online Sederhana',
    description: 'Contoh toko online dengan fitur sederhana.',
    route: '/contoh-c',
    category: 'E-commerce',
  },
];