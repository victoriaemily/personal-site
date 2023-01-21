import React from 'react'
import {AiFillGithub} from 'react-icons/ai'

import {SiNextdotjs} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {SiTypescript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {DiMongodb} from 'react-icons/di'

const Projects = () => {
  return (
    <section id="projects" className='grid md:flex justify-center py-5 gap-5 text-black'>
     
            <div className="card w-100 bg-base-100 shadow-lg md:w-96">
            <figure><img src="../../tests.jpg" alt="todo list image" /></figure>
            <div className="card-body bg-white rounded-lg">
                <h2 className="card-title pb-3">{"to-do list"}</h2>
                <p>{"this to-do list uses a mongodb backend, ran on the cloud on mongo atlas, with a react & html/css frontend"}</p>
                <div className="card-actions justify-between">
                    <div className='flex gap-1.5 py-4 text-sky-600 text-2xl md:gap-5'>
                      <a className='hover:text-sky-900'><DiMongodb/></a>
                      <a className='hover:text-sky-900'><DiReact/></a>
                    </div>    

                <a href="https://github.com/victoriaemily/todoList" className="btn bg-slate-400 text-2xl text-white"><AiFillGithub/></a>
                </div>
            </div>
            </div>

            <div className="card w-100 bg-base-100 shadow-xl md:w-96">
            <figure><img src="../../website2.jpg" alt="website image" /></figure>
            <div className="card-body bg-white rounded-lg">
                <h2 className="card-title pb-3">{"victoria's site"}</h2>
                <p className="pb-10">{"a project using tailwind css, typescript, & react for the frontend and next.js for the backend framework"}</p>
                <div className="card-actions justify-between">
                <div className='flex gap-1 py-4 text-sky-600 text-2xl md:gap-5'>
                      <a className='hover:text-sky-900'><SiTailwindcss/></a>
                      <a className='hover:text-sky-900'><SiTypescript/></a>
                      <a className='hover:text-sky-900'><DiReact/></a>
                      <a className='hover:text-sky-900'><SiNextdotjs/></a>
                  </div> 
                <a href="https://github.com/victoriaemily/personal-site" className="btn bg-slate-400	text-2xl text-white"><AiFillGithub/></a>
                </div>
            </div>
            </div>
            

            
      



    </section>
  )
}

export default Projects