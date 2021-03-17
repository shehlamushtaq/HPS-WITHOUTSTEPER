import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { Form, Navbar, Nav } from "react-bootstrap";

const Header = () => {
  const isLogin = useSelector((state) => state.isLogin);
  const dispatch = useDispatch();
  // const history = useHistory();

  const DoLogout = () => {
    dispatch({
      type: "ADMIN_LOGOUT",
    });
  };

  return (
    <>
      {isLogin ? (
        <header>
          <Navbar bg="dark" variant="dark" className="sticky fixed-top">
            <Navbar.Brand href="#home">Navbar</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link as={Link} to="/" href="#">
                Patients List
              </Nav.Link>
              <Nav.Link as={Link} to="/register" href="#">
                Registration
              </Nav.Link>
              <Nav.Link onClick={DoLogout}>Logout</Nav.Link>
            </Nav>
            <Form inline></Form>
          </Navbar>
        </header>
      ) : null}
    </>
  );
};

export default Header;
