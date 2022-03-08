import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"
import './App.css';
import Navbar from './components/Navbar';
import { Link, Outlet} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import NonLoggedInHomePage from "./pages/NonLoggedInHomePage";
import UnknownPage from "./pages/UnknownPage";


const App = () => {

  return (
    <div>
      <Navbar />      
      <Routes>
        {/* <Route path="/" element={<UserPage username={"isWarrick"}/>} /> */}
        <Route path="/" element={<NonLoggedInHomePage/>} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<UnknownPage />} />
      </Routes>
    </div>
  );
}

export default App;
