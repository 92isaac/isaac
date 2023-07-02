import { Outlet, Link } from "react-router-dom";
import { Sidebar } from "../components/Navigationbar/Sidebar";
import { Footer } from "../components/Footer/Footer";
import { MobileFooter } from "../components/Footer/MobileFooter";
import { Navbar } from "../components/Navigationbar/Navbar";
import FloatingWhatsApp from "../utilities/FloatingWhatsapp";
import { FaInstagram } from "react-icons/fa";
import { AiFillTwitterSquare } from "react-icons/ai";
import { FiGithub, FiLinkedin } from "react-icons/fi";

const SharedLayout = () => {
  return (
    <div className="mx-5 md:mx-0">
      <FloatingWhatsApp/>
      <div className="block md:flex gap-3">
        <div className=" md:mx-0 md:w-1/3 md:h-screen border rounded-md my-1 w-full md:fixed">
          <Sidebar />
        </div>
        <div className=" w-full md:w-2/3 relative mt-1 rounded-md md:ml-[34%]">
          <div className="md:mx-0 md:border rounded-md">
            <Navbar />
          </div>
          <main className=" md:mx-0 mb-10 md:h-[83vh] overflow-y-scroll my-2 border rounded-md">
            <Outlet />
          </main>
          <div className="w-full h-10 fixed md:bottom-0 bottom-11 md:border rounded-md md:w-8/12 z-50 shadow-2xl">
            <Footer />
            <MobileFooter />
          </div>
        </div>
        <div className="md:hidden">
        <ul className="flex justify-center items-center gap-2 text-sm lg:text-sm">
          <li>
            <Link to="/">
              <FiLinkedin className="" />
            </Link>
          </li>
          <li>
            {" "}
            <Link
              to="https://twitter.com/SangoTobi"
              target="_blank"
              rel="noreferrer"
            >
              <AiFillTwitterSquare />
            </Link>
          </li>

          <li>
            <Link
              to="https://www.instagram.com/donibot/"
              target="_blank"
              rel="noreferrer"
            >
              <FaInstagram />
            </Link>
          </li>
          <li>
            <Link to="/">
              <FiGithub className="" />
            </Link>
          </li>
        </ul>
      </div>
      </div>
    </div>
  );
};

export default SharedLayout;
