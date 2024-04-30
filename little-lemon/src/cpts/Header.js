import React, { Fragment } from 'react'
import logo from '../Logo.svg'
import Nav from './Nav'

function Header() {
  return (
    <Fragment>
        <header className='header'>
            <img src={logo} alt='little lemon logo'/>
            <Nav />
        </header>
    </Fragment>
  )
}

export default Header
