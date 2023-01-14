import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return(
        <div className="main-block">
            <h1>Главная</h1>
            <ul className="ul-main">
                <li className="li-main"><a href='/drinks'>напитки</a></li>
                <li className="li-main"><a href='/hot'>Горячее</a></li>
                <li className="li-main"><a href='/drinks'>Бутер</a></li>
                <li className="li-main"><a href='/drinks'>Блок4</a></li>
                <li className="li-main"><a href='/drinks'>Блок5</a></li>
                <li className="li-main"><a href='/drinks'>Блок6</a></li>
                <li className="li-main"><a href='/drinks'>Блок7</a></li>
                <li className="li-main"><a href='/drinks'>Блок8</a></li>
            </ul>
        </div>
    )
}



export default Main;

