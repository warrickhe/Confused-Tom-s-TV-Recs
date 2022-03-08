import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"
import './App.css';
import Navbar from './components/Navbar';
import UserPage from "./components/UserPage";
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"

const App = () => {

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<UserPage username={"isWarrick"}/>} />
        <Route path="/Sign-In" element={<SignInPage/>}/>
        <Route path="/Sign-Up" element={<SignUpPage/>}/>
      </Routes>
    </div>
  );
}

export default App;
