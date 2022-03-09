import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import "materialize-css/dist/css/materialize.min.css"
import './App.css';
import Navbar from './components/Navbar';
import UserPage from "./components/UserPage";
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { Link, Outlet,useParams} from "react-router-dom";
import AboutPage from "./pages/AboutPage";
import LoggedInHomePage from "./pages/LoggedInHomePage";
import UnknownPage from "./pages/UnknownPage";
import TvPage from "./pages/TvPage";
import FriendProfile from "./components/FriendProfile";
import ReviewsList from "./components/ReviewsList";


const App = () => {

  return (
    <div>
      <Navbar/>      
      <Routes>
        <Route path="/Sign-In" element={<SignInPage/>}/>
        <Route path="/Sign-Up" element={<SignUpPage/>}/>
        <Route path="/" element={<LoggedInHomePage/>} />
        <Route path="/review/user/:username" element={<FriendProfile />} />
        <Route path="/review/show/:showName" element={<TvPage/>} />
        <Route path="about" element={<AboutPage />} />
        <Route path="*" element={<UnknownPage />} />
        <Route path="/userprof/:uname" element={<UserPage />} />
      </Routes>
    </div>
  );
}

export default App;
