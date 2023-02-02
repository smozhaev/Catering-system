import React from "react";
import './BasketComp.css';
import { useState } from "react";
import Data from "../../State";


const BasketButton = (props) => {
     
    const [counts, setCounts] = useState();
    let Plus = () => setCounts(Data[props.id].counter += 1);
    let Minus = () => setCounts(Data[props.id].counter -= 1);


    return(
        <div className="basket-button">
            {/* <div className="counter-container">
              <button onClick={Minus} className='plus-button'>-</button>
              <p className=' counter'>{Data[props.id].counter}</p>
              <button onClick={Plus} className='plus-button'>+</button> 
            </div> */}
        </div>
    )
}

export default BasketButton;