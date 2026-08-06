"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const timelineEvents = [
  {
    year: "1492",
    title: "Arrivée de Christophe Colomb",
    description:
      "L'arrivée de Christophe Colomb en 1492 marque le début de la colonisation. L'île, appellée Ayiti (terre haute) par les Taïnos, sera rebaptisée Hispaniola par les Espagnols.",
  },
  {
    year: "1697",
    title: "Traité de Ryswick",
    description:
      "La France reçoit la partie occidentale de l'île. Saint-Domingue devient l'une des colonies les plus riches du monde grâce à l'exploitation du sucre et du café.",
  },
  {
    year: "1791",
    title: "Révolution Haïtienne",
    description:
      "Débute la plus grande insurrection d'esclaves de l'histoire. Des leaders comme Toussaint Louverture incarnent la lutte pour la liberté et l'égalité.",
  },
  {
    year: "1804",
    title: "Indépendance d'Haïti",
    description:
      "Haïti devient la première nation noire indépendante du monde et la deuxième nation indépendante des Amériques après les États-Unis.",
  },
  {
    year: "1915-1934",
    title: "Occupation Américaine",
    description:
      "Les États-Unis occupent Haïti pendant 19 ans, période marquée par des tensions politiques et culturelles mais aussi des développements infrastructurels.",
  },
  {
    year: "2010",
    title: "Tremblement de Terre",
    description:
      "Un séisme de magnitude 7.0 dévaste Port-au-Prince. La nation montre sa résilience à travers les efforts de reconstruction et la solidarité internationale.",
  },
];

export default function Timeline() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  return (
    <section
      ref={ref}
      id="timeline"
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
            Chronologie Historique
          </h2>
          <p className="text-gray-600 text-lg">
            Les moments clés qui ont façonné le destin d'Haïti
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-haiti-red to-transparent"></div>

          <div className="space-y-12">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row gap-8 items-center ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                <div className="md:w-1/2">
                  <div className="bg-haiti-light border border-haiti-red/20 rounded-lg p-8 hover:border-haiti-red/50 transition-all duration-300 shadow-md">
                    <span className="text-haiti-red font-bold text-lg">
                      {event.year}
                    </span>
                    <h3 className="text-2xl font-serif font-bold text-haiti-dark mt-2 mb-3">
                      {event.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {event.description}
                    </p>
                  </div>
                </div>

                <div className="md:w-0 flex justify-center">
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                    className="w-4 h-4 bg-haiti-red rounded-full border-4 border-white relative z-10"
                  ></motion.div>
                </div>

                <div className="md:w-1/2"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
