import { motion } from "framer-motion";

const projects = [
  {
    title: "Portfolio Modern",
    description:
      "Website portfolio modern dengan desain cyber menggunakan React dan Tailwind CSS.",
    tech: ["React", "Tailwind", "Framer Motion"],
    image: "/project1.png",
  },
  {
    title: "POS Sederhana",
    description:
      "Aplikasi point of sale sederhana yang dibuat menggunakan CodeIgniter.",
    tech: ["CodeIgniter", "MySQL"],
    image: "/project2.png",
  },
  {
    title: "toko bunga online",
    description:
      "Website toko bunga online yang responsif dan mudah digunakan.",
    tech: ["CodeIgniter", "css", "Bootstrap", "MySQL"],
    image: "/project3.png",
  },
];

export default function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen py-24 px-6"
    >
      <div className="max-w-7xl mx-auto">

        {/* Judul */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-cyan-400">
            My Projects
          </p>

          <h2 className="text-5xl font-black mt-3">
            Featured Projects
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Berikut beberapa project yang pernah saya kerjakan menggunakan
            React, Tailwind CSS, Laravel, dan teknologi modern lainnya.
          </p>

        </div>

        {/* Card */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="
                rounded-3xl
                overflow-hidden
                border border-cyan-400/20
                bg-white/5
                backdrop-blur-md
                hover:border-cyan-400
                transition-all
              "
            >

              {/* Image */}
              <div className="overflow-hidden">

                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover hover:scale-110 transition duration-500"
                />

              </div>

              {/* Content */}
              <div className="p-6">

                <h3 className="text-2xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-6">

                  {project.tech.map((item) => (

                    <span
                      key={item}
                      className="
                        px-3
                        py-1
                        rounded-full
                        bg-cyan-500/10
                        text-cyan-300
                        text-sm
                      "
                    >
                      {item}
                    </span>

                  ))}

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}