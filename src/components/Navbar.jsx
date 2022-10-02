import React from 'react'
import { useState } from 'react'
import { menu, close, logoo, coding, idea } from '../assets';
import {navLinks} from '../constants'
import styles from '../style';
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className='w-full flex py-6 justify-between items-center navbar'>
      <ul className="list-none sm:flex justify-start items-center flex-1">
        <img src={logoo} alt="logo" className='w-[120px] h-120px] ' />
      </ul>
        <ul className="list-none sm:flex hidden justify-end items-center flex-initial" >
        <img src={idea} alt="logo" className='w-[120px] h-[120px] ' />
        </ul>
        <ul  className="list-none sm:flex hidden justify-end items-center flex-1">
        <img src={coding} alt="logo" className='w-[120px] h-120px]  ' />
        </ul>
       
    </nav>
  );
}

export default Navbar
