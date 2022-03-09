import React, { useState, useEffect ,useContext} from "react";
import { Button,TextInput } from "react-materialize";
import { useParams, useNavigate } from "react-router";
import UserContext from "../UserContext";

function  SignIn()  {
    const [data, setData] = useState({
        username:"",
        password:""
    });
    const {user, setUser} = useContext(UserContext);
    const navigate = useNavigate();

    async function OnSignIn(e) {
        e.preventDefault();
        async function FetchData() {
            const loginData = {
                username: data.username,
               
                password: data.password,
            };
            const response =await fetch(`http://localhost:4000/login`, {
                method: "POST",
                body: JSON.stringify(loginData),
                headers: {
                    'Content-Type': 'application/json'
                },
            })
            const message = `${response.statusText}`;
            const ms= await response.text();
            if (!response.ok){
                navigate("/Sign-In");
                console.log(response);
                window.alert(ms);
                return;
            }
            setUser(loginData.username);
            navigate("/");

            
        };

        FetchData();
        
        return;

    };
  
    const onChangeText = (key, value) => {
        const newData = {...data};
        newData[key] = value;
        setData(newData)
    };

    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center"
            }}
        >
            <div className="outerBox">
                <TextInput label="Username" onChange={e=>onChangeText('username', e.target.value)} />
                
                <TextInput password={true} label="Password"
                onChange={e=>onChangeText('password', e.target.value)} />
                <Button onClick={OnSignIn}> Sign In</Button>
                <hr
                    style={{
                    color:"black",
                    backgroundColor: "black",
                    height: 0.5
                    }}
                />
            <p>No Account? <a href="Sign-Up" style={{ color: "blue" }}>
                          Sign Up
                        </a> 
            </p>    
            </div>
            
            
        </div>
    )
}
export default SignIn;
