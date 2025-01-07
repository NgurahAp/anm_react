import { Link } from "react-router-dom";
import { memmertProduct } from "./memmertProductData";

interface MemmertProductCardProps {
  product: memmertProduct;
}

export const MemmertProductCard = ({ product }: MemmertProductCardProps) => {
  return (
    <Link to={`/memmertDetail/${product.slug}`} className="flex flex-col group pb-5">
      {/* Image Container with Overlay */}
      <div className="relative w-[18rem] h-[20rem] overflow-hidden rounded-md">
        {/* Background Image */}
        <div className="w-full h-full bg-[#F6F6F6] flex items-center justify-center">
          <img
            src={product.image}
            alt={product.title}
            className="w-11/12 object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>

        {/* Logo */}
        <div className="absolute -top-2 left-3 w-16 h-16 bg-transparent rounded-full p-2 ">
          <img
            src="/landing/memert/logo.png"
            alt="Memmert Logo"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Gradient Overlay and Title */}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/70 to-transparent">
          <h3 className="absolute bottom-4 left-6 text-white text-lg font-semibold font-urbanist">
            {product.title}
          </h3>
        </div>
      </div>
    </Link>
  );  
};

export default MemmertProductCard;
