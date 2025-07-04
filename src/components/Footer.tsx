import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";
import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-10 mt-20">
      <div className="container mx-auto px-4 flex flex-col items-center text-center space-y-6">
        {/* Logo */}
        <img
          src={logo}
          alt="BookWish Logo"
          className="w-16 h-16 rounded-full shadow-lg border-2 border-white"
        />

        {/* Brand Title & Description */}
        <div>
          <h2 className="text-2xl font-extrabold tracking-wide">BookWish</h2>
          <p className="text-sm text-gray-300 mt-1">
            Empowering readers since 1992
          </p>
        </div>

        {/* Social Media Icons */}
        <div className="flex gap-5 text-lg">
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-blue-400 transition"
          >
            <FaFacebookF />
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="hover:text-sky-400 transition"
          >
            <FaTwitter />
          </a>
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-pink-400 transition"
          >
            <FaInstagram />
          </a>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-400">
          © {new Date().getFullYear()} BookWish. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
