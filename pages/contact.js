import Image from "next/image";
import Head from "next/head";
import { motion } from "framer-motion";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <div>
      <Head>
        <title>Sparsh Gupta | Contact</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <Navbar />
      <Hero
        title="CONTACT"
        tagline="About anything really, feel free. I love company and a good chat 😉"
      />
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.2, duration: 0.5 }}
        className='py-20 bg-[url("/contact-gradient.webp")] bg-no-repeat bg-cover bg-center'
      >
        <ContactForm />
      </motion.div>
      <Footer />
    </div>
  );
}
