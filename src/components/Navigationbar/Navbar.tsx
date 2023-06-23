import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className='hidden md:flex justify-center py-3 md:gap-4 md:items-center'>
        <ul className='flex gap-4 items-center'>
            <li><Link to='/'>Project</Link></li>
            <li><Link to='/skills'>Skills</Link></li>
            <li><Link to='/Sangodare Isaac Oluwatobi Resume.pdf'>Resume</Link></li>
        </ul> 

        <p>Mode btn</p>
    </nav>
  )
}
