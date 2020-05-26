import React from 'react'
import './Navbar.sass'

const Navbar = () => {
    return (
        <div className='navbarSite'>
            <img src={require('../img/nunchee-test.png')} alt='logo' className='logo'/>
            <div className='navbarLinks'>
                <span>Teoría</span>
                <span>Playlist</span>
                <span>Contador</span>
            </div>
        </div>
    )
}

export default Navbar
