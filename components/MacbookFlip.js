import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function MacbookFlip() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({ target: ref });
  const demo = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
  const bg = useTransform(scrollYProgress, [0.5, 1], [0, 1]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 2, duration: 0.3 }}
      ref={ref}
      onClick={() => console.log(scrollYProgress)}
      className="h-[300vh] w-full py-20 px-5"
    >
      <motion.div
        className="h-[100vh] w-full top-0 sticky flex items-center z-50"
        style={{ scale: demo }}
      >
        <div className="relative h-[300px] w-[500px] md:h-[600px] md:w-[700px] mx-auto">
          <Image
            src="/imac.png"
            className="h-[300px] md:h-[600px] w-full mx-auto z-50"
            alt="IMac"
            width={600}
            height={300}
          />
          <Image
            src="/html_doc.png"
            className="h-[200px] px-3 md:h-[400px] w-full absolute top-4 bp:top-10 -z-30"
            alt="IMac_Inner_Image"
            height={200}
            width={400}
          />
        </div>
      </motion.div>

      <motion.div
        className="h-[100vh] w-full top-0 sticky z-40 flex justify-center items-center"
        style={{ opacity: bg }}
      >
        <Image
          src="/gradient.webp"
          className="h-[800px] md:h-[600px] w-full mx-auto"
          alt="Background_Gradient"
          height={600}
          width={600}
        />
      </motion.div>
    </motion.div>
  );
}
