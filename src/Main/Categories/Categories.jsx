import React from 'react';
import './Categories.css'

const Categories = () => {
    return(
        <div className="drink-block">
            <a className='link-drink' href='/'>назад</a>
            <h1 className='title-drinks'>Напитки</h1>
            <ul className="ul-drink">
                <li className="li-drink picture11"><a className="a-drinkkss" href='/drinks/tea'>Газированные напитки</a></li>
                <li className="li-drink picture12"><a className="a-drink" href='/hot'>Соки</a></li>
                <li className="li-drink picture13"><a className="a-drink" href='/drinks'>Кофе</a></li>
                <li className="li-drink picture14"><a className="a-drink" href='/drinks'>Чай</a></li>
            </ul>
        </div>
    )
}

export default Categories;