import React from 'react'
import {AiFillGithub} from 'react-icons/ai'
import {SiNextdotjs} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {SiTypescript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import '../scripts/fade'

const Projects = () => {
  return (
    <section id="projects" className='fade-in-component grid md:flex-row lg:flex justify-center py-5 gap-5 text-black'>
     
            <div className="card w-100 bg-base-100 shadow-lg md:w-96">
            <figure><img src="../../sase.png" alt="image of sase website" /></figure>
            <div className="card-body bg-white">
                <h2 className="card-title pb-3">{"SASE TAMU"}</h2>
                <p>{"a fully responsive website for a student organization with a cloud database system, using MongoDB Atlas to store and display member participation and points"}</p>
                <div className="card-actions justify-between">
                  <div className='flex gap-1 py-4 text-sky-600 text-2xl md:gap-5'>
                        <a className='hover:text-sky-900'><SiTailwindcss/></a>
                        <a className='hover:text-sky-900'><SiTypescript/></a>
                        <a className='hover:text-sky-900'><DiReact/></a>
                        <a className='hover:text-sky-900'><SiNextdotjs/></a>
                  </div> 
                  <a href="https://github.com/victoriaemily/sase-tamu" className="btn bg-slate-800 text-2xl text-white"><AiFillGithub/></a>
                </div>
            </div>
            </div>

            <div className="card w-100 bg-base-100 shadow-xl md:w-96">
            <figure><img src="../../website2.jpg" alt="img of home screen of victoria's website" /></figure>
            <div className="card-body bg-white">
                <h2 className="card-title pb-3">{"victoria's site"}</h2>
                <p className="pb-10">{"a project using tailwind css, typescript, & react for the frontend and next.js for the backend framework - it's also always being updated as i learn new things :)"}</p>
                <div className="card-actions justify-between">
                  <div className='flex gap-1 py-4 text-sky-600 text-2xl md:gap-5'>
                        <a className='hover:text-sky-900'><SiTailwindcss/></a>
                        <a className='hover:text-sky-900'><SiTypescript/></a>
                        <a className='hover:text-sky-900'><DiReact/></a>
                        <a className='hover:text-sky-900'><SiNextdotjs/></a>
                  </div> 
                  <a href="https://github.com/victoriaemily/personal-site" className="btn bg-slate-800	text-2xl text-white"><AiFillGithub/></a>
                </div>
            </div>
            </div>
            
    </section>
  )
}

export default Projects