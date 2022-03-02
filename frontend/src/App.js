import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css"
import './App.css';
import ProfilePage from './components/ProfilePage';
import Navbar from './components/Navbar';
import SingleReview from './components/SingleReview'


function App() {

  return (
    <div className="App">
      <Navbar />
      <ProfilePage />
      <SingleReview />
    </div>
  );
}

export default App;
