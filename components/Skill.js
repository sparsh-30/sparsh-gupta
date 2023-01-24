import Image from "next/image"

export default function Skill(props){
    return (
        <div className="w-[200px] mx-auto">
            <div className="w-full h-[200px] relative">
                <div className="w-full h-full z-10">
                    <Image className="w-full h-full" src="meter.svg" height={300} width={300} alt="Skill Meter" />
                </div>
                <div className="h-full w-full absolute top-0 flex justify-center items-center">
                    <p className="bg-[#1a1a1a] text-4xl font-extrabold font-DMSans px-1">{props.percentage}%</p>
                </div>
            </div>
            <p className="text-center text-2xl font-extrabold font-DMSans">{props.title}</p>
        </div>
    )
}