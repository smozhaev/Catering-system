import React from "react";
import './BasketComp.css';
import BasketButton from './BasketButton';
import AmountButton from './AmountButton';
import { useState, useEffect } from "react";
import Data from './../../State';

const BasketPosts = ({handleRemoveFromCart, ...props}) => {
    // console.log(props)
    
    let idCounts = `counts ${props.id}`
    
    const [counts, setCounts] = useState(localStorage.getItem(idCounts) !== null ? JSON.parse(localStorage.getItem(idCounts)) : 1);

    useEffect(() => {
        localStorage.setItem(idCounts, JSON.stringify(counts));
      }, [counts]
    );
    
    let Plus = () => setCounts(count => count += 1);

    let Minus = () => {
        setCounts(count =>
            count === 1 ? handleRemoveFromCart(props.id) : count -= 1 
        );
    }
    console.log(counts,'after')
    let Price =  Data[props.id].price * counts;
    return(
        
        <li className="li-products">
            <div className='img-p'></div>
            <div className='product-text-block'>
                <h5 className='h5'>{props.title}</h5>
                {/* <p className='product-p'>{Data[props.id].counter}x</p> */}
                <div className="basket-button">
            <div className="counter-container">
              <button onClick={Minus} className='plus-button'>-</button>
              <p className=' counter'>{counts}</p>
              <button onClick={Plus} className='plus-button'>+</button> 
            </div>
        </div>
            </div>
            <p className='price'>{Price}₽</p>
            <button
                onClick={() => handleRemoveFromCart(props.id)} 
                className="delete-button"
            >
                X
            </button>
        </li>
            

        
        
    )
}

export default BasketPosts;