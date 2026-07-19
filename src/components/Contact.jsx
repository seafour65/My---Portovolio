import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaWhatsapp,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";

export default function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen py-24 px-6 scroll-mt-24"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-16">

          <p className="uppercase tracking-[6px] text-cyan-400">
            Contact
          </p>

          <h2 className="text-5xl font-black mt-4">
            Get In Touch
          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl mx-auto">
            Tertarik bekerja sama atau ingin berdiskusi?
            Jangan ragu untuk menghubungi saya.
          </p>

        </div>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-5"
          >

            {[
              {
                icon: <FaEnvelope />,
                title: "Email",
                value: "saefurohman65@gmail.com",
              },
              {
                icon: <FaWhatsapp />,
                title: "WhatsApp",
                value: "+62 8953 7230 7888",
              },
              {
                icon: <FaLinkedin />,
                title: "LinkedIn",
                value: "linkedin.com/in/saefurohman",
              },            
            ].map((item, index) => (

              <div
                key={index}
                className="
                flex
                items-center
                gap-5
                bg-white/5
                border
                border-white/10
                rounded-2xl
                p-5
                hover:border-cyan-400/40
                transition
                "
              >

                <div className="w-14 h-14 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 text-2xl">
                  {item.icon}
                </div>

                <div>

                  <h3 className="font-bold">
                    {item.title}
                  </h3>

                  <p className="text-gray-400">
                    {item.value}
                  </p>

                </div>

              </div>

            ))}

          </motion.div>

          {/* RIGHT */}
          <motion.form
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="
            bg-white/5
            border
            border-white/10
            rounded-3xl
            p-8
            backdrop-blur-xl
            "
          >

            <div className="space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="
                w-full
                bg-transparent
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                outline-none
                focus:border-cyan-400
                transition
                "
              />

              <input
                type="email"
                placeholder="Your Email"
                className="
                w-full
                bg-transparent
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                outline-none
                focus:border-cyan-400
                transition
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                w-full
                bg-transparent
                border
                border-white/10
                rounded-xl
                px-5
                py-4
                outline-none
                resize-none
                focus:border-cyan-400
                transition
                "
              />

              <button
                className="
                w-full
                py-4
                rounded-xl
                bg-cyan-400
                text-black
                font-bold
                hover:scale-105
                transition
                "
              >
                Send Message
              </button>

            </div>

          </motion.form>

        </div>

      </div>
    </section>
  );
}