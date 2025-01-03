import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

const ContactUs = () => {
  return (
    <section
      id="contactUs"
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1 bg-red-50 text-red-600 text-sm font-semibold rounded-full mb-4">
            Konsultasi Gratis
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Mari Diskusikan Kebutuhan Laboratorium Anda
          </h2>
          <p className="text-gray-600">
            Tim ahli kami siap membantu Anda menemukan solusi terbaik untuk
            kebutuhan peralatan laboratorium Anda
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left Section */}
          <div className="w-full lg:w-1/3  space-y-8">
            {/* Contact Info Card */}
            <div className="bg-white rounded-xl shadow-sm p-8 min-h-[32rem]">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
                {/* Contact Methods */}
                <a
                  href="https://wa.me/6281617408900"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Telepon/WhatsApp</p>
                    <p className="font-semibold text-gray-900">
                      0816-1740-8900
                    </p>
                  </div>
                </a>

                <a
                  href="mailto:sales@anm.co.id"
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <Mail className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Email</p>
                    <p className="font-semibold text-gray-900">
                      sales@anm.co.id
                    </p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Lokasi</p>
                    <p className="font-semibold text-gray-900">
                      Jakarta, Indonesia
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-4 p-4 rounded-lg">
                  <div className="w-12 h-12 bg-red-50 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-red-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Jam Kerja</p>
                    <p className="font-semibold text-gray-900">
                      Senin - Jumat: 08:00 - 17:00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Section - Contact Form */}
          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm p-8 min-h-[32rem]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Dapatkan Penawaran Khusus
              </h3>
              <p className="text-gray-600 mb-6">
                Isi form di bawah dan tim kami akan menghubungi Anda segera
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Nama Lengkap
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Masukkan nama lengkap"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Masukkan email"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Pesan
                  </label>
                  <textarea
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Jelaskan kebutuhan Anda"
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors"
                >
                  <Send className="w-5 h-5" />
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
