import { Mail } from "lucide-react";
import { motion } from "framer-motion";
import digiCardLogo from "../assets/DigiCard.png";

function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Mail, href: "mailto:cisseboston@gmail.com", label: "Email" },
  ];

  return (
    <footer className="relative mt-auto border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-950">
      <div className="container mx-auto px-4 sm:px-6 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
          
          {/* Section Gauche - DigiCard Attribution */}
          <div className="flex flex-col items-center md:items-start">
            <a
              href="https://digicard.example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 p-2 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-900 transition-colors"
            >
              <img 
                src={digiCardLogo} 
                alt="Logo DigiCard" 
                className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity"
              />
              <div>
                <div className="text-xs text-gray-500 dark:text-gray-400">Propulsé par</div>
                <div className="font-semibold text-gray-900 dark:text-white group-hover:text-[#2B5FA6] dark:group-hover:text-[#1E88E5] transition-colors">
                  DigiCard
                </div>
              </div>
            </a>
          </div>

          {/* Section Centre - Copyright & Liens */}
          <div className="text-center space-y-2">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              © {currentYear} <span className="font-medium text-gray-900 dark:text-white">Carte Visite</span>
            </p>
            <div className="flex justify-center gap-4 text-xs">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#2B5FA6] dark:hover:text-[#1E88E5] transition-colors"
              >
                Mentions légales
              </a>
              <span className="text-gray-300 dark:text-gray-700">•</span>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-[#2B5FA6] dark:hover:text-[#1E88E5] transition-colors"
              >
                Confidentialité
              </a>
            </div>
          </div>

          {/* Section Droite - Contact */}
          <div className="flex justify-center md:justify-end items-center gap-2">
            {socialLinks.map((social, index) => {
              const Icon = social.icon;
              return (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2.5 rounded-lg bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:bg-[#2B5FA6] hover:text-white dark:hover:bg-[#1E88E5] transition-colors"
                  aria-label={social.label}
                >
                  <Icon size={18} />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;