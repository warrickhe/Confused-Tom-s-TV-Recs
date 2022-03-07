import React from "react";
import { Container, Row, Col, TextInput } from "react-materialize";
import Profile from "./Profile";
import FriendsList from "./FriendsList";
import ReviewsList from "./ReviewsList";

export default ({ username }) => {
    return (
        <Container>
            <Row>
                <Col s={12} m={4}>
                    <Profile username={username} />
                    <FriendsList username={username} />
                </Col>
                <Col s={12} m={8}>
                    <ReviewsList username={username} />
                </Col>
            </Row>
        </Container>
    );
};