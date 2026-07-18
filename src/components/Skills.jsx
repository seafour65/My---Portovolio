import { motion } from "framer-motion";
import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaGitAlt,
  FaDatabase,
  FaMicrosoft,
} from "react-icons/fa";
import { SiTailwindcss, SiLaravel } from "react-icons/si";

const skills = [
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-4xl" />,
    level: 80,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="text-cyan-400 text-4xl" />,
    level: 95,
  },
  {
    name: "JavaScript",
    icon: <FaJs className="text-yellow-400 text-4xl" />,
    level: 85,
  },
  {
    name: "Laravel",
    icon: <SiLaravel className="text-red-400 text-4xl" />,
    level: 50,
  },
  {
    name: "HTML",
    icon: <FaHtml5 className="text-orange-500 text-4xl" />,
    level: 95,
  },
  {
    name: "Bootstrap",
    icon: <FaCss3Alt className="text-blue-500 text-4xl" />,
    level: 90,
  },
  {
    name: "Git",
    icon: <FaGitAlt className="text-orange-400 text-4xl" />,
    level: 75,
  },
   {
    name: "mysql",
    icon: <FaDatabase className="text-cyan-400 text-4xl" />,
    level: 90,
  },
   {
    name: "microsoft office",
    icon: <FaMicrosoft className="text-cyan-400 text-4xl" />,
    level: 95,
  },
];
export default function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen py-24 px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        <div className="text-center mb-16">
          <p className="uppercase tracking-[6px] text-cyan-400">
            My Skills
          </p>

          <h2 className="text-5xl font-black mt-4">
            Technologies I Use
          </h2>

          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Beberapa teknologi yang saya gunakan untuk membangun website modern,
            responsif, dan interaktif.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {skills.map((skill, index) => (

            <motion.div
              key={index}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{ duration: 0.3 }}
              className="
                bg-white/5
                border
                border-white/10
                rounded-3xl
                p-6
                backdrop-blur-xl
                hover:border-cyan-400/40
                transition-all
              "
            >

              <div className="flex items-center gap-4 mb-6">

                {skill.icon}

                <div>
                  <h3 className="font-bold text-xl">
                    {skill.name}
                  </h3>

                  <p className="text-gray-400 text-sm">
                    {skill.level}% Proficiency
                  </p>
                </div>

              </div>

              <div className="w-full h-3 rounded-full bg-white/10 overflow-hidden">

                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{
                    width: `${skill.level}%`,
                  }}
                  transition={{
                    duration: 1,
                  }}
                  viewport={{ once: true }}
                  className="h-full rounded-full bg-cyan-400"
                />

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
    );          
}