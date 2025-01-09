import { CheckCircle } from "lucide-react";

const HeroSection = () => {
  return (
    <section
      id="home"
      className="bg-gradient-to-br from-white to-gray-50 min-h-[86vh] px-3 md:px-20 flex items-center relative overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="w-full md:w-[60%] font-urbanist space-y-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full">
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">
            Official Distributor
          </span>
        </div>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 animate-fade-in">
          Oven Laboratorium Indonesia
        </h2>

        <div className="space-y-4">
          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Distributor Resmi Oven
          </h1>
          <span className="block text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent">
            MEMMERT & BINDER INDONESIA
          </span>
        </div>

        <div className="flex gap-4 pt-8">
          <a
            href="https://wa.me/6281398387525"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30 active:scale-95"
          >
            Konsultasi Sekarang
          </a>

          <a
            href="#products"
            className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg text-base font-semibold transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Lihat Produk
          </a>
        </div>
      </div>

      <div className="w-0 md:w-[40%] justify-end hidden md:block relative">
        <img
          src="/landing/landing.jpg"
          alt="Distributor Alat Laboratorium Oven"
          className="w-full rounded-2xl transition-transform hover:scale-105"
        />
      </div>

      <img
        src="/landing/navbar_logo.jpg"
        width={120}
        height={23}
        alt="Logo PT Anugrah Niaga Mandiri"
        className="absolute bottom-12 right-10 hidden md:block opacity-80 hover:opacity-100 transition-opacity"
      />
    </section>
  );
};

export default HeroSection;
