import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { id: "home", to: "/", label: "Home" },
    { id: "aboutUs", to: "/#aboutUs", label: "About Us" },
    { id: "products", to: "/#products", label: "Best Product" },
    { id: "contactUs", to: "/#contactUs", label: "Contact Us" },
  ];

  const handleNavigation = (item: { id: string; to: string }) => {
    setIsOpen(false);

    if (location.pathname === "/") {
      // If we're on the home page, use smooth scrolling
      const element = document.getElementById(item.id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // If we're on another page, navigate to home with hash
      navigate(item.to);
    }
  };

  // Handle hash navigation after page load
  useEffect(() => {
    if (location.pathname === "/" && location.hash) {
      const id = location.hash.replace("#", "");
      const element = document.getElementById(id);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src="/landing/navbar_logo.jpg"
              alt="Logo PT Anugrah Niaga Mandiri"
              width={126}
              height={38}
            />
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="flex space-x-6">
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleNavigation(item)}
                  className="text-gray-900 hover:text-green-500 px-3 py-1 text-base font-medium border-b border-transparent hover:border-green-500 transition-all duration-300"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() =>
                handleNavigation({ id: "contactUs", to: "/#contactUs" })
              }
              className="text-green-500 border-2 border-green-500 px-6 py-3 rounded-md text-base font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Minta Penawaran
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-900 hover:text-green-500 focus:outline-none"
            >
              {isOpen ? (
                <X className="h-8 w-8" />
              ) : (
                <Menu className="h-8 w-8" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        } absolute top-20 left-0 right-0 bg-white shadow-lg`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3">
          {menuItems.map((item) => (
            <button
              key={item.label}
              onClick={() => handleNavigation(item)}
              className="block w-full text-left text-gray-900 hover:text-green-500 px-3 py-3 text-base font-medium border-b border-gray-200 hover:bg-gray-50 transition-all duration-300"
            >
              {item.label}
            </button>
          ))}
          <div className="pt-2 pb-1">
            <button
              onClick={() =>
                handleNavigation({ id: "contactUs", to: "/#contactUs" })
              }
              className="block w-full text-center text-green-500 border-2 border-green-500 px-6 py-3 rounded-md text-base font-semibold hover:bg-green-500 hover:text-white transition-all duration-300"
            >
              Minta Penawaran
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
