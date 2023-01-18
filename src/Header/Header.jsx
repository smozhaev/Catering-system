import React from 'react';
import './Header.css';


const Header = () => {
    return(
        <header className="header" >
            <h1>EatBreak</h1>
            <ul className='ul-header'>
                <li className='li-header'><a href='/' class="mainn-mainn soft">Главная</a></li>
                <li className='li-header'><a href='/basket' class="bascet--mainn soft">Корзина</a></li>
                <li className='li-header'><a href='/personalarea' class="personal-account soft">Вход</a></li>
            </ul>
        </header>
    )
}

export default Header;