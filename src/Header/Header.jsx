import React from 'react';
import './Header.css';
import './HeaderComponent/Group19.svg';
import mainLogo from '../Header/xdxdxd.png';
import { Link } from 'react-router-dom';
const Header = () => {
    return(
        <header className="header " >
            <img src={mainLogo} className='rich-logo'/>
            <ul className='ul-header'>
                <li className='li-box'><Link to='/' className="li-header">Главная</Link></li>
                <li className='li-box'><Link to='/basket' className="li-header">Корзина</Link></li>
                {/* <li className='li-header'><a href='/personalarea' class="personal-account soft">Вход</a></li> */}
            </ul>
        </header>
    )
}

export default Header;