import { useState } from "react";

export default function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="flex min-h-screen">
      <div className="flex w-1/2 flex-col justify-center p-8">
        <div className="mb-8">
          <img
            src="/placeholder.svg?height=60&width=60"
            alt="CNSS Logo"
            className="h-16 w-16"
          />
        </div>
        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-6">Se connecter</h2>
          <form className="space-y-4">
            <p className="text-sm text-gray-600">
              Veuillez entrer votre numéro d&apos;immatriculation et votre mot
              de passe pour vous connecter a votre espace.
            </p>
            <div>
              <label
                htmlFor="identification"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                NUMERO D&apos;IDENTIFICATION
              </label>
              <input
                id="identification"
                type="text"
                required
                placeholder="XXXXXXXXXXXXXX"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                MOT DE PASSE
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-700"
                >
                  {showPassword ? (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                      />
                    </svg>
                  ) : (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      className="h-5 w-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                      />
                    </svg>
                  )}
                </button>
              </div>
            </div>
            <div>
              <div
                id="captcha"
                className="g-recaptcha"
                data-sitekey="YOUR_RECAPTCHA_SITE_KEY"
              ></div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              CONNEXION
            </button>
          </form>
          <div className="mt-4 text-center text-sm">
            <a href="#" className="text-blue-600 hover:underline">
              Êtes-vous un employeur déjà immatriculé à la CNSS?
            </a>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img
          src="/placeholder.svg?height=1080&width=1920"
          alt="Background"
          className="h-full w-full object-cover"
        />
      </div>
    </div>
  );
}
