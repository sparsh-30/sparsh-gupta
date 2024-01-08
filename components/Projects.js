import Link from "next/link";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <div className="my-40">
      <p className="text-[30px] bp:text-[65px] text-center font-montserrat font-bold">
        Featured Projects
      </p>
      <div className="flex flex-col relative w-11/12 mx-auto py-24">
        <ProjectCard
          title="SpendWise"
          imageURL="/spendwise.jpg"
          github="https://github.com/sparsh-30/SpendWise"
        />
        <ProjectCard
          title="WhatsApp Clone"
          imageURL="/whatsapp.jpg"
          github="https://github.com/sparsh-30/Whatpapp-Clone"
        />
        <ProjectCard
          title="TurboFuture"
          imageURL="/turbofuture.jpg"
          github="https://github.com/sparsh-30/Service_Providing_Website"
        />
      </div>
      <div className="w-full flex justify-center mt-14">
        <Link href="/work">
            <button className="h-[80px] w-[220px] rounded-full text-3xl font-bold bg-gray-500 hover:bg-white hover:text-black transition-all duration-300">More</button>
        </Link>
      </div>
    </div>
  );
}
