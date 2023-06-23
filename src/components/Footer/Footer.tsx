import { FiGithub, FiLinkedin } from "react-icons/fi"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="hidden md:flex md:justify-center md:items-center">
        <div className="flex items-center gap-10">
            <ul className="flex items-center gap-2 mt-2">
                <li>
                    <Link to='/'><FiLinkedin className="text-lg"/></Link>
                </li>
                <li>
                    <Link to='/'><FiGithub className="text-lg"/></Link>
                </li>
            </ul>
            <p>&copy; 2023</p>
        </div>
    </div>
  )
}
