import React from "react";
import './HeadComp.css';
import BasketPosts from './BasketPosts';

const Basket = (props) => {
    
    return(
        <div className="Basket-block">
            <BasketPosts basket={props.basket}/>
            {/* <BasketPosts/> */}
            {/* <BasketPosts/> */}
            {/* <BasketPosts/> */}
            {/* <BasketPosts/> */}
            а
            <button>Оформить заказ</button>
        </div>
    )
}

export default Basket;

