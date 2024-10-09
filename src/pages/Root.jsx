import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/sections/Footer";

function RootLayout() {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default RootLayout;
