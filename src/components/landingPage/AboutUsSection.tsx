const AboutUs = () => {
  return (
    <section className="relative min-h-[70vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 w-full bg-cover bg-center"
        style={{ backgroundImage: "url('/landing/aboutUs.webp')" }}
      ></div>

      {/* Diagonal White Background */}
      <div
        className="absolute top-0 right-0 w-[70%] h-[100%] bg-white bg-opacity-85"
        style={{
          transform: "skewX(-25deg)",
          transformOrigin: "100% 0",
          marginRight: "-400px", // This helps cover the right edge completely
        }}
      ></div>

      {/* Content Container */}
      <div className="container mx-auto relative z-10">
        <div className="w-full flex justify-end">
          {/* Content Section */}
          <div className="w-1/2 flex flex-col justify-center space-y-6 pr-20 pl-32">
            <h1 className="text-5xl font-bold text-gray-900">
              Oven Laboratorium
            </h1>

            <p className="text-base text-gray-700 leading-relaxed">
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
