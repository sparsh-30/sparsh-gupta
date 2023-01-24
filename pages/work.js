import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectTile from "../components/ProjectTile";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div>
      <Head>
        <title>Sparsh Gupta | Work</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero
        title="PROJECTS"
        tagline="I love Projects, here are some of my best projects."
      />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className="grid grid-cols-1 bp:grid-cols-2 xl:grid-cols-3 py-20"
      >
        <ProjectTile
          title="WhatsApp Clone"
          description="MERN stack clone of WhatsApp with realtime chatting using Socket.io"
          imageURL="/img2.jpg"
          github="https://github.com/sparsh-30/Whatpapp-Clone"
        />
        <ProjectTile
          title="OnePlus Clone"
          description="A Bootstrap clone of the official OnePlus website"
          imageURL="/img1.jpg"
          github="https://github.com/sparsh-30/Oneplus-clone"
        />
        <ProjectTile
          title="Weather App"
          description="A simple weather app using React JS"
          imageURL="/img6.jpg"
          github="https://github.com/sparsh-30/react-weather-app"
        />
        <ProjectTile
          title="TurboFuture"
          description="TurboFuture is a service providing website built using HTML, CSS, Javascript and JQuery"
          imageURL="/img5.jpg"
          github="https://github.com/sparsh-30/Service_Providing_Website"
        />
        <ProjectTile
          title="E-Commerce Website"
          description="An E-Commerce website created using HTML, CSS and Javascript"
          imageURL="/img8.jpg"
          github="https://github.com/sparsh-30/E-commerce-website"
        />
      </motion.div>
      <Footer />
    </div>
  );
}
