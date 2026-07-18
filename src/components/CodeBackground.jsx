import { motion } from "framer-motion";

const symbols = [
  "</>",
  "{}",
  "[]",
  "()",
  "const",
  "let",
  "React",
  "JS",
  "CSS",
  "HTML",
  "=>",
];

export default function CodeBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden -z-10">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,#0f172a,#020617,#000)]" />

      {/* Neon Glow */}
      <div className="absolute top-[-200px] left-[-200px] w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[180px]" />

      <div className="absolute bottom-[-200px] right-[-200px] w-[600px] h-[600px] bg-purple-500/20 rounded-full blur-[180px]" />

      {/* Vertical Lines */}
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="absolute top-0 h-full w-[1px] bg-cyan-400/10"
          style={{
            left: `${i * 5}%`,
            boxShadow: "0 0 10px rgba(34,211,238,0.5)",
          }}
        />
      ))}

      {/* Floating Code */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ y: "-100%" }}
          animate={{ y: "120vh" }}
          transition={{
            duration: 5 + (i % 10),
            repeat: Infinity,
            ease: "linear",
            delay: i * 0.2,
          }}
          className="absolute text-cyan-400/30 font-bold"
          style={{
            left: `${(i * 2) % 100}%`,
            fontSize: `${14 + (i % 5) * 4}px`,
            textShadow: "0 0 10px #22d3ee",
          }}
        >
          {symbols[i % symbols.length]}
        </motion.div>
      ))}

    </div>
  );
}