import React from 'react';
import { NavLink } from 'react-router-dom';
import './Main.css'

const Main = () => {
    return(
        <div className="main-block">
            <h2>Главная</h2>
            <ul className="ul-main">
                <li className="li-main picture1"><a href='/drinks' class="btn btn-oval">Напитки</a></li>
                <li className="li-main picture2"><a href='/hot' class="btn btn-oval">Горячее</a></li>
                <li className="li-main picture3"><a href='/drinks' class="btn btn-ovall">Холодные закуски</a></li>
                <li className="li-main picture4"><a href='/drinks' class="btn btn-oval">Выпечка</a></li>
                <li className="li-main picture5"><a href='/drinks' class="btn btn-ovall">Сладости и снеки</a></li>
            </ul>
        </div>
    )
}



export default Main;

