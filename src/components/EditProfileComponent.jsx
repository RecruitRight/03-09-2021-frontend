import axios from 'axios';
import React, { Component} from 'react';
import EmployeeService from '../services/EmployeeService';
import UploadFile from './UploadFile';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './GlobalVariable';

class EditProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = { 
          firstName: '',
          lastName: '',
          contact: ''
         }
         this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
         this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
         this.changeContactHandler = this.changeContactHandler.bind(this);
         this.saveOrUpdateProfile = this.saveOrUpdateProfile.bind(this);
    }

    saveOrUpdateProfile= (event) => {
      event.preventDefault();
        let employee = {firstName: this.state.firstName, lastName: this.state.lastName, contact: this.state.contact};
        console.log('employee => ' + JSON.stringify(employee));

        EmployeeService.updateProfile(employee).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            <div><h4>Profile Updated</h4></div>
            this.props.history.push('/ProfileComponent');
            }
            else{
                console.log("unsuccessful");
            }
        });
  }

  /*getProfileData=()=> {
  const [repo, setRepo] = useState([]);

  useEffect(()=> getRepo(),[]);

  const getRepo=()=>{
    axios.get('http://localhost:8080/').then(response =>{
      if(booleanMsg){
        const myRepo=response.data;
        setRepo(myRepo);
      }
      else{
          console.log("No Data Pulled");
      }
  });
  }
}*/

componentDidMount() {
  // GET request using axios with error handling
  axios.get('http://localhost:8080/')
      .then(response => this.setState(
        { firstName: response.data.firstName ,
          lastName: response.data.lastName,
          contact: response.data.contact
        }))
      .catch(error => {
          this.setState({ errorMessage: error.message });
          console.error('There was an error!', error);
      });
}

    changeFirstNameHandler= (event) => {
      this.setState({firstName: event.target.value});
  }

    changeLastNameHandler= (event) => {
      this.setState({lastName: event.target.value});
  }

     changeContactHandler= (event) => {
      this.setState({contact: event.target.value});
  }

    cancel=()=>{
      this.props.history.push('/ProfileComponent');
    }

    render() { 
        return ( <div>
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
                    <div className = "container p-5 center">
                      <div className="card " style={{width: "35rem" }}>
                       <div className="p-5">
                              <form>
                                  <h1 className="text-center">Edit Profile</h1>
                                  <div className = "card-body"></div>
                                      <label style={{fontSize:16}}> First Name: </label><br></br>
                                      <input name="firstName" className="form-control" 
                                          value={this.state.firstName} onChange={this.changeFirstNameHandler} required/>
                                  <br></br>
              
                                      <label style={{fontSize:16}}> Last Name: </label><br></br>
                                      <input name="lastName" className="form-control" 
                                          value={this.state.lastName} onChange={this.changeLastNameHandler} required/>
                                  
                                  <br></br>
                                      <label style={{fontSize:16}}> Contact: </label><br></br>
                                      <input name="contact" className="form-control" 
                                          value={this.state.contact} onChange={this.changeContactHandler} required/>
                                
                                  <br></br>
                                  {/*
                                  <label> Attach Resume:</label>
                                  <UploadFile />
                                  <br></br>*/}
                                  <div className="text-center">
                                  <button className="btn btn-primary" onClick={this.saveOrUpdateProfile}>Save Profile</button>
                                  <button className="btn btn-primary" onClick={this.cancel} style={{marginLeft: "10px"}}>Cancel</button>
                                  </div>
                              </form>
                          </div>
                        </div>
                      </div>
              </div>  
</div>
         );
    }
}
 
export default EditProfileComponent;