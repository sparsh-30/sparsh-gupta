import Link from "next/link";
import { motion } from "framer-motion";
import { BsGithub, BsFacebook, BsLinkedin } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="w-full bg-black pb-10">
      <p className="relative top-14 px-3 bp:px-10 text-4xl font-bold">
        Keep up with ME
      </p>
      <div className="grid grid-cols-2 bp:grid-cols-3 py-20">
        {/* Input Div */}
        <div className="col-span-2 flex flex-nowrap px-3 bp:px-10 text-xl">
          <input
            className="w-full bp:w-2/3 h-[52px] p-6 bg-black text-white font-bold border-[1px] border-white rounded-tl-xl rounded-bl-xl"
            placeholder="Email"
            type="text"
          />
          <motion.button
            whileHover={{ backgroundColor: "#FFD660" }}
            transition={{ duration: 0.5 }}
            className="h-[52px] p-6 flex justify-center items-center bg-white text-black font-bold border-[1px] border-white rounded-tr-xl rounded-br-xl"
          >
            Submit
          </motion.button>
        </div>

        {/* Social Links */}
        <div className="col-span-1 flex justify-start items-center text-3xl my-10 bp:my-0 px-3">
          <Link href="https://www.facebook.com/sparsh.gupta.33046/" target="_blank">
            <motion.div
              whileHover={{
                scale: 1.15,
                color: "#FFD660",
                borderColor: "#FFD660",
                cursor: "pointer",
              }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="p-3 mr-8 rounded-full border-[1px] border-white"
            >
              <BsFacebook />
            </motion.div>
          </Link>
          <Link href="https://www.github.com/sparsh-30" target="_blank">
            <motion.div
              whileHover={{
                scale: 1.15,
                color: "#FFD660",
                borderColor: "#FFD660",
                cursor: "pointer",
              }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="p-3 mr-8 rounded-full border-[1px] border-white"
            >
              <BsGithub />
            </motion.div>
          </Link>
          <Link href="https://www.linkedin.com/in/sparsh30/" target="_blank">
            <motion.div
              whileHover={{
                scale: 1.15,
                color: "#FFD660",
                borderColor: "#FFD660",
                cursor: "pointer",
              }}
              transition={{ type: "spring", bounce: 0.25 }}
              className="p-3 mr-8 rounded-full border-[1px] border-white"
            >
              <BsLinkedin />
            </motion.div>
          </Link>
        </div>
      </div>
      <div className="text-center text-xl">
        <p>Made with ❤ by: Sparsh Gupta</p>
        <p>Copyright@ 2023</p>
      </div>
    </div>
  );
}
