export default function Contact() {
  return (
    <>
      <div className="bg-[#3baa35e7] w-full h-[90px] my-4 p-8">
        <h1 className="text-white text-2xl font-bold mb-4">CONTACTEZ NOUS</h1>
      </div>
      <div className="mx-auto max-w-3xl p-4">
        <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 sm:p-8">
            <form className="space-y-6">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="fullName"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Votre Nom Complet
                  </label>
                  <input
                    id="fullName"
                    type="text"
                    placeholder="Fode Momo"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Votre Adresse Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="Fode.momo@example.com"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Votre Numéro de Téléphone
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder="+224 620 19 19 19"
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Objet
                  </label>
                  <input
                    id="subject"
                    type="text"
                    placeholder="Le sujet de votre message"
                    required
                    className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  placeholder="Écrivez votre message ici..."
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 min-h-[150px] resize-none"
                />
              </div>
              <div className="flex justify-center">
                <button
                  type="submit"
                  className="w-full sm:w-auto md:w-full max-w-[1600px] px-6 py-3 bg-[#3baa35e7] hover:bg-[#3baa35] text-white font-medium rounded-md shadow-sm focus:outline-none   flex items-center justify-center"
                >
                  Envoyer le message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
