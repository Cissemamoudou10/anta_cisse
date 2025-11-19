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
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        className="sticky top-0 z-50 backdrop-blur-2xl bg-white/90 dark:bg-gray-900/90 shadow-lg border-b border-gray-200/50 dark:border-gray-800/50"
      >
        {/* Accent supérieur avec dégradé */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>

        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo / Profil */}
            <Link to="/" className="group flex items-center gap-3 sm:gap-4">
              {/* Photo avec effet premium */}
              <div className="relative">
                <motion.div
                  animate={{ 
                    rotate: [0, 360],
                  }}
                  transition={{ 
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                  className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-30 group-hover:opacity-50 transition"
                ></motion.div>
                
                <motion.div
                  whileHover={{ scale: 1.05, rotate: 5 }}
                  className="relative"
                >
                  <img
                    src={person.photo}
                    alt="profile"
                    className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full object-cover ring-2 ring-white dark:ring-gray-800 shadow-xl"
                  />
                  {/* Indicateur en ligne */}
                  <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white dark:border-gray-900 shadow-lg">
                    <div className="w-full h-full bg-green-400 rounded-full animate-ping"></div>
                  </div>
                </motion.div>
              </div>

              {/* Nom et titre */}
              <div className="hidden sm:block">
                <div className="font-bold text-base sm:text-lg text-gray-900 dark:text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text transition-all">
                  {person.firstName} <span className="font-light">{person.lastName}</span>
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full animate-pulse"></div>
                  {person.title}
                </div>
              </div>
            </Link>

            {/* Navigation Desktop */}
            <nav className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-5 py-2.5 rounded-xl font-medium transition-all ${
                        isActive
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg shadow-blue-500/30"
                          : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 hover:shadow-md"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="hidden lg:inline">{item.label}</span>
                    </motion.div>
                    
                    {/* Indicateur actif */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full"
                      />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2 sm:gap-3">
              {/* Toggle Dark Mode */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => setDark(!dark)}
                className="relative p-2.5 sm:p-3 rounded-xl overflow-hidden group shadow-lg"
                aria-label="Toggle dark mode"
              >
                {/* Fond avec dégradé animé */}
                <motion.div
                  animate={{ 
                    background: dark 
                      ? ["linear-gradient(135deg, #667eea 0%, #764ba2 100%)", "linear-gradient(135deg, #764ba2 0%, #667eea 100%)"]
                      : ["linear-gradient(135deg, #f093fb 0%, #f5576c 100%)", "linear-gradient(135deg, #fad0c4 0%, #ffd1ff 100%)"]
                  }}
                  transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute inset-0"
                />
                
                <motion.div
                  animate={{ rotate: dark ? 180 : 0 }}
                  transition={{ duration: 0.2, ease: "easeInOut" }}
                  className="relative text-white"
                >
                  {dark ? <Sun size={18} /> : <Moon size={18} />}
                </motion.div>
              </motion.button>

              {/* Menu Mobile */}
              <motion.button
                whileTap={{ scale: 0.9 }}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="md:hidden p-2.5 sm:p-3 rounded-xl bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-700 text-gray-700 dark:text-gray-300 shadow-lg hover:shadow-xl transition"
                aria-label="Toggle menu"
              >
                <motion.div
                  animate={{ rotate: mobileMenuOpen ? 180 : 0 }}
                  transition={{ duration: 0.1 }}
                >
                  {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Menu Mobile avec overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileMenuOpen(false)}
              className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            />

            {/* Menu Panel */}
            <motion.nav
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="md:hidden fixed top-0 right-0 h-full w-72 bg-white dark:bg-gray-900 shadow-2xl z-50 overflow-y-auto"
            >
              {/* Header du menu */}
              <div className="relative p-6 bg-gradient-to-br from-blue-600 to-purple-600">
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="absolute top-4 right-4 p-2 rounded-lg bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 transition"
                >
                  <X size={20} />
                </button>
                
                <div className="flex items-center gap-3 mt-8">
                  <img
                    src={person.photo}
                    alt="profile"
                    className="w-14 h-14 rounded-full object-cover ring-2 ring-white/50 shadow-lg"
                  />
                  <div className="text-white">
                    <div className="font-bold text-lg">{person.firstName}</div>
                    <div className="text-sm text-blue-100">{person.title}</div>
                  </div>
                </div>
              </div>

              {/* Items du menu */}
              <div className="p-4 space-y-2">
                {navItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = location.pathname === item.path;
                  
                  return (
                    <motion.div
                      key={item.path}
                      initial={{ x: 50, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        to={item.path}
                        onClick={() => setMobileMenuOpen(false)}
                        className={`flex items-center gap-3 px-4 py-3.5 rounded-xl font-medium transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg"
                            : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                        }`}
                      >
                        <Icon size={20} />
                        <span>{item.label}</span>
                        {isActive && (
                          <motion.div
                            layoutId="activeMobile"
                            className="ml-auto w-2 h-2 bg-white rounded-full"
                          />
                        )}
                      </Link>
                    </motion.div>
                  );
                })}
              </div>

              {/* Footer du menu mobile */}
              <div className="absolute bottom-0 left-0 right-0 p-6 border-t border-gray-200 dark:border-gray-800">
                <div className="text-center text-xs text-gray-500 dark:text-gray-400">
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