 import { FiExternalLink } from 'react-icons/fi'
 import { Link, useNavigate } from 'react-router-dom'
import { projects } from '../../utilities/data'
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";
import { useEffect } from 'react';
import { FadeIn } from '../../animation/FadeIn';
import { GlobalUseContext } from '../../utilities/Context';



export const Project = () => {
  // const divRef = useRef<HTMLDivElement | null>(null);
  const navigate = useNavigate()
  const controls = useAnimation();
  const [ref, inView] = useInView();
  const {divRef,} = GlobalUseContext()
 
  useEffect(() => {
    if (inView) {
      controls.start('animate');
    }
  }, [controls, inView]);
  return (
    <div >
        <div className="project__container" tabIndex={0} ref={divRef}>
        <div className="flex gap-2 flex-wrap" ref={ref}>
          {projects.map((project) => (
              <FadeIn key={project.name} >
            <div className="w-full my-1 md:w-[200px] md:h-[280px] lg:w-[220px] lg:h-[300px] relative overflow-hidden"  onClick={()=>navigate(`/project/${project.id}`)}>
              <img src={project.img} alt="project " className='projectimg w-full cursor-pointer h-full object-cover transform hover:scale-105 transition duration-1000 ease-in-out' />
              <div className="absolute bottom-0 bg-black left-0 w-full text-white transition text-center opacity-0 hover:opacity-100">
                <h1 className='font-bold text-2xl mt-10'>{project.name}</h1>
                <p>{project.description.slice(0,35)}...</p>
                <div className="flex items-center w-full rounded-full">
                  <Link to={project.webLink} className='block' target="_blank" rel="noreferrer">
                    Website <FiExternalLink />
                  </Link>
                </div>
              </div>
            </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  )
}

 