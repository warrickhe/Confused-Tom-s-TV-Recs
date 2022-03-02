import React from "react";
import { Navbar, Icon, NavItem, Container } from "react-materialize";

export default () => {
  return (
    <div style={{ background: "paleturquoise" }}>
      <Container>
        <Navbar
          alignLinks="right"
          brand={
            <a
              className="brand-logo"
              href="www.google.com"
            >
                Logo
            </a>
          }
          className="custom-navbar"
          menuIcon={<Icon>menu</Icon>}
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
            <NavItem href="">
                Profile
            </NavItem>
            <NavItem href="components.html">
                Log out
            </NavItem>
        </Navbar>
      </Container>
    </div>
  );
};
