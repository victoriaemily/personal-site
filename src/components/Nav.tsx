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
    <div className="flex justify-center sticky top-0 z-50 p-10 gap-1">
      <a href='#' onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiFillHome/></a>
      <a href='#about' onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><BsFillPersonFill/></a>
      <a href='#experience' onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><BsFillJournalBookmarkFill/></a>
      <a href='#projects' onClick={() => setActiveNav('#projects')} className={activeNav === '#projects' ? 'active' : ''}><BsApp/></a>
      <a href='#contact' onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><MdEmail/></a>
    </div>
  )
}

export default Nav