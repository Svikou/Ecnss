const Footerr = () => {
  return (
    <footer className="bg-white border-t border-gray-100 mt-2 ">
      <div className="mx-auto max-w-screen-xl px-4 py-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:items-start lg:gap-8">
          <div className="text-teal-600">
            <img
              className=" w-responsive h-responsive"
              src="public/images/Logo-CNSS.png"
              alt=" "
            />
          </div>

          <div className="mt-8 grid grid-cols-2 gap-8 lg:mt-0 lg:grid-cols-5 lg:gap-y-16">
            <div className="col-span-2 mt-6">
              <div>
                <h3 className="text-responsive font-bold text-gray-900">
                  Contactez nous
                </h3>

                <p className="mt-4 text-responsive text-gray-500">
                  Envoyez nous un email pour une prise en charge plus rapide.
                </p>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-3 lg:flex lg:items-end">
              <form className="w-full">
                <label htmlFor="UserEmail" className="sr-only">
                  {" "}
                  Email{" "}
                </label>

                <div className="border border-gray-100 p-2 sm:flex sm:items-center sm:gap-4">
                  <input
                    type="email"
                    id="UserEmail"
                    placeholder="contact@cnss.gov.gn"
                    className="w-full border-none outline-none sm:text-sm"
                  />

                  <button className="mt-1 w-full bg-[#3baa35e7] px-6 py-3 text-sm font-bold uppercase tracking-wide rounded-md text-white transition-none hover:bg-[#3baa35] sm:mt-0 sm:w-auto sm:shrink-0">
                    Envoyez
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row gap-[180px] mb-6 mt-12 items-center justify-center h-full">
          <div className="flex items-center gap-2 text-center sm:text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 shrink-0 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <p className="text-ùd  text-gray-900">Kaloum - Koulewondy</p>
          </div>

          <div className="flex items-center gap-2 text-center sm:text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            <p className="text-md  text-gray-900">+224 625 56 56 16</p>
          </div>

          <div className="flex items-center gap-2 text-center sm:text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5 shrink-0 text-gray-900"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <p className="text-md  text-gray-900">contact@cnss.gov.gn</p>
          </div>
        </div>

        <div>
          <ul className="col-span-2 flex justify-start gap-6 lg:col-span-5 lg:justify-end">
            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  className="w-6 h-6 rounded-md"
                  fill="#1877F2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M22.675 0H1.325C.595 0 0 .585 0 1.3v21.4c0 .715.595 1.3 1.325 1.3h11.525V14.7h-3.1v-3.6h3.1V8.1c0-3.1 1.892-4.788 4.656-4.788 1.325 0 2.464.1 2.794.143v3.243h-1.92c-1.506 0-1.798.715-1.798 1.763v2.314h3.588l-.467 3.6h-3.121V24h6.112c.73 0 1.325-.585 1.325-1.3V1.3c0-.715-.595-1.3-1.325-1.3z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="w-6 h-6 rounded-md"
                  fill="#0A66C2"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20.452 20.452h-3.745v-5.596c0-1.333-.026-3.053-1.86-3.053-1.86 0-2.145 1.45-2.145 2.949v5.7H8.957V8.748h3.592v1.603h.05c.5-.95 1.735-1.95 3.573-1.95 3.82 0 4.524 2.516 4.524 5.79v6.261zM5.337 7.145a2.18 2.18 0 11-.001-4.361 2.18 2.18 0 010 4.361zM6.946 20.452H3.725V8.748h3.221v11.704zM22.225 0H1.771C.792 0 0 .794 0 1.774v20.452C0 23.207.793 24 1.771 24h20.453c.979 0 1.771-.793 1.771-1.774V1.774C24 .794 23.207 0 22.225 0z" />
                </svg>
              </a>
            </li>

            <li>
              <a
                href="#"
                rel="noreferrer"
                target="_blank"
                className="text-gray-700 transition hover:opacity-75"
              >
                <span className="sr-only">YouTube</span>
                <svg
                  className="w-6 h-6"
                  fill="#FF0000"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M23.499 6.203a2.998 2.998 0 00-2.115-2.12C19.558 3.5 12 3.5 12 3.5s-7.558 0-9.384.583A2.998 2.998 0 00.501 6.203C0 8.029 0 12 0 12s0 3.971.501 5.797a2.998 2.998 0 002.115 2.12C4.442 20.5 12 20.5 12 20.5s7.558 0 9.384-.583a2.998 2.998 0 002.115-2.12C24 15.971 24 12 24 12s0-3.971-.501-5.797zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                </svg>
              </a>
            </li>
          </ul>
        </div>

        <div className="mt-8 border-t border-gray-100 pt-8">
          <div className="sm:flex sm:justify-between">
            <p className="text-xs text-gray-500">
              &copy; Copyright - eCotisation. Tous droits réservés.
            </p>

            <ul className="mt-8 flex flex-wrap justify-start gap-4 text-xs sm:mt-0 lg:justify-end">
              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Termes & Conditions d'Utilisation{" "}
                </a>
              </li>

              <li>
                <a
                  href="#"
                  className="text-gray-500 transition hover:opacity-75"
                >
                  {" "}
                  Politique de Confidentialité{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footerr;
