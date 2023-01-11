import { useState } from 'react'
import { BiCodeAlt } from 'react-icons/bi'
import { FiMenu } from 'react-icons/fi'

export default function Navbar(){
    const [open,setOpen]=useState(false);

    return (
        <>
            <div className="text-white flex justify-between items-center px-12 py-2">
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
            </div>

            <div>
                
            </div>

        </>
    )
}