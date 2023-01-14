import React from 'react';
import './Drinks.css'

const Drinks = () => {
    return(
        <div className="drink-block">
            <a className='link-drink' href='/'>назад</a>
            <h1>Drinks</h1>
            <ul className="ul-drink">
                <li className="li-drink"><a href='/drinks/tea'>Чай</a></li>
                <li className="li-drink"><a href='/hot'>Кофе</a></li>
                <li className="li-drink"><a href='/drinks'>Вода</a></li>
                <li className="li-drink"><a href='/drinks'>Энэргетики</a></li>
                <li className="li-drink"><a href='/drinks'>Газировка</a></li>
            </ul>
        </div>
    )
}

export default Drinks;