import { Download, Mail, FileText, Phone, Check } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { jsPDF } from "jspdf";
import { motion } from "framer-motion";
import { useState } from "react";

function BusinessCard({ person }) {
  const navigate = useNavigate();
  const [emailCopied, setEmailCopied] = useState(false);
  
  const downloadPDFCard = async () => {
    const pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [54, 85.6],
    });

    pdf.setFillColor(255, 255, 255);
    pdf.rect(0, 0, 85.6, 54, "F");
    
    pdf.setFillColor(96, 165, 250);
    pdf.rect(0, 0, 3, 54, "F");

    const addContentAndSave = async () => {
      if (person.photo) {
        try {
          const photoImg = new Image();
          photoImg.crossOrigin = "anonymous";
          photoImg.src = person.photo;
          
          await new Promise((resolve, reject) => {
            photoImg.onload = () => {
              const canvas = document.createElement('canvas');
              const size = 200;
              canvas.width = size;
              canvas.height = size;
              const ctx = canvas.getContext('2d');
              
              ctx.beginPath();
              ctx.arc(size/2, size/2, size/2, 0, Math.PI * 2);
              ctx.closePath();
              ctx.clip();
              ctx.drawImage(photoImg, 0, 0, size, size);
              
              const circularPhoto = canvas.toDataURL('image/png');
              pdf.addImage(circularPhoto, "PNG", 6, 6, 18, 18);
              resolve();
            };
            photoImg.onerror = reject;
          });
        } catch (err) {
          console.error("Erreur chargement photo:", err);
        }
      }

      pdf.setTextColor(30, 58, 138);
      pdf.setFontSize(14);
      pdf.setFont(undefined, "bold");
      pdf.text(`${person.firstName} ${person.lastName}`, 27, 12);

      pdf.setDrawColor(96, 165, 250);
      pdf.setLineWidth(0.5);
      pdf.line(27, 14, 60, 14);

      pdf.setFontSize(9);
      pdf.setFont(undefined, "normal");
      pdf.setTextColor(71, 85, 105);
      pdf.text(person.title, 27, 19);

      pdf.setFontSize(8);
      pdf.setTextColor(100, 116, 139);
      pdf.text(person.company, 27, 24);

      pdf.setFontSize(7);
      pdf.setTextColor(96, 165, 250);
      pdf.text("✉", 6, 32);
      pdf.setTextColor(51, 65, 85);
      pdf.text(person.email, 10, 32);

      if (person.phone) {
        pdf.setTextColor(96, 165, 250);
        pdf.text("☎", 6, 37);
        pdf.setTextColor(51, 65, 85);
        pdf.text(person.phone, 10, 37);
      }

      if (person.cvUrl) {
        try {
          const QRCodeLib = window.QRCode || (await import('qrcode'));
          const canvas = document.createElement('canvas');
          
          if (QRCodeLib.toCanvas) {
            await QRCodeLib.toCanvas(canvas, person.cvUrl, {
              width: 200,
              margin: 1,
              color: {
                dark: '#1e40af',
                light: '#ffffff'
              }
            });
          } else {
            await new Promise((resolve) => {
              new window.QRCode(canvas, {
                text: person.cvUrl,
                width: 200,
                height: 200,
                colorDark: '#1e40af',
                colorLight: '#ffffff'
              });
              setTimeout(resolve, 100);
            });
          }
          
          const qrDataUrl = canvas.toDataURL('image/png');
          
          pdf.setFillColor(248, 250, 252);
          pdf.roundedRect(63, 32, 18, 18, 1, 1, "F");
          pdf.addImage(qrDataUrl, "PNG", 64, 33, 16, 16);
          
          pdf.setFontSize(5);
          pdf.setTextColor(100, 116, 139);
          pdf.text("Voir CV", 69, 51.5);
        } catch (err) {
          console.error('Erreur génération QR:', err);
        }
      }

      if (person.companyLogo) {
        try {
          const logoImg = new Image();
          logoImg.crossOrigin = "anonymous";
          logoImg.src = person.companyLogo;
          
          await new Promise((resolve, reject) => {
            logoImg.onload = () => {
              pdf.addImage(logoImg, "PNG", 70, 3, 12, 12);
              resolve();
            };
            logoImg.onerror = reject;
          });
        } catch (err) {
          console.error("Erreur chargement logo:", err);
        }
      }

      pdf.setDrawColor(191, 219, 254);
      pdf.setLineWidth(0.3);
      pdf.rect(0.5, 0.5, 84.6, 53, "S");

      pdf.save(`${person.firstName}_${person.lastName}_Card.pdf`);
    };

    await addContentAndSave();
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    
    // Essayer d'ouvrir le client mail
    window.location.href = `mailto:${person.email}`;
    
    // Fallback : copier dans le presse-papier
    setTimeout(() => {
      navigator.clipboard.writeText(person.email).then(() => {
        setEmailCopied(true);
        setTimeout(() => setEmailCopied(false), 2000);
      }).catch(err => {
        console.error('Erreur copie email:', err);
      });
    }, 500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="relative max-w-3xl mx-auto"
    >
      {/* Ombre élégante et subtile */}
      <div className="absolute -inset-1 bg-gradient-to-b from-gray-200/50 to-gray-300/50 dark:from-gray-700/30 dark:to-gray-800/30 rounded-[2rem] blur-xl"></div>
      
      <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200/80 dark:border-gray-700/80">
        
        {/* En-tête minimaliste et élégant */}
        <div className="relative bg-gradient-to-br from-slate-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 p-8 border-b border-gray-200 dark:border-gray-700">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
            
            {/* Photo professionnelle avec cadre fin */}
            <motion.div 
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
              className="relative flex-shrink-0"
            >
              <img
                src={person.photo}
                alt="photo"
                className="w-28 h-28 sm:w-32 sm:h-32 rounded-xl object-cover ring-1 ring-gray-300 dark:ring-gray-600 shadow-md"
              />
            </motion.div>

            {/* Informations principales */}
            <div className="flex-1 text-center sm:text-left min-w-0">
              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-gray-900 dark:text-gray-100 mb-2 tracking-tight">
                {person.firstName} {person.lastName}
              </h1>
              
              <p className="text-base text-gray-600 dark:text-gray-400 font-light mb-4">
                {person.title}
              </p>
              
              {/* Entreprise avec logo */}
              <div className="flex items-center justify-center sm:justify-start gap-3">
                <img
                  src={person.companyLogo}
                  alt="logo"
                  className="w-10 h-10 rounded-lg object-cover bg-white p-1 shadow-sm ring-1 ring-gray-200 dark:ring-gray-700"
                />
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                  {person.company}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Informations de contact - Design épuré */}
        <div className="p-8 space-y-4">
          <motion.div
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href={`mailto:${person.email}`}
              onClick={handleEmailClick}
              className="group flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200/50 dark:border-gray-700/50"
            >
              <div className="p-2.5 bg-white dark:bg-gray-700 rounded-lg shadow-sm group-hover:shadow transition-shadow">
                {emailCopied ? (
                  <Check size={20} className="text-green-600 dark:text-green-400" />
                ) : (
                  <Mail size={20} className="text-gray-700 dark:text-gray-300" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">
                  {emailCopied ? "Email copié !" : "Email"}
                </div>
                <div className="text-sm text-gray-900 dark:text-gray-100 truncate">{person.email}</div>
              </div>
            </a>
          </motion.div>

          <motion.div
            whileHover={{ x: 2 }}
            transition={{ duration: 0.2 }}
            className="group flex items-center gap-4 p-4 rounded-lg bg-gray-50 dark:bg-gray-800/50 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors border border-gray-200/50 dark:border-gray-700/50"
          >
            <div className="p-2.5 bg-white dark:bg-gray-700 rounded-lg shadow-sm group-hover:shadow transition-shadow">
              <Phone size={20} className="text-gray-700 dark:text-gray-300" />
            </div>
            <div className="flex-1">
              <div className="text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-0.5">Téléphone</div>
              <div className="text-sm text-gray-900 dark:text-gray-100">{person.phone}</div>
            </div>
          </motion.div>
        </div>

        {/* Séparateur élégant */}
        <div className="px-8">
          <div className="h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        </div>

        {/* Boutons d'action - Style classique */}
        <div className="p-8 pt-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={() => navigate("/cv")}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-gray-900 dark:bg-white text-white dark:text-gray-900 hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors font-medium shadow-sm"
            >
              <FileText size={18} />
              <span>Voir le CV</span>
            </motion.button>

            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={downloadPDFCard}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium shadow-sm border border-gray-300 dark:border-gray-600"
            >
              <Download size={18} />
              <span>Télécharger</span>
            </motion.button>

            {/* <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={handleEmailClick}
              className="flex items-center justify-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors font-medium shadow-sm border border-gray-300 dark:border-gray-600"
            >
              {emailCopied ? <Check size={18} /> : <Mail size={18} />}
              <span>{emailCopied ? "Copié !" : "Contact"}</span>
            </motion.button> */}
          </div>
        </div>

        {/* Accent minimaliste en bas */}
        <div className="h-1 bg-gradient-to-r from-gray-300 via-gray-400 to-gray-300 dark:from-gray-700 dark:via-gray-600 dark:to-gray-700"></div>
      </div>
    </motion.div>
  );
}

export default BusinessCard;