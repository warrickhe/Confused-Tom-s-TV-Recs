import React from "react";
import { Container, Row, Col, TextInput } from "react-materialize";
import Profile from "./Profile";
import FriendsList from "./FriendsList";
import ReviewsList from "./ReviewsList";
import { useParams } from "react-router-dom";

export default ({  }) => {

    const params = useParams();
    const uName = params.uname.toString();
    
    return (
        <Container>
            <Row>
                <Col s={12} m={4}>
                    <Profile username={uName} />
                    <FriendsList username={uName} />
                </Col>
                <Col s={12} m={8}>
                    <ReviewsList username={uName} />
                </Col>
            </Row>
        </Container>
    );
};