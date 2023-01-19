import React  from "react"; 
import './AdminPage.css';
import AdminPost from './AdminPost';

const AdminPosts = ({eats, remove}) => {
    return(
        <ul className="admin-posts-ul">
            {eats.map(eat => 
                <AdminPost remove={remove} eat={eat} key={eat.id}/>
            )}
        </ul>
    )
}

export default AdminPosts;