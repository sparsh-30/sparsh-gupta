import Image from "next/image";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { AiFillGithub } from "react-icons/ai";

export default function ProjectCard(props) {
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);

  const demo = useInView(ref, { amount: 0.1 });

  const hoverVariant = {
    show: {
      opacity: 1,
      transition: { duration: 0.3 },
    },
    hide: {
      opacity: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <div>
      {/* If screen size >= 900px */}
      <div className="w-full relative hidden bp:flex items-center h-40 my-5">
        <motion.div
          onHoverStart={() => setToggle(true)}
          onHoverEnd={() => setToggle(false)}
          className="absolute top-0 w-full h-full px-10 hover:px-0 transition-all duration-300 ease-linear flex justify-between items-center z-40 border-b-[1px] border-[#575757] hover:border-[#FFD660]"
        >
          <div className="text-[38px] font-noto">{props.title}</div>
          <div className="text-[20px]">
            <Link href={props.github}>
              <AiFillGithub
                className={`text-[40px] ${
                  toggle === true ? "text-[#FFD660]" : ""
                }`}
              />
            </Link>
          </div>
        </motion.div>

        <motion.div
          onHoverStart={() => setToggle(true)}
          onHoverEnd={() => setToggle(false)}
          variants={hoverVariant}
          initial={toggle === false ? "hide" : "show"}
          animate={toggle === false ? "hide" : "show"}
          className="h-60 mx-auto z-[60] flex justify-center items-center"
        >
          <Image
            src={props.imageURL}
            height={500}
            width={1000}
            className="h-[400px] w-[400px] rounded-xl z-[100]"
            alt="Project Thumbnail"
          />
        </motion.div>
      </div>

      {/* If screen size < 900px */}
      <motion.div
        ref={ref}
        style={{
          opacity: demo ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
        className="inline-block bp:hidden w-full border-b-[1px] border-[#575757] pt-14 pb-10"
      >
        <p className="text-4xl text-[#b8b8b8]">{props.title}</p>
        <Link href={props.github}>
          <AiFillGithub className="text-4xl my-5" />
        </Link>
        <Image
          src={props.imageURL}
          height={500}
          width={600}
          className="w-11/12 h-[400px] my-6 rounded-xl"
          alt="Project Thumbnail"
        />
      </motion.div>
    </div>
  );
}
