import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css"
import './App.css';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import SingleReview from './components/SingleReview';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import Searches from "./components/Searches";
import AboutTheWebsite from "./components/AboutTheWebsite";
import { Link, Outlet} from "react-router-dom";

function App() {

  return (
    <div className="App">
      <h1>TV Recs</h1>
      <Navbar />
      <Searches />
      <SignIn />
      <SignUp />
      <SingleReview />
      <AboutTheWebsite />
      <Outlet></Outlet>

{/* 
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
        <Link to="/">Home Page</Link> |{" "}
        <Link to="/about">About Us</Link>
      </nav>
      <Outlet/> */}


    </div>
  );
}

export default App;
