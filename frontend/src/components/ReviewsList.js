import React, { useEffect, useState } from "react";
import { Dropdown, Button, Icon } from "react-materialize";
import moment from "moment";
import { Link } from "react-router-dom";

const Review = (props) => {
  const onReviewDelete = (event, id) => {
    event.preventDefault();
  };
  return (
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
                        onReviewDelete(event, props.review_id);
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
          <div>{props.review.review}</div>
        </div>
      </div>
    </div>
  );

}

export default ({ username, wantFeed }) => {
  const [reviews, setReviews] = useState([]);
  console.log(username);
  // This method fetches the records from the database.
  useEffect(() => {
    async function getReviews() {
      if (wantFeed){
        const response = await fetch(`http://localhost:4000/feed/${username}`);
        console.log(response)
        if (!response.ok) {
          const message = `An error occurred in ReviewsList: ${response.statusText}`;
          console.log(message);
          return;
        }
        const data = await response.json();
        setReviews(data);
      } else {
        const response = await fetch(`http://localhost:4000/review/user/${username}`);
        if (!response.ok) {
          const message = `An error occurred in ReviewsList: ${response.statusText}`;
          console.log(message);
          return;
        }
        const data = await response.json();
        setReviews(data);
      }
    }

    getReviews();

    return;
  }, [username]);

  // This method will delete a review -- router Not implemented yet!
  //  async function deleteReview(id) {
  //    await fetch(`http://localhost:4000/${id}`, {
  //      method: "DELETE"
  //    });

  //    const newReviews = reviews.filter((el) => el._id !== id);
  //    setReviews(newReviews);
  //   }


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
    <div>
      <h3 style={{ color: 'paleturquoise' }}>{wantFeed? "Your Feed":"Reviews"}</h3>
      <div style={{overflowY:'scroll',height:'500px'}}>
        {reviewsList()}
      </div>
    </div>
  );






  // This following section will display the table with the reviews authored by username.
  //  

  // return (
  //     <div>
  //       {reviews.map(singleReview => (
  //         <SingleReview
  //           details={singleReview}
  //         />
  //       ))}
  //     </div>
  //   );


}