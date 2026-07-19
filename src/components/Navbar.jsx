import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const menus = [
  { title: "Home", id: "home" },
  { title: "About", id: "about" },
  { title: "Projects", id: "projects" },
  { title: "Skills", id: "skills" },
  //{ title: "Experience", id: "experience" },
  { title: "Contact", id: "contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = menus.map((menu) =>
        document.getElementById(menu.id)
      );

      const scrollPosition = window.scrollY + 120;

      sections.forEach((section) => {
        if (!section) return;

        if (
          scrollPosition >= section.offsetTop &&
          scrollPosition < section.offsetTop + section.offsetHeight
        ) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);

    if (section) {
      section.scrollIntoView({
        behavior: "smooth",
      });

      setActive(id);
      setIsOpen(false);
    }
  };

  return (
    <nav className="fixed top-4 left-0 w-full z-50 px-4">

      <div
        className="
          max-w-6xl
          mx-auto
          flex
          items-center
          justify-between
          backdrop-blur-xl
          bg-white/5
          border
          border-cyan-400/20
          rounded-2xl
          px-5
          py-3
        "
      >
        {/* Logo */}
        <h1
          onClick={() => scrollToSection("home")}
          className="cursor-pointer text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
        >
          {"<Portfolio />"}
        </h1>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-8 text-sm">

          {menus.map((menu) => (

            <li
              key={menu.id}
              onClick={() => scrollToSection(menu.id)}
              className={`cursor-pointer transition duration-300 ${
                active === menu.id
                  ? "text-cyan-400"
                  : "text-gray-300 hover:text-cyan-400"
              }`}
            >
              {menu.title}
            </li>

          ))}

        </ul>

        {/* Mobile Button */}
        <button
          className="md:hidden text-cyan-400 text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>

      </div>

      {/* Mobile Menu */}
      <div
        className={`
          md:hidden
          max-w-6xl
          mx-auto
          mt-2
          overflow-hidden
          rounded-2xl
          backdrop-blur-xl
          bg-white/5
          border
          border-cyan-400/20
          transition-all
          duration-300
          ${
            isOpen
              ? "max-h-96 opacity-100"
              : "max-h-0 opacity-0 border-0"
          }
        `}
      >
        {menus.map((menu) => (

          <button
            key={menu.id}
            onClick={() => scrollToSection(menu.id)}
            className={`block w-full text-left px-6 py-4 transition ${
              active === menu.id
                ? "text-cyan-400 bg-cyan-400/10"
                : "text-gray-300 hover:bg-cyan-400/10 hover:text-cyan-400"
            }`}
          >
            {menu.title}
          </button>

        ))}
      </div>

    </nav>
  );
}