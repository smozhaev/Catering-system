import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import Header from './Header/Header';
import Main from './Main/Main';
import Footer from './Footer/footer';
import Drinks from './Main/drinks/Drinks';
import React from "react";
import Tea from './Main/drinks/Tea/Tea';
import Basket from './Header/HeaderComponents/Basket';
import PersonalArea from './Header/HeaderComponents/PersonalArea';
import HotEat from './Main/Hoteat/Hoteat';
import { useState } from "react";



function App() {
  const [posts, setPosts] = useState([
    {id: 1, title:'Чай', counter: 3, amount: 10},
    {id: 2, title:'Суп', counter: 1, amount: 10},
    {id: 3, title:'Сок', counter: 4, amount: 10},
    {id: 4, title:'Хлеб', counter: 2, amount: 10},
    {id: 5, title:'Чайй', counter: 3, amount: 10},
    {id: 6, title:'Супп', counter: 1, amount: 10},
    {id: 7, title:'Сокк', counter: 4, amount: 10},
    
    
  ])
  const [products, setProducts] = useState([
    {id: 1, title:'Чай черный', amount: 10},
    {id: 2, title:'Чай зеленый', amount: 6},
    {id: 3, title:'Чай lipton черный', amount: 9},
    {id: 4, title:'Чай lipton черный', amount: 15},
    
  ])   
  return (
    <BrowserRouter>  
      <div className="container">
        <Header />
        <Routes>
          <Route path='/basket' element={<Basket posts={posts}/>}/>
          <Route path='/personalarea' element={<PersonalArea/>}/>
          <Route path='/' element={<Main/>} />
          <Route path='/drinks' element={<Drinks/>} />
          <Route path='/drinks/tea' element={<Tea products={products}/>} />
          <Route path='/hot' element={<HotEat/>} />
          <Route path='/hot/soupe' element={<Tea/>} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
