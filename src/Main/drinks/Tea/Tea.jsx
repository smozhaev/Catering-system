import React from 'react';
import './Tea.css';
import AddButton from './AddButton/AddButton';

const Tea = () => {
    return(
        <div className='tea-block'>
            <a className='link-back' href='/'>назад</a>
            <h1>Чай</h1>
            <ul className="ul-tea">
                <li className="li-tea">
                    <h2>Чай черный</h2>
                    <AddButton/>
                </li>
                <li className="li-tea">
                    <h2>Чай зеленый</h2>
                    <AddButton/>
                </li>
                <li className="li-tea">
                    <h2>Чай lipto</h2>
                    <AddButton/>
                </li>
                <li className="li-tea">
                    <h2>Чай фьюсти</h2>
                    <AddButton/> 
                </li>
                <li className="li-tea">
                    <h2>Чай фьюсти клубника</h2> 
                    <AddButton/>
                </li>
            </ul>
        </div>
    )
}

export default Tea;