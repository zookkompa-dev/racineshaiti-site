"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const heroes = [
  {
    name: "Toussaint Louverture",
    role: "Fondateur de la nation",
    years: "1743-1803",
    description:
      "Né esclave, Toussaint devient le leader militaire et politique de la révolution haïtienne. Organisateur brillant et stratège militaire, il unifie les forces rebelles et proclame l'abolition de l'esclavage en 1793. Il établit la Constitution de 1801 qui fait de Saint-Domingue un État autonome français. Bien qu'emprisonné en France en 1802, son héritage demeure inébranlable.",
    achievements: [
      "Abolitionniste des esclaves",
      "Organisateur de la révolution",
      "Premier chef d'État haïtien de facto",
      "Visionnaire politique",
    ],
    image: "/images/toussaint.jpg",
  },
  {
    name: "Jean-Jacques Dessalines",
    role: "Fondateur de la République",
    years: "1758-1806",
    description:
      "Ancien esclave devenu général de l'armée de Toussaint, Dessalines poursuit la lutte après l'emprisonnement de son mentor. Commander en chef lors de la bataille finale de Vertières en 1803, il proclame l'indépendance d'Haïti le 1er janvier 1804. Premier empereur d'Haïti, il redonne à l'île son nom taïno originel. Ses actions transforment Saint-Domingue en première République noire du monde.",
    achievements: [
      "Proclaim l'indépendance haïtienne",
      "Restaure le nom 'Haïti'",
      "Remporte la bataille de Vertières",
      "Premier leader indépendant",
    ],
    image: "/images/dessalines.jpg",
  },
  {
    name: "Alexandre Pétion",
    role: "Président de la République du Sud",
    years: "1770-1818",
    description:
      "Homme de couleur libres avant la révolution, Pétion est un stratège politique qui établit la République du Sud après les guerres civiles. Démocrate convaincu, il abolit l'esclavage en 1807 dans ses terres et distribue des terres aux soldats et aux paysans. Allié de Simón Bolívar, il soutient la révolution latino-américaine. Sa vision d'une Haïti plus égalitaire influence profondément la nation.",
    achievements: [
      "Fondateur de la République du Sud",
      "Distributeur de terres",
      "Soutien des révolutions latino-américaines",
      "Visionnaire de l'égalité sociale",
    ],
    image: "/images/petion.jpg",
  },
  {
    name: "Catherine Flon",
    role: "Symbole de la liberté",
    years: "1778-1815",
    description:
      "Femme d'affaires libre de couleur, Catherine Flon est une figure méconnue mais cruciale de la révolution. Elle aurait confectionné le premier drapeau haïtien en déchirant et recousant le drapeau français tricolore, un acte symbolique d'indépendance. Femme d'influence et de courage, elle représente le rôle souvent oublié des femmes dans la lutte pour la liberté. Son histoire incarne la résistance et l'ingéniosité des Haïtiennes.",
    achievements: [
      "Créatrice du drapeau haïtien",
      "Figure féminine de la révolution",
      "Femme d'affaires indépendante",
      "Symbole d'indépendance",
    ],
    image: "/images/catherine-flon.jpg",
  },
];

export default function Heroes() {
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
      id="heroes"
      className="py-24 px-6 bg-haiti-light relative"
    >
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-6xl font-serif font-bold text-haiti-dark mb-4">
            Les 4 Héros de la Révolution
          </h2>
          <p className="text-gray-600 text-lg">
            Les visionnaires qui ont libéré Haïti et inspiré le monde
          </p>
        </motion.div>

        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="space-y-8"
        >
          {heroes.map((hero, index) => (
            <motion.div
              key={hero.name}
              variants={itemVariants}
              className={`bg-white rounded-lg overflow-hidden shadow-lg border border-haiti-red/10 hover:border-haiti-red/30 transition-all duration-300 flex ${
                index % 2 === 0 ? "flex-col md:flex-row" : "flex-col md:flex-row-reverse"
              }`}
            >
              <div className="md:w-2/5 bg-haiti-light flex items-center justify-center p-8 min-h-80 relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-haiti-red/20 to-haiti-blue/20"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-7xl mb-4">👤</div>
                    <p className="text-gray-500 text-sm">
                      Photo à ajouter: {hero.image}
                    </p>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-haiti-red to-transparent"></div>
              </div>

              <div className="md:w-3/5 p-8 md:p-12">
                <div className="flex items-start gap-4 mb-4">
                  <div>
                    <h3 className="text-3xl font-serif font-bold text-haiti-dark mb-2">
                      {hero.name}
                    </h3>
                    <div className="flex gap-4 flex-wrap">
                      <span className="inline-block px-4 py-1 rounded-full bg-haiti-red/10 text-haiti-red text-sm font-semibold">
                        {hero.role}
                      </span>
                      <span className="inline-block px-4 py-1 rounded-full bg-haiti-blue/10 text-haiti-blue text-sm font-semibold">
                        {hero.years}
                      </span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-6">
                  {hero.description}
                </p>

                <div className="border-t border-haiti-red/20 pt-6">
                  <h4 className="text-sm font-bold text-haiti-red uppercase tracking-wide mb-4">
                    Accomplissements clés
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {hero.achievements.map((achievement) => (
                      <div key={achievement} className="flex gap-2">
                        <span className="text-haiti-red font-bold flex-shrink-0">•</span>
                        <span className="text-gray-600 text-sm">{achievement}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
