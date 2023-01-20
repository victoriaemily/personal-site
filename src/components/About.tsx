import React from 'react'
import Image from 'next/image';
import me from '../../public/proimg.png'

const About = () => {
  return (
    <section id="about" className='flex justify-center'>
        <div className="flex-row rounded-3xl p-10 max-w-lg mx-h-sm justify-center">
            <div className="text-2xl text-sky-600 pb-5">
                about me
            </div>
            <div className="text-xl text-black">
                <h5>currently, i'm a sophomore computer engineering major at texas a&m! i'm also an 
                  undergraduate researcher at the neuroergonomics lab at texas a&m, where i'm conducting 
                data analysis by analyzing and visually interpreting very messy real life data</h5>
            </div>

        </div>
    </section>
  )
}

export default About