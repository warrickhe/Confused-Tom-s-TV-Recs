import React from 'react';
import { Button, TextInput } from "react-materialize";


export default function Searches() {
  return (
    <div style={{display:"flex"}}>
    <div className="outerBox m10">
        <div style={{display:"flex"}}> 
            <TextInput  label="Search for Friends"  />
            <Button>Search</Button> 
        </div>
        <div style={{display:"flex"}}> 
            <TextInput label="Search for Movies"  />
            <Button>Search</Button> 
        </div>
    </div>
    </div>
  )
}
