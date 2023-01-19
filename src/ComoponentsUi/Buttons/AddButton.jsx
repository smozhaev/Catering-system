import React from "react";
import { useState } from "react";
import './AddButton.css';

const AddButton = () => {
    
    const [counts, setCounts] = useState(0);

    let Plus = () => setCounts(counts + 1);
    let Minus = () => setCounts(counts - 1);

    return(
        <div className='add-buttons-container'>
            <div className="counter-container">
              <button onClick={Minus} className='plus-button'>-</button>
              <div className='counter'>{counts}</div>
              <button onClick={Plus} className='plus-button'>+</button> 
            </div>
            <button className='add-button'>Добавить</button>
        </div>
    )
}

export default AddButton;