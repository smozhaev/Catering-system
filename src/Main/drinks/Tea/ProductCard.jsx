import React from 'react';
import './Tea.css';
import AddButton from './AddButton/AddButton';
import {useState} from 'react';
import AmountButton from '../../../Header/HeaderComponents/AmountButton';

const ProductCard = (props) => {
    return(
        <li className="li-tea">
          <h2 className='product-card-h2'>{props.product.title}</h2>
          <p className='product-card-p'>наличие: {props.product.amount}</p>
          <AddButton/>
        </li>
    )
}

export default ProductCard;