import React, { useState, useEffect } from "react";
import { Row, Col, Container, TextInput, Icon } from "react-materialize";
import EditProfile from "./EditProfile";
import { useParams, useNavigate } from "react-router";

export default ({ username }) => {
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    username: username,
    password: "",
  });

  console.log("username is " + username);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {

      const response = await fetch(`http://localhost:4000/username/${username}`);
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
      const record = await response.json();
      if (!record) {
        window.alert(`User with username ${username} not found`);
        navigate("/");
        return;
      }

      setData(record);
    }

    fetchData();

    return;
  }, []);


  const [editMode, setEditMode] = useState(false);

  const changeToFalse = () => {
    setEditMode(false);
  };



  return (
    <div className="outerBox m10">
      {editMode ? (
        <div>
          <EditProfile
            changeToFalse={changeToFalse}
            username={username}
          />
        </div>
      ) : (
        <div>
          <div style={{ display: "flex", marginBottom: 10 }}>
            <div
              style={{
                color: "darkblue",
                fontFamily: "arial",
                marginTop: 10
              }}
            >
              Name:
            </div>
            <div style={{ marginLeft: 10, marginTop: 10, flex: 1 }}>
              {/* {userDetails && userDetails.firstName
                ? `${userDetails.firstName} ${userDetails.lastName}`
                : "Loading"} */}
              {data.firstName}   {data.lastName}
            </div>
            {/* <div
              style={{ cursor: "pointer", marginTop: 10, color: "darkred" }}
              onClick={() => setEditMode(true)}
            >
              <Icon>edit</Icon>
            </div> */}
          </div>
          <div style={{ borderTop: "1px solid lightgray" }}>
            <div
              style={{
                color: "darkblue",
                fontFamily: "arial",
                marginTop: 10
              }}
            >
              About me:
            </div>
            <div style={{ fontSize: 12 }}>
              CS student at UCLA.
            </div>
          </div>
        </div>
      )}
    </div>
  );
};