import { useState, useRef, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { MemmertProductCard } from "./components/MemmertProductCard";
import { memmertProducts } from "./components/memmertProductData";
import BinderProductCard from "./components/BinderProductCard";
import { binderProducts } from "./components/binderProductData";

const Products = () => {
  // State untuk scroll buttons untuk masing-masing section
  const [memmertScroll, setMemmertScroll] = useState({
    left: false,
    right: false,
  });
  const [binderScroll, setBinderScroll] = useState({
    left: false,
    right: false,
  });

  // Refs untuk masing-masing container
  const memmertContainerRef = useRef<HTMLDivElement>(null);
  const binderContainerRef = useRef<HTMLDivElement>(null);

  // Check scroll untuk tiap section
  const checkScroll = (
    container: HTMLDivElement,
    setScroll: React.Dispatch<
      React.SetStateAction<{ left: boolean; right: boolean }>
    >
  ) => {
    setScroll({
      left: container.scrollLeft > 0,
      right:
        container.scrollWidth - container.clientWidth - container.scrollLeft >
        1,
    });
  };

  useEffect(() => {
    const memmertContainer = memmertContainerRef.current;
    const binderContainer = binderContainerRef.current;

    if (memmertContainer && binderContainer) {
      const checkMemmertScroll = () =>
        checkScroll(memmertContainer, setMemmertScroll);
      const checkBinderScroll = () =>
        checkScroll(binderContainer, setBinderScroll);

      checkMemmertScroll();
      checkBinderScroll();

      memmertContainer.addEventListener("scroll", checkMemmertScroll);
      binderContainer.addEventListener("scroll", checkBinderScroll);
      window.addEventListener("resize", () => {
        checkMemmertScroll();
        checkBinderScroll();
      });

      return () => {
        memmertContainer.removeEventListener("scroll", checkMemmertScroll);
        binderContainer.removeEventListener("scroll", checkBinderScroll);
        window.removeEventListener("resize", () => {
          checkMemmertScroll();
          checkBinderScroll();
        });
      };
    }
  }, []);

  const scroll = (
    direction: "left" | "right",
    containerRef: React.RefObject<HTMLDivElement>
  ) => {
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
    <section
      id="products"
      className="min-h-screen py-16 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center space-y-4 mb-16">
          <span className="inline-block px-4 py-1 bg-green-50 text-green-700 text-sm font-semibold rounded-full">
            Solusi Laboratorium Terpercaya
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 max-w-3xl mx-auto leading-tight">
            Peralatan Premium untuk Laboratorium Modern
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Temukan rangkaian produk berkualitas tinggi untuk mendukung
            keakuratan dan efisiensi penelitian Anda
          </p>
        </div>

        {/* Memmert Section */}
        <div className="mb-16">
          <div className="flex items-center justify-between mb-6">
            <div className="pr-3">
              <h3 className="text-base md:text-xl font-bold text-gray-900">
                MEMMERT PREMIUM SERIES
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mt-1">
                Presisi tinggi untuk hasil yang sempurna
              </p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-sm hidden md:block">Jelajahi Semua</h1>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left", memmertContainerRef)}
                  className={`p-2 rounded-full shadow-lg transition-all duration-200
                    ${
                      memmertScroll.left
                        ? "bg-white hover:bg-gray-50 cursor-pointer"
                        : "bg-gray-100 cursor-not-allowed opacity-50"
                    }`}
                  disabled={!memmertScroll.left}
                >
                  <ChevronLeft
                    className={`w-4 h-4 ${
                      memmertScroll.left ? "text-gray-800" : "text-gray-400"
                    }`}
                  />
                </button>
                <button
                  onClick={() => scroll("right", memmertContainerRef)}
                  className={`p-2 rounded-full shadow-lg transition-all duration-200
                    ${
                      memmertScroll.right
                        ? "bg-white hover:bg-gray-50 cursor-pointer"
                        : "bg-gray-100 cursor-not-allowed opacity-50"
                    }`}
                  disabled={!memmertScroll.right}
                >
                  <ChevronRight
                    className={`w-4 h-4 ${
                      memmertScroll.right ? "text-gray-800" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={memmertContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex gap-6">
              {memmertProducts.map((product) => (
                <div key={product.id} className="snap-center">
                  <MemmertProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Binder Section */}
        <div>
          <div className="flex items-center justify-between mb-6">
            <div className="pr-3">
              <h3 className="text-base md:text-xl font-bold text-gray-900">
                BINDER PROFESSIONAL SERIES
              </h3>
              <p className="text-gray-600 text-xs md:text-sm mt-1">
                Inovasi teknologi untuk standar tertinggi
              </p>
            </div>
            <div className="flex items-center gap-3">
              <h1 className="text-sm hidden md:block">Jelajahi Semua</h1>
              <div className="flex gap-2">
                <button
                  onClick={() => scroll("left", binderContainerRef)}
                  className={`p-2 rounded-full shadow-lg transition-all duration-200
                    ${
                      binderScroll.left
                        ? "bg-white hover:bg-gray-50 cursor-pointer"
                        : "bg-gray-100 cursor-not-allowed opacity-50"
                    }`}
                  disabled={!binderScroll.left}
                >
                  <ChevronLeft
                    className={`w-4 h-4 ${
                      binderScroll.left ? "text-gray-800" : "text-gray-400"
                    }`}
                  />
                </button>
                <button
                  onClick={() => scroll("right", binderContainerRef)}
                  className={`p-2 rounded-full shadow-lg transition-all duration-200
                    ${
                      binderScroll.right
                        ? "bg-white hover:bg-gray-50 cursor-pointer"
                        : "bg-gray-100 cursor-not-allowed opacity-50"
                    }`}
                  disabled={!binderScroll.right}
                >
                  <ChevronRight
                    className={`w-4 h-4 ${
                      binderScroll.right ? "text-gray-800" : "text-gray-400"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          <div
            ref={binderContainerRef}
            className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-4 px-4"
            style={{ scrollBehavior: "smooth" }}
          >
            <div className="flex gap-6">
              {binderProducts.map((product) => (
                <div key={product.id} className="snap-center">
                  <BinderProductCard product={product} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
