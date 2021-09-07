import React, { Component } from "react";
import './GlobalVariable';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { Grid, Segment, List, Header, Image } from "semantic-ui-react";

class ProfileComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:''
    };
  }

  editProfile = () => {
    console.log("First Name:"+global.firstName);
    this.props.history.push("/EditProfileComponent");
    
  };

  componentDidMount=()=>{
    this.setState({
      firstName: global.firstName
    })
    
    console.log("FirstName= "+this.state.firstName);
    console.log("Global FirstName= "+global.firstName);
  }

  // ProfileComponent = (props) => {
  //   <p>{this.props.sess}</p>;
  // };
  
  render() {
    return (<div>
      <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            <Navbar.Brand>
              <img
                src="images/logosymbol.png"
                width="30"
                style={{ marginRight: "1.5em"}}
              />
              Recruit Right
            </Navbar.Brand>
              <Nav className="me-auto">
                <Nav.Link>|</Nav.Link>
                <Nav.Link href="/LandingPage">Home</Nav.Link>
              </Nav>
              <Nav>
              <NavDropdown
                    title={global.firstName + " " + global.lastName}
                    id="basic-nav-dropdown"
                    style={{ marginLeft: "20" }}
                  >
                    <NavDropdown.Item href="/ProfileComponent">
                      View Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="/EditProfileComponent">
                      Edit Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/UploadFile">
                      Upload Resume
                    </NavDropdown.Item>
                  </NavDropdown>
                <Nav className="me-auto">
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link onClick={this.logout}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="page-wrap">
        <div className="container p-5 center">
          <div className="card " style={{width: "35rem" }} >
            <div className="p-5">
              <h1 className="text-center">Profile</h1>
              <br></br>
              <label style={{fontSize:16}}> First Name: {this.state.firstName}</label>
              <br></br>
              <br></br>
              <label style={{fontSize:16}}> Last Name: {global.lastName}</label>
              <br></br>
              <br></br>
              <label style={{fontSize:16}}> Contact: {global.contact}</label>
              <br></br>
              <br></br>
              <label style={{fontSize:16}}> Email: {global.userId}</label>
              <br></br>
              <br></br>
              <br></br>
              <div class="text-center">
                <button
                  type="button"
                  class="btn btn-primary"
                  onClick={this.editProfile}
                >
                  Edit Profile
                </button>
              </div>
              <br></br>
            </div>
        </div>
      </div>
      </div>
      </div>
    );
  }
}

export default ProfileComponent;
