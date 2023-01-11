import { useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";

export default function Hero(props) {
  return (
    <>
      <div className="flex justify-center items-center py-5">

        {/* Left angle bracket */}
        <motion.div
          initial={{ x: "-100px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <GoChevronLeft className="text-[40px] bp:text-[100px] text-[#363535]" />
        </motion.div>

        {/* Slash */}
        <motion.div
          transition={{ duration: 1, easeIn: [0.2, 0.6, 1] }}
          animate={{ scale: [1.5, 1, 1], rotateZ: ["0deg", "0deg", "15deg"] }}
          className="w-2 h-16 mr-4 bp:w-3 bp:h-32 bp:mr-8 bg-gradient-to-t from-[#FB0000] to-[#8703EE]"
        />

        {/* Text */}
        <motion.p
          initial={{ opacity: 0, letterSpacing: "-0.5em" }}
          animate={{ opacity: 1, letterSpacing: "0em" }}
          transition={{ delay: 2, duration: 1 }}
          className="text-[40px] bp:text-[100px] text-white relative bottom-1 bp:bottom-3 font-extrabold}"
        >
          {props.heroTitle}
        </motion.p>

        {/* Right angle bracket */}
        <motion.div
          initial={{ x: "100px", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          <GoChevronRight className="text-[40px] bp:text-[100px] text-[#363535]" />
        </motion.div>
      </div>
    </>
  );
}
