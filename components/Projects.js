import ProjectCard from "./subcomponents/ProjectCard"

export default function Projects(){
    return (
        <div className="my-40">
            <p className="text-center font-noto text-[60px]">Featured Projects</p>
            <div className="flex flex-col relative w-11/12 mx-auto py-20">
                <ProjectCard title="WhatsApp Clone" imageURL="/demo.jpg" github="https://github.com/sparsh-30/Whatpapp-Clone" />
                <ProjectCard title="OnePlus Clone" imageURL="/demo.jpg" github="https://github.com/sparsh-30/Whatpapp-Clone" />
                <ProjectCard title="TurboFuture" imageURL="/demo.jpg" github="https://github.com/sparsh-30/Whatpapp-Clone" />
            </div>
        </div>
    )
}