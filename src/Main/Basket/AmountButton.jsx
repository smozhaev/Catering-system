import React from "react";
import './BasketComp.css';

const AmountButton = (props) => {
    let amountProps = props.basket.amount 
    return(
        <div>
            <p>наличие: {amountProps}</p>
        </div>
    )
}

export default AmountButton;