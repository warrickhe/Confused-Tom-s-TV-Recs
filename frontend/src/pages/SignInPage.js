import React from 'react'
import F from "../Confused-Tom-2.png";
import SignIn from '../components/SignIn';

export default function SignInPage() {
    return (
        <center>
            <div className="signinwindow" >
                <div
                    style={{
                        display: "flex",
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}>
                    <h1 style={{ color: 'paleturquoise' }}>
                        Sign In
                    </h1>
                    <div
                        style={{
                            width: 100,
                            height: 100,
                            borderRadius: 100 / 2,
                            overflow: "hidden",
                            marginBottom: "10px",
                            // marginTop: "10px",
                        }}
                    >
                        <img
                            src={F}
                            alt="logo"
                            height="100%"

                        />

                    </div>
                    <text style={{fontSize: 20}}>
                        Confused Tom's TV Recs
                    </text>
                </div>
                <SignIn />
            </div>
        </center>
    )
}
