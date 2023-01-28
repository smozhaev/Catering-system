import React from 'react';

const AddProductButton = ({children, ...props}) =>{
    return(
        <button {...props}>
            {children}
        </button>
    )
}

export default AddProductButton; 