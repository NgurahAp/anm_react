export const ContactUs = () => {
  return (
    <div className="w-full flex justify-center ">
      <div className="w-full  bg-white p-8 rounded-2xl shadow-xl mt-12 mb-8 relative overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-red-500 opacity-10 rounded-full transform translate-x-16 -translate-y-16"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-red-500 opacity-10 rounded-full transform -translate-x-12 translate-y-12"></div>

        <div className="relative z-10">
          <h2 className="text-center font-urbanist text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Hubungi Kami
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Dapatkan informasi lengkap tentang produk dan penawaran khusus
            melalui WhatsApp atau Email kami
          </p>

          <div className="flex flex-col md:flex-row items-stretch justify-center gap-4 md:gap-6">
            <a
              href="https://wa.me/6281617408900"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center px-8 py-4 justify-center bg-white border-2 border-red-500 rounded-xl text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 transition-transform group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
              <span className="font-medium">0816-1740-8900</span>
            </a>

            <a
              href="mailto:sales@anm.co.id"
              className="flex items-center px-8 py-4 justify-center bg-white border-2 border-red-500 rounded-xl text-red-600 hover:bg-red-500 hover:text-white transition-all duration-300 shadow-md hover:shadow-lg group"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 mr-3 transition-transform group-hover:scale-110"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              <span className="font-medium">sales@anm.co.id</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}