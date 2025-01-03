import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BinderProduct } from "./binderProductData";

interface BinderProductCardProps {
  product: BinderProduct;
}

export const BinderProductCard = ({ product }: BinderProductCardProps) => {
  return (
    <Link
      to={`/binderDetail/${encodeURIComponent(product.slug)}`}
      className="group relative"
    >
      <div className="flex flex-col bg-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
        {/* Image Container */}
        <div className="relative w-72 h-80">
          {/* Background Image */}
          <div className="w-full h-full bg-gray-50">
            <img
              src={product.image}
              alt={product.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
          </div>

          {/* Logo */}
          <div className="absolute top-8 left-5 w-16 h-16 bg-white rounded-full p-2 shadow-md transform -translate-y-1/4 transition-transform group-hover:-translate-y-1/3">
            <img
              src="/landing/binder/logo.png"
              alt="Binder Logo"
              className="w-full h-full object-contain"
            />
          </div>
        </div>

        {/* Product Info */}
        <div className="p-4">
          <h1 className="text-lg font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-red-600 transition-colors">
            {product.title}
          </h1>

          <div className="flex items-center text-sm text-gray-500">
            <span>Click to see product details</span>
            <ArrowRight className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BinderProductCard;
