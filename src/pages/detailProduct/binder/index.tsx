import { useParams, Navigate } from "react-router-dom";
import { binderProducts } from "../../../components/landingPage/components/binderProductData";
import { ProductImageGallery } from "./components/ProductImageGalerry";

// Helper function to normalize strings for comparison
const normalizeString = (str: string): string => {
  return str.toLowerCase().trim();
};

// Component for the error state
const ProductNotFound = () => (
  <div className="flex flex-col items-center justify-center h-screen text-center bg-gray-100">
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
  </div>
);

export const Binder = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  // Find product by normalized slug
  const product = binderProducts.find(
    (p) => normalizeString(p.slug) === normalizeString(decodeURIComponent(slug))
  );

  if (!product) {
    return <ProductNotFound />;
  }

  return (
    <section className="bg-gradient-to-b from-gray-50 to-gray-100">
      <div className="min-h-screen px-5 md:px-10 pt-14 md:pt-32 pb-10">
        <div className="max-w-7xl mx-auto ">
          <div className="flex flex-col-reverse md:flex-row gap-8 pb-20">
            {/* Product Images */}
            <div className="w-full md:w-1/2 md:pl-20">
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
            </div>

            {/* Product Details */}
            <div className="flex-1">
              <h1 className="text-4xl font-extrabold text-gray-800 mb-6">
                {product.title}
              </h1>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Benefits Section */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                  Keunggulan
                </h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li className="text-gray-700">
                    Desain ergonomis dan mudah dibawa
                  </li>
                  <li className="text-gray-700">
                    Material tahan lama dan ramah lingkungan
                  </li>
                  <li className="text-gray-700">
                    Cocok untuk kebutuhan profesional dan personal
                  </li>
                  <li className="text-gray-700">
                    Mendukung produktivitas Anda dengan fitur tambahan
                  </li>
                </ul>
              </div>

              {/* Action Button */}
              <div className="flex flex-col md:flex-row gap-4">
                <a
                  href="/order/binder-produk-a"
                  className="px-6 py-3 bg-red-600 text-white rounded-lg shadow-md hover:bg-red-600 text-center"
                >
                  Pesan Sekarang
                </a>
                <a
                  href="/products"
                  className="px-6 py-3 bg-gray-200 text-gray-800 rounded-lg shadow-md hover:bg-gray-300 text-center"
                >
                  Lihat Produk Lainnya
                </a>
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto">
            <h2 className="text-2xl font-bold text-gray-800 mt-20 text-center">
              IMPORTANT CHARACTERISTICS
            </h2>
            {product.characteristics && (
              <div className="grid grid-cols-1 md:grid-cols-3   justify-center gap-16 mt-10 px-28 pt-10">
                {product.characteristics.map((char, index) => (
                  <div
                    key={index}
                    className="flex flex-col items-start space-y-2"
                  >
                    <div className="w-10 h-1 bg-red-600 "></div>
                    <p className="font-semibold">{char}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
