import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { Outlet } from "react-router";


const MainLayout = () => {
  return (
    <div>
      {" "}
      <Navbar />
      <div className=" min-h-screen overflow-x-hidden">
        {/* inspect tool- navbar height = 68px + footer height 164px = 232px */}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
