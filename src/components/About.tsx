import { motion, Variants } from "motion/react";
import Tilt from "react-parallax-tilt";
import { services } from "../constants";
import AboutScene from "./canvas/AboutScene";
import SectionWrapper from "../hoc/SectionWrapper";
import { Terminal, Cpu } from "lucide-react";

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

const ServiceCard = ({ index, title, icon: Icon }: { index: number; title: string; icon: any }) => (
  <Tilt className="xs:w-[250px] w-full" tiltMaxAngleX={15} tiltMaxAngleY={15} scale={1.02} transitionSpeed={450}>
    <motion.div
      variants={fadeIn("up", "spring", index * 0.15, 0.75)}
      className="relative w-full p-[1px] rounded-xl bg-gradient-to-br from-white/10 to-transparent hover:from-[#00f0ff]/50 hover:to-[#915EFF]/50 transition-colors duration-500 group overflow-hidden"
    >
      {/* Scanning line animation */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#00f0ff]/10 to-transparent -translate-y-full group-hover:animate-[scan_2s_ease-in-out_infinite]" />
      
      <div className="bg-[#0a0a0a]/90 backdrop-blur-xl rounded-xl py-8 px-6 min-h-[260px] flex flex-col justify-center items-center relative z-10">
        {/* Tech Corners */}
        <div className="absolute top-3 left-3 w-3 h-3 border-t-2 border-l-2 border-[#915EFF]/50 group-hover:border-[#00f0ff] transition-colors duration-300" />
        <div className="absolute top-3 right-3 w-3 h-3 border-t-2 border-r-2 border-[#915EFF]/50 group-hover:border-[#00f0ff] transition-colors duration-300" />
        <div className="absolute bottom-3 left-3 w-3 h-3 border-b-2 border-l-2 border-[#915EFF]/50 group-hover:border-[#00f0ff] transition-colors duration-300" />
        <div className="absolute bottom-3 right-3 w-3 h-3 border-b-2 border-r-2 border-[#915EFF]/50 group-hover:border-[#00f0ff] transition-colors duration-300" />

        <div className="w-16 h-16 rounded-lg bg-[#151030] border border-white/5 flex items-center justify-center mb-6 group-hover:border-[#00f0ff]/50 group-hover:shadow-[0_0_20px_rgba(0,240,255,0.2)] transition-all duration-500 relative overflow-hidden">
           {/* Inner grid for icon */}
           <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:4px_4px]" />
           <Icon size={32} className="text-white group-hover:text-[#00f0ff] relative z-10 transition-colors duration-500" />
        </div>
        
        <h3 className="text-white text-[18px] font-bold text-center tracking-wide group-hover:text-[#00f0ff] transition-colors duration-300">{title}</h3>
        
        {/* Decorative binary/hex */}
        <div className="absolute bottom-4 text-[10px] font-mono text-white/10 group-hover:text-[#00f0ff]/40 transition-colors duration-300">
          SYS.NODE_{index.toString().padStart(3, '0')}
        </div>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <div className="relative z-0">
      {/* Tech Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <motion.div variants={textVariant()}>
        <div className="flex items-center gap-2 mb-2">
          <Cpu className="text-[#00f0ff] w-5 h-5" />
          <p className="sm:text-[18px] text-[14px] text-[#00f0ff] uppercase tracking-widest font-mono font-semibold">
            System.Identity
          </p>
        </div>
        <h2 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">
          Overview<span className="text-[#915EFF] animate-pulse">_</span>
        </h2>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-10 items-stretch mt-8">
        <motion.div
          variants={fadeIn("right", "spring", 0.1, 1)}
          className="flex-1 relative p-1 rounded-2xl bg-gradient-to-br from-white/10 to-transparent"
        >
          <div className="h-full bg-[#0a0a0a]/90 backdrop-blur-xl rounded-2xl p-6 sm:p-8 border border-white/5 relative overflow-hidden group">
            {/* Terminal Header */}
            <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80" />
                <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                <div className="w-3 h-3 rounded-full bg-green-500/80" />
              </div>
              <div className="ml-4 flex items-center gap-2 text-xs font-mono text-secondary">
                <Terminal size={14} />
                <span>~/about/profile.sh</span>
              </div>
            </div>

            <p className="text-secondary text-[16px] sm:text-[17px] leading-[32px] font-mono">
              <span className="text-[#915EFF]">const</span> <span className="text-[#00f0ff]">developer</span> = {"{"}
              <br/>
              &nbsp;&nbsp;role: <span className="text-green-400">"Computer Engineering Student"</span>,
              <br/>
              &nbsp;&nbsp;skills: [<span className="text-green-400">"Python"</span>, <span className="text-green-400">"Full-Stack"</span>, <span className="text-green-400">"AI/ML"</span>],
              <br/>
              &nbsp;&nbsp;achievements: [<span className="text-green-400">"JARVIS 2025 Hackathon Runner-Up"</span>],
              <br/>
              &nbsp;&nbsp;passion: <span className="text-green-400">"Smart city infrastructure & public systems optimization"</span>
              <br/>
              {"}"};
              <br/><br/>
              <span className="text-white/70 font-sans">
                Incoming Computer Engineering student with hands-on experience in data management, business operations, and software development. Proven track record as Runner-Up in JARVIS 2025 Hackathon among 40+ competing teams. Skilled in Python programming, database management, Excel-based analytics, and full-stack web application development. Strong foundation in microservices architecture, API integration, and data-driven problem-solving with demonstrated ability to build functional MVPs under time constraints.
              </span>
            </p>
            
            {/* Blinking cursor */}
            <div className="w-2 h-5 bg-[#00f0ff] inline-block ml-1 animate-pulse align-middle mt-2" />
          </div>
        </motion.div>

        <motion.div 
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="flex-1 w-full min-h-[350px] lg:min-h-[450px] relative rounded-2xl overflow-hidden border border-white/10 bg-[#0a0a0a]/80 backdrop-blur-md"
        >
          {/* Tech overlay elements for the 3D canvas */}
          <div className="absolute top-4 left-4 text-[#00f0ff] font-mono text-xs opacity-50 pointer-events-none z-10">
            [RENDER_ENGINE: ACTIVE]<br/>
            FPS: 60.0
          </div>
          <div className="absolute bottom-4 right-4 text-[#915EFF] font-mono text-xs opacity-50 pointer-events-none z-10 text-right">
            MODEL_ID: 8932<br/>
            STATUS: ONLINE
          </div>
          {/* Targeting reticle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 border border-[#00f0ff]/20 rounded-full pointer-events-none z-10 flex items-center justify-center">
            <div className="w-1 h-1 bg-[#00f0ff]/50 rounded-full" />
          </div>
          
          <div className="absolute inset-0 shadow-[inset_0_0_50px_rgba(0,240,255,0.05)] pointer-events-none z-10" />
          <AboutScene />
        </motion.div>
      </div>

      <div className="mt-20 flex flex-wrap gap-8 justify-center lg:justify-start">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
