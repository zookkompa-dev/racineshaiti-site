"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "L'Histoire Cachée d'Haïti",
    description:
      "Une plongée profonde dans les racines de la révolution haïtienne et son impact global.",
  },
  {
    id: "jNQXAC9IVRw",
    title: "Culture et Traditions",
    description:
      "Découvrez les traditions vivantes qui définissent l'identité haïtienne contemporaine.",
  },
  {
    id: "9bZkp7q19f0",
    title: "Voix de la Diaspora",
    description:
      "Les histoires de Haïtiens du monde entier et leur connexion aux racines.",
  },
];

export default function VideoSection() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      id="videos"
      className="py-24 px-6 bg-white relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-haiti-dark mb-4">
            Ressources Vidéo
          </h2>
          <p className="text-gray-600 text-lg">
            Explorez notre collection de vidéos de la chaîne Racines Ayiti
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {videos.map((video) => (
            <motion.div
              key={video.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              className="group cursor-pointer"
            >
              <div className="relative rounded-lg overflow-hidden mb-4 bg-haiti-light border border-haiti-red/20 group-hover:border-haiti-red/50 transition-all duration-300 shadow-md">
                <div className="aspect-video bg-gradient-to-br from-haiti-light to-haiti-light flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-b from-haiti-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <svg
                    className="w-16 h-16 text-haiti-red opacity-60 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:scale-110"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M19.615 3.417c-3.899-3.899-10.231-3.899-14.13 0-.393.393-.393 1.029 0 1.422s1.029.393 1.422 0c3.114-3.114 8.171-3.114 11.285 0 .393.393 1.029.393 1.422 0s.393-1.029 0-1.422zM17.191 5.84c-2.764-2.764-7.255-2.764-10.019 0-.393.393-1.029.393-1.422 0s-.393-1.029 0-1.422c3.55-3.55 9.318-3.55 12.867 0 .393.393.393 1.029 0 1.422s-1.029.393-1.422 0zM12 7c-2.761 0-5 2.239-5 5s2.239 5 5 5 5-2.239 5-5-2.239-5-5-5zm0 8c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3z" />
                  </svg>
                </div>

                <motion.div
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                  className="absolute inset-0 bg-black/40 flex items-center justify-center"
                >
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-16 h-16 bg-haiti-red rounded-full flex items-center justify-center"
                  >
                    <svg
                      className="w-8 h-8 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </motion.div>
              </div>
              <h3 className="text-lg font-serif font-bold text-haiti-dark mb-2 group-hover:text-haiti-red transition-colors">
                {video.title}
              </h3>
              <p className="text-gray-600 text-sm">{video.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-16 text-center">
          <a
            href="https://www.youtube.com/@racinesayiti"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-4 bg-haiti-red text-white rounded-lg font-semibold hover:bg-haiti-red/90 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg hover:shadow-haiti-red/30"
          >
            S'abonner à Racines Ayiti
          </a>
        </div>
      </div>
    </section>
  );
}
