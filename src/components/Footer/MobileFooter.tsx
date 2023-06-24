import { Link } from 'react-router-dom'

export const MobileFooter = () => {
  return (
    <div className=" bg-black flex justify-center items-center md:hidden">
         <ul className='flex gap-4 items-center h-10'>
            <li><Link to='/'>Skills</Link></li>
            <li><Link to='/projects'>Project</Link></li>
            <li><Link to='/Sangodare Isaac Oluwatobi Resume.pdf'>Resume</Link></li>
        </ul> 
            <p>Mode btn</p>
    </div>
  )
}
