import React, {Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import './GlobalVariable';
import EmployeeService from '../services/EmployeeService';
import FooterComponent from './FooterComponent';
import { Header,Table,Menu,Icon, } from "semantic-ui-react";

class ViewRequirements extends Component {
    constructor() {
        super();
        this.state = { 
            requirements:[],
         }
         this.renderRequirement = this.renderRequirement.bind(this);
    }

    componentDidMount(){
        let employee = {sessionId:window.sessionId} ;
        console.log(employee);
        EmployeeService.fetchAllActiveRequirements(employee).then(res => {
            let s=res.data;
            console.log(s);
            console.log(s.requirements);
            this.setState({requirements:s.requirements});
        })
    }
    
    logout = (e) => {
      e.preventDefault();
        EmployeeService.logout().then((res) => {
          let s = res.data;
          if (s.booleanMsg) {
            window.userId = "";
            window.userType = "";
            window.firstName = "";
            window.lastName = "";
            window.contact = "";
            window.sessionId = "";
            localStorage.clear();
            this.props.history.push('/Home');
          } 
          
        });
    };
    
    viewProfile= (e) => {
      e.preventDefault();
      this.props.history.push('/ProfileComponent');
    };
  
    editProfile = (e) => {
      e.preventDefault();
      this.props.history.push('/EditProfileComponent');
  }
    uploadProfile = (e) => {
    e.preventDefault();
    this.props.history.push('/UploadFile');
  }
  
  viewReq = (e) => {
    e.preventDefault();
    this.props.history.push('/ViewRequirements');
  }
  
  Status = (e) => {
    e.preventDefault();
    this.props.history.push('/Status');
  }
  
    home = (e) => {
        e.preventDefault();
        this.props.history.push('/RMGHomeComponent');
    }

    renderRequirement = (req,index) => {
        return(
            <Table.Row key={index}>
                <Table.Cell>{req.reqId}</Table.Cell>
                <Table.Cell>{req.isu}</Table.Cell>
                <Table.Cell>{req.subIsu}</Table.Cell>
                <Table.Cell>{req.projectName}</Table.Cell>
                <Table.Cell>{req.jobRole}</Table.Cell>
                <Table.Cell>{req.jobRoleType}</Table.Cell>
                <Table.Cell>{req.techStack}</Table.Cell>
                <Table.Cell>{req.experience}</Table.Cell>
                <Table.Cell>{req.status}</Table.Cell>
            </Table.Row>
        )
    }

    render() { 
        return ( 
            <div className="page-wrap">
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
                <Nav.Link onClick={this.viewReq}>View Requirements</Nav.Link>
              </Nav>
              <Nav>
              <NavDropdown
                    title={window.firstName + " " + window.lastName}
                    id="basic-nav-dropdown"
                    style={{ marginLeft: "20" }}
                  >
                    <NavDropdown.Item onClick={this.viewProfile}>
                      View Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item onClick={this.editProfile}>
                      Edit Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={this.uploadProfile}>
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
      
        <div className="container" style={{marginTop:"2em"}}>
        <b><Header
            as="h1"
            content="View Requirements"
            style={{
              fontWeight: "normal",
              textAlign:"center",
              marginBottom: 0,
              padding: "2em",
            }}
          /></b>
            <ReactBootstrap.Table stripped bordered hover>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Requirement Id</Table.HeaderCell>
                        <Table.HeaderCell>ISU</Table.HeaderCell>
                        <Table.HeaderCell>Sub-ISU</Table.HeaderCell>
                        <Table.HeaderCell>Project Name</Table.HeaderCell>
                        <Table.HeaderCell>Job Role</Table.HeaderCell>
                        <Table.HeaderCell>Job Role Type</Table.HeaderCell>
                        <Table.HeaderCell>Tech Stack</Table.HeaderCell>
                        <Table.HeaderCell>Experience</Table.HeaderCell>
                        <Table.HeaderCell>Status</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>
                <Table.Body>
                    {this.state.requirements.map(this.renderRequirement)}   
                </Table.Body>
            </ReactBootstrap.Table>
            </div><FooterComponent></FooterComponent>
            </div>
         );
    }
}
 
export default ViewRequirements;