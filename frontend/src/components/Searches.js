import React, { useState, useEffect } from "react";
import { Button, TextInput } from "react-materialize";
import { useParams, useNavigate } from "react-router";


export default function Searches() {
  const [data, setData] = useState({
    mSearch:"",
    fSearch:""
  });
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
    console.log("x");
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
          navigate(`/shows/${searchData.showName}`)
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
          }else{
            navigate(`user/${searchData.username}`)
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
            <TextInput label="Search for Movies" onChange={e=>onChangeText('mSearch', e.target.value)} />
            <Button onClick={mSearch}>Search</Button> 
        </div>
    </div>
    </div>
  )
}
