import { React, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import "./Header.css";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";

import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {
  Button,
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown,
} from "react-bootstrap";

const Header = ({ total_item }) => {

  const access_token = localStorage.getItem("access_token");
  const [searchTerm, setSearchTerm] = useState("");


  if (access_token) {

    const handleChange = (e) => {
      e.preventDefault();
      setSearchTerm(e.target.value);
    };
    const navDropdownTitle = <AccountCircleIcon className="profile__1" />;

    return (
      <Container style={{ marginBottom: "5%" }}>
        <Navbar
          collapseOnSelect
          expand="lg"
          bg="dark"
          variant="dark"
          fixed="top"
          style={{ marginBottom: "5%" }}
        >
          <Navbar.Brand href="/City">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                  onChange={handleChange}
                />
                <Button>
                  <SearchIcon />
                </Button>
              </Form>
            </Nav>
            <Nav className="ml-auto">
              <NavDropdown
                title={navDropdownTitle}
                id="basic-nav-dropdown"
                active
              >
                <NavDropdown.Item href="/Myprofile">Profile</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/MyOrders">My Orders</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="/Logout">Logout</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/Cart">
                <div className="header_optionBasket">
                  <ShoppingBasketIcon />
                  <span className=" header__optionLineTwo header__basketCount">
                    {total_item}
                  </span>
                </div>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    );
  } else {
    return (
      <Container style={{ marginBottom: "3%" }}>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Navbar.Brand href="/">Home</Navbar.Brand>

          <Nav className="ml-auto">
            <Nav.Link href="/Signin">Login</Nav.Link>
            <Nav.Link href="/Signup">Signup</Nav.Link>
            <Nav.Link href="/AboutUs">About Us</Nav.Link>
            <Nav.Link href="/ContactUs">Contact Us</Nav.Link>
          </Nav>
        </Navbar>
      </Container>
    );
  }
};

export default Header;
