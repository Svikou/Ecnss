// src/layouts/MainLayout.tsx
import Header from "../Components/Header";
import Footerr from "../Components/Footerr";
import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footerr />
    </>
  );
};

export default MainLayout;
