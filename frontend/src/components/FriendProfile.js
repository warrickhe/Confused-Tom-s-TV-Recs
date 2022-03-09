import React, { useEffect, useState } from "react";
import { Container, Row, Col, TextInput } from "react-materialize"
import moment from "moment";
import { Link } from "react-router-dom";

const Review = (props) => {
  const onReviewDelete = (event, id) => {
    event.preventDefault();
  };
  return (
    <Container>
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
    </Container>
  );

}

export default ({ username }) => {
  const [reviews, setReviews] = useState([]);
  console.log(username);
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

    getReviews();

    return;
  }, [reviews.length]);


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
    <Container>
    <Row>
    <Col s={12} m={4}>
    </Col>
    </Row>
    <Col s={12} m={8}>
    <div>
      <h3> {username}'s Reviews</h3>
      <div>
        {reviewsList()}
      </div>
    </div>
    </Col>
    </Container>
  );
}
