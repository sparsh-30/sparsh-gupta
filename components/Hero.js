import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import { motion } from "framer-motion";

export default function Hero(props) {
  return (
    <>
      <div className="pt-48 bp:pt-28 px-2">
        <div className="flex justify-center items-center">
          {/* Left angle bracket */}
          <motion.div
            onClick={()=> console.log(demo)}
            initial={{ x: "-100px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <GoChevronLeft className="text-[40px] bp:text-[100px] text-[#363535]" />
          </motion.div>

          {/* Slash */}
          <motion.div
            transition={{ duration: 1.2, easeIn: [0.8, 0.85, 1] }}
            initial={{ scale: 1.5 }}
            animate={{ scale: [1.5, 1, 1], rotateZ: ["0deg", "0deg", "15deg"] }}
            className="w-2 h-16 mr-4 bp:w-3 bp:h-32 bp:mr-8 bg-gradient-to-t from-[#FB0000] to-[#8703EE]"
          />

          {/* Text */}
          <motion.p
            initial={{ width:0 , transformOrigin: 'left' }}
            animate={{ width: "fit-content" , transformOrigin: "left" }}
            transition={{ delay: 1.5, duration: 0.7, ease: "easeInOut" }}
            className="text-[40px] bp:text-[100px] overflow-hidden text-white font-poppins relative font-[900]}"
          >
            {props.heroTitle}
          </motion.p>

          {/* Right angle bracket */}
          <motion.div
            initial={{ x: "100px", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <GoChevronRight className="text-[40px] bp:text-[100px] text-[#363535]" />
          </motion.div>
        </div>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.3 }}
          className="text-center text-lime-300 text-xl bp:text-3xl mt-3 font-source"
        >
          &#47;&#47; This is my personal portfolio website. &#47;&#47;
        </motion.p>
      </div>
    </>
  );
}
