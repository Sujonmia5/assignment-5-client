import { Outlet } from "react-router-dom";
import Navbar from "../component/navbar/navbar";
import Footer from "../component/footer/footer";

const MainLayout = () => {
  return (
    <div className="w-full min-h-screen relative ">
      <Navbar />
      <Outlet />

      <Footer />
    </div>
  );
};

export default MainLayout;
