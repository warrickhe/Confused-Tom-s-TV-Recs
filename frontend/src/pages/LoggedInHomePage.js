import React,{useContext} from 'react'
import EditProfile from '../components/EditProfile';
import EditReview from '../components/EditReview';
import ReviewsList from '../components/ReviewsList';
import Searches from '../components/Searches';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import UserContext from "../UserContext";
import {Col,Container,Row } from "react-materialize";

//This is what the website looks like for logged in people.

export default function LoggedInHomePage() {
    const {user, setUser} = useContext(UserContext);
    return (
        <main style={{ padding: "1rem 0" }}>
            <center><h1 style={{ color: 'paleturquoise' } }>TV Reviews</h1></center>
            <div className="">
                <Container>
                <Row>
                <Col s={12} m={4}>
                    <Searches />
                     <EditReview />
                </Col>
                <Col s={12} m={8}>
                    <ReviewsList username={user} wantFeed={true}/>
                </Col>
                </Row>
                </Container>
                
            </div>
        </main>
    )
}
