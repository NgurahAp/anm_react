export interface BinderProduct {
  id: number;
  title: string;
  slug: string;
  color: string;
  description: string;
  image: string;
  image2: string;
  image3?: string;
  alt: string;
  link: string;
  characteristics: string[];
  benefits: string[];
}

export const binderProducts: BinderProduct[] = [
  {
    id: 1,
    title:
      "Model ED 23 | Ruang Pengeringan dan Pemanasan dengan Konveksi Gravitasi",
    slug: "model ed 23",
    color: "merah",
    description:
      "Kekuatan dari ruang pengeringan BINDER seri ED termasuk tugas pengeringan dan sterilisasi rutin hingga 300 °C. Berkat konveksi gravitasi, semua proses termal yang menggunakan ruang pengering ini sangat efisien. Seri ED memastikan pengeringan yang cepat dan merata.",
    image: "/landing/binder/ed23.jpg",
    image2: "/landing/binder/ed23-2.jpg",
    alt: "Model ED 23 | Ruang Pengeringan dan Pemanasan dengan Konveksi Gravitasi",
    link: `/binderDetail/model%20ed%2023`,
    characteristics: [
      "Rentang suhu: suhu ruang ditambah 5 °C hingga 300 °C",
      "Teknologi ruang pemanasan APT.line™",
      "Konveksi gravitasi",
      "Flap udara buang yang dapat disesuaikan",
      "Pengontrol dengan fungsi timer",
      "2 rak krom-plated",
      "Perangkat keselamatan suhu independen kelas 2 yang dapat disesuaikan (DIN 12880) dengan alarm visual",
    ],
    benefits: [
      "Kondisi pengeringan yang seragam berkat teknologi APT.line™",
      "Kondisi pengujian yang sama di seluruh bagian ruang, independen dari ukuran dan jumlah sampel",
      "Isolasi termal yang luar biasa menghemat biaya operasional",
    ],
  },
  {
    id: 2,
    title:
      "Model ED 115 | Ruang Pengeringan dan Pemanasan dengan Konveksi Gravitasi",
    slug: "model ed 115",
    color: "merah",
    description:
      "Kekuatan dari ruang pengeringan BINDER seri ED termasuk tugas pengeringan dan sterilisasi rutin hingga +300 °C. Berkat konveksi alami, semua proses termal yang menggunakan ruang pengering ini sangat efisien. Seri ED memastikan pengeringan yang cepat dan merata.",
    image: "/landing/binder/ed115.jpg",
    image2: "/landing/binder/ed115-2.jpg",
    image3: "/landing/binder/ed115-3.jpg",
    alt: "Model ED 115 | Ruang Pengeringan dan Pemanasan dengan Konveksi Gravitasi",
    link: `/binderDetail/model%20ed%20115`,
    characteristics: [
      "Rentang suhu: suhu ruang ditambah 5 °C hingga 300 °C",
      "Akurasi suhu tinggi berkat teknologi APT.line™",
      "Konveksi gravitasi",
      "Pengontrol dengan tampilan LCD",
      "Kontrol elektromekanis untuk flap udara buang",
      "2 rak krom-plated",
      "Dapat ditumpuk",
      "Perangkat keselamatan suhu independen kelas 2 yang dapat disesuaikan (DIN 12880) dengan alarm visual",
      "Desain pegangan ergonomis",
      "Port USB untuk merekam data",
    ],
    benefits: [
      "Efisiensi energi terbaik di pasaran",
      "Akurasi suhu temporal dan spasial yang luar biasa",
      "Koneksi USB untuk merekam data",
      "Rentang suhu hingga +300 °C",
    ],
  },
  {
    id: 3,
    title:
      "Model ED 260 | Ruang Pengeringan dan Pemanasan dengan Konveksi Gravitasi",
    slug: "model ed 260",
    color: "merah",
    description:
      "Kekuatan dari ruang pengeringan BINDER seri ED termasuk tugas pengeringan dan sterilisasi rutin hingga +300 °C. Berkat konveksi alami, semua proses termal yang menggunakan ruang pengering ini sangat efisien. Seri ED memastikan pengeringan yang cepat dan merata.",
    image: "/landing/binder/ed260.jpg",
    image2: "/landing/binder/ed260-2.jpg",
    image3: "/landing/binder/ed260-3.jpg",
    alt: "Model ED 260 | Ruang Pengeringan dan Pemanasan dengan Konveksi Gravitasi",
    link: `/binderDetail/model%20ed%20260`,
    characteristics: [
      "Rentang suhu: suhu ruang ditambah 5 °C hingga 300 °C",
      "Akurasi suhu tinggi berkat teknologi APT.line™",
      "Konveksi gravitasi",
      "Pengontrol dengan tampilan LCD",
      "Kontrol elektromekanis untuk flap udara buang",
      "2 rak krom-plated",
      "Perangkat keselamatan suhu independen kelas 2 yang dapat disesuaikan (DIN 12880) dengan alarm visual",
      "Desain pegangan ergonomis",
      "Port USB untuk merekam data",
    ],
    benefits: [
      "Efisiensi energi terbaik di pasaran",
      "Akurasi suhu temporal dan spasial yang luar biasa",
      "Koneksi USB untuk merekam data",
      "Rentang suhu hingga +300 °C",
    ],
  },
  {
    id: 4,
    title:
      "Model FED 56 | Ruang Pengeringan dan Pemanasan dengan Konveksi Paksa dan Fungsi Timer yang Ditingkatkan",
    slug: "model fed 56",
    color: "merah",
    description:
      "Ruang pemanasan BINDER seri FED Avantgarde.Line menyediakan kapasitas hampir tak terbatas dan sangat adaptif. Dengan fungsi timer canggih dan kipas yang dapat dikendalikan, kondisi suhu dan konveksi dapat dengan mudah dikendalikan.",
    image: "/landing/binder/fed56.jpg",
    image2: "/landing/binder/fed56-2.jpg",
    image3: "/landing/binder/fed56-3.jpg",
    alt: "Model FED 56 | Ruang Pengeringan dan Pemanasan dengan Konveksi Paksa dan Fungsi Timer yang Ditingkatkan",
    link: `/binderDetail/model%20fed%2056`,
    characteristics: [
      "Rentang suhu: suhu ruang ditambah 5 °C hingga 300 °C",
      "Hingga 30% penghematan energi dibandingkan dengan unit konvensional di pasar",
      "Akurasi suhu tinggi berkat teknologi APT.line™",
      "Kecepatan kipas yang dapat disesuaikan",
      "Pengontrol dengan tampilan LCD dan fungsi waktu yang ditingkatkan",
      "Kontrol elektromekanis untuk flap udara buang",
      "2 rak krom-plated",
      "Unit hingga 115 liter dapat ditumpuk",
      "Perangkat keselamatan suhu independen kelas 2 yang dapat disesuaikan (DIN 12880) dengan alarm visual",
      "Desain pegangan ergonomis",
      "Antarmuka Ethernet",
      "Port USB untuk merekam data",
    ],
    benefits: [
      "Efisiensi energi terbaik di pasaran",
      "Akurasi suhu temporal dan spasial yang luar biasa",
      "Koneksi USB untuk merekam data",
      "Rentang suhu hingga 300 °C",
    ],
  },
  {
    id: 5,
    title:
      "Model FED 115 | Ruang Pengeringan dan Pemanasan dengan Konveksi Paksa dan Fungsi Timer yang Ditingkatkan",
    slug: "model fed 115",
    color: "merah",
    description:
      "Ruang pemanasan BINDER seri FED Avantgarde.Line menyediakan kapasitas hampir tak terbatas dan sangat adaptif. Dengan fungsi timer canggih dan kipas yang dapat dikendalikan, kondisi suhu dan konveksi dapat dengan mudah dikendalikan.",
    image: "/landing/binder/fed115.jpg",
    image2: "/landing/binder/fed115-2.jpg",
    image3: "/landing/binder/fed115-3.jpg",
    alt: "Model FED 115 | Ruang Pengeringan dan Pemanasan dengan Konveksi Paksa dan Fungsi Timer yang Ditingkatkan",
    link: `/binderDetail/model%20fed%20115`,
    characteristics: [
      "Rentang suhu: suhu ruang ditambah 5 °C hingga 300 °C",
      "Hingga 30% penghematan energi dibandingkan dengan unit konvensional di pasar",
      "Akurasi suhu tinggi berkat teknologi APT.line™",
      "Kecepatan kipas yang dapat disesuaikan",
      "Pengontrol dengan tampilan LCD dan fungsi waktu yang ditingkatkan",
      "Kontrol elektromekanis untuk flap udara buang",
      "2 rak krom-plated",
      "Unit hingga 115 liter dapat ditumpuk",
      "Perangkat keselamatan suhu independen kelas 2 yang dapat disesuaikan (DIN 12880) dengan alarm visual",
      "Desain pegangan ergonomis",
      "Antarmuka Ethernet",
      "Port USB untuk merekam data",
    ],
    benefits: [
      "Efisiensi energi terbaik di pasaran",
      "Akurasi suhu temporal dan spasial yang luar biasa",
      "Koneksi USB untuk merekam data",
      "Rentang suhu hingga 300 °C",
    ],
  },
];
