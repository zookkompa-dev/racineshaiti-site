"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function Hero() {
  const { ref, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section
      ref={ref}
      id="hero"
      className="min-h-screen bg-gradient-to-b from-haiti-cream via-white to-haiti-light flex items-center justify-center px-6 pt-20"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="max-w-4xl text-center"
      >
        <motion.div
          variants={itemVariants}
          className="inline-block mb-6 px-4 py-2 rounded-full border border-haiti-red/50 bg-haiti-red/10"
        >
          <span className="text-haiti-red text-sm font-medium">
            Découvrez Notre Histoire
          </span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-5xl md:text-7xl font-serif font-bold text-haiti-dark mb-6 leading-tight"
        >
          Les Racines Profondes d'Haïti
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed"
        >
          Une nation née de la résilience, forged through revolution, and rooted
          in African heritage. Explorez cinq siècles d'histoire, de luttes, de
          triomphes et de transformation culturelle.
        </motion.p>

        <motion.div
          variants={itemVariants}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#timeline"
            className="px-8 py-4 bg-gradient-to-r from-haiti-red to-haiti-red text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-haiti-red/30 transition-all duration-300 transform hover:-translate-y-1"
          >
            Explorer la Chronologie
          </a>
          <a
            href="#videos"
            className="px-8 py-4 border-2 border-haiti-blue text-haiti-blue bg-white rounded-lg font-semibold hover:bg-haiti-blue/5 transition-all duration-300"
          >
            Regarder les Vidéos
          </a>
        </motion.div>

        <motion.div
          variants={itemVariants}
          className="mt-16 flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-haiti-red to-haiti-blue rounded-lg blur opacity-20 animate-glow"></div>
            <div className="relative bg-white p-8 rounded-lg border border-haiti-red/20 shadow-lg">
              <p className="text-haiti-dark italic text-lg font-serif">
                "La liberté ou la mort" — Devises historiques
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
