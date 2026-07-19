import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/30 backdrop-blur-xl">

      <div className="max-w-7xl mx-auto px-6 py-14">

        {/* Logo */}
        <div className="text-center">

          <h2 className="text-3xl font-black bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Muhamad Saefurohman Alfaed
          </h2>

          <p className="mt-3 text-gray-400">
            Frontend Developer
          </p>

          <p className="mt-5 max-w-xl mx-auto leading-7 text-gray-500">
            Saya membangun website modern, responsif, dan interaktif
            menggunakan React, Tailwind CSS, dan JavaScript.
          </p>

        </div>

        {/* Social */}
        <div className="flex justify-center gap-6 mt-10">

          {/* <a
            href="#"
            className="
              w-12
              h-12
              rounded-full
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:border-cyan-400
              hover:text-cyan-400
              transition-all
              duration-300
            "
          >
            <FaGithub size={22} />
          </a> */}

          <a
            href="#"
            className="
              w-12
              h-12
              rounded-full
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:border-cyan-400
              hover:text-cyan-400
              transition-all
              duration-300
            "
          >
            <FaLinkedin size={22} />
          </a>

          <a
            href="#"
            className="
              w-12
              h-12
              rounded-full
              bg-white/5
              border
              border-white/10
              flex
              items-center
              justify-center
              hover:border-cyan-400
              hover:text-cyan-400
              transition-all
              duration-300
            "
          >
            <FaEnvelope size={22} />
          </a>

        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">

          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Saefurohman. All Rights Reserved.
          </p>

        </div>

      </div>

    </footer>
  );
}