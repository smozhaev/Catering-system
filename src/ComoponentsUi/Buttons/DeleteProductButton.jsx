import React from 'react';

const DeleteProductButton = ({children, ...props}) =>{
    return(
        <button {...props}>
            {children}
        </button>
    )
}

export default DeleteProductButton; 