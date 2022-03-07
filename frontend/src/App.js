import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"
import './App.css';
import Navbar from './components/Navbar';
import UserPage from "./components/UserPage";



const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserPage username={"isWarrick"}/>} />
      </Routes>
    </div>
  );
}

export default App;
