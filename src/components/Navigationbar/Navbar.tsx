import { NavLink, Link  } from 'react-router-dom'
import { styled } from 'styled-components'
import ToggleButton from '../../utilities/ToggleButton'
export const Navbar = () => {
  return (
    <Nav className='hidden md:flex justify-center lg:py-3 md:gap-4 md:items-center'>
        <ul className='flex gap-4 items-center mr-10'>
            <li><NavLink to='/'>Skills</NavLink></li>
            <li><NavLink to='/projects'>Project</NavLink></li>
            <li><NavLink to="https://wa.me/2348068290320" target="_blank">Contact</NavLink></li>
            <li><Link to={'/Sangodare Isaac Oluwatobi Resume.pdf'} target='_blank' rel='noreferrer' className='text-sm'>Resume</Link></li>
        </ul> 

        <ToggleButton/>
    </Nav>
  )
}


const Nav = styled.nav`
ul li a.active{
  font-style: italic;
  border-bottom: solid; 
  font-weight:bold;
}
`