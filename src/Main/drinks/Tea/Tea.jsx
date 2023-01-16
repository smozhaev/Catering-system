import React from 'react';
import './Tea.css';
import AddButton from './AddButton/AddButton';
import ProductCard from './ProductCard';
import {useState} from 'react';

const Tea = ({products}) => {

    return(
        <div className='tea-block'>
            <a className='link-back' href='/'>назад</a>
            <h1>Чай</h1>
            <ul className="ul-tea">
                {products.map(product =>
                    <ProductCard product={product} key={product.id} />    
                )}
            </ul>
        </div>
    )
}

export default Tea;