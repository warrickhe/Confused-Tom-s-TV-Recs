import React from 'react'
import SignIn from '../components/SignIn';

export default function SignInPage() {
    return (
        <div >
            <h1>
                Sign In 
            </h1>  
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
                    overflow: "hidden",
                    
                }}
            > 
                <img
                    src="https://i.pinimg.com/originals/05/1b/7d/051b7d93394fc94c082f1801bc4ccfb2.jpg"
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
