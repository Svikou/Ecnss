import React from "react";

const Fonctionnalite: React.FC = () => {
  return (
    <div className="space-y-4  mb-8 size">
      <div className="lg:mx-auto px-4 py-8 mb-6">
        <h2 className="text-responsive font-semibold text-[#3baa35e7] text-center mb-5">
          Fonctionnalités
        </h2>
        <p className="text-responsive font-md text-center text-para-color mb-2 ">
          Les fonctionnalités principales de la plateforme
        </p>
      </div>

      {/* Détails FAQ */}
      {faqData.map((faqItem, index) => (
        <details
          key={index}
          className="group [&_summary::-webkit-details-marker]:hidden"
        >
          <summary className="flex cursor-pointer items-center justify-between gap-1.5 rounded-xl px-responsive py-responsive text-gray-900 hover:bg-gray-100 border border-[#324f533d] mt-6 transition-colors">
            <h3 className="text-responsive font-medium">{faqItem.question}</h3>
            <svg
              className="size-5 shrink-0 transition duration-300 group-open:-rotate-180"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </summary>

          <p className="mt-4 px-4 text-responsive leading-relaxed text-gray-700">
            {faqItem.answer}
          </p>
        </details>
      ))}
    </div>
  );
};

// Exemple de données pour la FAQ
const faqData = [
  {
    question: "Immatriculation",
    answer: "Demande d'immatriculation des travailleurs",
  },
  {
    question: "Télédéclaration",
    answer: "Déclaration en ligne des salaires",
  },
  {
    question: "Télépaiement",
    answer: "Paiement en ligne des cotisations sociales à la CNSS.",
  },
  {
    question: "Mes documents",
    answer:
      "Ensemble des documents générés et échangés entre l'assujetti et la CNSS.",
  },
  {
    question: "Quittances dématérialisées",
    answer:
      "Obtention de documents authentifiés grâce à la référence unique ainsi qu'un QR code de sécurité.",
  },
  {
    question: "Gestion des comptes utilisateurs",
    answer:
      "Possibilité d'ajouter, supprimer et modifier des profils utilisateurs et leurs habilitations.",
  },
  {
    question: "Alerte email et SMS",
    answer:
      "Réception d'emails d'alerte pour vous informer de toute activité au sein de votre espace eCNSS Guinée.",
  },
];

export default Fonctionnalite;
