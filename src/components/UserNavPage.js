import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Button,
  Tooltip,
} from "react-bootstrap";

import { NavLink } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { FavoriteMovie } from "../context/FavoriteContext";
import avatar from "../images/Netflix-avatar.png";
import Account from "../Pages/Account";
const NavPage = () => {
  const { user } = UserAuth();
  const { favorite } = FavoriteMovie();
  return (
    <Navbar inverse collapseOnSelect fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <NavLink to="home" style={{ color: "red", fontSize: "rem" }}>
            Ozflix
          </NavLink>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>

      <Navbar.Collapse>
        <Nav pullRight>
          <NavItem>
            {favorite.length > 0 ? (
              <Tooltip placement="left" className="in" id="tooltip-top">
                {favorite.length}
              </Tooltip>
            ) : (
              ""
            )}
          </NavItem>
          <NavItem eventKey={1} href="#">
            <NavLink
              to="/myList"
              style={({ isActive }) => {
                return {
                  color: isActive ? "red" : "white",
                };
              }}
            >
              My List
            </NavLink>
          </NavItem>
          <NavItem>
            <NavDropdown
              eventKey={3}
              title={<img src={avatar} className="avatar" alt="" />}
              id="basic-nav-dropdown"
            >
              <MenuItem eventKey={3.1}>
                {user ? (
                  ""
                ) : (
                  <NavLink
                    to="/signup"
                    style={({ isActive }) => {
                      return {
                        color: isActive ? "red" : "black",
                      };
                    }}
                  >
                    <Button bsStyle="danger">sign Up</Button>
                  </NavLink>
                )}

                <NavLink
                  to="/"
                  style={({ isActive }) => {
                    return {
                      color: isActive ? "red" : "black",
                    };
                  }}
                >
                  {!user ? (
                    ""
                  ) : (
                    <NavLink to="/account">
                      <h3 className="home__title">
                        {user ? "Welcome back" + "" + user.email : ""}
                      </h3>

                      <Account />
                    </NavLink>
                  )}
                </NavLink>
              </MenuItem>
            </NavDropdown>
          </NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavPage;
