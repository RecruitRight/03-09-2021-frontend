import React, { Component } from "react";
import NavBar from "../dashboard/NavBar";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Card,
  Button,
  CardDeck,
} from "react-bootstrap";
import "./GlobalVariable";
import { Grid, Segment, List, Header, Image } from "semantic-ui-react";
import "../App.css";

const style = {
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
    fontSize: "2em",
  },
  h1: {
    fontSize: "1.5em",
  },
};

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      firstName:'',
      lastName:'',
    };
  }

  logout = (e) => {
    e.preventDefault();
    global.userId = "";
    global.userType = "";
    global.firstName = "";
    global.lastName = "";
    global.contact = "";
    global.sessionId = "";
    this.props.history.push("/home");
  };

  componentDidMount=()=> {
      this.state.firstName=global.firstName;
      this.state.lastName=global.lastName;
      console.log(this.state.firstName);
      console.log(global.firstName);
  }

  render() {
    console.log("title"+(global.firstName + " " + this.state.lastName));
    return (
      <div>
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
        <div className="masthead segment bg1">
          <img src="/images/welcome.png" width="1600" height="650" />
        </div>
        <div
        style={{
          padding: "4em 0em"
        }}>
        </div>
        <div>
          <div className="container-fluid d-flex justify-content-center">
            <div className="row">
              <div className="col-md-4">
                <div className="card text-center">
                  <div className=" overflow">
                    <img
                      src="/images/resume.png"
                      alt="Image 1"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body text-dark">
                    <p classsName="card-text text-secondary">For a best suitable job, upload your best CV or Resume.</p>
                    <a href="/UploadFile" className="btn btn-outline-primary">
                      Upload Now
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card text-center">
                  <div className=" overflow">
                    <img
                      src="/images/profile.png"
                      alt="Image 1"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body text-dark">
                    <p classsName="card-text text-secondary">Click here to view your profile and to edit it</p>
                    <a href="/ProfileComponent" className="btn btn-outline-primary">
                      Profile
                    </a>
                  </div>
                </div>
              </div>
              <div className="col-md-4" height="20">
                <div className="card text-center">
                  <div className= "overflow">
                    <img
                      src="/images/Status.png"
                      alt="Image 1"
                      className="card-img-top"
                    />
                  </div>
                  <div className="card-body text-dark">
                    <p classsName="card-text text-secondary">Check out your profile status</p>
                    <a href="#" className="btn btn-outline-primary">
                      Status
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 20em" }}
      >
        <Container className="text-center">
          <Grid divided inverted stackable>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Company" />
              <List link inverted>
                <List.Item as="a">Site Map</List.Item>
                <List.Item as="a">Contact</List.Item>
                <List.Item as="a">Terms and Conditions</List.Item>
                <List.Item as="a">Privacy Policy</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={4}>
              <Header inverted as="h4" content="Social Media" />
              <List link inverted>
                <List.Item as="a">Facebook</List.Item>
                <List.Item as="a">Instagram</List.Item>
                <List.Item as="a">LinkedIn</List.Item>
                <List.Item as="a">Twitter</List.Item>
              </List>
            </Grid.Column>
            <Grid.Column width={7}>
              <p fontSize="15" textAlign="center">
                Recruit Right is a small application which helps people find jobs
                according to their profile.
              </p>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    </div>
    );
  }
}

export default LandingPage;
