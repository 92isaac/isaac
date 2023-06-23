import { FiGithub, FiLinkedin } from "react-icons/fi"
import { Link } from 'react-router-dom'

export const Footer = () => {
  return (
    <div className="hidden md:flex md:justify-center md:items-center">
        <div className="flex">
            <ul className="flex">
                <li>
                    <Link to='/'><FiLinkedin clasName="block"/></Link>
                </li>
                <li>
                    <Link to='/'><FiGithub clasName="block"/></Link>
                </li>
            </ul>
        </div>
    </div>
  )
}
