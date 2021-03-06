import React, { useEffect, useState, useContext } from "react";
import { Container, Row, Col, TextInput, Button } from "react-materialize"
import moment from "moment";
import { Link, useParams } from "react-router-dom";
import UserContext from "../UserContext";

const Review = (props) => {
  const onReviewDelete = (event, id) => {
    event.preventDefault();
  };
  return (
    <div className="loggedinwindow">
      <Row>
        <Col s={12} m={4}>
        </Col>
      </Row>
      <Col s={12} m={8}>
        <div>
          <div className="outerBox m10">
            <div>
              <div>
                <div style={{ display: "flex", marginBottom: 10 }}>
                  <div>
                    <div
                      style={{
                        color: "darkblue",
                        fontFamily: "arial",
                        marginTop: 0
                      }}
                    >
                      TV show:
                    </div>

                    <div
                      style={{
                        width: 200,
                        height: 40,
                        borderRadius: 10,
                        fontWeight: 'bold',
                        overflow: "hidden"
                      }}
                    >
                      {props.review.showName}
                    </div>
                  </div>
                  <div style={{ marginLeft: 10, flex: 1 }}>
                    <div
                      style={{
                        color: "#385898",
                        fontWeight: 600
                      }}
                    >
                      Rating
                    </div>
                    <div style={{ fontSize: 12, color: "gray" }}>
                      {props.review.rating}/5
                    </div>
                  </div>
                  <div style={{ marginLeft: 5, flex: 1 }}>
                    <div
                      style={{
                        color: "#385898",
                        fontWeight: 600
                      }}
                    >
                      {props.review.username}
                    </div>
                    <div style={{ fontSize: 12, color: "gray" }}>
                      {moment(props.review.date).fromNow()}
                    </div>
                  </div>
                  {props.review.username === props.review.username && (
                    <div>
                    </div>
                  )}
                  {/* } */}
                </div>
              </div>
              <div>{props.review.review}</div>
            </div>
          </div>
        </div>
      </Col>
    </div>
  );

}

export default ({ }) => {
  const params = useParams();
  const username = params.username.toString();
  const [reviews, setReviews] = useState([]);
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState({
    myUsername: user,
    friendUsername: username
  });
  const [btState, setState] = useState({
    state: false
  });

  // This method fetches the records from the database.
  useEffect(() => {
    async function getReviews() {
      const response = await fetch(`http://localhost:4000/review/user/${username}`);
      if (!response.ok) {
        const message = `An error occurred in ReviewsList: ${response.statusText}`;
        console.log(message);
        return;
      }

      const data = await response.json();
      setReviews(data);
    }
    async function friendsAlready() {//if friends, change button
      const response = await fetch(`http://localhost:4000/username/${user}/friends`);
      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        console.log("q", response);
        window.alert(message);
        return;
      }
      const friends = await response.json();
      console.log(friends);
      if (friends.includes(username)) {
        setState({ state: true })
      }
    }
    if (user != null) {
      friendsAlready();
    }
    getReviews();

    return;
  }, [reviews.length]);

  async function OnAddFriend(e) {
    e.preventDefault();

    setState({ state: true });

    async function FetchData() {
      const response = await fetch(`http://localhost:4000/addfriend`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          'Content-Type': 'application/json'
        },
      })
      const message = `${response.statusText}`;
      const ms = await response.text();
      if (!response.ok) {
        console.log(response);
        window.alert(ms);
        return;
      }

    };

    FetchData();

    return;

  };

  //This method will map out the records on the table
  function reviewsList() {
    return reviews.map((review) => {
      return (
        <Review
          review={review}
          //deleteReview={() => deleteReview(record._id)}
          key={review._id}
        />
      );
    });
  }


  return (
    <div className="loggedinwindow">
      <Row>
        <Col s={12} m={4}>
        </Col>
      </Row>
      <Col s={12} m={8}>
        <div>
          <center><h3 style={{ color: 'paleturquoise' }}> {username}'s Reviews</h3></center>
          <center><Button disabled={user == null || btState.state} onClick={OnAddFriend}> Add Friend</Button></center>
          <div>
            {reviewsList()}
          </div>
        </div>
      </Col>
    </div>
  );
}
