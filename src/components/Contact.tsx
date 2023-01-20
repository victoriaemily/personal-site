import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {AiFillGithub} from 'react-icons/ai'
import {SiKde} from 'react-icons/si'

const Contact = () => {
  return (
    <section id="contact" className='justify-center py-40'>
        <div className="flex justify-center">
            <h5>you can find me on the following</h5>
        </div>
        <div className='flex text-3xl pb-10 justify-center'>
            <div className='flex gap-5 py-5 text-sky-600'>
                <a href="https://github.com/victoriaemily" target="_blank"><AiFillGithub/></a>
                <a href="https://www.linkedin.com/in/victoriaemilychen/" target="_blank"><BsLinkedin/></a>
                <a href="https://invent.kde.org/victo" target="_blank"><SiKde/></a>
            </div>        
        </div>
    </section>
  )
}

export default Contact