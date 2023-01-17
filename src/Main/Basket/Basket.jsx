import React from "react";
import './BasketComp.css';
import BasketPosts from './BasketPosts';


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

