import React, {Component } from 'react';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import * as ReactBootstrap from 'react-bootstrap';
import './GlobalVariable';
import EmployeeService from '../services/EmployeeService';
import { Header,Table,Menu,Icon, } from "semantic-ui-react";

class Status extends Component {
    constructor() {
        super();
        this.state = { 
            requirements:[],
         }
         this.renderRequirement = this.renderRequirement.bind(this);
    }

    componentDidMount(){
        let employee = {sessionId:global.sessionId} ;
        console.log(employee);
        EmployeeService.pocRequirement(employee).then(res => {
            let s=res.data;
            console.log(s);
            console.log(s.requirements);
            this.setState({requirements:s.requirements});
        })
    }
    

    viewProfile=(event)=>{
        this.props.history.push('/ProfileComponent');
    }

    postReq=(event)=>{
        this.props.history.push('/PostRequirementComponent');
    }

    logout = (e) => {
        e.preventDefault();
        global.userId="";
            global.userType="";
            global.firstName="";
            global.lastName="";
            global.contact="";
        this.props.history.push('/home');
    }
  
    home = (e) => {
        e.preventDefault();
        this.props.history.push('/POCHomeComponent');
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
            <Navbar.Brand href="#home">
              <img
                src="images/logosymbol.png"
                width="30"
                style={{ marginRight: "1.5em" }}
              />
              Recruit Right
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link>|</Nav.Link>
                <Nav.Link onClick={this.home}>Home</Nav.Link>
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
                  <Nav.Link value={this.state.userType} onClick={this.logout}>
                    Logout
                  </Nav.Link>
                </Nav>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <div className="container" style={{marginTop:"2em"}}>
        <Header
            as="h1"
            content="Status"
            style={{
              fontWeight: "normal",
              textAlign:"center",
              marginBottom: 0,
              padding: "2em",
            }}
          />
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
            </div>
            </div>
         );
    }
}
 
export default Status;