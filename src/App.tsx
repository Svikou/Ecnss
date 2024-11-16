// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/Mainlayout";
import HomePage from "./Pages/Homepage";
import AffiliationPage from "./Pages/Affilier";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Route pour la page d'accueil */}
          <Route index element={<HomePage />} />
          {/* Route pour la page d'affiliation */}
          <Route path="/affilier" element={<AffiliationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
