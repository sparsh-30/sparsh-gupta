import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";
import { FiMenu } from "react-icons/fi";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const toggleMenu = {
    show: {
      height: "120px",
      opacity: 1,
      transition: { duration: 0.3, ease: "linear" },
    },
    hide: {
      height: 0,
      opacity: 1,
      transition: { duration: 0.3, ease: "linear" },
    },
  };

  return (
    <div className="fixed top-0 bg-[#1a1a1a] z-[600] w-full py-2">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 0.3 }}
        className="text-white flex justify-between items-center px-12 py-2 w-full h-auto z-[600]"
      >
        <Link href="/">
          <div
            onClick={() => setIndex(0)}
            className={`text-[24px] ${
              index === 0 ? "text-[#FFD660]" : ""
            } font-poppins hover:text-[#FFD660] transition-all duration-200`}
          >
            &#123;&#47;&#125; Sparsh.dev
          </div>
        </Link>
        <div className="text-[18px] font-source w-1/4 hidden bp:grid grid-cols-3 gap-8">
          <Link href="/work">
            <span
              onClick={() => setIndex(1)}
              className={`${
                index === 1 ? "text-[#FFD660]" : ""
              } hover:text-[#FFD660] transition-all duration-200`}
            >
              Work
            </span>
          </Link>
          <Link href="/about">
            <span
              onClick={() => setIndex(2)}
              className={`${
                index === 2 ? "text-[#FFD660]" : ""
              } hover:text-[#FFD660] transition-all duration-200`}
            >
              About
            </span>
          </Link>
          <Link href="/contact">
            <span
              onClick={() => setIndex(3)}
              className={`${
                index === 3 ? "text-[#FFD660]" : ""
              } hover:text-[#FFD660] transition-all duration-200`}
            >
              Contact
            </span>
          </Link>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="bp:hidden inline-block text-[28px]"
        >
          <FiMenu />
        </div>
      </motion.div>

      <motion.div
        variants={toggleMenu}
        initial={open ? "hide" : "show"}
        animate={open ? "show" : "hide"}
        className={`flex flex-col items-center justify-evenly overflow-hidden ${
          open ? "" : "hidden"
        }`}
      >
        <Link href="/work">
          <p
            onClick={() => setIndex(1)}
            className={`${
              index === 1 ? "text-[#FFD660]" : ""
            } hover:text-[#FFD660] transition-all duration-200`}
          >
            Work
          </p>
        </Link>
        <Link href="/about">
          <p
            onClick={() => setIndex(2)}
            className={`${
              index === 2 ? "text-[#FFD660]" : ""
            } hover:text-[#FFD660] transition-all duration-200`}
          >
            About
          </p>
        </Link>
        <Link href="/contact">
          <p
            onClick={() => setIndex(3)}
            className={`${
              index === 3 ? "text-[#FFD660]" : ""
            } hover:text-[#FFD660] transition-all duration-200`}
          >
            Contact
          </p>
        </Link>
      </motion.div>
    </div>
  );
}
