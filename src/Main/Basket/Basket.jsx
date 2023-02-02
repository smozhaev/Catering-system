import React from "react";
import './BasketComp.css';
import BasketPosts from './BasketPosts';
import Data from './../../State';
import { Link } from 'react-router-dom';


const Basket = ({basketProducts, basketCounters, handleRemoveFromCart, fMinus, fPlus}) => {
    return(
        <div className="Basket-block">
            <h1 className='title-products'>Корзина</h1>
            {basketProducts.length !== 0
                ?  <div className="posts-block">
                      {basketProducts.map(productID => {
                          const index = Data.findIndex(product => {
                              return product.id === productID;
                          });
                          const { id, title, amount, price, counter } = Data[index];
                          // console.log(Data[productID].counter,'-2соunter', productID,'-id');
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
                      <Link className="link-order" to='/order'>Оформить заказ</Link>
                  </div>
                :<div className="posts-block">
                    <h4 className="basket-title">Корзина пуста</h4>
                    <p className="basket-title-p">добавте товары в корзину</p>
                 </div>  
            }
        </div>
    )

}

export default Basket;

