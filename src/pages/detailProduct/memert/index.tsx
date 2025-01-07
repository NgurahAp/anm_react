import { Box, ChevronRight, Ruler, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { Navigate, useParams } from "react-router-dom";
import { memmertProducts } from "../../../components/landingPage/components/memmertProductData";

export const MemmertDetail = () => {
  const { slug } = useParams<{ slug: string }>();

  if (!slug) {
    return <Navigate to="/404" replace />;
  }

  // Find product by slug
  const product = memmertProducts.find(
    (p) => p.slug.toLowerCase() === decodeURIComponent(slug).toLowerCase()
  );

  if (!product) {
    return <Navigate to="/404" replace />;
  }

  // Map specifications to match the icon layout
  const specifications = [
    {
      ...product.specifications.interior,
      icon: <Box />,
    },
    {
      ...product.specifications.casing,
      icon: <Ruler />,
    },
    {
      ...product.specifications.electrical,
      icon: <Zap />,
    },
  ];

  return (
    <div className="bg-gradient-to-b from-white to-gray-50 min-h-screen py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-28">
        {/* Product Header */}
        <section className="flex flex-col lg:flex-row items-center gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 flex justify-center"
          >
            <div className="relative overflow-hidden rounded-2xl shadow-2xl w-10/12">
              <img
                src={product.image}
                alt={product.alt}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="w-full lg:w-1/2 space-y-6"
          >
            <div className="space-y-3">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
                {product.title}
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold text-red-600">
                Standard delivery Universal oven
              </h2>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              {product.description.split("\n\n")[0]}
            </p>
            <button className="bg-red-600 text-white px-8 py-3 rounded-lg font-semibold flex items-center gap-2 hover:bg-red-700 transition-colors duration-300">
              Learn More
              <ChevronRight className="w-5 h-5" />
            </button>
          </motion.div>
        </section>

        {/* Specifications */}
        <section className="space-y-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-12">
            Technical Specifications
          </h3>
          <div className="grid grid-cols-1 gap-24 bg-white rounded-xl shadow-lg p-6">
            {specifications.map((spec, index) => (
              <div key={index} className="">
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-red-600">{spec.icon}</div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    {spec.title}
                  </h4>
                </div>
                <div className="grid md:grid-cols-2 gap-4">
                  {spec.details.map((detail, idx) => (
                    <div key={idx} className="border-b border-gray-100 pb-2">
                      <p className="text-sm text-gray-500">{detail.label}</p>
                      <p className="text-gray-900 font-medium">
                        {detail.value}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default MemmertDetail;
