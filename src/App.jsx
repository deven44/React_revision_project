import { useContext, useState } from "react";
import Header from "./components/Header"
import Card from "./components/Card";
import axios from 'axios';
import { Routes, Route } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import { dataContext } from "./context/UserContext";

const App = ()=>{
 const username = useContext(dataContext)
  
return (
  
  < >
  <h1 className="text-4xl">this is app.jsx {username}</h1>
  <Header></Header>
  </>
)
}
export default App;