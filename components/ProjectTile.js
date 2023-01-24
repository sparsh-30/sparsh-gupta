import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ProjectTile(props) {
  const [toggle, setToggle] = useState(false);

  const toggleAnimation = {
    start: {
      height: "fit-content",
      transition: { duration: 0.5 },
    },
    end: {
      height: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
      <Link href={props.github} target="_blank">
      <motion.div
        onHoverStart={() => setToggle(true)}
        onHoverEnd={() => setToggle(false)}
        className="relative h-[400px] w-[350px] bp:h-[500px] bp:w-[350px] rounded-xl mx-auto my-5"
      >
        <Image
          src={props.imageURL}
          className="h-full w-full rounded-xl z-40"
          height={500}
          width={400}
          alt="Project Thumbnail"
        />
        <motion.div
          className={`absolute bottom-0 w-full py-10 px-5 z-50 rounded-b-xl transition-all duration-300 ease-linear ${
            toggle ? "backdrop-blur-md" : "backdrop-blur-none"
          }`}
        >
          <p className="text-2xl font-bold font-noto mb-2">{props.title}</p>
          <motion.p
            variants={toggleAnimation}
            initial={toggle ? "end" : "start"}
            animate={toggle ? "start" : "end"}
            className="text-xl font-source overflow-hidden"
          >
            {props.description}
          </motion.p>
        </motion.div>
      </motion.div>
        </Link>
  );
}
