"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const cultureAreas = [
  {
    title: "Musique & Danse",
    description:
      "De la musique Vodou traditionnelle au Kompa moderne, la musique haïtienne est le cœur vibrant de notre culture. Le Rythm Haïtien a influencé le jazz, le reggae et le hip-hop.",
    icon: "🎵",
  },
  {
    title: "Cuisine Haïtienne",
    description:
      "Griot, djon-djon, accras - la gastronomie haïtienne mélange influences africaines, françaises et taïnos. Chaque plat raconte une histoire de résilience et de créativité.",
    icon: "🍖",
  },
  {
    title: "Arts Visuels",
    description:
      "L'art haïtien est reconnu mondialement. De la peinture naïve à l'art contemporain, les artistes haïtiens expriment leur vision unique du monde.",
    icon: "🎨",
  },
  {
    title: "Spiritualité & Traditions",
    description:
      "Le Vodou, la Santería et les pratiques spirituelles afro-caribéennes sont des éléments centraux de l'identité haïtienne, syncrétisant catholicisme et traditions ancestrales.",
    icon: "✨",
  },
  {
    title: "Littérature & Philosophie",
    description:
      "Des écrivains comme Jacques Roumain et Edwidge Danticat ont placé Haïti sur la carte littéraire mondiale, explorant l'identité, l'exil et la résilience.",
    icon: "📚",
  },
  {
    title: "Carnaval & Célébrations",
    description:
      "Le Carnaval de Port-au-Prince est une explosion de couleurs, de musique et de joie. Ces célébrations reflètent l'esprit indomptable du peuple haïtien.",
    icon: "🎭",
  },
];

export default function Culture() {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      id="culture"
      className="py-24 px-6 bg-gradient-to-b from-haiti-light via-white to-haiti-light"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-haiti-dark mb-4">
            Culture Haïtienne
          </h2>
          <p className="text-gray-600 text-lg">
            Une richesse d'expressions artistiques et de traditions vivantes
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {cultureAreas.map((area) => (
            <motion.div
              key={area.title}
              variants={itemVariants}
              whileHover={{ translateY: -8, transition: { duration: 0.3 } }}
              className="bg-white border border-haiti-red/20 rounded-lg p-8 hover:border-haiti-red/50 transition-all duration-300 group cursor-pointer shadow-md"
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">
                {area.icon}
              </div>
              <h3 className="text-2xl font-serif font-bold text-haiti-dark mb-3">
                {area.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {area.description}
              </p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 bg-gradient-to-r from-haiti-red/10 to-haiti-blue/10 rounded-lg p-8 md:p-12 border border-haiti-red/30"
        >
          <p className="text-center text-haiti-dark text-lg leading-relaxed font-serif italic">
            La culture haïtienne est un testament vivant de la résilience, de la
            créativité et de la dignité. Malgré les défis historiques, le peuple
            haïtien continue d'enrichir le monde avec ses contributions
            inestimables à la musique, l'art, la littérature et la spiritualité.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
