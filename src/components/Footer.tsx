import logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="bg-black mt-16 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col items-center justify-center space-y-4">
        {/* Logo */}
        <img
          src={logo}
          alt="BookWish Logo"
          className="w-16 h-16 rounded-full shadow-lg"
        />

        {/* Title & Description */}
        <div className="text-center">
          <h2 className="text-xl font-bold">BookWish</h2>
          <p className="text-sm text-gray-100">
            Providing reliable tech since 1992
          </p>
        </div>

        {/* Copyright */}
        <p className="text-xs text-gray-200">
          © {new Date().getFullYear()} BookWish — All rights reserved.
        </p>

        {/* Social Icons Placeholder (Optional) */}
        <div className="flex gap-4">
          <a href="#" aria-label="Facebook" className="hover:text-red-400">
            📘
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-red-400">
            🐦
          </a>
          <a href="#" aria-label="Instagram" className="hover:text-red-400">
            📸
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
