import React from 'react'
import Typewriter from 'typewriter-effect';
import me from '../../public/cropped-emote.gif'
import Image from 'next/image';
import {BsFillArrowDownCircleFill} from 'react-icons/bs'
import {AiOutlineFilePdf} from 'react-icons/ai'


const Header = () => {
    
  return (
    <div className="flex p-20 text-2xl justify-center min-h-screen text-center text-black">
        <div className="grid text-md py-5 leading-8">
        <div className='grid justify-center pb-5 object-cover'>
            <Image src={me} alt="me" width={300}/>
        </div>
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString("hello, i'm victoria")
            .pauseFor(2500)
            .start();
        }}
        />
        <div className="grid text-4xl justify-center 2xl:mb-20 2xl:text-5xl">
            <div className='flex justify-center p-10 2xl:mb-20'>
                <div className="flex">
                <a href="../../VEChenResume.pdf"><AiOutlineFilePdf/></a>
                </div>
            </div>
            
            <div className='flex text-3xl justify-center mt-15 text-sky-600'>
            <div>
                <BsFillArrowDownCircleFill className='bottom-0 animate-bounce'/>
            </div>
        </div> 
        </div> 
        </div>        
           
        
        

    </div>
  )
}

export default Header