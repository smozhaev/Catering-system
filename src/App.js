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



function App() {
  return (
    
      <BrowserRouter>  
        <div className="container">
          <Header />
          <Routes>
            <Route path='/basket' element={<Basket basket={{id: 1, title:'Чаййй', body: 3}}/>}/>
            <Route path='/personalarea' element={<PersonalArea/>}/>
            <Route path='/' element={<Main/>} />
            <Route path='/drinks' element={<Drinks/>} />
            <Route path='/drinks/tea' element={<Tea/>} />
            <Route path='/drinks' element={<Drinks/>} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
      
  );
}

export default App;
