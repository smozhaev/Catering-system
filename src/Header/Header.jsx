import React from 'react';
import './Header.css';


const Header = () => {
    return(
        <header className="header">
            <h1>Logo</h1>
            <ul className='ul-header'>
                <li className='li-header'><a href='/'>Главная</a></li>
                <li className='li-header'><a href='/basket'>Корзина</a></li>
                <li className='li-header'><a href='/personalarea'>Личный кабинет</a></li>
            </ul>
        </header>
    )
}

export default Header;