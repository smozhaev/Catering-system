import React from "react";
import './BasketComp.css';
import BasketButton from './BasketButton';
import AmountButton from './AmountButton';

const BasketPosts = ({handleRemoveFromCart, fMinus, fPlus, ...props}) => {
    // console.log(props)
    return(
        
        <li className="li-products">
            <div className='img-p'></div>
            <div className='product-text-block'>
                <h5 className='h5'>{props.title}</h5>
                <p className='product-p'>наличие: {props.amount}</p>
            </div>
            
            <p className='price'>{props.price}₽</p>
            <button
                onClick={() => handleRemoveFromCart(props.id)} 
                className="delete-button"
            >
                Удалить
            </button>
        </li>
            

        
        
    )
}

export default BasketPosts;