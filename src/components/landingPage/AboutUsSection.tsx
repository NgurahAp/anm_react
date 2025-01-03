const AboutUs = () => {
  return (
    <section id="aboutUs" className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/landing/aboutUs.webp')" }}
      ></div>

      {/* Diagonal White Background - Hidden on mobile */}
      <div
        className="absolute top-0 right-0 w-[70%] h-[100%] bg-white bg-opacity-85 hidden md:block"
        style={{
          transform: "skewX(-25deg)",
          transformOrigin: "100% 0",
          marginRight: "-400px",
        }}
      ></div>

      {/* Mobile Background Overlay */}
      <div className="absolute inset-0 bg-white bg-opacity-85 md:hidden"></div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10 px-4 md:px-6">
        <div className="w-full flex justify-center md:justify-end">
          {/* Content Section */}
          <div className="w-full md:w-1/2 flex flex-col justify-center space-y-6 p-6 md:pr-20 md:pl-32">
            <h1 className="text-3xl md:text-5xl font-bold text-gray-900 text-center md:text-left">
              Oven Laboratorium
            </h1>

            <p className="text-sm md:text-base text-gray-700 leading-relaxed text-center md:text-left">
              alat yang dirancang khusus untuk digunakan di laboratorium untuk
              memanaskan, mengeringkan, atau mensterilkan berbagai jenis sampel
              atau peralatan.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
