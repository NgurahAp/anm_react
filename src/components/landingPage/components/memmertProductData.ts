export interface Specification {
  label: string;
  value: string;
}

export interface SpecificationGroup {
  title: string;
  details: Specification[];
}

export interface memmertProduct {
  id: number;
  title: string;
  slug: string;
  description: string;
  image: string;
  image2: string;
  alt: string;
  link: string;
  specifications: {
    interior: SpecificationGroup;
    casing: SpecificationGroup;
    electrical: SpecificationGroup;
  };
}

export const memmertProducts: memmertProduct[] = [
  {
    id: 1,
    title: "Model UN 30",
    slug: "model un 30",
    description:
      "The universally applicable lab oven U is Memmert’s classic appliance for temperature control in science, research and material tests in industry.",
    image: "/landing/memert/un30.png",
    image2: "/landing/memert/un30-2.webp",
    alt: "Memmert oven UN 30",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    specifications: {
      interior: {
        title: "Stainless Steel Interior",
        details: [
          {
            label: "Interior",
            value: "Easy-to-clean stainless steel with integrated heating",
          },
          { label: "Volume", value: "53 L" },
          { label: "Interior Dimensions (WxHxD)", value: "400 x 400 x 330 mm" },
          { label: "Max. internals", value: "4" },
          { label: "Max. chamber load", value: "80 kg" },
          { label: "Max. load per internal", value: "20 kg" },
        ],
      },
      casing: {
        title: "Textured Stainless Steel Casing",
        details: [
          { label: "Exterior Dimensions (WxHxD)", value: "585 x 784 x 514 mm" },
          { label: "Door handle depth", value: "+56 mm" },
          { label: "Housing", value: "Rear zinc-plated steel" },
        ],
      },
      electrical: {
        title: "Electrical Data",
        details: [
          { label: "230V Voltage", value: "230 V, 50/60 Hz approx. 2000 W" },
          { label: "115V Voltage", value: "115 V, 50/60 Hz approx. 2000 W" },
        ],
      },
    },
  },
  {
    id: 2,
    title: "Model UN 55",
    slug: "model un 55",
    description:
      "The universally applicable lab oven U is Memmert’s classic appliance for temperature control in science, research and material tests in industry.",
    image: "/landing/memert/un55.png",
    image2: "/landing/memert/un55-2.webp",
    alt: "Memmert oven UN 55",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    specifications: {
      interior: {
        title: "Stainless Steel Interior",
        details: [
          {
            label: "Interior",
            value: "Easy-to-clean stainless steel with integrated heating",
          },
          { label: "Volume", value: "53 L" },
          { label: "Interior Dimensions (WxHxD)", value: "400 x 400 x 330 mm" },
          { label: "Max. internals", value: "4" },
          { label: "Max. chamber load", value: "80 kg" },
          { label: "Max. load per internal", value: "20 kg" },
        ],
      },
      casing: {
        title: "Textured Stainless Steel Casing",
        details: [
          { label: "Exterior Dimensions (WxHxD)", value: "585 x 784 x 514 mm" },
          { label: "Door handle depth", value: "+56 mm" },
          { label: "Housing", value: "Rear zinc-plated steel" },
        ],
      },
      electrical: {
        title: "Electrical Data",
        details: [
          { label: "230V Voltage", value: "230 V, 50/60 Hz approx. 2000 W" },
          { label: "115V Voltage", value: "115 V, 50/60 Hz approx. 2000 W" },
        ],
      },
    },
  },
  {
    id: 3,
    title: "Model UN 110",
    slug: "model un 110",
    description:
      "The universally applicable lab oven U is Memmert’s classic appliance for temperature control in science, research and material tests in industry.",
    image: "/landing/memert/un110.png",
    image2: "/landing/memert/un110-2.webp",
    alt: "Memmert oven UN 110",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    specifications: {
      interior: {
        title: "Stainless Steel Interior",
        details: [
          {
            label: "Interior",
            value: "Easy-to-clean stainless steel with integrated heating",
          },
          { label: "Volume", value: "53 L" },
          { label: "Interior Dimensions (WxHxD)", value: "400 x 400 x 330 mm" },
          { label: "Max. internals", value: "4" },
          { label: "Max. chamber load", value: "80 kg" },
          { label: "Max. load per internal", value: "20 kg" },
        ],
      },
      casing: {
        title: "Textured Stainless Steel Casing",
        details: [
          { label: "Exterior Dimensions (WxHxD)", value: "585 x 784 x 514 mm" },
          { label: "Door handle depth", value: "+56 mm" },
          { label: "Housing", value: "Rear zinc-plated steel" },
        ],
      },
      electrical: {
        title: "Electrical Data",
        details: [
          { label: "230V Voltage", value: "230 V, 50/60 Hz approx. 2000 W" },
          { label: "115V Voltage", value: "115 V, 50/60 Hz approx. 2000 W" },
        ],
      },
    },
  },
  {
    id: 4,
    title: "Model UN 160",
    slug: "model un 160",
    description:
      "The universally applicable lab oven U is Memmert’s classic appliance for temperature control in science, research and material tests in industry.",
    image: "/landing/memert/un160.png",
    image2: "/landing/memert/un160-2.webp",
    alt: "Memmert oven UN 160",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    specifications: {
      interior: {
        title: "Stainless Steel Interior",
        details: [
          {
            label: "Interior",
            value: "Easy-to-clean stainless steel with integrated heating",
          },
          { label: "Volume", value: "53 L" },
          { label: "Interior Dimensions (WxHxD)", value: "400 x 400 x 330 mm" },
          { label: "Max. internals", value: "4" },
          { label: "Max. chamber load", value: "80 kg" },
          { label: "Max. load per internal", value: "20 kg" },
        ],
      },
      casing: {
        title: "Textured Stainless Steel Casing",
        details: [
          { label: "Exterior Dimensions (WxHxD)", value: "585 x 784 x 514 mm" },
          { label: "Door handle depth", value: "+56 mm" },
          { label: "Housing", value: "Rear zinc-plated steel" },
        ],
      },
      electrical: {
        title: "Electrical Data",
        details: [
          { label: "230V Voltage", value: "230 V, 50/60 Hz approx. 2000 W" },
          { label: "115V Voltage", value: "115 V, 50/60 Hz approx. 2000 W" },
        ],
      },
    },
  },
  {
    id: 5,
    title: "Model UF 55",
    slug: "model uf 55",
    description:
      "The universally applicable lab oven U is Memmert’s classic appliance for temperature control in science, research and material tests in industry.",
    image: "/landing/memert/uf55.png",
    image2: "/landing/memert/uf55-2.webp",
    alt: "Memmert oven UF 55",
    link: `/detailProduct/Alfa%20Mirage%20Gold%20Meter%20GKS-3000`,
    specifications: {
      interior: {
        title: "Stainless Steel Interior",
        details: [
          {
            label: "Interior",
            value: "Easy-to-clean stainless steel with integrated heating",
          },
          { label: "Volume", value: "53 L" },
          { label: "Interior Dimensions (WxHxD)", value: "400 x 400 x 330 mm" },
          { label: "Max. internals", value: "4" },
          { label: "Max. chamber load", value: "80 kg" },
          { label: "Max. load per internal", value: "20 kg" },
        ],
      },
      casing: {
        title: "Textured Stainless Steel Casing",
        details: [
          { label: "Exterior Dimensions (WxHxD)", value: "585 x 784 x 514 mm" },
          { label: "Door handle depth", value: "+56 mm" },
          { label: "Housing", value: "Rear zinc-plated steel" },
        ],
      },
      electrical: {
        title: "Electrical Data",
        details: [
          { label: "230V Voltage", value: "230 V, 50/60 Hz approx. 2000 W" },
          { label: "115V Voltage", value: "115 V, 50/60 Hz approx. 2000 W" },
        ],
      },
    },
  },
];
