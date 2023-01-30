import React from "react";
import './BasketComp.css';
import { useState } from "react";

const BasketButton = ({handleAddProductToBasket,fMinus, fPlus, ...props}) => {
    

    return(
        <div className="basket-button">
            <div className="counter-container">
              {/* <button onClick={handleAddProductToBasket(props.id)} className='plus-button'>-</button>
              <div className='counter'>{}</div>
              <button onClick={fPlus(props.id)} className='plus-button'>+</button>  */}
            </div>
        </div>
    )
}

export default BasketButton;