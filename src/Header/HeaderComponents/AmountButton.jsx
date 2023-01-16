import React from "react";
import './HeadComp.css';

const AmountButton = (props) => {
    let amountProps = props.basket.amount 
    return(
        <div>
            <p>наличие: {amountProps}</p>
        </div>
    )
}

export default AmountButton;