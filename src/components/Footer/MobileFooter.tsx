import { Link } from 'react-router-dom';
import { GoProjectSymlink } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineFilePdf } from 'react-icons/ai'
import { GlobalUseContext } from '../../utilities/Context';
import ToggleButton from '../../utilities/ToggleButton';

export const MobileFooter = () => {
  const { checked, handleClick } = GlobalUseContext()

  return (
    <div className={` ${checked ? 'bg-black text-white' : 'text-black bg-white' } flex justify-center items-center md:hidden`}>
         <ul className='flex gap-4 items-center h-12 mr-4'>
            <li className='text-center'>
              <GiSkills className='mx-auto my-0 text-lg' />
              <Link to='/' className='text-sm'>Skills</Link></li>
            <li className='text-center' onClick={()=>handleClick()}>
              <GoProjectSymlink className='mx-auto my-0 text-lg' />
              <Link to='/projects' className='text-sm'>Project</Link></li>
            <li className='text-center'>
                <AiOutlineFilePdf className='mx-auto my-0 text-lg' />
              <Link to={'/Sangodare Isaac Oluwatobi Resume.pdf'} target='_blank' rel='noreferrer' className='text-sm'>Resume</Link></li>
        </ul> 
            <ToggleButton/>
    </div>
  )
}
