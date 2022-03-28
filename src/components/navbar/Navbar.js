import React, { useState } from 'react'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import './NavbarStyles.css'
import Button from 'react-bootstrap/Button';
const Navbar = () => {
    const [nav, setNav] = useState(false)
    const handleNav = () => setNav(!nav)


    return (
        <div name='top' className='navbar'>
            <div className="container">
                <div className="logo">
                    <SiDatabricks className='icon' />
                    <h1>VPP</h1>
                </div>

                <ul className={nav ? 'nav-menu active' : 'nav-menu'}>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/about'> O нас</Link></li>
                    <li><Link to='/contact'>Контакты</Link></li>
                    <li><Link to='/questions'>Вопросы</Link></li>
                    <Button>Sign in</Button>
                </ul>
                <div className="hamburger" onClick={handleNav}>
                    {!nav ? (<FaBars className='icon' />) : (<FaTimes className='icon' />)}
                </div>
            </div>
        </div>
    )
}

export default Navbar