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


function App() {

  return (
    <div className="App">
      <Navbar/>
      <Searches/>
      <SignIn/>
      <SignUp/>
      <SingleReview/>
    </div>
  );
}

export default App;
