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

  // Create array of available images
  const thumbnails = [image, image2].concat(image3 ? [image3] : []);

  return (
    <div className="space-y-4 items-center justify-center flex flex-col">
      {/* Main Image */}
      <div className="w-9/12 flex items-center justify-center aspect-square bg-white rounded-lg overflow-hidden shadow-lg">
        <img src={selectedImage} alt={title} className="w-10/12" />
        {/* Logo */}
        <div className="absolute top-0 left-24 w-24 h-24 bg-white rounded-full p-2">
          <img
            src="/landing/binder/logo.png"
            alt="Binder Logo"
            className="w-full h-full object-contain"
          />
        </div>
      </div>

      {/* Thumbnails */}
      <div className="flex gap-2">
        {thumbnails.map((img, index) => (
          <button
            key={index}
            onClick={() => setSelectedImage(img)}
            className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
              selectedImage === img
                ? "border-red-500 shadow-md"
                : "border-transparent hover:border-gray-300"
            }`}
          >
            <img
              src={img}
              alt={`${title} view ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};