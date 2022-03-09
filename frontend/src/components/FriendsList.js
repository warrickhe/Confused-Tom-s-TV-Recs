import React, { useEffect, useState } from "react";
import { Dropdown, Icon, Button } from "react-materialize";
import { useParams, useNavigate } from "react-router";
import moment from "moment";
import { Link } from "react-router-dom";

const OneFriend = (props) => {

    const navigate = useNavigate;

    // router for review deletion not defined yet!
    const onFriendDelete = (event, key) => {
      event.preventDefault();
      // const result = deletePost(key);
      // console.log(result);
    };

    const onFriendSelect = (event, key) => {
      event.preventDefault();

      // const result = deletePost(key);
      // console.log(result);
      // navigate("/${props.fUserName}");
    };
  
   return (
    <div>
    <div className="outerBox m10">
      <div>
        <div>
          <div style={{ display: "flex", marginBottom: 10 }}>
            
            <div style={{ marginLeft: 10, flex: 1 }}>
              <div
                style={{
                  color: "#385898",
                  fontWeight: 600
                }}
                onClick={event => {
                  //setFriendSelected(true);
                  //onFriendSelect(event, props.fUserName);
                }}
              >
                {props.fUserName}
              </div>
            </div>
            {props.fUserName === props.fUserName &&  (
              <div>
                {/* <Dropdown
                  options={{
                    alignment: "left",
                    autoTrigger: true,
                    closeOnClick: true,
                    constrainWidth: true,
                    container: null,
                    coverTrigger: true,
                    hover: false,
                    inDuration: 150,
                    onCloseEnd: null,
                    onCloseStart: null,
                    onOpenEnd: null,
                    onOpenStart: null,
                    outDuration: 250
                  }}
                  trigger={
                    <Button flat node="button">
                      <Icon>Edit</Icon>
                    </Button>
                  }
                >
                  <a href="w" style={{ color: "black" }}>
                    Edit
                  </a>
                  <a
                    href="w"
                    style={{ color: "black" }}
                    onClick={event => {
                      onFriendDelete(event, props.fUserName);
                    }}
                  >
                    Delete
                  </a>
                </Dropdown> */}
              </div>
            )}
           {/* } */}
          </div>
        </div>
        <div>{props.fUserName}</div>
      </div>
    </div>
   </div>
   );
  
  }
   
  export default ({username}) => {
      const [data, setData] = useState({
          firstName: "",
          lastName: "",
          username: username,
          password: "",
          friends: [],
        });
    const [friendSelected, setFriendSelected ] = useState(0);
    //const [friends, setFriends] = useState([]);
    const navigate = useNavigate();
    console.log(username);
   // This method fetches the records from the database.
    useEffect(() => {
     async function getFriends() {
      // const response = await fetch("http://localhost:4000/friends/${username}");
      // if (!response.ok) {
      //     const message = `An error occurred: ${response.statusText}`;
      //     window.alert(message);
      //     return;
      // }
  
      const response = await fetch(`http://localhost:4000/username/${username}`);
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.log(response);
        window.alert(message);
        return;
      }
  
      const data = await response.json();
      if (!data) {
        window.alert(`User with username ${username} not found`);
        navigate("/");
        return;
      }
       //const data = await response.json();
       console.log(data);
       setData(data);
     }
   
     if (friendSelected){
       navigate("${username}");
       return;
     }
     
     getFriends();
     return;
   }, [friendSelected]);
   
   
   //This method will map out the records on the table
   function friendsList() {
     return data.friends.map((friend) => {
       console.log(friend);
       return (
        <div>
         <OneFriend
           fUserName={friend}
           //deleteReview={() => deleteReview(record._id)}
           //key={review._id}
         />
         </div>
       );
     });
   }
   
   return (
    <div>
      <h3>My Friends</h3>
      <div>
        {friendsList()}
      </div>
    </div>
  );
  
  }