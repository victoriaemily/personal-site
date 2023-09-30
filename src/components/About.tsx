import React from 'react'
import '../scripts/fade'


const About = () => {
  return (
    <section id="about" className='fade-in-component flex justify-center'>
    <div className="grid md:flex-row lg:flex pb-10 px-10 max-w-3xl justify-center mx-auto w-80%">
        <div className="rounded-3xl flex items-center mr-10">
            <img className="rounded-3xl w-96 h-auto" src="vic.jpg" alt="Victoria's Image" />
        </div>
        <div className="text-xl text-black w-full md:w-96">
            <h5>{"i'm victoria, a junior computer engineering major ('25) at texas a&m. i'm passionate about research, leadership, and coding (of course!)"}</h5>
            <br></br>
            <h5>{"i'm president of the Society of Asian Scientists and Engineers @ TAMU! we host company workshops, socials, and serve as a valuable resource for aapi individuals (many of whom are first generation students) to develop as leaders and professionals!"}</h5>
            <h5>{"i also made our website :) check it out: "}<a className="underline" href="https://sasetamu.org">{"sasetamu.org"}</a></h5>
            <br></br>
            <h5>{"i'm also a student technician at TAMU HPRC where i help our users with using our high-performance computing clusters!"}</h5>
            <br></br>
        </div>
    </div>
    </section>
  )
}

export default About