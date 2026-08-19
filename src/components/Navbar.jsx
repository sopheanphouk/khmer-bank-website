import { Link, useLocation } from "react-router-dom";
import { Search, Landmark, Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../context/ThemeContext";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import "flag-icons/css/flag-icons.min.css";

function Navbar() {
  const [lang, setLang] = useState("KH");
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();
  const { t, i18n } = useTranslation();

  const languages = {
    KH: { flagClass: "fi fi-kh", label: "ភាសាខ្មែរ" },
    EN: { flagClass: "fi fi-gb", label: "English" },
  };

  const navItems = [
    { path: "/", key: "nav_home" },
    { path: "/about", key: "nav_about" },
    { path: "/accounts", key: "nav_accounts" },
    { path: "/loans", key: "nav_loans" },
    { path: "/contact", key: "nav_contact" },
  ];

  const handleLangToggle = () => {
    const newLang = lang === "KH" ? "EN" : "KH";
    setLang(newLang);
    i18n.changeLanguage(newLang.toLowerCase());
  };

  return (
    <nav className="sticky top-0 z-50 bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-colors">
      <div className="flex items-center justify-between px-4 md:px-10 lg:px-40 py-3">
        {/* Logo / Brand name */}
        <Link to="/" className="flex items-center gap-2 md:gap-3 group">
          <div className="relative w-9 h-9 md:w-11 md:h-11 rounded-xl bg-gradient-to-br from-blue-600 to-blue-800 flex items-center justify-center shadow-md group-hover:scale-105 transition-transform overflow-hidden">
            <Landmark className="text-white relative z-10" size={18} />
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-[3px] bg-red-500/80"></div>
          </div>
          <div className="leading-tight">
            <div className="text-lg md:text-xl font-extrabold text-gray-800 dark:text-gray-100">
              Khmer{" "}
              <span className="text-blue-600 dark:text-blue-400">Bank</span>
            </div>
            <div className="hidden md:flex items-center gap-1.5 mt-0.5">
              <span className="w-3 h-[2px] bg-blue-600 rounded-full"></span>
              <span className="w-3 h-[2px] bg-red-500 rounded-full"></span>
              <div className="text-[10px] text-gray-400 dark:text-gray-500 tracking-wide font-medium">
                TRUSTED · SECURE · SIMPLE
              </div>
            </div>
          </div>
        </Link>

        {/* Desktop Nav links */}
        <ul className="hidden lg:flex gap-8 text-gray-600 dark:text-gray-300 font-medium text-[15px]">
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path} className="relative group cursor-pointer">
                <Link
                  to={item.path}
                  className={`transition-colors ${
                    isActive
                      ? "text-blue-700 dark:text-blue-400"
                      : "hover:text-blue-700 dark:hover:text-blue-400"
                  }`}
                >
                  {t(item.key)}
                </Link>
                <span
                  className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 dark:bg-blue-400 rounded-full transition-all ${
                    isActive ? "w-full" : "w-0 group-hover:w-full"
                  }`}
                ></span>
              </li>
            );
          })}
        </ul>

        {/* Desktop: Search, theme, language */}
        <div className="hidden lg:flex items-center gap-3">
          <div className="flex items-center">
            {searchOpen && (
              <input
                type="text"
                autoFocus
                placeholder="Search..."
                className="mr-2 w-48 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600 focus:bg-white dark:focus:bg-gray-900 transition-all"
              />
            )}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              <Search size={18} />
            </button>
            <button
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
            </button>
          </div>

          <div className="w-px h-6 bg-gray-200 dark:bg-gray-700"></div>

          <div
            onClick={handleLangToggle}
            className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1.5 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors w-44"
          >
            <span
              className={`fi ${languages[lang].flagClass} rounded-full w-6 h-6 object-cover`}
            ></span>
            <span className="text-sm font-medium text-gray-700 dark:text-gray-200">
              {languages[lang].label}
            </span>
          </div>
        </div>

        {/* Mobile: theme + hamburger */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={toggleTheme}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
          </button>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="w-9 h-9 flex items-center justify-center rounded-full text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-900 border-t border-gray-100 dark:border-gray-800 px-4 py-4 space-y-4">
          <ul className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <li key={item.path}>
                  <Link
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors ${
                      isActive
                        ? "bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400"
                        : "text-gray-600 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800"
                    }`}
                  >
                    {t(item.key)}
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="flex items-center gap-3 pt-3 border-t border-gray-100 dark:border-gray-800">
            <input
              type="text"
              placeholder="Search..."
              className="flex-1 bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-full px-4 py-2 text-sm text-gray-800 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:focus:ring-gray-600"
            />
            <div
              onClick={handleLangToggle}
              className="flex items-center justify-center gap-2 bg-gray-100 dark:bg-gray-800 rounded-full px-3 py-2 cursor-pointer hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors shrink-0"
            >
              <span
                className={`fi ${languages[lang].flagClass} rounded-full w-5 h-5 object-cover`}
              ></span>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
