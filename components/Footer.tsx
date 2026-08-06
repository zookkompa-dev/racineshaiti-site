"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "Accueil", href: "#hero" },
    { label: "Chronologie", href: "#timeline" },
    { label: "Culture", href: "#culture" },
    { label: "Vidéos", href: "#videos" },
  ];

  const socialLinks = [
    { label: "YouTube", href: "https://www.youtube.com/@racinesayiti" },
    { label: "Facebook", href: "#" },
    { label: "Instagram", href: "#" },
    { label: "Twitter", href: "#" },
  ];

  return (
    <footer className="bg-haiti-dark border-t border-haiti-red/20">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-haiti-red to-haiti-blue flex items-center justify-center">
                <span className="text-white font-bold">Ⓡ</span>
              </div>
              <span className="text-lg font-serif font-bold text-white">
                Racines Haïti
              </span>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed">
              Plateforme dédiée à l'exploration et la célébration de l'histoire,
              de la culture et de l'héritage haïtien.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Navigation</h4>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-haiti-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Ressources</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-haiti-red transition-colors text-sm"
                >
                  Bibliothèque
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-haiti-red transition-colors text-sm"
                >
                  Articles
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-gray-300 hover:text-haiti-red transition-colors text-sm"
                >
                  Galerie
                </a>
              </li>
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <h4 className="text-white font-bold mb-4">Réseaux Sociaux</h4>
            <ul className="space-y-2">
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-haiti-red transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-haiti-red/20 pt-8 text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} Racines Haïti. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Dédié à la mémoire et à la célébration de la révolution haïtienne
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
