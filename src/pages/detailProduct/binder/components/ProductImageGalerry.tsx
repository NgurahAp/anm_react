import { useState } from "react";

export const ProductImageGallery = ({
  images: { image, image2, image3 },
  title,
}: {
  images: {
    image: string;
    image2: string;
    image3?: string;
  };
  title: string;
}) => {
  const [selectedImage, setSelectedImage] = useState(image);
  const thumbnails = [image, image2].concat(image3 ? [image3] : []);

  return (
    <div className="max-w-4xl mx-auto md:p-6">
      <div className="space-y-6">
        {/* Main Image Container */}
        <div className="relative w-full bg-white rounded-2xl shadow-xl overflow-hidden">
          {/* Image Wrapper with aspect ratio */}
          <div className="relative aspect-square">
            <img
              src={selectedImage}
              alt={title}
              className="absolute inset-0 w-full h-full object-contain p-8 transition-all duration-300 hover:scale-105"
            />

            {/* Logo Badge */}
            <div className="absolute top-6 left-6 w-20 h-20 md:w-24 md:h-24 bg-white rounded-full shadow-lg p-3 hover:rotate-0 transition-transform duration-300">
              <img
                src="/landing/binder/logo.png"
                alt="Binder Logo"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>

        {/* Thumbnails Gallery */}
        <div className="flex justify-center gap-4">
          {thumbnails.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(img)}
              className={`group relative rounded-xl overflow-hidden transition-all duration-300
                ${
                  selectedImage === img
                    ? "ring-2 ring-red-500 ring-offset-2 shadow-lg transform scale-105"
                    : "hover:ring-2 hover:ring-gray-300 hover:ring-offset-2 hover:shadow-md"
                }`}
            >
              <div className="aspect-square w-20 md:w-24">
                <img
                  src={img}
                  alt={`${title} view ${index + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>

              {/* Active Indicator */}
              {selectedImage === img && (
                <div className="absolute inset-0 bg-black bg-opacity-10 pointer-events-none">
                  <div className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-1.5 h-1.5 bg-red-500 rounded-full"></div>
                </div>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductImageGallery;
