import React from 'react';
import './Products.css';
import ProductCard from './ProductsComponents/ProductCard';
import MySelect from './MySelect';
import { useState } from 'react';
import Categories from './../Categories/Categories';


const Products = () => {

    const [products, setProducts] = useState([
        {id: 1, title:'Добрый cola', amount: 10, price: 100, category: 'drinks'},
        {id: 2, title:'Добрый лимон-лайм', amount: 6, price: 100, category: 'drinks'},
        {id: 3, title:'Добрый апельсин', amount: 9, price: 100, category: 'drinks'},
        {id: 4, title:'Adrenaline Rush', amount: 15, price: 100, category: 'drinks'},
        {id: 5, title:'Чай', amount: 15, price: 100, category: 'drinks'},
        {id: 6, title:'Капучино', amount: 15, price: 100, category: 'drinks'},
        {id: 7, title:'Лате', amount: 15, price: 100, category: 'drinks'},
        {id: 8, title:'Борщ', amount: 15, price: 100, category: 'hotdishes'},
        {id: 9, title:'Рис', amount: 15, price: 100, category: 'hotdishes'},
        {id: 10, title:'Мясо по-французски', amount: 15, price: 100, category: 'hotdishes'},    
        {id: 11, title:'Цезарь', amount: 15, price: 100, category: 'сoldsnacks'},
        {id: 12, title:'Сендвич с тунцом', amount: 15, price: 100, category: 'сoldsnacks'},
        {id: 13, title:'Гамбургер', amount: 15, price: 100, category: 'сoldsnacks'},
        {id: 14, title:'Синабон', amount: 15, price: 100, category: 'sweets'},
        {id: 15, title:'Пирожок с яблоком', amount: 15, price: 100, category: 'bakeryproducts'},
    ]) 

    const [categories, setСategories] = useState([
        {key: 'all', name:'Все'},
        {key: 'drinks', name:'Напитки'},
        {key: 'hotdishes', name:'Горячие блюда'},
        {key: 'сoldsnacks', name:'Холодные закуски'},
        {key: 'bakeryproducts', name:'Выпечка'},
        {key: 'sweets', name:'Сладости и снеки'},
    ])
    
    const [selectedSort, setSelectedSort] = useState('')

    const sortProducts = (sort) => {
        
        products.setProducts(sort => products.filter(sort => products.product.category !== sort))
    }

    const chooseCategory = (categor) => {
        setSelectedSort(categor);
        setProducts([...products].filter((categor, category) => category !== categor))
        console.log(categor)

    }

    

    return(

        <div className='products-block'>
            <h1 className='title-products'>Выберите продукты</h1>
            <div>
                <div>
                    <MySelect chooseCategory={chooseCategory} categories={categories}/>
                </div>
                <div>

                </div>
            </div>
            <ul className="ul-products">
                {products.map(product =>
                    <ProductCard product={product} key={product.id}/>  
                )}
            </ul>
        </div>
    )
}

export default Products;