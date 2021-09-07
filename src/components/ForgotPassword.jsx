import React, { Component } from 'react';
import EmployeeService from "../services/EmployeeService";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import './FooterComponent';
import {Button,Form,Grid,Header,Image,Segment} from "semantic-ui-react";
import FooterComponent from './FooterComponent';
class ForgotPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            verificationCode: "",
            password: "",
            confirmPassword: "",
            userId: ""
          }
          this.changePassword = this.changePassword.bind(this);
          this.changeConfirmPassword = this.changeConfirmPassword.bind(this);
          this.changeVerificationCode = this.changeVerificationCode.bind(this);
          this.changeuserId = this.changeuserId.bind(this);
    }

    changeuserId = (event) => {
        this.setState({ userId: event.target.value });
      }; 

    changePassword = (event) => {
        this.setState({ password: event.target.value });
      };
    
      changeConfirmPassword = (event) => {
        this.setState({ confirmPassword: event.target.value });
      };
    
      changeVerificationCode = (event) => {
        this.setState({ verificationCode: event.target.value });
      };

    reset = (e) => {
        e.preventDefault();
        let employee = {
            password: this.state.password,
            verificationCode: this.state.verificationCode,
            userId:this.state.userId
        };
        EmployeeService.resetPassword(employee).then((res) => {
        let s = res.data;
        if (s.booleanMsg) {
          this.props.history.push("/login");
          alert("Password Changed Successfully");
        } else {
          console.log("unsuccessful");
          this.props.history.push("/forgotPassword");
          alert("Error! Could not reset your password, please make sure your verification code is correct.");
        }
      });
    }
    
    forgotpswd = (e) => {
        e.preventDefault();
       let employee = {userId: this.state.userId};
        EmployeeService.forgotPassword(employee).then((res) => {
        let s = res.data;
        console.log(s);
        if (s.booleanMsg) {
          this.props.history.push("/ResetPassword");
          alert("Verification code is sent to your registered email address");
        } else {
          console.log("unsuccessful");
          this.props.history.push("/forgotPassword");
          alert("Error! Could not send a verification code, please make sure your email address is correct.");
        }
      });
    }

    render() { 
        return ( 
            <div>
                <Navbar bg="dark" variant="dark" fixed="top">
             <Container>
            <Navbar.Brand href="#home">Recruit Right</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.home}>Home</Nav.Link>
              </Nav>
              <Nav>
              <Nav className="me-auto">
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link href="/login">
                    Log In
                  </Nav.Link>
                  <Nav.Link>|</Nav.Link>
                  <Nav.Link href="/signUp">
                    Sign In
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Grid
          textAlign="center"
          style={{ height: "110vh" }}
          verticalAlign="middle"
        >
          <Grid.Column style={{ maxWidth: 500 }}>
            <Header as="h2" color="teal" textAlign="center">
              <Image src="/logo.png" />
              Forgot Password
            </Header>
            <Form size="huge">
              <Segment stacked> 
              <Form.Input
                  fluid
                  placeholder="Enter Email Id"
                  icon="mail"
                  iconPosition="left"
                  value={this.state.userId}
                  onChange={this.changeuserId}
                  required="required"
                />
                <Button
                  color="teal"
                  fluid
                  size="large"
                  disabled={
                    !this.state.userId 
                  }
                  onClick={this.forgotpswd}
                >
                  Send Verification Code
                </Button>
              </Segment>
            </Form><br></br>
            <div class="alert alert-info" role="alert" textAlign="left">
                <b>Steps for password reset:</b><br></br>
                1) Click on <i>"Send verification code"</i> hyperlink and enter the code in verification code field.<br></br>
                2) Now, Set your new password and confirmPassword.
        </div>
          </Grid.Column>
        </Grid>
       </div>
         );

    }
}
 
export default ForgotPassword;