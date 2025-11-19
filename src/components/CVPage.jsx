/* eslint-disable no-unused-vars */
import { motion } from "framer-motion";
import {
  Download,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  GraduationCap,
  Award,
  Globe,
} from "lucide-react";

function CVPage({ person }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-5xl mx-auto"
    >
      {/* Header Section avec dégradé */}
      <div className="relative bg-linear-to-br from-blue-600 via-blue-700 to-indigo-800 rounded-3xl shadow-2xl overflow-hidden mb-6">
        {/* Pattern de fond subtil */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`,
              backgroundSize: "32px 32px",
            }}
          ></div>
        </div>

        <div className="relative p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            {/* Photo avec effet premium */}
            <div className="relative group">
              <div className="absolute -inset-1 bg-linear-to-r from-blue-300 to-indigo-300 rounded-2xl blur opacity-75 group-hover:opacity-100 transition duration-300"></div>
              <img
                src={person.photo}
                alt="photo"
                className="relative w-36 h-36 rounded-2xl object-cover ring-4 ring-white/20 shadow-xl"
              />
            </div>

            {/* Informations principales */}
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-2 tracking-tight">
                {person.firstName}{" "}
                <span className="font-light">{person.lastName}</span>
              </h1>
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-4">
                <Briefcase size={16} className="text-blue-100" />
                <p className="text-blue-50 font-medium">{person.title}</p>
              </div>
              <p className="text-blue-100 text-lg mb-6">{person.company}</p>

              {/* Contact info avec icônes */}
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm">
                <a
                  href={`mailto:${person.email}`}
                  className="flex items-center gap-2 text-white/90 hover:text-white transition bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg hover:bg-white/20"
                >
                  <Mail size={16} />
                  <span>{person.email}</span>
                </a>
                <div className="flex items-center gap-2 text-white/90 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                  <Phone size={16} />
                  <span>{person.phone}</span>
                </div>
                <a
                  href="Anta_CISSE.pdf" // Assurez-vous que cvUrl pointe vers /assets/Anta_CISSE.pdf
                  download = "Anta_CISSE.pdf"
                  className="flex items-center gap-2 bg-white text-blue-700 font-semibold px-5 py-2 rounded-lg hover:bg-blue-50 transition shadow-lg hover:shadow-xl"
                >
                  <Download size={16} />
                  <span>Télécharger CV</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Corps du CV */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Sidebar */}
        <aside className="lg:col-span-1 space-y-6">
          {/* Compétences */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Award className="text-blue-600 dark:text-blue-400" size={20} />
              </div>
              <h3 className="font-bold text-lg">Compétences Clés</h3>
            </div>
            <ul className="space-y-3 text-sm">
              {[
                "Gestion administrative & sociale",
                "Traitement de la paie (Sage, Mali Paie)",
                "Recrutement & gestion des carrières",
                "Relations sociales & conflits",
                "Pack Office complet",
                "Rigueur & sens de l'écoute",
              ].map((skill, i) => (
                <li
                  key={i}
                  className="flex items-start gap-2 text-gray-600 dark:text-gray-300"
                >
                  <span className="text-blue-500 mt-1">●</span>
                  <span>{skill}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Langues */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-lg">
                <Globe
                  className="text-green-600 dark:text-green-400"
                  size={20}
                />
              </div>
              <h3 className="font-bold text-lg">Langues</h3>
            </div>
            <div className="space-y-3 text-sm">
              {[
                { lang: "Français", level: "Très bien", width: "95%" },
                { lang: "Bambara", level: "Très bien", width: "95%" },
                { lang: "Anglais", level: "Passable", width: "50%" },
              ].map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-1 text-gray-700 dark:text-gray-300">
                    <span className="font-medium">{item.lang}</span>
                    <span className="text-xs text-gray-500">{item.level}</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-linear-to-r from-blue-500 to-blue-600 rounded-full transition-all duration-1000"
                      style={{ width: item.width }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Centres d'intérêt */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-linear-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-2xl shadow-lg p-6 border border-purple-100 dark:border-purple-800"
          >
            <h3 className="font-bold text-lg mb-3">Centres d'Intérêt</h3>
            <div className="flex gap-4 text-2xl">
              <span title="Lecture">📚</span>
              <span title="Voyage">✈️</span>
            </div>
          </motion.div>
        </aside>

        {/* Contenu principal */}
        <section className="lg:col-span-2 space-y-6">
          {/* Expérience */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
                <Briefcase
                  className="text-blue-600 dark:text-blue-400"
                  size={22}
                />
              </div>
              <h2 className="font-bold text-2xl">Expérience Professionnelle</h2>
            </div>

            <div className="space-y-6 relative before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-linear-to-b before:from-blue-400 before:to-blue-200 dark:before:from-blue-600 dark:before:to-blue-800">
              {[
                {
                  title: "Responsable RH & Paie",
                  company: "Bintou Emploi Services",
                  period: "Août 2023 — Aujourd'hui",
                  current: true,
                  tasks: [
                    "Traitement de la paie via Mali Paie (clients : SNIAF et Arc en Terre)",
                    "Suivi et gestion des pointages des agents",
                    "Élaboration des bulletins de paie",
                    "Gestion administrative du personnel",
                  ],
                },
                {
                  title: "Responsable RH",
                  company: "Ecosup'Alternance",
                  period: "Juillet 2022 — Juillet 2023",
                  tasks: [
                    "Élaboration des états de salaires et contrats de travail",
                    "Suivi administratif et social du personnel",
                    "Gestion des emplois du temps et des heures des professeurs",
                  ],
                },
                {
                  title: "Responsable RH & Administrative",
                  company: "EGF Mali",
                  period: "Juin 2020 — Mai 2022",
                  tasks: [
                    "Gestion du personnel et des contrats",
                    "Suivi des dossiers clients (CIMAF, CMM, DIAMOND)",
                    "Gestion des relations clients et suivi administratif/fiscal",
                  ],
                },
                {
                  title: "Responsable RH",
                  company: "MATRANS",
                  period: "Janvier 2017 — Mars 2020",
                  tasks: [
                    "Supervision des recrutements et gestion du personnel",
                    "Élaboration des contrats de travail et bulletins de paie",
                    "Déclarations sociales, congés, absences et accidents de travail",
                    "Gestion des conflits et relations avec les autorités",
                  ],
                },
                {
                  title: "Assistante RH",
                  company: "MATRANS SARL",
                  period: "Juin 2016 — Décembre 2016",
                  tasks: [
                    "Suivi du parc et gestion des chauffeurs",
                    "Contrôle des prises de carburant et contrats",
                    "Rapports opérationnels à la direction",
                  ],
                },
              ].map((job, i) => (
                <div key={i} className="relative pl-8 pb-6 last:pb-0">
                  <div
                    className={`absolute left-0 w-6 h-6 rounded-full border-4 ${
                      job.current
                        ? "bg-blue-500 border-blue-200 dark:border-blue-800 shadow-lg shadow-blue-500/50"
                        : "bg-white dark:bg-gray-800 border-gray-300 dark:border-gray-600"
                    }`}
                  ></div>
                  <div className="group">
                    <div className="flex items-start justify-between mb-2 flex-wrap gap-2">
                      <div>
                        <h3 className="font-bold text-lg text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition">
                          {job.title}
                        </h3>
                        <p className="text-blue-600 dark:text-blue-400 font-medium">
                          {job.company}
                        </p>
                      </div>
                      <span
                        className={`text-xs px-3 py-1 rounded-full font-medium ${
                          job.current
                            ? "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400"
                            : "bg-gray-100 text-gray-600 dark:bg-gray-700 dark:text-gray-400"
                        }`}
                      >
                        {job.period}
                      </span>
                    </div>
                    <ul className="space-y-2 text-sm text-gray-600 dark:text-gray-300 mt-3">
                      {job.tasks.map((task, j) => (
                        <li key={j} className="flex items-start gap-2">
                          <span className="text-blue-400 mt-1 text-xs">▸</span>
                          <span>{task}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 md:p-8 border border-gray-100 dark:border-gray-700"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-purple-100 dark:bg-purple-900/30 rounded-lg">
                <GraduationCap
                  className="text-purple-600 dark:text-purple-400"
                  size={22}
                />
              </div>
              <h2 className="font-bold text-2xl">Formation Académique</h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  degree: "Licence en Gestion des Ressources Humaines",
                  school: "UFP",
                  year: "2013 - 2016",
                },
                {
                  degree: "Licence en Sciences de l'Éducation",
                  school: "FSHSE",
                  year: "2014 - 2015",
                },
                {
                  degree: "DEUG en Sciences de l'Éducation",
                  school: "FSHSE",
                  year: "2012 - 2014",
                },
                {
                  degree: "Baccalauréat LLT",
                  school: "Lycée La Lanterne, Bamako",
                  year: "2012",
                },
              ].map((edu, i) => (
                <div
                  key={i}
                  className="flex gap-4 p-4 rounded-xl hover:bg-gray-50 dark:hover:bg-gray-700/50 transition group"
                >
                  <div className="shrink-0 w-12 h-12 bg-linear-to-br from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 rounded-lg flex items-center justify-center group-hover:scale-110 transition">
                    <GraduationCap
                      className="text-purple-600 dark:text-purple-400"
                      size={20}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-gray-900 dark:text-white">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {edu.school}
                    </p>
                    <p className="text-xs text-blue-600 dark:text-blue-400 mt-1">
                      {edu.year}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Formations complémentaires */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-linear-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 rounded-2xl shadow-lg p-6 border border-amber-100 dark:border-amber-800"
          >
            <h2 className="font-bold text-xl mb-4 flex items-center gap-2">
              <Award className="text-amber-600 dark:text-amber-400" size={20} />
              Formations & Stages
            </h2>
            <div className="space-y-3 text-sm">
              <div className="flex gap-3">
                <span className="font-bold text-amber-600 dark:text-amber-400 shrink-0">
                  2022
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Formation – Code de la prévoyance sociale
                </span>
              </div>
              <div className="flex gap-3">
                <span className="font-bold text-amber-600 dark:text-amber-400 shrink-0">
                  2016
                </span>
                <span className="text-gray-700 dark:text-gray-300">
                  Stage de 3 mois à la Direction des Ressources Humaines du
                  Ministère de l'Éducation de Base
                </span>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </motion.div>
  );
}

export default CVPage;
