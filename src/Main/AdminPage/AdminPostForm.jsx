import React from "react";
import './AdminPage.css';
import AddProductButton from "../../ComoponentsUi/Buttons/AddProductButton";
import InputProduct from "../../ComoponentsUi/Inputs/InputProduct";
import { useState } from "react";


const PostForm = ({create}) => {
    const [add, setAdd] = useState({title:'', amount:'', price:''});
    const AddNewPost = (e) => {
        e.preventDefault()
        const newPost = {
            ...add, id: Date.now()
        }
        create(newPost)
        setAdd({title:'', amount:'', price:''})
    }    
    return(
        <form className="">
            <InputProduct value={add.title} onChange={e => setAdd({...add, title: e.target.value})} type='text' placeholder="наименование товара"/>
            <InputProduct value={add.amount} onChange={e => setAdd({...add, amount: e.target.value})} type='text' placeholder="количество товара "/>
            <InputProduct value={add.price} onChange={e => setAdd({...add, price: e.target.value})} type='text' placeholder="цена"></InputProduct>
            <AddProductButton onClick={AddNewPost}>Добавить товар</AddProductButton>
        </form>    
    )
}



export default PostForm;