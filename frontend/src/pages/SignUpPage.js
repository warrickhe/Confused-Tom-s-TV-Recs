import React from 'react'
import F from "../Confused-Tom-2.png";
import SignUp from '../components/SignUp'

export default function SignUpPage() {
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
            Sign Up 
        </h1>  
        <h5>Join Tom in his confusion</h5>
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
        <SignUp />
    </div>
  )
}
