import React from 'react';
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
          src="https://i.pinimg.com/originals/05/1b/7d/051b7d93394fc94c082f1801bc4ccfb2.jpg"
          alt="logo"
          height="100%"
        />
      </div>
      <div>
        <h5> About: CONFUSED TOM'S TV RECS lets you and your friends view and share reviews of many movies and TV shows </h5>
      </div>
      <div>
        <Link to="/Sign-In"><button>Sign In</button></Link>
        <Link to="/Sign-Un"><button>Sign Up</button></Link>
      </div>
    </div>
  );
}

export default NonLoggedInPage;