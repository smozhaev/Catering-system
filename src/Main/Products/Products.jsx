import React from 'react';
import './Products.css';
import ProductCard from './ProductsComponents/ProductCard';


const Products = ({products}) => {

    return(
        <div className='products-block'>
            <a className='link-back' href='/'>назад</a>
            <h1 className='title-products'>Чай</h1>
            <ul className="ul-products">
                {products.map(product =>
                    <ProductCard product={product} key={product.id}/>  
                )}
            </ul>
        </div>
    )
}

export default Products;