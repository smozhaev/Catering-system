import React from "react";
import './Products.css';

const MySelect = ({categories, chooseCategory}) => {
     
    return(
        <div className="categories">
            {categories.map(category =>
                <button className="category" key={category.key} onClick={() => chooseCategory(category.key) }><p className="p-category">{category.name}</p></button>)}
        </div>        
    )
}

export default MySelect