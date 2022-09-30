import React, { useEffect, useState } from 'react'
import { netflixAvatar, netflixLogoBig } from '../../constants/links'
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
        <img className='nav__logo' src={netflixLogoBig} alt='netflix logo' />
        <img className='nav__avatar' src={netflixAvatar} alt='netflix avatar' />
      </div>
    </div>
  )
}

export default Navbar
