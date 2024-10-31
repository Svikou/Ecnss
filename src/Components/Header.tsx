const Header: React.FC = () => {
  return (
    <header className="bg-white  mt-2 mx-2 py-2 rounded-lg border border-[#00000045]  ">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="#">
              <span className="sr-only">Home</span>
              <img
                className="h-20 w-auto"
                src="public/images/logo (1).svg"
                alt=" "
              />
            </a>
          </div>

          <div className="hidden md:block">
            <nav aria-label="Global">
              <ul className="flex items-center gap-[40px] text-[16px] ">
                <li>
                  <a
                    className="text-black transition hover:text-[#ff4141] "
                    href="#"
                  >
                    {" "}
                    Services{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition  hover:text-[#fcff43]"
                    href="#"
                  >
                    {" "}
                    Documents{" "}
                  </a>
                </li>

                <li>
                  <a
                    className="text-black transition hover:text-[#3baa35e7]"
                    href="#"
                  >
                    {" "}
                    Contacts{" "}
                  </a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="flex items-center gap-4">
            <div className="sm:flex sm:gap-4">
              <div className="hidden sm:flex">
                <a
                  className="rounded-md bg-[#3baa35e7] hover:bg-[#3baa35]   px-5 py-3 text-sm font-medium text-white"
                  href="#"
                >
                  Mon compte
                </a>
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
    </header>
  );
};

export default Header;
