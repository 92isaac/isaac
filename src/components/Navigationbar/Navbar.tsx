import { NavLink } from 'react-router-dom'
import { styled } from 'styled-components'
export const Navbar = () => {
  return (
    <Nav className='hidden md:flex justify-center lg:py-3 md:gap-4 md:items-center'>
        <ul className='flex gap-4 items-center'>
            <li><NavLink to='/'>Skills</NavLink></li>
            <li><NavLink to='/projects'>Project</NavLink></li>
            <li><NavLink to='/Sangodare Isaac Oluwatobi Resume.pdf'>Resume</NavLink></li>
        </ul> 

        <p>Mode btn</p>
    </Nav>
  )
}


const Nav = styled.nav`
ul li a.active{
  color:yellow;
  font-weight:bold;
}
`