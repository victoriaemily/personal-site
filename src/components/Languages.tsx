import React from 'react'

const Languages = () => {
  const techs = ['React', 'Node', 'Next', 'Python', 'C++', 'TypeScript', 'JavaScript', 'PostgreSQL', 'Matplotlib', 'NumPy', 'Git', 'Linux', 'MongoDB']
  const techItems = techs.map((tech) =>
  <div key={tech.toString()} className='w-fit shadow-md rounded-lg hover:bg-slate-100 p-2'>{tech}</div>
  );
  return (
    <>
    <div className ='flex justify-center'>
        <div className="grid grid-cols-2 max-w-md text-xl text-sky-600 gap-5 md:grid-cols-3">
            {techItems}
        </div>
    </div>
    </>
  )
}

export default Languages