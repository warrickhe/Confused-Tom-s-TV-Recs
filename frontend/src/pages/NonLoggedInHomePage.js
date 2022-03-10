import React from 'react';
import './NonLoggedInHomePage.css'
import F from "../Confused-Tom-2.png";
import F2 from "../Confused-Tom-3.png";
import { Link } from "react-router-dom";

function NonLoggedInPage() {
  return (
    <div
    style={{
      display:"flex",
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center'
    }}>
      <div
      style={{
        width:100,
        height:100,
        borderRadius: 100/2,
        overflow: "hidden"
      }}/>
      <div
      style={{
        width:250,
        height:250,
        borderRadius: 100/2,
        overflow: "hidden"
      }}>
        <img
          src={F2}
          alt="logo"
          height="100%"

          
        />
      </div>


      <div className="app" >
        <center><h3> Welcome to CONFUSED TOM'S TV RECS </h3></center>
        <center><h5>The perfect place for you and your friends to view and share reviews of many movies and TV shows. </h5></center>
      </div>

      <div>
        <Link to="/Sign-In" class='button'>Sign In</Link> 
        <Link to="/Sign-Up" class='button'>Sign Up</Link>
      </div>


    </div>
  );
}

export default NonLoggedInPage;