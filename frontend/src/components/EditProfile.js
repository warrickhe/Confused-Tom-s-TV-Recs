import React, { useState } from "react";
import { useParams, useNavigate } from "react-router";

export default ({ changeToFalse, username }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [password, setPassword] = useState("");
  
    const params = useParams();
    const navigate = useNavigate();
  
    async function onSubmit(e) {
      e.preventDefault();
      const editedPerson = {
         userName: username,
         firstName: firstName,
         lastName: lastName,
         password: password,
       };
    
      // This will send a post request to update the data in the database.
      //  Update router not available! 
      //  Only firstName, lastName, and password may be updated!
      await fetch(`http://localhost:4000/register`, {
        method: "POST",
        body: JSON.stringify(editedPerson),
        headers: {
          'Content-Type': 'application/json'
        },
      });
    
   
      navigate("/");
    }

    //   const onSubmit = () => {
//     const uid = firebaseApp.auth().currentUser.uid;

//     if (image) {
//       console.log("Begin");
//       var uploadTask = storageRef.ref(`image/${image.name}`).put(image);
//       uploadTask.on(
//         "state_changed",
//         () => {},
//         error => {
//           console.log(error);
//         },
//         () => {
//           console.log("getting URL");
//           //Add URL to the Database
//           uploadTask.snapshot.ref.getDownloadURL().then(function(imageURL) {
//             const data = {
//               uid,
//               firstName,
//               lastName,
//               imageURL,
//               email: userDetails.email
//             };

//             const result = editUser(data);

//             if (result === true) {
//               console.log("User Info Edited");
//             }

//             if (result === false) {
//               console.log("ERROR");
//             }
//           });
//         }
//       );
//     } else {
//       const data = {
//         uid,
//         firstName,
//         lastName
//       };

//       const result = editUser(data);

//       if (result === true) {
//         console.log("User Info Edited");
//       }

//       if (result === false) {
//         console.log("ERROR");
//       }
//     }
//   };
  
    return (
      <div>
        <div onClick={() => changeToFalse()}>Go Back</div>
        {/* {image && (
          <img src={URL.createObjectURL(image)} alt="profile pic" height="40px" />
        )}
        <input type="file" onChange={event => setImage(event.target.files[0])} /> */}
        <input
          value={firstName}
          placeholder="Please enter first name."
          onChange={event => setFirstName(event.target.value)}
        />
        <input
          value={lastName}
          placeholder="Please enter last name."
          onChange={event => setLastName(event.target.value)}
        />
         <input
          value={password}
          placeholder="Please enter a new password."
          onChange={event => setPassword(event.target.value)}
        />
        <button onClick={onSubmit}>Submit</button>
      </div>
    );
  };