import React, { useState, useEffect,useContext } from "react";
import { Button, TextInput } from "react-materialize";
import {  useNavigate } from "react-router";
import { Navigate, useParams } from "react-router-dom";
import UserContext from "../UserContext";

export default function Searches({navigation}) {
  const [data, setData] = useState({
    mSearch:"",
    fSearch:""
  });
  const {user, setUser} = useContext(UserContext);
  const onChangeText = (key, value) => {
    const newData = {...data};
    newData[key] = value;
    setData(newData)
  };
  const navigate = useNavigate();
  const searchData = {
    username: data.fSearch,
    showName: data.mSearch
  };
  async function mSearch(ex) {
    ex.preventDefault();
    async function FetchData1() {
  
        const response = await fetch(`http://localhost:4000/review/show/${searchData.showName}`);
        if (!response.ok) {
          const message = `An error has occurred: ${response.statusText}`;
          window.alert(message);
          return;
        }
        const record = await response.json();
        if (!record) {
          window.alert(`TV Show ${searchData.showName} not found`);
          return;
        }else{
          navigate(`/review/show/${searchData.showName}`);
        }
    }
    FetchData1();
    return;

  };
  async function fSearch(e) {
      e.preventDefault();
      async function FetchData() {
          
          const response = await fetch(`http://localhost:4000/username/${searchData.username}`);
          
          if (!response.ok) {
            const message = `An error has occurred: ${response.statusText}`;
            window.alert(message);
            return;
          }
          const record = await response.json();
          if (!record) {
            window.alert(`User with username ${searchData.username} not found`);
            return;
          }else if (searchData.username==user){
            window.alert(`Searching for self`);
            return;
          }
          const response2 = await fetch(`http://localhost:4000/username/${user}/friends`);
          const friends = await response2.json();
          console.log("c",friends);
          if (friends.includes(searchData.username)) {
            console.log("Arrived");
            navigate(`/userprof/${searchData.username}`);
          }else{ 
            navigate(`/review/user/${searchData.username}`);
          }
          
      }
      FetchData();
      return;

  };
  
  return (
    <div style={{display:"flex"}}>
    <div className="outerBox m10">
        <div style={{display:"flex"}}> 
            <TextInput label="Search for Friends" onChange={e=>onChangeText('fSearch', e.target.value)} />
            <Button onClick={fSearch}>Search</Button> 
        </div>
        <div style={{display:"flex"}}> 
            <TextInput label="Search for Shows" onChange={e=>onChangeText('mSearch', e.target.value)} />
            <Button onClick={mSearch}>Search</Button> 
        </div>
    </div>
    </div>
  )
}

