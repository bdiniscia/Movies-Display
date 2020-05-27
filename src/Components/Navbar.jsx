import { Link } from 'react-router-dom'
import DropdownButton from 'react-bootstrap/DropdownButton'
import Dropdown from 'react-bootstrap/Dropdown'

import React from 'react'
import './Navbar.sass'


const Navbar = () => {
    return (
        <div className='navbarSite'>
            <Link to='/' style={{textDecoration: 'none' }}>
                <img src={require('../img/nunchee-test.png')} alt='logo' className='logo'/>
            </Link>
            <div className='navbarLinks'>
                <Link to='/Teoría' style={{textDecoration: 'none', color: '#fff' }}>
                    <span>Teoría</span>
                </Link>
                <Link to='/Contenidos' style={{textDecoration: 'none', color: '#fff' }}>
                    <span>Playlist</span>
                </Link>
                <Link to='/Contadores' style={{textDecoration: 'none', color: '#fff' }}>
                    <span>Contadores</span>
                </Link>
            </div>
            <div className='divDropdown'>
                <DropdownButton
                    alignRight
                    title="Secciones"
                    id="dropdown-menu-align-right"
                    className='dropdownMobile'
                    >
                    <Dropdown.Item eventKey="1" href='/Teoria'>Teoría</Dropdown.Item>
                    <Dropdown.Item eventKey="2" href='/Contenidos'>Playlist</Dropdown.Item>
                    <Dropdown.Item eventKey="3" href='/Contadores'>Contadores</Dropdown.Item>
                </DropdownButton>
            </div>
        </div>
    )
}

export default Navbar
