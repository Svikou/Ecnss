// src/App.tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from "./Layout/Mainlayout";
import HomePage from "./Pages/Homepage";
import Affiliation from "./Pages/Affilier";
import Adhesion from "./Pages/Adhesion";
import Documents from "./Pages/Documents";
import Contact from "./Pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          {/* Route pour la page d'accueil */}
          <Route index element={<HomePage />} />
          {/* Route pour des pages */}
          <Route path="/affilier" element={<Affiliation />} />
          <Route path="/Adhesion" element={<Adhesion />} />
          <Route path="/Documents" element={<Documents />} />
          <Route path="/Contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
