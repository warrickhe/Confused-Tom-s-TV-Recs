import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"
import './App.css';
import Navbar from './components/Navbar';
import UserPage from "./components/UserPage";
import ReviewsList from "./components/ReviewsList";
import FriendsList from "./components/FriendsList";
import AboutTheWebsite from "./components/AboutTheWebsite";
import { Link, Outlet} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NonLoggedInHomePage from "./pages/NonLoggedInHomePage";


const App = () => {

  return (
    <div>
      <Navbar />      
      <Routes>
        {/* <Route path="/" element={<UserPage username={"isWarrick"}/>} /> */}
        <Route path="/" element={<NonLoggedInHomePage/>} />
        <Route path="about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;
