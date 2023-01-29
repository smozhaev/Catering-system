import React from 'react';
import './../Products.css';
import AddButton from './../../../ComoponentsUi/Buttons/AddButton';

const ProductCard = (props) => {
    return(
        <li className="li-products">
          <div className='img-p'></div>
          <div className='product-text-block'>
            <h5 className='h5'>{props.product.title}</h5>
            <p className='product-p'>наличие: {props.product.amount}</p>
          </div>
          
          <AddButton/>
          <p className='price'>{props.product.price}₽</p>
        </li>
    )
}

export default ProductCard;