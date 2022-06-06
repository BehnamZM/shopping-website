import React, { useState } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom'
import { FiPhoneCall } from 'react-icons/fi'
import { HiOutlineShoppingBag } from 'react-icons/hi'
import { FiUsers } from 'react-icons/fi'
import { BsSearch } from 'react-icons/bs'
import { TiThMenuOutline } from 'react-icons/ti'
import { VscClose } from 'react-icons/vsc'
import { IoIosArrowDown } from 'react-icons/io'
import Dropdown from '../Dropdown/Dropdown'
import Searchbox from '../searchbox/Searchbox'
import SummeryshoppingCart from '../summeryshoppingCart/SummeryShoppingCart'


function Nav() {
  const [showNavbar, setShowNavbar] = useState(false)
  const [showSubmenu, setShowSubmenu] = useState(false)
  const [showSearchbox, setShowSearchbox] = useState(false)
  const [showShoppingCart, setShowShoppingCart] = useState(false)
  const [navbar, setNavbar] = useState(false)

  const showNavbarHandler = () => {
    setShowNavbar(!showNavbar)
  }

  const showSubmenuHandler = () => {
    setShowSubmenu(!showSubmenu)

  }

  const showSearchboxHandler = () => {
    setShowSearchbox(!showSearchbox)
  }
  const showShoppingCardHandler = () => {
    setShowShoppingCart(!showShoppingCart)
  }

  const changeBackground = () => {
    if (window.scrollY >= 200) {
      setNavbar(true)
    } else {
      setNavbar(false)
    }
  }

  window.addEventListener('scroll', changeBackground)



  return (
    <>
      <nav className={navbar ? 'fixed-nav' : ''}>
        <div className="nav-part-one container">
          <div className="icons-part">
            <div className="nav-icon menu-icon" onClick={showNavbarHandler}>
              <TiThMenuOutline className='icon' />
            </div>
            <div className="nav-icon shopping-icon" onClick={showShoppingCardHandler}>
              <HiOutlineShoppingBag className='icon' />
              <span>0</span>
            </div>
            <Link to='/login-register'>
              <div className="nav-icon user-icon">
                <FiUsers className='icon' />
              </div>
            </Link>
            <div className="nav-icon search-icon" onClick={showSearchboxHandler}>
              <BsSearch className='icon' />
            </div>
          </div>
          <div className="logo-part">
            <img src="/src/assets/logo.png" />
          </div>
          <div className="call-with-us">
            <span>+98 9201236547</span>
            <FiPhoneCall className="call-icon" />
          </div>
        </div>

        <div className={showNavbar ? 'navbar show'
          : 'navbar hidden'}>
          <VscClose onClick={showNavbarHandler} className="close-icon" />
          <ul>
            <li>
              <Link to="/">خانه</Link>
              <IoIosArrowDown className='submenu-icon' />
            </li>
            <li
              className='product-link'
              onMouseEnter={showSubmenuHandler}
              onMouseLeave={showSubmenuHandler}>
              <Link to="/products">فروشگاه</Link>
              <IoIosArrowDown
                className='submenu-icon'
                onClick={showSubmenuHandler} />

              <Dropdown className='dropdown' show={showSubmenu} />
            </li>
            <li>
              <Link to="/about">درباره ما</Link>
              <IoIosArrowDown className='submenu-icon' />
            </li>
            <li>
              <Link to="/blog">بلاگ</Link>
              <IoIosArrowDown className='submenu-icon' />
            </li>
            <li>
              <Link to="/contact">ارتباط با ما</Link>
              <IoIosArrowDown className='submenu-icon' />
            </li>
          </ul>
        </div>
      </nav>
      <Searchbox show={showSearchbox} click={showSearchboxHandler} />
      <SummeryshoppingCart show={showShoppingCart} click={showShoppingCardHandler} />
    </>
  )
}

export default Nav