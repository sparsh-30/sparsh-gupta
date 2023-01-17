import { useState } from "react"
import { motion, useMotionValue } from 'framer-motion'

export default function Window(){
    const [resize,setResize]=useState(false);
    const [minimize,setMinimize]=useState(false);
    const [close,setClose]=useState(false);
    

    return (
        <motion.div transition={{duration:2}} className={`w-full bp:w-11/12 bg-[#232323] mx-auto rounded-xl px-6 py-5 ${resize===true?"scale-100":"scale-90"} overflow-hidden transition-all duration-300 ease-in-out`}>
            <div className="flex justify-start">
                <button onClick={()=> setClose(!close)}><div className="h-4 w-4 rounded-full mr-3 bg-[#FF5F56] hover:opacity-30 transition-all duration-150"></div></button>
                <button onClick={()=> setMinimize(!minimize)}><div className="h-4 w-4 rounded-full mr-3 bg-[#FFBD2E] hover:opacity-30 transition-all duration-150"></div></button>
                <button onClick={()=> setResize(!resize)}><div className="h-4 w-4 rounded-full mr-3 bg-[#27C93F] hover:opacity-30 transition-all duration-150"></div></button>
            </div>
            <div className="w-full h-[1.5px] my-4 bg-[#1a1a1a]"></div>
            <div className={`${minimize===true?"hidden":"inline-block"} transition-all duration-300`}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img className="mx-auto h-[200px] bp:h-[300px] w-[200px] bp:w-[300px] rounded-full" alt="Profile Picture" src="/profile.jpg" />
                <div className="font-source bp:text-[22px] mt10- mb-5 bp:mx-10">
                    <p className="text-white my-3">&#47;&#47;</p>
                    <p className="text-[#c3e88d]">Hey there, I am Sparsh Gupta currently a student in Chitkara University, Rajpura pursuing BE in Computer Science. I am trying to seek an entry level job in full-stack web development with curiosity to learn new technologies. I also like to do competitive programming. I have solve over 250+ questions over various platforms. As a technical content writer for GeeksforGeeks, I have also published 2 articles. I am fluent in English, Hindi and Punjabi.</p>
                    <p className="text-white my-3">&#47;&#47;</p>
                </div>
            </div>

        </motion.div>
    )
}