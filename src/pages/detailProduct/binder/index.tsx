import { useParams, Navigate } from "react-router-dom";
import { binderProducts } from "../../../components/landingPage/components/binderProductData";
import { ProductImageGallery } from "./components/ProductImageGalerry";
import ProductCharacteristics from "./components/ProductCharacteristics";
import { motion } from "framer-motion";

const normalizeString = (str: string): string => {
  return str.toLowerCase().trim();
};

const ProductNotFound = () => (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="flex flex-col items-center justify-center h-screen text-center bg-gray-100"
  >
    <h1 className="text-4xl font-bold text-gray-800 mb-4">
      Produk Tidak Ditemukan
    </h1>
    <p className="text-lg text-gray-600">
      Produk yang Anda cari tidak tersedia atau telah dihapus.
    </p>
    <a
      href="/"
      className="mt-6 px-6 py-3 bg-red-500 text-white rounded-lg shadow-md hover:bg-red-600"
    >
      Kembali ke Beranda
    </a>
  </motion.div>
);

export const BinderDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  const product = binderProducts.find(
    (p) => normalizeString(p.slug) === normalizeString(decodeURIComponent(slug))
  );

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="bg-gradient-to-b from-white to-gray-50"
    >
      <div className="min-h-screen px-5 md:px-10 pt-28 md:pt-32 pb-10">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col md:flex-row gap-8 md:pb-20">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="w-full md:w-1/2 md:pl-20"
            >
              <div className="sticky top-24">
                <ProductImageGallery
                  images={{
                    image: product.image,
                    image2: product.image2,
                    image3: product.image3,
                  }}
                  title={product.title}
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex-1"
            >
              <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6">
                {product.title}
              </h1>
              <p className="text-sm md:text-lg text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              <div className="mb-8">
                <h2 className="text-lg md:text-2xl font-bold text-gray-800 mb-4">
                  Keunggulan
                </h2>
                <ul className="list-disc pl-5 md:text-base text-xs space-y-2">
                  {product.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                      className="text-gray-700"
                    >
                      {benefit}
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>

          <ProductCharacteristics characteristics={product.characteristics} />
        </div>
      </div>
    </motion.section>
  );
};
