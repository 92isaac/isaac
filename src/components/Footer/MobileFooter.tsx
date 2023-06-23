import { Link } from 'react-router-dom'

export const MobileFooter = () => {
  return (
    <div className=" bg-black flex justify-center items-center md:hidden">
         <ul className='flex gap-4 items-center h-10'>
            <li><Link to='/'>Project</Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/Sangodare Isaac Oluwatobi Resume.pdf'>Resume</Link></li>
            <li><Link to='/skills'>Mode btn</Link></li>
        </ul> 
    </div>
  )
}
