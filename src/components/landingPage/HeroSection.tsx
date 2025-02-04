import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <motion.section
      id="home"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="bg-gradient-to-br from-white to-gray-50 py-24 px-3 md:px-20 flex items-center relative overflow-hidden max-w-7xl mx-auto"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 bg-grid-gray-100/50 -z-10" />
      <div className="absolute top-20 right-20 w-72 h-72 bg-green-100 rounded-full blur-3xl opacity-20 -z-10" />
      <div className="absolute bottom-20 left-20 w-72 h-72 bg-red-100 rounded-full blur-3xl opacity-20 -z-10" />

      <div className="w-full md:w-[60%] font-urbanist space-y-6">
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="inline-flex items-center gap-2 bg-green-50 px-4 py-2 rounded-full"
        >
          <CheckCircle className="w-4 h-4 text-green-600" />
          <span className="text-sm font-medium text-green-700">
            Official Distributor
          </span>
        </motion.div>

        <motion.h2
          variants={itemVariants}
          className="text-xl md:text-2xl font-semibold text-gray-800"
        >
          Oven Laboratorium Indonesia
        </motion.h2>

        <div className="space-y-4">
          <motion.h1
            variants={itemVariants}
            className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight"
          >
            Distributor Resmi Oven
          </motion.h1>
          <motion.span
            variants={itemVariants}
            className="block text-3xl md:text-5xl font-extrabold bg-gradient-to-r from-green-700 to-green-500 bg-clip-text text-transparent"
          >
            MEMMERT & BINDER INDONESIA
          </motion.span>
        </div>

        <motion.div variants={itemVariants} className="flex gap-4 pt-8">
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/6281398387525"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-500 text-white px-6 py-3 rounded-lg text-base font-semibold transition-all hover:bg-red-600 hover:shadow-lg hover:shadow-red-500/30"
          >
            Konsultasi Sekarang
          </motion.a>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#products"
            className="border-2 border-gray-200 text-gray-700 px-6 py-3 rounded-lg text-base font-semibold transition-all hover:border-gray-300 hover:bg-gray-50"
          >
            Lihat Produk
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        variants={itemVariants}
        className="w-0 md:w-[40%] justify-end hidden md:block relative"
      >
        <motion.img
          whileHover={{ scale: 1.1 }}
          src="/landing/landing.jpg"
          alt="Distributor Alat Laboratorium Oven"
          className="w-full rounded-2xl"
        />
      </motion.div>

      <motion.img
        variants={itemVariants}
        src="/landing/navbar_logo.jpg"
        width={120}
        height={23}
        alt="Logo PT Anugrah Niaga Mandiri"
        className="absolute bottom-12 right-10 hidden md:block opacity-80 hover:opacity-100 transition-opacity"
      />
    </motion.section>
  );
};

export default HeroSection;
