import React from "react";
import './HeadComp.css';
import BasketPosts from './BasketPosts';
import { useState } from "react";

const Basket = ({posts}) => {
    return(
        <div className="Basket-block">
            <h1>Корзина</h1>
            <div className="posts-block">
                {posts.map(post =>
                    <BasketPosts basket={post} key={post.id}/>    
                )}
            </div>
            <button>Оформить заказ</button>
        </div>
    )
}

export default Basket;

