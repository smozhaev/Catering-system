import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/footer';
import React from "react";
import Basket from './Main/Basket/Basket';
import PersonalArea from './Main/PersonalArea/PersonalArea';
import { useState } from "react";
import Categories from './Main/Categories/Categories';
import Products from "./Main/Products/Products";
import AdminPage from './Main/AdminPage/AdminPage';



function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'Чай', counter: 3, amount: 10, price: 100},
    {id: 2, title:'Суп', counter: 1, amount: 10, price: 100},
    {id: 3, title:'Сок', counter: 4, amount: 10, price: 100},
    {id: 4, title:'Хлеб', counter: 2, amount: 10, price: 100},
    {id: 5, title:'Чайй', counter: 3, amount: 10, price: 100},
    {id: 6, title:'Супп', counter: 1, amount: 10, price: 100},
    {id: 7, title:'Сокк', counter: 4, amount: 10, price: 100}
    
  ])
  const [products, setProducts] = useState([
    {id: 1, title:'Чай черный', amount: 10, price: 100},
    {id: 2, title:'Чай зеленый', amount: 6, price: 100},
    {id: 3, title:'Чай lipton черный', amount: 9, price: 100},
    {id: 4, title:'Чай lipton черный', amount: 15, price: 100},
    
  ])   
  return (
    <BrowserRouter>  
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Main/>} />
          <Route path='/basket' element={<Basket posts={posts}/>}/>
          <Route path='/personalarea' element={<AdminPage/>}/>
          <Route path='/drinks' element={<Categories/>} />
          <Route path='/drinks/tea' element={<Products products={products}/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
