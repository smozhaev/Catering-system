import React from 'react';
import './Order.css';

const Order = (props) => {
    
    return(
        
        <section className='order-block'>
            <div className='get-promo'>
                <h3>Номер вашего заказа</h3>
                <h1 className='h11'>{Math.random().toString(36).toUpperCase()}</h1>
            </div>
        </section>
    )
} 
export default Order;