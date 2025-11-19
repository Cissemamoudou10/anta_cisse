import { Moon, Sun, Home, FileText, Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Topbar({ person, dark, setDark }) {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { path: "/", label: "Accueil", icon: Home },
    { path: "/cv", label: "CV", icon: FileText },
  ];

  return (
    <>
      <motion.header
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="sticky top-0 z-50 bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 shadow-sm"
      >
        <div className="container mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16">
            {/* Logo / Profil */}
            <Link to="/" className="flex items-center gap-3 group">
              <div className="relative">
                <img
                  src={person.photo}
                  alt="profile"
                  className="w-10 h-10 rounded-full object-cover ring-2 ring-[#2B5FA6] dark:ring-[#1E88E5] transition-all group-hover:ring-[#1E88E5]"
                />
                <div className="absolute -bottom-0.5 -right-0.5 w-3 h-3 bg-emerald-500 rounded-full border-2 border-white dark:border-gray-950"></div>
              </div>

              <div className="hidden sm:block">
                <div className="font-semibold text-gray-900 dark:text-white text-sm">
                  {person.firstName} {person.lastName}
                </div>
                <div className="text-xs text-gray-500 dark:text-gray-400">
                  {person.title}
                </div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-1">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isActive
                        ? "bg-[#2B5FA6] text-white shadow-sm"
                        : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                    }`}
                  >
                    <Icon size={18} />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              {/* Toggle Dark Mode */}
              <button
                onClick={() => setDark(!dark)}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle dark mode"
              >
                {dark ? (
                  <Sun size={18} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Moon size={18} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>

              {/* Menu Mobile */}
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2 rounded-lg bg-gray-100 dark:bg-gray-900 hover:bg-gray-200 dark:hover:bg-gray-800 transition-colors"
                aria-label="Toggle menu"
              >
                {mobileMenuOpen ? (
                  <X size={20} className="text-gray-700 dark:text-gray-300" />
                ) : (
                  <Menu size={20} className="text-gray-700 dark:text-gray-300" />
                )}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 30, stiffness: 300 }}
              className="md:hidden fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-950 shadow-xl z-50 border-l border-gray-200 dark:border-gray-800"
            >
              {/* Header du menu */}
              <div className="p-6 border-b border-gray-200 dark:border-gray-800">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-semibold text-gray-900 dark:text-white">Menu</h3>
                  <button
                    onClick={() => setMobileMenuOpen(false)}
                    className="p-1.5 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-900 transition-colors"
                  >
                    <X size={20} className="text-gray-500" />
                  </button>
                </div>
                
                <div className="flex items-center gap-3">
                  <img
                    src={person.photo}
                    alt="profile"
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-200 dark:ring-gray-800"
                  />
                  <div>
                    <div className="font-medium text-gray-900 dark:text-white text-sm">
                      {person.firstName} {person.lastName}
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {person.title}
                    </div>
                  </div>
                </div>
              </div>

              {/* Items du menu */}
              <div className="p-4 space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <Link
                      key={item.path}
                      to={item.path}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg font-medium transition-all ${
                        isActive
                          ? "bg-[#2B5FA6] text-white"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900"
                      }`}
                    >
                      <Icon size={20} />
                      <span>{item.label}</span>
                    </Link>
                  );
                })}
              </div>

              {/* Footer du menu mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800">
                <div className="text-xs text-gray-500 dark:text-gray-400 text-center">
                  {person.email}
                </div>
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Topbar;