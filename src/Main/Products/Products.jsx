import React from 'react';
import './Products.css';
import ProductCard from './ProductsComponents/ProductCard';
import MySelect from './MySelect';
import { useState } from 'react';
import Categories from './../Categories/Categories';
import MyInput from './MyInput';
import Data from '../../State';


const Products = () => {

    const [products, setProducts] = useState(Data) 

    const [categories, setСategories] = useState([
        {key: 'all', name:'Все'},
        {key: 'drinks', name:'Напитки'},
        {key: 'hotdishes', name:'Горячие блюда'},
        {key: 'сoldsnacks', name:'Холодные закуски'},
        {key: 'bakeryproducts', name:'Выпечка'},
        {key: 'sweets', name:'Сладости и снеки'},
    ])
    
    const [selectedCategory, setSelectedCategory] = useState('all')
    const [searchQuery, setSearchQuery] = useState('')



    const chooseCategory = (categor) => {
        setSelectedCategory(categor);
    }


    

    return(

        <div className='products-block'>
            <h1 className='title-products'>Выберите продукты</h1>
            <div>
                <div>
                    <MyInput 
                        value={searchQuery}
                        onChange={e => setSearchQuery(e.target.value)}
                    />
                </div>
                <div>
                    <MySelect chooseCategory={chooseCategory} categories={categories}/>
                </div>

            </div>
            <ul className="ul-products">
                {products
                    .filter(product => product.category == selectedCategory || selectedCategory == 'all')
                    .filter(product => product.title.toLowerCase().includes(searchQuery.toLowerCase()) == true)
                    .map(product =>
                        <ProductCard product={product} key={product.id}/>  
                    )
                }
            </ul>
        </div>
    )
}

export default Products;