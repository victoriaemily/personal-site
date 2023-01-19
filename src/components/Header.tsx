import React from 'react'
import { MdDisabledVisible } from 'react-icons/md'
import Typewriter from 'typewriter-effect';
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiKde} from 'react-icons/si'
import me from '../../public/cropped-emote.gif'
import Image from 'next/image';

const Header = () => {
  return (
    <div className="p-10 text-center min-h-screen">
        <div className="grid text-md py-5 leading-8">
        <div className='flex justify-center'>
            <Image src={me} alt="me" width={200} height={200}/>
        </div>
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString("hello, i'm victoria")
            .pauseFor(2500)
            .start();
        }}
        />

        </div>            
        <div className="grid">
            <h5>i'm a full-stack web developer!</h5>
            <h5>you can find me on the following</h5>
        </div>
        <div className='flex header__socials text-3xl justify-center gap-5 py-5 text-gray-600'>
            <a href="https://github.com/victoriaemily" target="_blank"><AiFillGithub/></a>
            <a href="https://www.linkedin.com/in/victoriaemilychen/" target="_blank"><BsLinkedin/></a>
            <a href="https://invent.kde.org/victo" target="_blank"><SiKde/></a>
        </div>
        
    </div>
  )
}

export default Header