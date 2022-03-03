import React from "react";
import { TextInput } from "react-materialize";

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
                <button> Sign In</button>
                <hr
                    style={{
                    color:"black",
                    backgroundColor: "black",
                    height: 0.5
                    }}
                />
            <p>No Account? <button>Sign Up</button> 
            </p>    
            </div>
            
            
        </div>
    )
}