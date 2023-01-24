import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "./../components/Hero";
import MacbookFlip from "./../components/MacbookFlip";
import Window from "./../components/Window";
import Projects from "../components/Projects";
import FBflip from "../components/FBflip";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Sparsh Gupta | Portfolio</title>
        <link rel="icon" type="image/png" href="/favicon.png" />
      </Head>
      <div className="bg-[#1a1a1a] text-white z-[500] border-b-2 border-black">
        <Navbar />
        <Hero
          title="DEVELOPER"
          tagline="This is my personal portfolio website."
        />
        <MacbookFlip />
        <Window />
        <Projects />
        <FBflip />
        <Footer />
      </div>
    </>
  );
}
