import React from 'react'
import projectData from '../Data/projectData .js'
import ProjectList from './ProjectList'

export default function Projects() {
  return (
    <div id='projects' className='flex min-h-screen w-full flex-col items-center justify-center gap-16 p-4 md:py-24'>
     <h1 className='text-5xl font-light text-white md:text-6xl'>My Projects</h1>
     <div className='flex w-full max-w-[1000px] flex-col gap-16 text-white'>
{
     projectData.map((project, index)=>(<ProjectList key={index} project={project} />))
}
     </div>
    </div>
  )
}
