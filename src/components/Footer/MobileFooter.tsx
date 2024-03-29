import { NavLink, Link } from 'react-router-dom';
import { GoProjectSymlink } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { BiSolidMessageDetail } from 'react-icons/bi'
import { GlobalUseContext } from '../../utilities/Context';
import ToggleButton from '../../utilities/ToggleButton';
import { styled } from 'styled-components';

export const MobileFooter = () => {
  const { checked, handleClick } = GlobalUseContext()

  return (
    <Div className={`-ml-5 ${checked ? 'bg-black text-white' : 'text-black bg-[#e5e5e5]' } flex justify-center items-center md:hidden`}>
         <ul className='flex gap-4 items-center h-16 md:h-10 mr-4'>
            <li className='text-center'>
              <NavLink to='/' className='text-sm'>
              <GiSkills className='mx-auto my-0 text-lg' />
                Skills</NavLink></li>
            <li className='text-center' onClick={()=>handleClick()}>
              <NavLink to='/projects' className='text-sm'>
              <GoProjectSymlink className='mx-auto my-0 text-lg' />
                Project</NavLink></li>
            <li className='text-center'>
                <BiSolidMessageDetail className='mx-auto my-0 text-lg' />
              <Link to="https://wa.me/2348068290320" target="_blank" rel='noreferrer' className='text-sm'>Contact</Link></li>
            <li className='text-center'>
                <AiOutlineFilePdf className='mx-auto my-0 text-lg' />
              <Link to={'/Sangodare Isaac Oluwatobi Resume.pdf'} target='_blank' rel='noreferrer' className='text-sm'>Resume</Link></li>
        </ul> 
            <ToggleButton/>
    </Div>
  )
}


const Div = styled.div`
  ul li a.active{
    color:rgb(34 197 94);
    font-weight:900;
  }
`