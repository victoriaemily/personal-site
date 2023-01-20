import React from 'react'
import {SiNextdotjs} from 'react-icons/si'
import {DiReact} from 'react-icons/di'
import {SiTypescript} from 'react-icons/si'
import {SiTailwindcss} from 'react-icons/si'
import {DiMongodb} from 'react-icons/di'
import todolist from '../../public/todo.jpg'
import website from '../../public/website.jpg'

import Image from 'next/image';
import {AiFillGithub} from 'react-icons/ai'

const Projects = () => {
  return (
    <section id="projects" className='flex justify-center py-5 gap-5'>
     
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="../../tests.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">to-do list</h2>
                <p>this to-do list uses a mongodb backend, ran on the cloud on mongo atlas, with a react & html/css frontend</p>
                <div className="card-actions justify-end">
                <a href="https://github.com/victoriaemily/todoList" className="btn gap-3"><AiFillGithub/>source code</a>
                </div>
            </div>
            </div>

            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><img src="../../website2.jpg" alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">victoria's site</h2>
                <p>a project using tailwind css, typescript, & react for the frontend and next.js for the backend framework</p>
                <div className="card-actions justify-end">
                <a href="https://github.com/victoriaemily/personal-site" className="btn gap-3"><AiFillGithub/>source code</a>
                </div>
            </div>
            </div>
            

            
      



    </section>
  )
}

export default Projects