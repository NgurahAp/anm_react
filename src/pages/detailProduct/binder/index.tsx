import { useParams, Navigate } from "react-router-dom";
import { binderProducts } from "../../../components/landingPage/components/binderProductData";

// Helper function to normalize strings for comparison
const normalizeString = (str: string): string => {
  return str.toLowerCase().trim();
};

// Component for the error state
const ProductNotFound = () => (
  <div className="min-h-screen px-10 py-10">
    <h1 className="text-4xl font-bold text-gray-800 mb-6">
      Produk Tidak Ditemukan
    </h1>
    <p className="text-gray-600 text-lg">
      Produk yang Anda cari tidak tersedia.
    </p>
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
    <section className="bg-gray-50">
      <div className="min-h-screen px-5 md:px-10 pt-14 md:pt-32 pb-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col-reverse md:flex-row gap-8">
            {/* Product Images */}
            <div className="w-full md:w-1/2 md:pl-20">
              <div className="sticky top-24">
                <img
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="hidden md:block rounded-lg shadow-lg"
                />
                <div className="mt-8">
                  <h3 className="font-urbanist text-xl font-extrabold mb-4">
                    Spesifikasi
                  </h3>
                  {/* Add specifications here when available */}
                </div>
              </div>
            </div>

            {/* Product Details */}
            <div className="w-full md:w-1/2 md:px-5">
              <div className="md:hidden mb-6">
                <img
                  src={product.image}
                  alt={product.title}
                  width={500}
                  height={500}
                  className="w-full rounded-lg shadow-lg"
                />
              </div>

              <h1 className="font-urbanist font-extrabold text-3xl md:text-5xl text-gray-800 mb-6">
                {product.title}
              </h1>

              <div className="space-y-8">
                <div>
                  <h2 className="font-urbanist text-xl font-extrabold mb-3">
                    Deskripsi
                  </h2>
                  <p className="text-gray-600 leading-relaxed">
                    {product.description}
                  </p>
                </div>

                <div>
                  <h2 className="font-urbanist text-xl font-extrabold mb-3">
                    Fungsi
                  </h2>
                  {/* Add functions here when available */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
