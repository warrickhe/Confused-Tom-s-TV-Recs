import React, { useContext } from "react";
import { Navbar, Icon, NavItem, Container } from "react-materialize";
import F from "../Confused-Tom-2.png";
import F2 from "../Confused-Tom-3.png";
import { Link } from "react-router-dom"
import UserContext from "../UserContext";

function LoggedIn(user) {
  const { user1, setUser } = useContext(UserContext);
  return (
    <div style={{ background: "paleturquoise" }}>
      <Container>
        <Navbar
          alignLinks="right"
          brand={
            <a
              className="brand-logo"
              href="/LoggedIn"
              style={{ paddingTop: 8 }}
            >
              <div
                style={{

                  overflow: "hidden"
                }} >
                <img src={F} alt="Logo" height="40px" />
              </div>
            </a>
          }
          className="custom-navbar"
          menuIcon={<Icon>Menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >
          {/* {stage === "loggedIn" && ( */}

          <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
            }}
          >
            <Link to="/LoggedIn">Home</Link>
          </NavItem>

          <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
            }}
          >
            <Link to="/about">About</Link>
          </NavItem>

          <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
            }}
          >
            <Link to={"/userprof/" + user}>Profile</Link>
          </NavItem>

          {/* <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
            }}
          >
            <Link to="/Sign-In">Sign In</Link>
          </NavItem>

          <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
            }}
          >
            <Link to="/Sign-Up">Sign Up</Link>
          </NavItem> */}

          <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
              setUser(null);

            }}
          >
            <Link to="/">Log out</Link>
             
          </NavItem>
        </Navbar>
      </Container>
    </div>
  );
};

function NotLoggedIn(user) {
  return (
    <div style={{ background: "paleturquoise" }}>
      <Container>
        <Navbar
          alignLinks="right"
          brand={
            <a
              className="brand-logo"
              href="/"
              style={{ paddingTop: 8 }}
            >
              <img src={F} alt="Logo" height="40px" />
            </a>
          }
          className="custom-navbar"
          menuIcon={<Icon>Menu</Icon>}
          options={{
            draggable: true,
            edge: "left",
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
          }}
        >

          <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
            }}
          >
            <Link to="/">Home</Link>
          </NavItem>

          <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
            }}
          >
            <Link to="/about">About</Link>
          </NavItem>

          <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
            }}
          >
            <Link to="/Sign-In">Sign In</Link>
          </NavItem>

          <NavItem
            onClick={event => {
              //Stop the reloading of the page
              event.preventDefault();
            }}
          >
            <Link to="/Sign-Up">Sign Up</Link>
          </NavItem>
        </Navbar>
      </Container>
    </div>
  );
};

export default ({ stage }) => {
  const { user, setUser } = useContext(UserContext);
  if (user === null) {
    return NotLoggedIn(user);
  }
  else {
    return LoggedIn(user);
  }
};