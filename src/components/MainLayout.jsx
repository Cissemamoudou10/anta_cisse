import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import Footer from "./Footer";
import Topbar from "./Topbar";
import Home from "./Home";
import CVPage from "./CVPage";
import companyLogo from "../assets/companyLogo.jpg";
import clientImg from "../assets/clientImg.jpg";

function MainLayout() {
  const location = useLocation();
  
  const [dark, setDark] = useState(() => {
    try {
      return localStorage.getItem("cv_dark_mode") === "1";
    } catch (e) {
      console.log(e);
      return false;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (dark) root.classList.add("dark");
    else root.classList.remove("dark");
    try {
      localStorage.setItem("cv_dark_mode", dark ? "1" : "0");
    } catch (e) {
      console.log(e);
    }
  }, [dark]);

  // Données de la personne
  const person = {
    firstName: "Anta",
    lastName: "CISSE",
    title: "Gestionnaire RH",
    company: "Bintou Emploi Services",
    phone: "+223 76 61 75 16",
    companyLogo: companyLogo,
    photo: clientImg,
    cvUrl: "https://anta-cisse-e9fx.vercel.app/",
    email: "cisseanta623@gmail.com",
  };

  // Images de fond dynamiques selon le thème
  const bgImages = {
    light: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1950&q=80",
    dark: "https://images.unsplash.com/photo-1519681393784-d120267933ba?auto=format&fit=crop&w=1950&q=80"
  };

  return (
    <div className="relative min-h-screen flex flex-col text-gray-900 dark:text-gray-100 overflow-hidden">
      {/* Fond avec effet parallaxe et transition */}
      <motion.div 
        className="fixed inset-0 -z-20"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      >
        <AnimatePresence mode="wait">
          <motion.img
            key={dark ? 'dark' : 'light'}
            src={dark ? bgImages.dark : bgImages.light}
            alt="fond"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full h-full object-cover"
          />
        </AnimatePresence>
        
        {/* Overlays avec dégradés multiples */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-purple-900/20 to-pink-900/30 dark:from-blue-950/50 dark:via-purple-950/40 dark:to-pink-950/50"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/90 dark:to-black/90"></div>
        
        {/* Pattern de points animé */}
        <motion.div 
          className="absolute inset-0 opacity-20 dark:opacity-10"
          animate={{ 
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
            backgroundSize: '32px 32px'
          }}
        ></motion.div>
      </motion.div>

      {/* Particules flottantes décoratives */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * window.innerWidth,
              y: window.innerHeight + 50,
              scale: 0,
              opacity: 0
            }}
            animate={{ 
              y: [null, -100],
              scale: [0, 1, 1, 0],
              opacity: [0, 0.6, 0.6, 0],
              x: [
                null,
                Math.random() * window.innerWidth
              ]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
            className="absolute w-2 h-2 rounded-full bg-gradient-to-br from-blue-400 to-purple-400 blur-sm"
            style={{
              left: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Effet de lueur en haut */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] -z-10">
        <motion.div
          animate={{ 
            opacity: [0.3, 0.5, 0.3],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-full h-full bg-gradient-to-b from-blue-500/20 via-purple-500/10 to-transparent blur-3xl"
        />
      </div>

      {/* Topbar */}
      <Topbar person={person} dark={dark} setDark={setDark} />

      {/* Contenu principal avec transitions de page */}
      <main className="flex-1 container mx-auto px-4 py-8 sm:py-12 relative z-10">
        <AnimatePresence mode="wait">
          <motion.div
            key={location.pathname}
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.98 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
          >
            <Routes location={location}>
              <Route  path="/" element={<Home person={person} />} />
              <Route path="/cv" element={<CVPage person={person} />} />
            </Routes>
          </motion.div>
        </AnimatePresence>
      </main>

      {/* Footer */}
      <Footer />

      {/* Effet de vignette subtil */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 shadow-[inset_0_0_100px_rgba(0,0,0,0.3)] dark:shadow-[inset_0_0_100px_rgba(0,0,0,0.6)]"></div>
      </div>
    </div>
  );
}

export default MainLayout;