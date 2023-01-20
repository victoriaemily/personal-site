import React from 'react'
import Image from 'next/image';
import me from '../../public/proimg.png'

const About = () => {
  return (
    <section id="about" className='flex justify-center'>
        <div className="relative rounded-3xl p-10 max-w-lg mx-h-sm">
            <div className="text-2xl text-sky-600 pb-5 flex justify-center">
                about me
            </div>
            <div>
                <h5>currently i'm a sophomore computer engineering major at texas a&m</h5>
                <h5>i'm also an undergraduate researcher at the neuroergonomics lab at texas a&m, where i'm conducting 
                data science research by analyzing and visually interpreting very messy real life data</h5>
            </div>

        </div>
    </section>
  )
}

export default About