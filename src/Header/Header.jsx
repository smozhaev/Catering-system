import React from 'react';
import './Header.css';


const Header = () => {
    return(
        <header className="header" >
            <h1>Вкусняш</h1>
            <ul className='ul-header'>
                <li className='li-header'><a className='link-header' href='/'>Главная</a></li>
                <li className='li-header'><a className='link-header' href='/basket'>Корзина</a></li>
                <li className='li-header'><a className='link-header' href='/personalarea'>вход</a></li>
            </ul>
        </header>
    )
}

export default Header;