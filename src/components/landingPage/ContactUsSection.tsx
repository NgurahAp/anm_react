import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  message: string;
}

const ContactUs = (): JSX.Element => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "d2dd95c6-76e7-41ad-80c6-be82c50996b7", // Ganti dengan API key dari Web3Forms
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        alert("Pesan berhasil dikirim!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        throw new Error("Gagal mengirim pesan");
      }
    } catch (error) {
      alert("Terjadi kesalahan saat mengirim pesan. Silakan coba lagi.");
      console.log(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contactUs"
      className="bg-gradient-to-b from-gray-50 to-gray-100 py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
          <div className="w-full lg:w-1/3 space-y-8">
            <div className="bg-white rounded-xl shadow-sm p-8 min-h-[32rem]">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Informasi Kontak
              </h3>

              <div className="space-y-6">
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
                  href="mailto:19210200@bsi.ac.id"
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
                      Duren Sawit, Jakarta Timur
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

          <div className="w-full lg:w-2/3">
            <div className="bg-white rounded-xl shadow-sm p-8 min-h-[32rem]">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                Dapatkan Penawaran Khusus
              </h3>
              <p className="text-gray-600 mb-6">
                Isi form di bawah dan tim kami akan menghubungi Anda segera
              </p>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Nama Lengkap
                    </label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Masukkan nama lengkap"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Masukkan email"
                      required
                      disabled={isSubmitting}
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Jelaskan kebutuhan Anda"
                    required
                    disabled={isSubmitting}
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors disabled:bg-gray-400"
                  disabled={isSubmitting}
                >
                  <Send className="w-5 h-5" />
                  {isSubmitting ? "Mengirim..." : "Kirim Pesan"}
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
