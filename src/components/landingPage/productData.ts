export interface Product {
  id: number;
  title: string;
  description: string;
  image: string;
  alt: string;
  link: string;
  padding?: string | null;
}

export const products: Product[] = [
  {
    id: 1,
    title: "Alfa Mirage Gold Meter GKS-3000",
    description:
      "Dirancang khusus untuk menguji emas, platinum, perak, dan logam mulia lainnya.",
    image: "/detailProduct/gold-meter-gks-3000.jfif",
    alt: "Alfa Mirage Gold Meter GKS-3000",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 2,
    title: "Alfa Mirage Gold Meter GK-300",
    description:
      "Alat ini dirancang untuk memberikan hasil uji logam mulia dengan akurasi tinggi.",
    image: "/detailProduct/gold-meter-gk-300.jfif",
    alt: "Alfa Mirage Gold Meter GK-300",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GK-300`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 3,
    title: "Alfa Mirage Gold Meter GKS-300",
    description:
      "Model dasar dengan penjualan terlaris, cukup mudah, dan akurat.",
    image: "/detailProduct/gold-meter-gks-300.jfif",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-300`,
    padding: null,
  },
  {
    id: 4,
    title: "Alfa Mirage Densimeter MD-300S",
    description:
      "Model populer dengan resolusi 0,01g/cm yang ditingkatkan dari sebelumnya model MD-200S.",
    image: "/landing/md-300s.jpeg",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Alfa%20Mirage%20Densimeter%20MD-300S`,
    padding: "mt-[1.2rem]",
  },
  {
    id: 5,
    title: "Elektronik Densimeter MDS-300",
    description:
      "Fungsi baru pengukuran kepadatan bubuk ditambah dengan resolusi 0,001g/cm dan nilai referensi 0,0001g/cm",
    image: "/landing/mds-300.jpeg",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Elektronik%20Densimeter%20MDS-300`,
    padding: null,
  },
  {
    id: 6,
    title: "Elektronik Densimeter MDS-3000",
    description: "MDS-3000 dapat mengukur kapasitas maksimum hingga 3kg.",
    image: "/landing/mds-3000.jpeg",
    alt: "Gold Meter & Precious Metal Tester",
    link: `/detailProduct/Elektronik%20Densimeter%20MDS-3000`,
    padding: "mt-[1rem]",
  },
];
