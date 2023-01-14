import React from 'react';
import './Hoteat.css'

const HotEat = () => {
    return(
        <div className="drink-block">
            <a className='link-drink' href='/'>назад</a>
            <h1>Drinks</h1>
            <ul className="ul-drink">
                <li className="li-drink"><a href='/hot/soupe'>Суп</a></li>
            </ul>
        </div>
    )
}

export default HotEat;