import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import HeaderComponent from './components/HeaderComponent';
import FooterComponent from './components/FooterComponent';
import SignUpComponent from './components/SignUpComponent';
import HomePageComponent from './components/HomePageComponent';
import LoginComponent from './components/LoginComponent';
import CandidateHomeComponent from './components/CandidateHomeComponent';
import ProfileComponent from './components/ProfileComponent';
import EditProfileComponent from './components/EditProfileComponent';
import UploadFile from './components/UploadFile';
import RMGHomeComponent from './components/RMGHomeComponent';
import EmployeeHomeComponent from './components/EmployeeHomeComponent';
import PostRequirementComponent from './components/PostRequirementComponent';
import POCHomeComponent from './components/POCHomeComponent';
import FeedbackComponent from './components/FeedbackComponent';

function App() {
  return (
    <div>
        <Router>
              <HeaderComponent />
                <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {LoginComponent}></Route>
                          <Route path = "/signup" component = {SignUpComponent}></Route>
                          <Route path = "/login" component = {LoginComponent}></Route>
                          <Route path = "/CandidateHomeComponent" component = {CandidateHomeComponent}></Route>
                          <Route path = "/ProfileComponent" component = {ProfileComponent}></Route>
                          <Route path = "/EditProfileComponent" component = {EditProfileComponent}></Route>
                          <Route path = "/UploadFile" component = {UploadFile}></Route>
                          <Route path = "/RMGHomeComponent" component = {RMGHomeComponent}></Route>
                          <Route path = "/EmployeeHomeComponent" component = {EmployeeHomeComponent}></Route>
                          <Route path = "/PostRequirementComponent" component = {PostRequirementComponent}></Route>
                          <Route path = "/POCHomeComponent" component = {POCHomeComponent}></Route>
                          <Route path = "/FeedbackComponent" component = {FeedbackComponent}></Route>
                          {/* <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
              <FooterComponent />
        </Router>
    </div>
  );
}

export default App;
