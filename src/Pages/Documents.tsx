function Documents() {
  return (
    <>
      <div className="bg-[#3baa35e7] w-full h-[90px] my-4 p-8">
        <h1 className="text-white text-2xl font-bold mb-4">
          AUTHENTIFIER UN DOCUMENT
        </h1>
      </div>
      <div className="min-h-screen bg-white px-8 py-2">
        <div className="mx-auto max-w-6xl grid md:grid-cols-2 gap-8">
          {/* Left Column - Verification Form */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h1 className="text-xl font-medium mb-8">
              Authentification d'un document - Recherche d'un document (1/2)
            </h1>

            <p className="mb-10">
              Cette page vous permet de vérifier l'existence du document dans la
              base de données de la DGI en saisissant sa référence.
            </p>

            <form className="space-y-6">
              <div className="space-y-2">
                <label className="block text-gray-600">
                  RÉFÉRENCE DU DOCUMENT <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  placeholder="référence"
                  className="w-full p-3 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full  text-white py-3 rounded-md  bg-[#3baa35e7] hover:bg-[#3baa35] transition-colors"
              >
                VERIFIER
              </button>
            </form>
          </div>

          {/* Right Column - Process Information */}
          <div className="space-y-6">
            <div className="border-l-4 border-orange-400 pl-6">
              <h3 className="text-xl font-medium mb-4">CONSIGNE :</h3>
              <p className="text-gray-600 leading-relaxed">
                Saisissez ci-dessous la référence(noquittance) du document à
                authentifier. Vous trouverez cette référence en bas à droite du
                document.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Documents;
