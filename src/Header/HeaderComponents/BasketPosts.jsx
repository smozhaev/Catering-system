import React from "react";
import './HeadComp.css';
import BasketButton from './BasketButton';

const BasketPosts = (props) => {
    // console.log(props)
    return(
        <div className="post-block">
            <div className="product-value">
                {props.basket.title}
            </div>
            <div className="post-content">
                <BasketButton basket={props.basket}/>
                <button className="delete-button">Удалить</button>
            </div>
        </div>
    )
}

export default BasketPosts;