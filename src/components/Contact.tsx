import { useState, useRef } from "react";
import { motion, Variants } from "motion/react";
import { Mail, Phone, Github, Linkedin } from "lucide-react";
import SectionWrapper from "../hoc/SectionWrapper";

const slideIn = (direction: string, type: string, delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === "left" ? "-100%" : direction === "right" ? "100%" : 0,
      y: direction === "up" ? "100%" : direction === "down" ? "100%" : 0,
    },
    show: {
      x: 0,
      y: 0,
      transition: {
        type: type as any,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    // Simulate sending email
    setTimeout(() => {
      setLoading(false);
      alert("Thank you. I will get back to you as soon as possible.");
      setForm({
        name: "",
        email: "",
        message: "",
      });
    }, 2000);
  };

  return (
    <>
      <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
        >
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">Get in touch</p>
          <h3 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Contact.</h3>

          <div className="mt-8 flex flex-col gap-6">
            <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors">
              <Mail className="w-8 h-8" />
              <a href="mailto:rangeshsha@gmail.com" className="text-lg">rangeshsha@gmail.com</a>
            </div>
            <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors">
              <Phone className="w-8 h-8" />
              <a href="tel:+919769118800" className="text-lg">+91-9769118800</a>
            </div>
            <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors">
              <Github className="w-8 h-8" />
              <a href="https://github.com/rangeshsha-Rookie" target="_blank" rel="noreferrer" className="text-lg">rangeshsha-Rookie</a>
            </div>
            <div className="flex items-center gap-4 text-secondary hover:text-white transition-colors">
              <Linkedin className="w-8 h-8" />
              <a href="https://www.linkedin.com/in/rangesh-gupta/" target="_blank" rel="noreferrer" className="text-lg">rangesh-gupta</a>
            </div>
          </div>

          <form ref={formRef} onSubmit={handleSubmit} className="mt-12 flex flex-col gap-8">
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Name</span>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="What's your name?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Email</span>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="What's your email?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="What do you want to say?"
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium"
              />
            </label>

            <button
              type="submit"
              className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl hover:bg-secondary hover:text-primary transition-colors"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
      </div>

      <footer className="mt-20 border-t border-white/10 pt-8 pb-8 text-center text-secondary">
        <p>© {new Date().getFullYear()} Rangesh Gupta. All rights reserved.</p>
      </footer>
    </>
  );
};

export default SectionWrapper(Contact, "contact");
