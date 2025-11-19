import { Heart, Github, Linkedin, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import digiCardLogo from "../assets/DigiCard.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    // { icon: Github, href: "#", label: "GitHub" },
    //{ icon: Linkedin, href: "#", label: "LinkedIn" },
    // { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Mail, href: "mailto:cisseboston@gmail.com", label: "Email" },
  ];

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3, duration: 0.5 }}
      className="relative mt-auto border-t border-gray-200/50 dark:border-gray-700/50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl"
    >
      {/* Accent supérieur subtil */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
          
          {/* Section Gauche - DigiCard Attribution */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <motion.a
              href="https://digicard.example.com"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.02 }}
              className="group flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors"
            >
              <img 
                src={digiCardLogo} 
                alt="Logo DigiCard" 
                className="h-12 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400 font-medium">Propulsé par</div>
                <div className="font-bold text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  DigiCard
                </div>
              </div>
            </motion.a>
          </div>

          {/* Section Centre - Copyright & Liens */}
          <div className="text-center space-y-3">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} <span className="font-medium text-gray-900 dark:text-gray-100">Carte Visite</span>
            </p>
            <div className="flex justify-center gap-4 text-xs">
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Mentions légales
              </motion.a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <motion.a
                href="#"
                whileHover={{ y: -2 }}
                className="text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 transition-colors"
              >
                Confidentialité
              </motion.a>
            </div>
          </div>

          {/* Section Droite - Réseaux sociaux */}
          <div className="flex justify-center md:justify-end items-center gap-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-gray-100 transition-colors shadow-sm"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </motion.a>
              );
            })}
          </div>
        </div>

        {/* Séparateur décoratif */}
        {/* <div className="mt-6 pt-6 border-t border-gray-200/50 dark:border-gray-700/50">
          <p className="flex items-center justify-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            Fait avec
            <motion.span
              animate={{ 
                scale: [1, 1.2, 1],
              }}
              transition={{ 
                duration: 1.5,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <Heart size={14} className="text-red-500 fill-red-500" />
            </motion.span>
            pour des CV professionnels
          </p>
        </div> */}
      </div>
    </motion.footer>
  );
}

export default Footer;