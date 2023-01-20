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
        <div className='flex justify-center pb-5'>
            <Image src={me} alt="me" width={250} height={250}/>
        </div>
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString("hello, i'm victoria")
            .pauseFor(2500)
            .start();
        }}
        />
        <div className="flex flex-col justify-center">
            <div className='flex justify-center p-10'>
                <a href="../../VEChenResume.pdf"><AiOutlineFilePdf/></a>
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