import React  from "react"; 
import './AdminPage.css';
import DeleteProductButton from './../../ComoponentsUi/Buttons/DeleteProductButton';

const AdminPost = (props) => {
    return(
        <li className="admin-posts-li">
            <p>{props.eat.title}</p>
            <p>{props.eat.amount}шт</p>
            <p>{props.eat.price}р</p>
            <DeleteProductButton onClick={() => props.remove(props.eat)}>Удалить</DeleteProductButton>
        </li>
    )
}

export default AdminPost;