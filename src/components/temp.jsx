import { motion } from "framer-motion";

const experiences = [
  {
    year: "2025 - Sekarang",
    title: "Frontend Developer",
    description:
      "Mempelajari React, Tailwind CSS, Framer Motion, serta membangun berbagai website modern.",
  },
  {
    year: "2024",
    title: "Belajar JavaScript",
    description:
      "Mendalami JavaScript dan mulai mengembangkan aplikasi web sederhana.",
  },
  {
    year: "2023",
    title: "Mulai Dunia Web Development",
    description:
      "Belajar dasar HTML, CSS, dan membangun website pertama.",
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="min-h-screen py-24 px-6 scroll-mt-24"
    >
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400">
            My Journey
          </p>

          <h2 className="text-5xl font-black mt-4">
            Experience
          </h2>
        </div>

        <div className="relative border-l-2 border-cyan-400/30 ml-4">

          {experiences.map((item, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 ml-10 relative"
            >

              <div className="absolute -left-[48px] top-2 w-5 h-5 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.7)]"></div>

              <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:border-cyan-400/40 transition">

                <p className="text-cyan-400 text-sm">
                  {item.year}
                </p>

                <h3 className="text-2xl font-bold mt-2">
                  {item.title}
                </h3>

                <p className="text-gray-400 mt-3 leading-7">
                  {item.description}
                </p>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}