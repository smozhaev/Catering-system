import React from "react";
import 'C:/REACT-LEARNING/my-app/src/Header/Header.css';
import { useState } from "react";

const BasketButton = (props) => {
    let countsProps = props.basket.body 
    const [counts, setCounts] = useState(countsProps);

    let Plus = () => setCounts(counts + 1);
    let Minus = () => setCounts(counts - 1);

    return(
        <div className="basket-button">
            <div className="counter-container">
              <button onClick={Minus} className='plus-button'>-</button>
              <div className='counter'>{counts}</div>
              <button onClick={Plus} className='plus-button'>+</button> 
            </div>
        </div>
    )
}

export default BasketButton;