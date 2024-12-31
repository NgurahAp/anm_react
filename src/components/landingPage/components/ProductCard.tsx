import { Link } from "react-router-dom";
import { Product } from "../productData";

interface ProductCardProps {
  product: Product;
}

export const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <div className="bg-white rounded-lg hover:shadow-xl border hover:border-red-500 overflow-hidden min-w-[300px] mx-2">
      <div className="flex justify-center">
        <img
          src={product.image}
          alt={product.alt}
          className="w-full object-cover"
          width={369}
          height={369}
        />
      </div>
      <div className="p-6 flex flex-col items-center">
        <h2 className="text-2xl text-center font-semibold text-gray-800">
          {product.title}
        </h2>
        <p className="text-gray-600 text-sm text-center py-5">
          {product.description}
        </p>
        {product.link ? (
          <Link
            to={product.link}
            className={`bg-green-500 hover:bg-green-600 text-white font-medium ${
              product.padding ?? ""
            } py-2 px-4 rounded-md`}
          >
            Pesan Produk
          </Link>
        ) : (
          <button
            className={`bg-green-500 hover:bg-green-600 text-white font-medium ${
              product.padding ?? ""
            } py-2 px-4 rounded-md mt-4`}
          >
            Pesan Produk
          </button>
        )}
      </div>
    </div>
  );
};
