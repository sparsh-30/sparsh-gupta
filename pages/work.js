import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import ProjectTile from "../components/ProjectTile";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Work() {
  return (
    <div>
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
          description="A MERN stack clone of WhatsApp"
          imageURL="/demo.jpg"
        />
        <ProjectTile
          title="WhatsApp Clone"
          description="A MERN stack clone of WhatsApp"
          imageURL="/demo.jpg"
        />
        <ProjectTile
          title="WhatsApp Clone"
          description="A MERN stack clone of WhatsApp"
          imageURL="/demo.jpg"
        />
        <ProjectTile
          title="WhatsApp Clone"
          description="A MERN stack clone of WhatsApp"
          imageURL="/demo.jpg"
        />
        <ProjectTile
          title="WhatsApp Clone"
          description="A MERN stack clone of WhatsApp"
          imageURL="/demo.jpg"
        />
        <ProjectTile
          title="WhatsApp Clone"
          description="A MERN stack clone of WhatsApp"
          imageURL="/demo.jpg"
        />
      </motion.div>
      <Footer />
    </div>
  );
}
