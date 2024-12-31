import { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { products } from "./productData";
import { ProductCard } from "./components/ProductCard";


const Products = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 300; // Adjust this value to control scroll distance
    const newPosition =
      direction === "left"
        ? scrollPosition - scrollAmount
        : scrollPosition + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });

    setScrollPosition(newPosition);
  };

  return (
    <section id="products" className="min-h-screen my-10 mx-5 md:mx-20">
      <div className="flex flex-col text-center font-urbanist">
        <p className="text-green-700 text-center md:text-base font-extrabold pb-3 md:pb-6 text-xl pt-10 md:pt-0">
          Produk Unggulan Kami
        </p>
        <h2 className="font-extrabold text-center text-3xl md:text-5xl text-gray-800 pb-6 md:px-28">
          Produk Terbaik untuk Kebutuhan Timbangan Laboratorium
        </h2>
      </div>

      <div className="relative">
        {/* Navigation Buttons */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Products Carousel */}
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex">
            {products.map((product) => (
              <div key={product.id} className="snap-center">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
