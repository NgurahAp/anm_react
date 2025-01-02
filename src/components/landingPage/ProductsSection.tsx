import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { ProductCard } from "./components/ProductCard";
import { memmertProducts } from "./components/memmertProductData";

const Products = () => {
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const checkScroll = () => {
    const container = containerRef.current;
    if (!container) return;

    setCanScrollLeft(container.scrollLeft > 0);
    const hasMoreToScroll =
      container.scrollWidth - container.clientWidth - container.scrollLeft > 1;
    setCanScrollRight(hasMoreToScroll);
  };

  useEffect(() => {
    checkScroll();
    const container = containerRef.current;
    if (container) {
      container.addEventListener("scroll", checkScroll);
      window.addEventListener("resize", checkScroll);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", checkScroll);
        window.removeEventListener("resize", checkScroll);
      }
    };
  }, []);

  const scroll = (direction: "left" | "right") => {
    const container = containerRef.current;
    if (!container) return;

    const scrollAmount = 300;
    const newPosition =
      direction === "left"
        ? container.scrollLeft - scrollAmount
        : container.scrollLeft + scrollAmount;

    container.scrollTo({
      left: newPosition,
      behavior: "smooth",
    });
  };

  return (
    <section id="products" className="min-h-screen my-10">
      <div className="flex flex-col text-center font-urbanist">
        <p className="text-green-700 text-center md:text-base font-extrabold pb-3 md:pb-6 text-xl pt-10 md:pt-0">
          Produk Unggulan Kami
        </p>
        <h2 className="font-extrabold text-center text-3xl md:text-5xl text-gray-800 pb-6 md:px-28">
          Produk Terbaik untuk Kebutuhan Timbangan Laboratorium
        </h2>
      </div>

      <div className="relative ">
        <div className="flex items-center justify-between pt-14 pb-3 mx-5 md:mx-10">
          <h1 className="text-lg font-medium">
            Memmert Drying and Heating Chambers
          </h1>
          <div className="flex items-center gap-3">
            <h1 className="text-sm">Jelajahi Semua</h1>
            <button
              onClick={() => canScrollLeft && scroll("left")}
              className={`transition-all duration-200 p-2 rounded-full shadow-lg
                ${
                  canScrollLeft
                    ? "bg-white hover:bg-gray-50 cursor-pointer"
                    : "bg-gray-100 cursor-not-allowed opacity-50"
                }`}
              disabled={!canScrollLeft}
            >
              <ChevronLeft
                className={`w-4 h-4 ${
                  canScrollLeft ? "text-gray-800" : "text-gray-400"
                }`}
              />
            </button>
            <button
              onClick={() => canScrollRight && scroll("right")}
              className={`transition-all duration-200 p-2 rounded-full shadow-lg
                ${
                  canScrollRight
                    ? "bg-white hover:bg-gray-50 cursor-pointer"
                    : "bg-gray-100 cursor-not-allowed opacity-50"
                }`}
              disabled={!canScrollRight}
            >
              <ChevronRight
                className={`w-4 h-4 ${
                  canScrollRight ? "text-gray-800" : "text-gray-400"
                }`}
              />
            </button>
          </div>
        </div>

        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory mx-3 pt-3 md:mx-6"
          style={{ scrollBehavior: "smooth" }}
        >
          <div className="flex gap-3">
            {memmertProducts.map((product) => (
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
