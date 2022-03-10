import React from 'react'
import F from "../Confused-Tom-2.png";
import SignUp from '../components/SignUp'

export default function SignUpPage() {
    return (
        <center><div className="signupwindow" >
            <div
                >
                <h1 style={{ color: 'paleturquoise' }}>
                    Sign Up
                </h1>
                {/* <h5>Join Tom in his confusion</h5> */}
                <div
                    style={{
                        width: 100,
                        height: 100,
                        borderRadius: 100 / 2,
                        overflow: "hidden",

                    }}
                >
                    <img
                        src={F}
                        alt="logo"
                        height="100%"

                    />

                </div>
                <text style={{ fontSize: 20 }}>
                    Confused Tom's TV Recs
                </text>
            </div>
            <SignUp />
        </div>
        </center>
    )
}
