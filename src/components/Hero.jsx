import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import CodeBackground from "./CodeBackground";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden px-6"
    >
      <CodeBackground />

      <div className="relative z-10 max-w-7xl mx-auto w-full px-6 lg:px-16">
  <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">

        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="max-w-xl justify-self-start lg:pl-8"
        >
          <p className="uppercase tracking-[8px] text-cyan-400 text-sm">
            Hello I'm
          </p>

          <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black leading-tight bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent">
            Muhammad Saefurohman Alfaed
          </h1>

          <div className="text-lg sm:text-xl md:text-2xl">
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                2000,
                "React Developer",
                2000,
                "coding enthusiast",
                2000,
              ]}
              repeat={Infinity}
            />
          </div>

          <p className="mt-6 max-w-xl text-gray-400 leading-8 text-sm sm:text-base">
            Saya membuat website modern, cepat, responsif,
            dan interaktif menggunakan React, Tailwind CSS,
            serta JavaScript.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <button className="px-8 py-4 rounded-full bg-cyan-400 text-black font-bold hover:scale-105 transition">
              Explore
            </button>

            <button className="px-8 py-4 rounded-full border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black transition">
              Contact
            </button>
          </div>
        </motion.div>

        {/* RIGHT */}
<motion.div
  initial={{ opacity: 0, x: 80 }}
  animate={{
    opacity: 1,
    x: 0,
    y: [0, -8, 0],
  }}
  transition={{
    opacity: { duration: 1 },
    x: { duration: 1 },
    y: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  }}
  className="flex justify-center lg:justify-start"
>

  <div className="relative lg:ml-10">

    {/* Glow */}
    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-3xl scale-125" />

    {/* Border Glow */}
    <div className="relative p-1 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500">

      <img
  src="/profile.png"
  alt="Profile"
  className="
w-36
h-36
sm:w-44
sm:h-44
md:w-52
md:h-52
object-cover
rounded-full
"
/>

    </div>

  </div>
</motion.div>

      </div>
      </div>
    </section>
  );
}