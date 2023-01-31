import { BrowserRouter, Route, Routes } from "react-router-dom";
import './index.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/footer';
import React from "react";
import Basket from './Main/Basket/Basket';
import PersonalArea from './Main/PersonalArea/PersonalArea';
import { useState, useEffect  } from "react";
import Categories from './Main/Categories/Categories';
import Products from "./Main/Products/Products";
import AdminPage from './Main/AdminPage/AdminPage';
import Data from './State';
import Order from './Main/Order/Order';



function App() {
  
  const [basketProducts, setBasketProducts]  = useState(localStorage.getItem("basketProducts") !== null ? JSON.parse(localStorage.getItem("basketProducts")) : [])
  // const [basketCounters, setBasketCounters]  = useState(localStorage.getItem("basketCounters") !== null ? JSON.parse(localStorage.getItem("basketCounters")) : [])
  const handleAddProductToBasket = productID => {
    console.log(productID,"productID")
    
    if (basketProducts.includes(productID) === true) { 
      Data[productID].counter += 1;
      console.log(Data[productID].counter,'counter')
      console.log('повтороное добавление товара');
     } else {
      setBasketProducts(b =>[...b, productID]);
      
    } 
    console.log(basketProducts,'basketProducts'); 
  };

  useEffect(() => {
    localStorage.setItem('basketProducts', JSON.stringify(basketProducts));
  }, [basketProducts]);



  const handleRemoveFromCart = productID => {
    const newBasketProducts = basketProducts.filter(id => id !== productID);
    setBasketProducts(newBasketProducts);
    
  };

  


  
  return (
    <BrowserRouter>
      <div className="wrapper">
        <div className="content">
          <Header />
          <Routes>
            {/* <Route path='/' element={<Main/>} /> */}
            <Route path='/basket' element={<Basket    basketProducts={basketProducts} handleRemoveFromCart={handleRemoveFromCart}/>}/>
            {/* <Route path='/personalarea' element={<AdminPage/>}/> */}
            {/* <Route path='/drinks' element={<Categories/>} /> */}
            <Route path='/' element={<Products handleAddProductToBasket={handleAddProductToBasket} />} />
            <Route path='/order' element={<Order />} />
          </Routes>
        </div>  
      
      </div>
    </BrowserRouter>
  );
}

export default App;
