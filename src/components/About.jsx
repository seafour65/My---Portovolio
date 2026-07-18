import { motion } from "framer-motion";

export default function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center py-20 px-6 md:px-12 lg:px-20"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <p className="uppercase tracking-[6px] text-cyan-400 mb-3">
            About Me
          </p>

          <h2 className="text-5xl font-black mb-8">
            Let's Introduce Myself
          </h2>

          <p className="text-gray-400 leading-8 max-w-4xl">
            Halo! Saya adalah seorang Frontend Developer yang berfokus
            pada pembuatan website modern, responsif, dan interaktif.
            Saya senang mempelajari teknologi baru, terutama React,
            Tailwind CSS, dan JavaScript. Tujuan saya adalah membangun
            pengalaman pengguna yang menarik dengan performa yang baik.
          </p>

          {/* Statistik */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

            <div className="rounded-2xl bg-white/5 border border-cyan-400/20 p-6 hover:-translate-y-2 hover:border-cyan-400 transition">
              <h3 className="text-4xl font-bold text-cyan-400">4+</h3>
              <p className="text-gray-400 mt-2">Projects</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-cyan-400/20 p-6 hover:-translate-y-2 hover:border-cyan-400 transition">
              <h3 className="text-4xl font-bold text-cyan-400">2+</h3>
              <p className="text-gray-400 mt-2">Years Learning</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-cyan-400/20 p-6 hover:-translate-y-2 hover:border-cyan-400 transition">
              <h3 className="text-4xl font-bold text-cyan-400">10+</h3>
              <p className="text-gray-400 mt-2">Technologies</p>
            </div>

            <div className="rounded-2xl bg-white/5 border border-cyan-400/20 p-6 hover:-translate-y-2 hover:border-cyan-400 transition">
              <h3 className="text-4xl font-bold text-cyan-400">100%</h3>
              <p className="text-gray-400 mt-2">Commitment</p>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}