import React from "react";
import './Products.css';

const MySelect = ({categories, chooseCategory}) => {
     
    return(
        <div className="categories">
            {categories.
                map(category =>
                    <button 
                        className="category"
                        key={category.key} 
                        onClick={() => chooseCategory(category.key) }>
                        {category.name}
                    </button>
                )
            }
        </div>        
    )
}

export default MySelect