import { useState } from 'react'
import { motion } from 'framer-motion'
import { BiCodeAlt } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'

export default function Navbar(){
    const [open,setOpen]=useState(false);

    return (
        <>
            <motion.div initial={{opacity:0}} animate={{opacity:1}} transition={{delay:1.2,duration:0.3}} className="text-white bg-[#1a1a1a] flex justify-between items-center px-12 py-2 fixed w-full h-auto top-0 z-[600]">
                <div className='text-[24px] font-poppins'>
                    &#123;&#47;&#125; Sparsh.dev
                </div>
                <div className='text-[18px] font-source w-1/4 hidden bp:grid grid-cols-3 gap-8'>
                    <span>Work</span>
                    <span>About</span>
                    <span>Contact</span>
                </div>
                <div className='bp:hidden inline-block text-[28px]'>
                    <FiMenu />
                </div>
            </motion.div>

                

        </>
    )
}