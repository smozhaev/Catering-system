import React from 'react';
import './Categories.css'

const Categories = () => {
    return(
        <div className="drink-block">
            <a className='link-drink' href='/'>назад</a>
            <h1 className='title-drinks'>Drinks</h1>
            <ul className="ul-drink">
                <li className="li-drink"><a className="a-drink" href='/drinks/tea'>Чай</a></li>
                <li className="li-drink"><a className="a-drink" href='/hot'>Кофе</a></li>
                <li className="li-drink"><a className="a-drink" href='/drinks'>Вода</a></li>
                <li className="li-drink"><a className="a-drink" href='/drinks'>Энэргетики</a></li>
                <li className="li-drink"><a className="a-drink" href='/drinks'>Газировка</a></li>
            </ul>
        </div>
    )
}

export default Categories;