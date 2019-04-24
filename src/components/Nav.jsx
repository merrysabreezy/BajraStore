import React, { Component } from "react";
// import { Link } from "react-router-dom";
import { Navbar, Image, ButtonToolbar, Button } from "react-bootstrap";
import "./css/Navbar.css";
import LoginModal from "./LoginModal";
import RegisterModal from "./RegisterModal";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loginModalShow: false,
      registerModalShow: false
    };
  }
  render() {
    let loginModalClose = () => this.setState({ loginModalShow: false });
    let registerModalClose = () => this.setState({ registerModalShow: false });
    return (
      <Navbar bg="dark" variant="dark" fixed="top">
        <Navbar.Brand href="#home">
          <Image
            alt=""
            src="../images/bajra.png"
            width="30"
            height="30"
            className="d-inline-block align-top"
          />
          Bajra
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <ButtonToolbar>
              <Button
                variant="primary"
                onClick={() => this.setState({ loginModalShow: true })}
              >
                Login
              </Button>
              <LoginModal
                show={this.state.loginModalShow}
                onHide={loginModalClose}
              />
            </ButtonToolbar>
            <ButtonToolbar>
              <Button
                variant="primary"
                onClick={() => this.setState({ registerModalShow: true })}
              >
                Register
              </Button>
              <RegisterModal
                show={this.state.registerModalShow}
                onHide={registerModalClose}
              />
            </ButtonToolbar>
            {/* <Nav.Link href="#link">Register</Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      // <div className="container">
      //   <nav className="navbar navbar-expand-md navbar-dark bg-dark mb-4">
      //     <Link className="navbar-brand" to="/">
      //       Bajra
      //     </Link>
      //     <button
      //       className="navbar-toggler"
      //       type="button"
      //       data-toggle="collapse"
      //       data-target="#navbarCollapse"
      //       aria-controls="navbarCollapse"
      //       aria-expanded="false"
      //       aria-label="Toggle navigation"
      //     >
      //       <span className="navbar-toggler-icon" />
      //     </button>

      //     <div className="collapse navbar-collapse" id="navbarCollapse">
      //       <ul className="navbar-nav ml-auto">
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/">
      //             Login
      //           </Link>
      //         </li>
      //         <li className="nav-item">
      //           <Link className="nav-link" to="/link">
      //             Register
      //           </Link>
      //         </li>
      //       </ul>
      //     </div>
      //   </nav>
      // </div>
    );
  }
}

export default Nav;
