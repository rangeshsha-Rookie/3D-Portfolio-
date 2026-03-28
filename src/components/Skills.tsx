import { motion, Variants } from "motion/react";
import { technologies } from "../constants";
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

const Skills = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="sm:text-[18px] text-[14px] text-secondary uppercase tracking-wider">My technical skills</p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Technologies.</h2>
      </motion.div>

      <div className="flex flex-row flex-wrap justify-center gap-10 mt-20">
        {technologies.map((technology, index) => {
          const Icon = technology.icon;
          return (
            <motion.div
              key={technology.name}
              variants={fadeIn("up", "spring", index * 0.1, 0.75)}
              className="w-28 h-28 flex flex-col items-center justify-center bg-tertiary rounded-full shadow-card hover:scale-110 transition-transform duration-300"
            >
              <Icon className="w-12 h-12 text-white" />
              <p className="text-secondary text-sm mt-2 font-medium">
                {technology.name}
              </p>
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Skills, "skills");
