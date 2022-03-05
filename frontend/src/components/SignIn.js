import React from "react";
import { Button,TextInput } from "react-materialize";

export default () => {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <div className="outerBox">
                <TextInput label="Username" />
                <TextInput label="Password" />
                <a href="home"> <Button> Sign In</Button></a>
                <hr
                    style={{
                    color:"black",
                    backgroundColor: "black",
                    height: 0.5
                    }}
                />
            <p>No Account? <a href="Sign-In" style={{ color: "blue" }}>
                          Sign Up
                        </a> 
            </p>    
            </div>
            
            
        </div>
    )
}