import React from "react";
import './BasketComp.css';
import BasketPosts from './BasketPosts';
import Data from './../../State';
import { Link } from 'react-router-dom';


const Basket = ({basketProducts, handleRemoveFromCart, fMinus, fPlus}) => {
    return(
        <div className="Basket-block">
            <h1 className='title-products'>Корзина</h1>
            <div className="posts-block">
                
                {basketProducts.map(productID => {
                    const index = Data.findIndex(product => {
                        return product.id === productID;
                    });
                    const { id, title, amount, price, counter } = Data[index];
    
                    return (
                        <BasketPosts
                            handleRemoveFromCart={handleRemoveFromCart}
                            fMinus={fMinus}
                            fPlus={fPlus}  
                            id={id}
                            title={title} 
                            amount={amount}
                            price={price} 
                            counter={counter} 
                            key={id}
                        />
                    );
                })}
            </div>
            <Link className="link-order" to='/order'>Оформить заказ</Link>
        </div>
    )

}

export default Basket;

