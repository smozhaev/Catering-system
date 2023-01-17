import React from "react";
import './BasketComp.css';
import BasketButton from './BasketButton';
import AmountButton from './AmountButton';

const BasketPosts = (props) => {
    // console.log(props)
    return(
        <div className="post-block">
            <div className="product-value">
                {props.basket.title}
            </div>
            <div className="amount-content">
                <AmountButton basket={props.basket}/>
            </div>
            <div className="post-content">
                <BasketButton basket={props.basket}/>
                <button className="delete-button">Удалить</button>
            </div>
        </div>
    )
}

export default BasketPosts;