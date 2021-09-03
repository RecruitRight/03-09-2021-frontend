import axios from 'axios';
import React, { Component} from 'react';
import EmployeeService from '../services/EmployeeService';
import UploadFile from './UploadFile';

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
        return ( <div className="page-wrap">
          <br></br>
             <div className = "container p-4">
                  <div className = "row">
                      <div className = "card col-md-6 offset-md-3 offset-md-3">
                      <div className="p-5">
                              <form>
                                  <h3 className="text-center">Edit Profile</h3>
                                  <div className = "card-body"></div>
                                      <label> First Name: </label><br></br>
                                      <input name="firstName" className="form-control" 
                                          value={this.state.firstName} onChange={this.changeFirstNameHandler} required/>
                                  <br></br>
              
                                      <label> Last Name: </label><br></br>
                                      <input name="lastName" className="form-control" 
                                          value={this.state.lastName} onChange={this.changeLastNameHandler} required/>
                                  
                                  <br></br>
                                      <label> Contact: </label><br></br>
                                      <input name="contact" className="form-control" 
                                          value={this.state.contact} onChange={this.changeContactHandler} required/>
                                
                                  <br></br>
                                  <label> Attach Resume:</label>
                                  <UploadFile />
                                  <br></br>
                                  <div>
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