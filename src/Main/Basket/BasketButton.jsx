import React from "react";
import './BasketComp.css';
import { useState } from "react";

const BasketButton = (props) => {
     
    const [counts, setCounts] = useState(props.counter);

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