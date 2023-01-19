import React from 'react'
import { MdDisabledVisible } from 'react-icons/md'
import Typewriter from 'typewriter-effect';

import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiKde} from 'react-icons/si'

const Header = () => {
  return (
    <div className="justify-center text-lg p-8 grid">
        <div>
        
        <Typewriter
        onInit={(typewriter) => {
            typewriter.typeString("hello, i'm victoria")
            .pauseFor(2500)
            .start();
        }}
        />

        </div>            
        <div className="grid">
            <h5>i'm a full-stack web developer</h5>
            <h5>you can find me on the following</h5>
        </div>
        <div className='header__socials'>
        <a href="https://github.com/victoriaemily" target="_blank"><AiFillGithub/></a>
        <a href="https://www.linkedin.com/in/victoriaemilychen/" target="_blank"><BsLinkedin/></a>
        <a href="https://invent.kde.org/victo" target="_blank"><SiKde/></a>
        </div>
        
    </div>
  )
}

export default Header