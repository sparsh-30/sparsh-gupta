import Link from "next/link";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Window from "../components/Window";
import Carousel from "react-multi-carousel";
import Skill from "../components/Skill";
import Timeline from "../components/Timeline";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { AiOutlineDownload } from "react-icons/ai";
import "react-multi-carousel/lib/styles.css";

export default function About() {
  const responsive = {
    desktop: {
      breakpoint: {
        max: 3000,
        min: 1024,
      },
      items: 3,
      partialVisibilityGutter: 40,
    },
    mobile: {
      breakpoint: {
        max: 650,
        min: 0,
      },
      items: 1,
      partialVisibilityGutter: 30,
    },
    tablet: {
      breakpoint: {
        max: 1024,
        min: 650,
      },
      items: 2,
      partialVisibilityGutter: 30,
    },
  };

  return (
    <div>
      <Head>
        <title>Sparsh Gupta | About</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero title="ABOUT" tagline="I am a MERN stack web developer." />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="my-40"
      >
        <Window />
      </motion.div>
      <p className="text-[30px] bp:text-[65px] my-20 text-center font-montserrat font-bold">
        Education
      </p>
      <div className="bg-white w-3/4 mx-auto rounded-2xl mb-40">
        <Timeline />
      </div>
      <div className="mb-20 w-2/3 mx-auto">
        <p className="text-[30px] bp:text-[65px] my-20 text-center font-montserrat font-bold">
          Skills
        </p>
        <Carousel
          additionalTransfrom={0}
          arrows
          autoPlay
          autoPlaySpeed={1500}
          centerMode={false}
          className=""
          containerClass="container-with-dots"
          dotListClass=""
          draggable
          focusOnSelect={false}
          infinite
          itemClass=""
          keyBoardControl
          minimumTouchDrag={80}
          pauseOnHover
          renderArrowsWhenDisabled={false}
          renderButtonGroupOutside={false}
          renderDotsOutside={false}
          responsive={responsive}
          rewind={false}
          rewindWithAnimation={false}
          rtl={false}
          shouldResetAutoplay
          showDots={false}
          sliderClass=""
          slidesToSlide={2}
          swipeable
        >
          <Skill title="HTML" percentage="90" />
          <Skill title="CSS" percentage="75" />
          <Skill title="JavaScript" percentage="80" />
          <Skill title="React JS" percentage="90" />
          <Skill title="Next JS" percentage="70" />
          <Skill title="Node JS" percentage="75" />
          <Skill title="MongoDB" percentage="80" />
          <Skill title="Tailwind CSS" percentage="95" />
          <Skill title="Firebase" percentage="70" />
          <Skill title="IOT" percentage="70" />

        </Carousel>
      </div>
      <div className="mx-auto w-fit">
        <Link className="mx-auto" href={`${process.env.NEXT_PUBLIC_RESUME_LINK}`} target="_blank">
          <div className="flex justify-center my-20">
            <button className="h-[80px] w-[200px] bp:h-[80px] bp:w-[200px] rounded-full text-3xl font-bold bg-gray-500 hover:bg-white hover:text-black transition-all duration-300">
              Resume <AiOutlineDownload className="inline-block" />
            </button>
          </div>
        </Link>
      </div>
      <Footer />
    </div>
  );
}
