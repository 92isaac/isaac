 import { FiExternalLink } from 'react-icons/fi'
 import { Link, useNavigate } from 'react-router-dom'
// import { useRef } from 'react'
import { projects } from '../../utilities/data'



export const Project = () => {
  const navigate = useNavigate()
  return (
    <div>
        <div className="project__container">
        <div className="flex gap-2 flex-wrap" >
          {projects.map((project) => (
            <div className="w-full md:w-[200px] md:h-[280px] lg:w-[220px] lg:h-[300px] relative overflow-hidden" key={project.name} onClick={()=>navigate(`/project/${project.id}`)}>
              <img src={project.img} alt="project " className='projectimg w-full h-full object-cover transform hover:scale-105 transition duration-1000 ease-in-out'/>
              <div className="absolute bottom-0 bg-black left-0 w-full text-white transition text-center opacity-0 hover:opacity-100">
                <h1 className='font-bold text-2xl mt-10'>{project.name}</h1>
                <p>{project.description}</p>
                <div className="flex items-center w-full rounded-full">
                  <Link to={project.webLink} className='block' target="_blank" rel="noreferrer">
                    Website <FiExternalLink />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

 