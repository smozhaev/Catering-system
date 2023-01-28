import React  from "react"; 
import './AdminPage.css';
import AdminPost from './AdminPost';

const AdminPosts = ({eats, remove}) => {
    return(
        
        eats.map(eat => 
            <AdminPost remove={remove} eat={eat} key={eat.id}/>
        )
        
    )
}

export default AdminPosts;