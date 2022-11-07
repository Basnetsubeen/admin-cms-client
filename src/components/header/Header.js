import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideMenu } from "../../pages/system-state/SystemSlice";
import { adminLogout } from "../../pages/login/userAction";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.admin);
  const handleShow = () => dispatch(setShowSideMenu(true));

  const handleOnLogout = () => {
    dispatch(adminLogout());
    navigate("/");
  };
  return (
    <div>
      <Navbar collapseOnSelect bg="info" variant="light" expand="md">
        <Container>
          <div>
            {user._id && <i class="fa-solid fa-bars" onClick={handleShow}></i>}{" "}
            <Navbar.Brand href="#home">CMS</Navbar.Brand>
          </div>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              {user?._id ? (
                <Link className="nav-link" to="/" onClick={handleOnLogout}>
                  Logout
                </Link>
              ) : (
                <>
                  <Link className="nav-link" to="/">
                    Login
                  </Link>
                  <Link className="nav-link" to="/register">
                    Register
                  </Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
