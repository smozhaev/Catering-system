import React from 'react';
import './../Products.css';
import AddButton from './../../../ComoponentsUi/Buttons/AddButton';

const ProductCard = (props) => {
    return(
        <li className="li-products">
          <h2 className='product-card-h2'>{props.product.title}</h2>
          <p className='product-card-p'>наличие: {props.product.amount}</p>
          <AddButton/>
        </li>
    )
}

export default ProductCard;