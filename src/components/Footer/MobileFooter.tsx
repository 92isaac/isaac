import { Link } from 'react-router-dom';
import { GoProjectSymlink } from 'react-icons/go'
import { GiSkills } from 'react-icons/gi'
import { AiOutlineFilePdf } from 'react-icons/ai'

export const MobileFooter = () => {
  return (
    <div className=" bg-black flex justify-center items-center md:hidden">
         <ul className='flex gap-4 items-center'>
            <li className='text-center'>
              <GiSkills className='mx-auto my-0 text-lg' />
              <Link to='/' className='text-sm'>Skills</Link></li>
            <li className='text-center'>
              <GoProjectSymlink className='mx-auto my-0 text-2xl' />
              <Link to='/projects' className='text-sm'>Project</Link></li>
            <li className='text-center'>
                <AiOutlineFilePdf className='mx-auto my-0 text-2xl' />
              <Link to='/Sangodare Isaac Oluwatobi Resume.pdf' className='text-sm'>Resume</Link></li>
        </ul> 
            <p>Mode btn</p>
    </div>
  )
}
