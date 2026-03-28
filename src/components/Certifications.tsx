import { useState } from "react";
import { motion, Variants } from "motion/react";
import Tilt from "react-parallax-tilt";
import { Plus, X } from "lucide-react";
import { certifications } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const textVariant = (delay?: number): Variants => {
  return {
    hidden: {
      y: -50,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.25,
        delay: delay || 0,
      },
    },
  };
};

const fadeIn = (direction: string, type: string, delay: number, duration: number): Variants => {
  return {
    hidden: {
      x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
      y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
      opacity: 0,
    },
    show: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        type: type as any,
        delay: delay,
        duration: duration,
        ease: "easeOut",
      },
    },
  };
};

const Certifications = () => {
  const [certList, setCertList] = useState(certifications);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    date: "",
    image: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.title && formData.issuer) {
      setCertList([
        ...certList,
        {
          ...formData,
          image: formData.image || `https://picsum.photos/seed/${formData.title.replace(/\s+/g, "")}/800/600`,
        },
      ]);
      setIsModalOpen(false);
      setFormData({ title: "", issuer: "", date: "", image: "" });
    }
  };

  return (
    <>
      <div className="flex justify-between items-end flex-wrap gap-4">
        <motion.div variants={textVariant()}>
          <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My achievements</p>
          <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Certifications.</h2>
        </motion.div>
        <motion.button
          variants={fadeIn("left", "spring", 0.5, 0.75)}
          onClick={() => setIsModalOpen(true)}
          className="bg-tertiary hover:bg-white hover:text-primary text-white font-bold py-3 px-6 rounded-xl flex items-center gap-2 transition-colors duration-300 mb-2"
        >
          <Plus size={20} />
          <span className="hidden sm:inline">Add Certification</span>
        </motion.button>
      </div>

      <div className="mt-20 flex flex-wrap gap-7 justify-center">
        {certList.map((cert, index) => (
          <motion.div
            key={`cert-${index}`}
            variants={fadeIn("up", "spring", index * 0.5, 0.75)}
          >
            <Tilt
              tiltMaxAngleX={45}
              tiltMaxAngleY={45}
              scale={1}
              transitionSpeed={450}
              className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
            >
              <div className="relative w-full h-[230px]">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover rounded-2xl"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="mt-5">
                <h3 className="text-white font-bold text-[24px]">{cert.title}</h3>
                <p className="mt-2 text-secondary text-[14px]">
                  {cert.issuer} • {cert.date}
                </p>
              </div>
            </Tilt>
          </motion.div>
        ))}
      </div>

      {/* Add Certification Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="bg-[#151030] p-8 rounded-2xl w-full max-w-md relative border border-white/10 shadow-2xl"
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-secondary hover:text-white transition-colors"
            >
              <X size={24} />
            </button>
            <h3 className="text-white font-bold text-[24px] mb-6">Add New Certification</h3>
            
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Title *</span>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleInputChange}
                  placeholder="e.g. AWS Certified Solutions Architect"
                  className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary"
                  required
                />
              </label>
              
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Issuer *</span>
                <input
                  type="text"
                  name="issuer"
                  value={formData.issuer}
                  onChange={handleInputChange}
                  placeholder="e.g. Amazon Web Services"
                  className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary"
                  required
                />
              </label>
              
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Date</span>
                <input
                  type="text"
                  name="date"
                  value={formData.date}
                  onChange={handleInputChange}
                  placeholder="e.g. March 2026"
                  className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary"
                />
              </label>
              
              <label className="flex flex-col">
                <span className="text-white font-medium mb-2">Image URL</span>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleInputChange}
                  placeholder="Optional image link"
                  className="bg-tertiary py-3 px-4 text-white rounded-lg outline-none border-none font-medium placeholder:text-secondary"
                />
              </label>

              <button
                type="submit"
                className="bg-white text-primary font-bold py-3 px-8 rounded-xl outline-none w-fit hover:bg-gray-200 transition-colors mt-4"
              >
                Add Certification
              </button>
            </form>
          </motion.div>
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Certifications, "certifications");
