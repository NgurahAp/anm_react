import "leaflet/dist/leaflet.css";
import MapComponent from "./MapFooter";

const Footer = () => {
  return (
    <footer className="min-h-[60vh] bg-[#333333] py-8 md:py-14 px-4 md:px-16">
      <div className="flex flex-col md:flex-row">
        <div>
          <img
            src="/landing/footer_logo.jpg"
            alt="Gold Meter & Precious Metal Tester"
            className="w-28"
            width={88}
            height={32}
          />
          <div className="flex items-center py-6">
            <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full">
              <img
                src="/landing/whatsapp.png"
                alt="Gold Meter & Precious Metal Tester"
                className="w-4"
                width={14}
                height={14}
              />
            </div>
            <div className="pl-3">
              <h1 className="font-urbanist font-bold text-base text-white">
                WhatsApp
              </h1>
              <p className="text-slate-300 font-normal">
                0816-1740-8900 / 0813-9838-7525
              </p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-full">
              <img
                src="/landing/phone.png"
                alt="Gold Meter & Precious Metal Tester"
                className="w-4"
                width={14}
                height={14}
              />
            </div>
            <div className="pl-3">
              <h1 className="font-urbanist font-bold text-base text-white">
                Phone
              </h1>
              <p className="text-slate-300 font-normal">
                (021) 8690-6782 / (021) 8690-6783
              </p>
            </div>
          </div>
        </div>
        <div className="md:pl-28 pt-6 md:pt-0 w-[28rem]">
          <h1 className="font-urbanist font-medium text-lg text-white">
            Alamat Kantor
          </h1>
          <p className="text-slate-300 font-light">
            Jl. Radin Inten II No. 61A Duren Sawit
          </p>
          <MapComponent />
        </div>
        <div className="md:pl-20 pt-0 ">
          <h1 className="font-urbanist font-medium text-lg text-white">
            Email
          </h1>
          <p className="text-slate-300 font-light pb-3">
            sales@anm.co.id <br />
            anugrah.niaga.mandiri@gmail.com
          </p>
          <h1 className="font-urbanist font-medium text-lg text-white">
            Website
          </h1>
          <p className="text-slate-300 font-light pb-3">http://www.anm.co.id</p>
          <h1 className="font-urbanist font-medium text-lg text-white">
            Media Sosial
          </h1>
          <div className="flex space-x-3 my-3">
            <div className="group relative cursor-pointer">
              <div className="relative rounded-lg p-1.5 border border-slate-300 group-hover:border-green-700 transition-all duration-300 transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
                  className="stroke-slate-300 group-hover:stroke-green-700 fill-slate-300 group-hover:fill-green-700 transition-colors duration-300"
                >
                  <path d="M13.396 22v-8.778h2.948l.441-3.406h-3.389V7.598c0-.986.273-1.659 1.676-1.659h1.793V3.005c-.311-.042-1.376-.135-2.617-.135-2.587 0-4.361 1.579-4.361 4.473v2.493H6.346v3.406h2.948V22h4.102z" />
                </svg>
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <div className="relative rounded-lg p-1.5 border border-slate-300 group-hover:border-green-700 transition-all duration-300 transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="stroke-slate-300 group-hover:stroke-green-700 transition-colors duration-300"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                </svg>
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <div className="relative rounded-lg p-1.5 border border-slate-300 group-hover:border-green-700 transition-all duration-300 transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
                  className="fill-slate-300 group-hover:fill-green-700 transition-colors duration-300"
                >
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.767 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 0 1 .083.343c-.09.375-.293 1.199-.332 1.363-.053.218-.174.265-.402.159-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.608 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.756 10.748 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" />
                </svg>
              </div>
            </div>
            <div className="group relative cursor-pointer">
              <div className="relative rounded-lg p-1.5 border border-slate-300 group-hover:border-green-700 transition-all duration-300 transform group-hover:scale-110">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  width="13"
                  height="13"
                  className="fill-slate-300 group-hover:fill-green-700 transition-colors duration-300"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.148 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.148-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.98-6.98.058-1.28.072-1.689.072-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.98-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[1px] mt-4 bg-slate-300 hover:bg-green-500 transition-all duration-300"></div>
      <div className="text-slate-400 md:text-center p-4">
        <p className="text-xs">
          <a href="https://anm.co.id" className="text-blue-500 hover:underline">
            PT. Anugrah Niaga Mandiri
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
