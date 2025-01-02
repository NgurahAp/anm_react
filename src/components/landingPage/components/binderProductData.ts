export interface binderProduct {
  id: number;
  title: string;
  color: string;
  description: string;
  image: string;
  image2: string;
  alt: string;
  link: string;
  padding?: string | null;
}

export const binderProducts: binderProduct[] = [
  {
    id: 1,
    title: "UN 30",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/memert/un30.png",
    image2: "/landing/memert/un30-2.webp",
    alt: "Memmert oven UN 30",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 2,
    title: "UN 55",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/memert/un55.png",
    image2: "/landing/memert/un55-2.webp",
    alt: "Memmert oven UN 55",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 3,
    title: "UN 110",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/memert/un110.png",
    image2: "/landing/memert/un110-2.webp",
    alt: "Memmert oven UN 110",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 4,
    title: "UN 160",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/memert/un160.png",
    image2: "/landing/memert/un160-2.webp",
    alt: "Memmert oven UN 160",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 5,
    title: "UF 55",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/memert/uf55.png",
    image2: "/landing/memert/uf55-2.webp",
    alt: "Memmert oven UF 55",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    padding: "mt-[0.2rem]",
  },
];
