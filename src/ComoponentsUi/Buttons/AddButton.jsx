import React from "react";
import { useState } from "react";
import './AddButton.css';


const AddButton = ({handleAddProductToBasket, ...props}) => {
    
    const [counts, setCounts] = useState(0);

    let Plus = () => setCounts(counts + 1);
    let Minus = () => setCounts(counts - 1);

    return(
        <button className='add-button'
            onClick={() => handleAddProductToBasket(props.productID.id)}
        >
            Купить
        </button>
    )
}

export default AddButton;

{/* <div className="counter-container">
        <button onClick={Minus} className='plus-button'>-</button>
        <div className='counter'>{counts}</div>
        <button onClick={Plus} className='plus-button'>+</button> 
    </div> */}