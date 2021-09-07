import React, { Component } from 'react';
import { Form ,Nav,NavDropdown,Navbar} from "react-bootstrap";
import pic from "../images/Were.png";
import './GlobalVariable';
import {
  Container,
  Button,
  Divider,
  Grid,
  Header,
  Image,
  List,
  Segment,
} from "semantic-ui-react";

const  style = {
  h3: {
    marginTop: "2em",
    padding: "2em 0em",
    fontSize: "2em",
  },
  h1: {
    fontSize: "1.5em",
  },
};

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }

  signUp = (e) => {
    e.preventDefault();
    this.props.history.push('/signup');
}

home = (e) => {
    e.preventDefault();
    this.props.history.push('/home');
}
  render() { 
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
                <Nav.Link onClick={this.home}>Home</Nav.Link>
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.home}>About Us</Nav.Link>
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.home}>Contact</Nav.Link>
              </Nav>
              <Nav>
                <Nav className="me-auto">
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link href="/signUp">
                    Create an Account?
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
    
      <Segment
        style={{
          padding: "6em 0em",
          background: "#1B1C1D",
          color: "rgba(255, 255, 255, 0.9)",
        }}
        vertical
      >
        
        <Container text>
          <Header
            as="h1"
            content="Welcome to the world of possibilities"
            inverted
            style={{
              fontSize: "4em",
              fontWeight: "normal",
              textAlign:"center",
              marginBottom: 0,
              marginTop: "1em",
            }}
          />
          <Header
            as="h3"
            content="Recruitment made easy "
            inverted
            style={{
              fontSize: "1.3em",
              fontWeight: "normal",
              textAlign:"center",
              marginBottom: 0,
              marginTop: "1em",
            }}
          /><br></br>
          <div className="text-center">
          <Button as="a" size="large" href="/login">
            Get Started
          </Button>
          </div>
        </Container>
      </Segment>
  
      <Segment style={{ padding: "8em 0em" }} vertical>
            <Grid container stackable verticalAlign="middle">
              <Grid.Row>
                <Grid.Column floated="right" width={6}>
                  <img
                    bordered
                    rounded
                    src="/images/aboutus.png"
                    width="400"
                    height="275"
                  />
                </Grid.Column>
                <Grid.Column width={8}>
                  <Header as="h3" style={{ fontSize: "2em" }}>
                    About Us
                  </Header>
                  <p style={{ fontSize: "1.33em" }}>
                    We are a team of five, working for an organisation to
                    recruitment easier. We apply 100's of positions on your behalf
                    by sending your resume and CV to 100+ decision makers in your
                    field of experience and education. In only one step, you'll be
                    well on your way to market yourself.
                    <br></br>
                    <br></br>
                    1. Send us your resume or CV
                    <br></br>
                    <br></br>
                    We will calculate your profile and circulate among the
                    recruiters to give you the best suitable career growth job.
                  </p>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Segment>
      <Segment style={{ padding: "0em" }} class="bg-light" vertical>
        <Grid celled="internally" columns="equal" stackable>
          <Grid.Row textAlign="center">
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "What a Company"
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                That is what they all say about us
              </p>
            </Grid.Column>
            <Grid.Column style={{ paddingBottom: "5em", paddingTop: "5em" }}>
              <Header as="h3" style={{ fontSize: "2em" }}>
                "I shouldn't have gone with their competitor."
              </Header>
              <p style={{ fontSize: "1.33em" }}>
                <Image avatar src="/images/avatar/large/nan.jpg" />
                <b>Nan</b> Chief Fun Officer Acme Toys
              </p>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </Segment>
  
      <Segment style={{ padding: "8em 0em" }} vertical>
        <Container text>
          <Header as="h3" style={{ fontSize: "2em" }}>
          Recruit Right, the best.
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Let us market your career to over 1000+ decision makers. Apply Now!
          </p>
          <Button as="a" size="large">
            Read More
          </Button>
  
          <Divider
            as="h4"
            className="header"
            horizontal
            style={{ margin: "3em 0em", textTransform: "uppercase" }}
          >
            <a href="#">Case Studies</a>
          </Divider>
  
          <Header as="h3" style={{ fontSize: "2em" }}>
            Did We Tell You About Our Bananas?
          </Header>
          <p style={{ fontSize: "1.33em" }}>
            Yes I know you probably disregarded the earlier boasts as non-sequitur
            filler content, but it's really true. It took years of gene splicing
            and combinatory DNA research, but our bananas can really dance.
          </p>
          <Button as="a" size="large">
            I'm Still Quite Interested
          </Button>
        </Container>
      </Segment>
  
      <Segment
        className="bg-light"
        style={{ padding: "1em 0em" }}
        textAlign="center"
        vertical
      >
        <div class="text-center mb-5">
          <div class="feature bg-primary bg-gradient text-white rounded-3 mb-3">
            <i class="bi bi-envelope"></i>
          </div>
          <h2 class="fw-bolder">Get in touch</h2>
          <p class="lead mb-0">We'd love to hear from you</p><br></br><br></br>
          <div class="ui form">
            <div class="ui input">
              <textarea type="text" rows="6" cols="65" name="Opinion" placeholder="Please share your opinions here, It matters to us"></textarea>
            </div><br></br><br></br>
            <Button as="a" size="large">
            Send
          </Button>
          </div>
        </div>
      </Segment>
      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
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
    </div> );
  }
}
export default Home;

