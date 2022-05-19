import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { FaBars, FaTimes, FaGithub } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);


  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt='Logo Image' style={{width: '120px'}} />            
      </div>
                
          {/* MENU */}

          <ul className='hidden md:flex'>
            <li className='hover:scale-110 duration-100 hover:font-bold'>
              <Link to='home' smooth={true} duration={500}>Home</Link>
            </li>
            <li className='hover:scale-110 duration-100 hover:font-bold'>
              <Link to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li className='hover:scale-110 duration-100 hover:font-bold'>
              <Link to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li className='hover:scale-110 duration-100 hover:font-bold'>
              <Link to='contact' smooth={true} duration={500}>Contact</Link>
            </li>
          </ul>
         
          {/* HAMBURGER */}

          <div onClick={handleClick} className='md:hidden z-10'>
            {!nav ? <FaBars /> : <FaTimes />}
          </div>

          {/* MOBILE */}

          <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>
              <Link to='home' smooth={true} duration={500} onClick={handleClick}>Home</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to='about' smooth={true} duration={500} onClick={handleClick}>About</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to='skills' smooth={true} duration={500} onClick={handleClick}>Skills</Link>
            </li>
            <li className='py-6 text-4xl'>
              <Link to='contact' smooth={true} duration={500} onClick={handleClick}>Contact</Link>
            </li>
          </ul>

          {/* SOCIAL ICONS */}

          <div className='hidden lg:flex fixed flex-col top-[30%] left-0'>
            <ul>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333]'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://github.com/aleksipaunonen'>
                  Github <FaGithub size={30}/>
                </a>
              </li>
              <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600'>
                <a className='flex justify-between items-center w-full text-gray-300'
                href='https://drive.google.com/file/d/1PM0vzd2kk_zsI81BXG3vN-3BAph8W6nM/view?usp=sharing'>
                  Resume <BsFillPersonLinesFill size={30}/>
                </a>
              </li>
            </ul>
          </div>

    </div>
  )
}

export default Navbar