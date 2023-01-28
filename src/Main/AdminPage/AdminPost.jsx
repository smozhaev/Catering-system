import React  from "react"; 
import './AdminPage.css';
import DeleteProductButton from './../../ComoponentsUi/Buttons/DeleteProductButton';

const AdminPost = (props) => {
    return(
        <tr>
            <td>{props.eat.title}</td>
            <td>{props.eat.amount}шт</td>
            <td>{props.eat.price}р</td>
            <DeleteProductButton onClick={() => props.remove(props.eat)}>Удалить</DeleteProductButton>
        </tr>
        
    )
}

export default AdminPost;