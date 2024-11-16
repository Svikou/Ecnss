import { useState } from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white mt-2 mx-2 py-2 rounded-lg border border-[#00000045]">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <Link to="/">
                <img
                  className="h-20 w-auto"
                  src="public/images/logo (1).svg"
                  alt=" "
                />
              </Link>
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-[40px] text-[16px]">
                <li className="relative group">
                  <a
                    className="text-black transition flex items-center"
                    href="#"
                  >
                    Services <span className="ml-1"></span>
                  </a>

                  {/* Sous-menu */}
                  <div className="absolute left-0 hidden pt-2 group-hover:flex flex-col z-10">
                    <div className="bg-white border border-gray-200 rounded shadow-lg w-[200px]">
                      <a
                        href="/Affilier"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        S'affilier à la CNSS
                      </a>

                      <a
                        href="/Adhesion"
                        className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                      >
                        Adhérer à eCNSS
                      </a>
                    </div>
                  </div>
                </li>
                <li>
                  <a className="text-black transition" href="#">
                    Documents
                  </a>
                </li>
                <li>
                  <a className="text-black transition" href="#">
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-[#3baa35e7] hover:bg-[#3baa35] px-5 py-3 text-sm font-medium text-white"
                  href="#"
                >
                  Mon compte
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button
                className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                onClick={toggleMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hamburger menu content */}
      {isMenuOpen && (
        <div className="bg-white shadow-lg p-4 md:hidden">
          <nav>
            <ul className="space-y-4">
              <li>
                <a className="text-black transition" href="#">
                  Services
                </a>
              </li>
              <li>
                <a className="text-black transition" href="#">
                  Documents
                </a>
              </li>
              <li>
                <a className="text-black transition" href="#">
                  Contacts
                </a>
              </li>
              <li>
                <a
                  className="rounded-md bg-[#3baa35e7] hover:bg-[#3baa35] px-5 py-3 text-sm font-medium text-white"
                  href="#"
                >
                  Mon compte
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
