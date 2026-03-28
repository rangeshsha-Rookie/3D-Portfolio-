import { motion } from "motion/react";
import { experiences } from "../constants";
import SectionWrapper from "../hoc/SectionWrapper";

const ExperienceCard = ({ experience, index }: { experience: any; index: number }) => {
  const Icon = experience.icon;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="relative pl-8 sm:pl-32 py-6 group"
    >
      {/* Timeline Line & Dot */}
      <div className="absolute left-0 sm:left-[100px] top-0 bottom-0 w-[2px] bg-white/10 group-hover:bg-[#915EFF]/50 transition-colors duration-500">
        <div className="absolute top-8 -left-[9px] w-5 h-5 rounded-full bg-[#151030] border-4 border-[#915EFF] group-hover:shadow-[0_0_15px_#915EFF] transition-all duration-500 z-10 flex items-center justify-center">
          <div className="w-2 h-2 rounded-full bg-white group-hover:bg-[#00f0ff] transition-colors duration-500" />
        </div>
      </div>

      {/* Date (Desktop: Left side, Mobile: Top) */}
      <div className="hidden sm:block absolute left-0 top-8 w-[80px] text-right">
        <span className="text-[#00f0ff] text-sm font-bold tracking-wider block">{experience.date.split(" - ")[0]}</span>
        <span className="text-secondary text-xs block mt-1">{experience.date.split(" - ")[1]}</span>
      </div>

      {/* Content Card */}
      <div className="bg-[#1d1836]/40 backdrop-blur-md border border-white/10 rounded-2xl p-6 sm:p-8 hover:bg-[#1d1836]/60 hover:border-[#915EFF]/50 transition-all duration-500 relative overflow-hidden group-hover:shadow-[0_0_30px_rgba(145,94,255,0.15)]">
        
        {/* Glow effect */}
        <div className="absolute -inset-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] transition-all" />

        <div className="flex flex-col sm:flex-row gap-6 items-start relative z-10">
          {/* Icon */}
          <div className="flex-shrink-0 w-16 h-16 rounded-xl bg-gradient-to-br from-[#915EFF] to-[#00f0ff] p-[2px] shadow-lg">
            <div className="w-full h-full bg-[#151030] rounded-[10px] flex items-center justify-center">
              <Icon className="w-8 h-8 text-white group-hover:scale-110 transition-transform duration-500" />
            </div>
          </div>

          {/* Details */}
          <div className="flex-1">
            <div className="sm:hidden mb-4">
              <span className="text-[#00f0ff] text-sm font-bold tracking-wider">{experience.date}</span>
            </div>
            
            <h3 className="text-white text-2xl font-bold tracking-tight group-hover:text-[#00f0ff] transition-colors duration-300">
              {experience.title}
            </h3>
            <p className="text-[#915EFF] text-lg font-semibold mt-1 mb-6">
              {experience.company_name}
            </p>

            <ul className="space-y-4">
              {experience.points.map((point: string, pointIndex: number) => (
                <li 
                  key={`experience-point-${pointIndex}`} 
                  className="text-secondary text-sm leading-relaxed flex items-start gap-3 group/item"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#915EFF] flex-shrink-0 group-hover/item:bg-[#00f0ff] group-hover/item:shadow-[0_0_8px_#00f0ff] transition-all duration-300" />
                  <span className="group-hover/item:text-white transition-colors duration-300">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <div className="relative z-0">
      <motion.div 
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <p className="sm:text-[18px] text-[14px] text-[#00f0ff] uppercase tracking-widest font-semibold">
          What I've accomplished so far
        </p>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px] mt-2">
          Work Experience<span className="text-[#915EFF]">.</span>
        </h2>
      </motion.div>

      <div className="mt-20 flex flex-col relative">
        {experiences.map((experience, index) => (
          <ExperienceCard key={`experience-${index}`} experience={experience} index={index} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Experience, "work");
