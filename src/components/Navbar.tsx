import { Link, NavLink } from "react-router";
import { ModeToggle } from "./mode-toggle";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "../assets/logo.jpg"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { path: "/books", label: "All Books" },
    { path: "/create-book", label: "Add Book" },
    { path: "/borrow-summary", label: "Borrow Summary" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md backdrop-blur supports-[backdrop-filter]:bg-white/70 dark:supports-[backdrop-filter]:bg-gray-900/70">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src={logo} alt="logo" className="w-12 h-12 object-cover" />
          <Link
            to="/"
            className="text-xl font-bold text-gray-900 dark:text-white"
          >
            BookWish
          </Link>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                isActive
                  ? "text-blue-600 dark:text-yellow-300 underline font-semibold"
                  : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-300 transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ModeToggle />
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="md:hidden text-gray-700 dark:text-gray-200"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900 px-4 py-3 space-y-3 shadow-md">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) =>
                isActive
                  ? "block text-blue-600 dark:text-yellow-300 underline font-semibold"
                  : "block text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-yellow-300 transition-colors"
              }
            >
              {link.label}
            </NavLink>
          ))}
          <ModeToggle />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
