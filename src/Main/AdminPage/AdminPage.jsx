import React from "react";
import './AdminPage.css';
import { useState } from "react";
import AdminPost from './AdminPost';
import AdminPosts from "./AdminPosts";
import AddProductButton from "../../ComoponentsUi/Buttons/AddProductButton";

import { title } from 'process';
import PostForm from "./AdminPostForm";
import InputProduct from './../../ComoponentsUi/Inputs/InputProduct';

const AdminPage = () => {
    
    const [eats, setEat] = useState([
        {id: 1, title:'Чай', counter: 3, amount: 10, price: 100},
        {id: 2, title:'Суп', counter: 1, amount: 10, price: 100},
        {id: 3, title:'Сок', counter: 4, amount: 10, price: 100},
        {id: 4, title:'Хлеб', counter: 2, amount: 10, price: 100},
        {id: 5, title:'Чайй', counter: 3, amount: 10, price: 100},
        {id: 6, title:'Супп', counter: 1, amount: 10, price: 100},
        {id: 7, title:'Сокк', counter: 4, amount: 10, price: 100},

        
    ])

    const createAddPost = (newPost) => {
        setEat([...eats, newPost])
    }

    const removePost = (eat) => {
        setEat(eats.filter(et => et.id !== eat.id))
    }




    return(
        <div className="admin-block">
            <h1>Панель Администратора</h1>
            <div className='add-container'>
                <h2>Добавить товар</h2>
                <PostForm create={createAddPost}/>
            </div>
            <h2>Список товаров</h2>
            <table>
                <tr>
                    <th>Товар:</th>
                    <th>Количество:</th>
                    <th>Цена:</th>
                    <th>&nbsp;</th>
                </tr>
                <AdminPosts remove={removePost} eats={eats}/>
            </table>
            
        </div>
    )
}

export default AdminPage;