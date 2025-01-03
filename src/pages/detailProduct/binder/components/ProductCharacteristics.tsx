import React from "react";
import { Mail, Phone, MapPin, Globe, Building2 } from "lucide-react";

interface ProductCharacteristicsProps {
  characteristics?: string[];
}

const ProductCharacteristics: React.FC<ProductCharacteristicsProps> = ({
  characteristics = [],
}) => {
  if (!characteristics || characteristics.length === 0) return null;

  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8">
        {/* Characteristics Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Fitur Utama</h2>
          <div className="bg-white rounded-xl min-h-[35rem] shadow-lg p-6 ">
            <div className="space-y-4">
              {characteristics.map((characteristic, index) => (
                <div
                  key={index}
                  className="flex items-center space-x-3 hover:bg-gray-50 rounded-lg transition-colors p-1"
                >
                  <div className="min-w-4 mt-1">
                    <div className="w-2 h-2 bg-red-500 rounded-full " />
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    {characteristic}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Hubungi Kami
          </h2>
          <div className="bg-white rounded-xl min-h-[35rem] shadow-lg p-6">
            <div className="space-y-8">
              {/* Company Info */}
              <div className="pb-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Informasi Perusahaan
                </h3>
                <div className="flex items-center space-x-3 text-gray-600 mb-3">
                  <Building2 className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-lg">PT. Anugrah Niaga Mandiri</span>
                </div>
                <div className="flex items-start space-x-3 text-gray-600">
                  <MapPin className="w-5 h-5 text-red-500 flex-shrink-0 mt-1" />
                  <span className="text-lg">
                    Jl. Radin Inten II No.61 A 6, RT.6/RW.14, Duren Sawit, Kec.
                    Duren Sawit, Kota Jakarta Timur.
                  </span>
                </div>
              </div>

              {/* Contact Details */}
              <div className="pb-6 border-b border-gray-200">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Hubungi Kami
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Phone className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="text-lg">+62 816 1740 8900</p>
                      <p className="text-sm text-gray-500">
                        Senin - Jumat, 8:00 AM - 5:00 PM
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Mail className="w-5 h-5 text-red-500 flex-shrink-0" />
                    <div>
                      <p className="text-lg">sales@anm.co.id</p>
                      <p className="text-sm text-gray-500">
                        Kirimkan pertanyaan Anda kapan saja!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social & Web */}
              <div>
                <h3 className="text-xl font-semibold text-gray-800 mb-4">
                  Temukan Kami Secara Online
                </h3>
                <div className="flex items-center space-x-3 text-gray-600">
                  <Globe className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-lg">www.anugrahniagamandiri.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCharacteristics;
