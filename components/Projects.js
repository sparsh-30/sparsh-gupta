import ProjectCard from "./ProjectCard"

export default function Projects(){
    return (
        <div className="my-40">
            <p className="text-[30px] bp:text-[65px] text-center font-montserrat font-bold">Featured Projects</p>
            <div className="flex flex-col relative w-11/12 mx-auto py-20">
                <ProjectCard title="WhatsApp Clone" imageURL="/demo.jpg" github="https://github.com/sparsh-30/Whatpapp-Clone" />
                <ProjectCard title="OnePlus Clone" imageURL="/demo.jpg" github="https://github.com/sparsh-30/Whatpapp-Clone" />
                <ProjectCard title="TurboFuture" imageURL="/demo.jpg" github="https://github.com/sparsh-30/Whatpapp-Clone" />
            </div>
        </div>
    )
}