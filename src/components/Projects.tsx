import React from 'react'
import {AiFillGithub} from 'react-icons/ai'

import {SiNextdotjs} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {SiTypescript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {DiMongodb} from 'react-icons/di'

const Projects = () => {
  return (
    <section id="projects" className='flex justify-center py-5 gap-5 text-black'>
     
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="../../tests.jpg" alt="Shoes" /></figure>
            <div className="card-body bg-white rounded-lg">
                <h2 className="card-title pb-3">{"to-do list"}</h2>
                <p>{"this to-do list uses a mongodb backend, ran on the cloud on mongo atlas, with a react & html/css frontend"}</p>
                <div className="card-actions justify-between">
                    <div className='flex gap-7 py-4 text-sky-600 text-2xl'>
                      <a className='hover:text-sky-900'><DiMongodb/></a>
                      <a className='hover:text-sky-900'><DiReact/></a>
                    </div>    

                <a href="https://github.com/victoriaemily/todoList" className="btn gap-3 bg-gray-600 text-2xl text-white"><AiFillGithub/></a>
                </div>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="../../website2.jpg" alt="Shoes" /></figure>
            <div className="card-body bg-white rounded-lg">
                <h2 className="card-title pb-3">{"victoria's site"}</h2>
                <p className="pb-10">{"a project using tailwind css, typescript, & react for the frontend and next.js for the backend framework"}</p>
                <div className="card-actions justify-between">
                <div className='flex gap-7 py-4 text-sky-600 text-2xl'>
                      <a className='hover:text-sky-900'><SiTailwindcss/></a>
                      <a className='hover:text-sky-900'><SiTypescript/></a>
                      <a className='hover:text-sky-900'><DiReact/></a>
                      <a className='hover:text-sky-900'><SiNextdotjs/></a>
                  </div> 
                <a href="https://github.com/victoriaemily/personal-site" className="btn gap-3 bg-gray-600 text-2xl text-white"><AiFillGithub/></a>
                </div>
            </div>
            </div>
            

            
      



    </section>
  )
}

export default Projects