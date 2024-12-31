import { Link } from "react-router-dom";
import { memmertProduct } from "../productData";
import { ArrowRight } from "lucide-react";

interface ProductCardProps {
  product: memmertProduct;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  // Helper function untuk menentukan warna border dan button
  const getColorClasses = (color: string) => {
    const colorMap = {
      green: {
        border: "hover:border-green-500",
        button: "bg-green-600 hover:bg-green-700",
      },
      red: {
        border: "hover:border-red-500",
        button: "bg-red-600 hover:bg-red-700",
      },
    };

    return (
      colorMap[color as keyof typeof colorMap] || {
        border: "hover:border-gray-500",
        button: "bg-gray-600 hover:bg-gray-700",
      }
    );
  };

  const colorClasses = getColorClasses(product.color);

  return (
    <div
      className={`group bg-white rounded-xl hover:shadow-2xl border border-gray-100 ${colorClasses.border} overflow-hidden w-80 mx-3 transition-all duration-300 h-full ease-in-out`}
    >
      {/* Image Container */}
      <div className="relative overflow-hidden h-72">
        {/* Overlay effect on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-all duration-300" />

        <img
          src={product.image}
          alt={product.alt}
          className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content Container */}
      <div className="p-6 flex flex-col items-center space-y-4 bg-gradient-to-b from-white to-gray-50">
        {/* Title with line clamp for consistency */}
        <h2 className="text-xl font-bold text-gray-800 text-center line-clamp-2 min-h-[3.5rem]">
          {product.title}
        </h2>

        {/* Button with hover effect */}
        <Link
          to={product.link}
          className={`flex items-center justify-center w-full gap-2 ${colorClasses.button} text-white font-medium py-3 px-6 rounded-lg transition-all duration-300 group-hover:shadow-lg`}
        >
          <span>Pesan Produk</span>
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </Link>
      </div>
    </div>
  );
};
