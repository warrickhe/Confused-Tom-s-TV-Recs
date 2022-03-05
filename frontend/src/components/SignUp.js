import React, { useState } from "react";
import { Button,TextInput } from "react-materialize";
//Sign in button routes to sign in page
export default () => {

    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        username:"",
        email:"",
        password:""
    })

    const onSubmit = () => {

    }

    const onChangeText = (key, value) => {
        const newData = {...data};
        newData[key] = value;
        setData(newData)
    }

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <div className="outerBox">
                <TextInput label="First Name" onChange={e=>onChangeText('firstName', e.target.value)} />
                <TextInput label="Last Name" onChange={e=>onChangeText('lastName', e.target.value)} />
                <TextInput label="Username" onChange={e=>onChangeText('username', e.target.value)} />
                <TextInput label="Email" onChange={e=>onChangeText('email', e.target.value)} />
                <TextInput label="Password" onChange={e=>onChangeText('password', e.target.value)} />
                <a href="home"><Button>Submit</Button></a>
                <hr
                    style={{
                    color:"black",
                    backgroundColor: "black",
                    height: 0.5
                    }}
                />
                <p>Have an Account?  <a href="Sign-In" style={{ color: "blue" }}>
                          Sign In
                        </a>
                </p>  
            </div>
        </div>
    );
};