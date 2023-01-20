import React from 'react'
import { useState } from 'react'

import {AiFillHome} from 'react-icons/ai'
import {BsFillPersonFill} from 'react-icons/bs'
import {BsFillJournalBookmarkFill} from 'react-icons/bs'
import {BsApp} from 'react-icons/bs'
import {MdEmail} from 'react-icons/md'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <div className="flex justify-center sticky top-0 z-50 p-10 gap-5 text-2xl backdrop-filter backdrop-blur-lg rounded-full">
      {/* <div>
        </dive */}
      <a href='#' onClick={() => setActiveNav('#')} ><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} ><BsFillPersonFill/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} ><BsFillJournalBookmarkFill/></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} ><BsApp/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail/></a>
    </div>
  )
}

export default Nav