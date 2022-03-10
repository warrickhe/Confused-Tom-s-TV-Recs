import React, { useState,useContext } from "react";
import { useParams, useNavigate } from "react-router";
import UserContext from "../UserContext";
import { Button,TextInput } from "react-materialize";

export default (props) => {
  const [showName, setShowName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");
  const {user, setUser} = useContext(UserContext);

  const params = useParams();
  const navigate = useNavigate();
  const date=new Date();
  async function onSubmit(e) {
    e.preventDefault();
    const editedReview = {
        showName: showName,
        rating: rating,
        review: review,
        date: date,
        username: user,
    };

    // This will send a post request to update the data in the database.
    //  Update router not available! 
    //  Only showName, rating, and review can be updated!
    const response=await fetch(`http://localhost:4000/review`, {
      method: "POST",
      body: JSON.stringify(editedReview),
      headers: {
        'Content-Type': 'application/json'
      },
    });
    const ms= await response.text();
    if (!response.ok){
      console.log(response);
      window.alert(ms);
      return;
    }

    navigate(`/`);
    navigate(`/LoggedIn`);
  }


  return (
    <div className="outerBox m10">
      {/* {image && (
        <img src={URL.createObjectURL(image)} alt="profile pic" height="40px" />
      )}
      <input type="file" onChange={event => setImage(event.target.files[0])} /> */}
      <h5>Write a Review</h5>
      <div style={{
                display:"flex",
                flexDirection: 'column',
                alignItems:'stretch'
               }}>
      <TextInput style = {{ flex: 1 }}
        value={showName}    
        label="Show Name"
        onChange={event => setShowName(event.target.value)}
      />
      <TextInput style = {{ flex: 1 }}
        value={rating}
        label="Rating (from 1-5)"
        onChange={event => setRating(event.target.value)}
      />
      <TextInput style = {{ flex: 1 }}
        value={props.review}
        label="Review"
        onChange={event => setReview(event.target.value)}
      />
      </div>
      <Button onClick={onSubmit}>Submit</Button>
    </div>
  );
};
