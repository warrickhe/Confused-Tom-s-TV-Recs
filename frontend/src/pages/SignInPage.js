import React from 'react'
import F from "../Confused-Tom-2.png";
import SignIn from '../components/SignIn';

export default function SignInPage() {
    return (
        <div >
            <div 
            style={{
                display:"flex",
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems:'center'
               }}>
               <h1>
                Sign In 
            </h1>  
            <div
                style={{
                    width:100,
                    height:100,
                    borderRadius: 100/2,
                    overflow: "hidden",
                    
                }}
            > 
                <img
                    src={F}
                    alt="logo"
                    height="100%"
                    
                />
                
            </div>
        <text >
            Confused Tom's TV Recs
        </text>
        </div>
            <SignIn />
        </div>
      )
}
