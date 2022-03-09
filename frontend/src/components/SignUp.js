import React, { useState, useEffect,useContext } from "react";
import { Button,TextInput } from "react-materialize";
import { useNavigate } from "react-router";
import UserContext from "../UserContext";

//Sign in button routes to sign in page
function SignUp() {

    const [data, setData] = useState({
        firstName:"",
        lastName:"",
        username:"",
        password:""
    });
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();
    async function FetchData() {
        const signUpData = {
            firstName:data.firstName,
            lastName:data.lastName,
            username:data.username,
            password:data.password
        };
        const response =await fetch(`http://localhost:4000/register`, {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            },
        });
        const ms= await response.text();
        const message = `${response.statusText}`;
        if (!response.ok){
            console.log(response);
            window.alert(ms);
            return;
        }
        setUser(signUpData.username);
        navigate("/LoggedIn");
        
    };
    async function OnSubmit(e) {

        FetchData();
        return;

    }; 
    
  

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

                <TextInput password={true} label="Password"
                onChange={e=>onChangeText('password', e.target.value)} />
                <Button onClick={OnSubmit}>Submit</Button>
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
export default SignUp;
