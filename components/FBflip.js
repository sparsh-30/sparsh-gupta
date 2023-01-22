import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function FBflip() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });

  const demo = useTransform(scrollYProgress, [0, 0.5], [0, 90]);
  const demo2 = useTransform(scrollYProgress, [0.5, 1], [270, 360]);

  return (
    <div ref={ref} className="h-[300vh] w-full my-60">
      <p className="text-center font-noto text-[60px]">I can do</p>
      <div
        style={{
          perspective: "2000px",
          zIndex: scrollYProgress <= 0.5 ? "0" : "500",
        }}
        className="h-[100vh] w-full sticky top-0 flex justify-center items-center"
      >
        {/* Frontend Div Container */}
        <motion.div
          style={{
            rotateX: demo,
            display: scrollYProgress <= 0.5 ? "none" : "inline-block",
            position: scrollYProgress > 0.5 ? "none" : "absolute",
          }}
          transition={{ type: "inertia", velocity: 50 }}
          className="h-2/3 w-4/5 bg-white text-black rounded-xl px-6 py-5"
        >
          {/* Window Buttons */}
          <div className="flex justify-start">
            <div className="h-4 w-4 rounded-full mr-3 bg-[#FF5F56] hover:opacity-30 hover:cursor-pointer transition-all duration-150"></div>
            <div className="h-4 w-4 rounded-full mr-3 bg-[#FFBD2E] hover:opacity-30 hover:cursor-pointer transition-all duration-150"></div>
            <div className="h-4 w-4 rounded-full mr-3 bg-[#27C93F] hover:opacity-30 hover:cursor-pointer transition-all duration-150"></div>
          </div>

          {/* Horizontal Rule */}
          <div className="w-full h-[1.5px] my-4 bg-gray-200"></div>

          {/* Body */}
          <div className="h-full w-10/12 mx-auto mt-5 bp:mt-20">
            <p className="font-noto text-[40px] bp:text-[60px] text-center">Front end</p>
            <p className="font-source text-[16px] text-center bp:text-left bp:text-[25px]">
              I assist designers, small agencies, and businesses in bringing
              their concepts to life. I turn your requirements into CMS-ified
              and ecommerce-ified websites - on time and on budget - using
              Figma, VS Code, and coffee.
            </p>
          </div>
        </motion.div>

        {/* Backend Div Container */}
        <motion.div
          style={{
            rotateX: demo2,
            display: scrollYProgress > 0.5 ? "none" : "inline-block",
            position: scrollYProgress > 0.5 ? "none" : "absolute",
          }}
          transition={{ type: "inertia", velocity: 50 }}
          className="h-2/3 w-4/5 bg-[#232323] text-white rounded-xl px-6 py-5"
        >
          {/* Window Buttons */}
          <div className="flex justify-start">
            <div className="h-4 w-4 rounded-full mr-3 bg-[#FF5F56] hover:opacity-30 hover:cursor-pointer transition-all duration-150"></div>
            <div className="h-4 w-4 rounded-full mr-3 bg-[#FFBD2E] hover:opacity-30 hover:cursor-pointer transition-all duration-150"></div>
            <div className="h-4 w-4 rounded-full mr-3 bg-[#27C93F] hover:opacity-30 hover:cursor-pointer transition-all duration-150"></div>
          </div>

          {/* Horizontal Rule */}
          <div className="w-full h-[1.5px] my-4 bg-[#1a1a1a]"></div>

          {/* Body */}
          <div className="h-full w-10/12 mx-auto mt-5 bp:mt-20">
          <p className="font-noto text-[40px] bp:text-[60px] text-center">Back end</p>
            <p className="font-source text-[16px] text-center bp:text-left bp:text-[25px]">
              I assist designers, small agencies, and businesses in bringing
              their concepts to life. I turn your requirements into CMS-ified
              and ecommerce-ified websites - on time and on budget - using
              Figma, VS Code, and coffee.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
