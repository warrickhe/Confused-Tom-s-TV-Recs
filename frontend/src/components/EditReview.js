import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default (props) => {
  const [showName, setShowName] = useState("");
  const [rating, setRating] = useState("");
  const [review, setReview] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  async function onSubmit(e) {
    e.preventDefault();
    const editedReview = {
      review: review,
      showName: showName,
      rating: rating,
      // date: date,
    };

    // This will send a post request to update the data in the database.
    //  Update router not available! 
    //  Only showName, rating, and review can be updated!
    await fetch(`http://localhost:4000/register`, {
      method: "POST",
      body: JSON.stringify(editedReview),
      headers: {
        'Content-Type': 'application/json'
      },
    });


    navigate("/");
  }


  return (
    <div>
      {/* {image && (
        <img src={URL.createObjectURL(image)} alt="profile pic" height="40px" />
      )}
      <input type="file" onChange={event => setImage(event.target.files[0])} /> */}
      <input
        value={showName}    
        placeholder="Please enter the show name."
        onChange={event => setShowName(event.target.value)}
      />
      <input
        value={rating}
        placeholder="Please enter rating from 0 to 5 (5 = The most satisfied)"
        onChange={event => setRating(event.target.value)}
      />
      <input
        value={props.review}
        placeholder="Please enter the review"
        onChange={event => setReview(event.target.value)}
      />
      <button onClick={onSubmit}>Submit</button>
    </div>
  );
};
