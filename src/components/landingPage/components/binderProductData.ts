export interface BinderProduct {
  id: number;
  title: string;
  slug: string;
  color: string;
  description: string;
  image: string;
  image2: string;
  alt: string;
  link: string;
  padding?: string | null;
}

export const binderProducts: BinderProduct[] = [
  {
    id: 1,
    title: "Model ED 23 | Drying and heating chambers with gravity convection",
    slug: "model ed 23",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/binder/ed23.jpg",
    image2: "/landing/binder/un30-2.webp",
    alt: "Memmert oven UN 30",
    link: `/binderDetail/model%20ed%2023`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 2,
    title: "Model ED 115 | Drying and heating chambers with gravity convection",
    slug: "model ed 115",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/binder/ed115.jpg",
    image2: "/landing/binder/ed115.jpg",
    alt: "Memmert oven UN 55",
    link: `/binderDetail/model%20ed%20115`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 3,
    title: "Model ED 260 | Drying and heating chambers with gravity convection",
    slug: "model ed 260",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/binder/ed260.jpg",
    image2: "/landing/binder/un110-2.webp",
    alt: "Memmert oven UN 110",
    link: `/binderDetail/model%20ed%20260`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 4,
    title:
      "Model FED 56 | Drying and heating chambers with forced convection and enhanced timer functions",
    slug: "model fed 56",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/binder/fed56.jpg",
    image2: "/landing/binder/un160-2.webp",
    alt: "Memmert oven UN 160",
    link: `/binderDetail/model%20fed%2056`,
    padding: "mt-[0.2rem]",
  },
  {
    id: 5,
    title:
      "Model FED 115 | Drying and heating chambers with forced convection and enhanced timer functions",
    slug: "model fed 115",
    color: "red",
    description:
      "Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.Precise drying, heating, ageing, burn-in and hardening in research, science, industry and quality assurance.",
    image: "/landing/binder/fed115.jpg",
    image2: "/landing/binder/uf55-2.webp",
    alt: "Memmert oven UF 55",
    link: `/binderDetail/model%20fed%20115`,
    padding: "mt-[0.2rem]",
  },
];
