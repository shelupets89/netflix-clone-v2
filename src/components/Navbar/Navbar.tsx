import React, { useEffect, useState } from 'react'
import { NFX_LOGO_AVATAR, NFX_LOGO_BIG } from '../../constants/links'
import './Navbar.scss'

const Navbar = () => {
  const [show, setShow] = useState<boolean>(false)

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', transitionNavBar)
    return () => window.removeEventListener('scroll', transitionNavBar)
  }, [])

  return (
    <div className={`nav ${show && 'nav_black'}`}>
      <div className='nav__contents'>
        <img className='nav__logo' src={NFX_LOGO_BIG} alt='netflix logo' />
        <img className='nav__avatar' src={NFX_LOGO_AVATAR} alt='netflix avatar' />
      </div>
    </div>
  )
}

export default Navbar
