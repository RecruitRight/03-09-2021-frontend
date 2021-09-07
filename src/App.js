import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import CandidateHomeComponent from './components/CandidateHomeComponent';
import ProfileComponent from './components/ProfileComponent';
import EditProfileComponent from './components/EditProfileComponent';
import UploadFile from './components/UploadFile';
import RMGHomeComponent from './components/RMGHomeComponent';
import EmployeeHomeComponent from './components/EmployeeHomeComponent';
import PostRequirementComponent from './components/PostRequirementComponent';
import POCHomeComponent from './components/POCHomeComponent';
import FeedbackComponent from './components/FeedbackComponent';
import PostProfileComponent from './components/PostProfileComponent';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Status from './components/Status';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';

function App() {
  return (
    <div>
        <Router>
                <div className="Container-fluid">
                    <Switch> 
                          <Route path = "/" exact component = {Home}></Route>
                          <Route path = "/signup" component = {SignUp}></Route>
                          <Route path = "/login" component = {Login}></Route>
                          <Route path = "/CandidateHomeComponent" component = {CandidateHomeComponent}></Route>
                          <Route path = "/ProfileComponent" component = {ProfileComponent}></Route>
                          <Route path = "/EditProfileComponent" component = {EditProfileComponent}></Route>
                          <Route path = "/UploadFile" component = {UploadFile}></Route>
                          <Route path = "/RMGHomeComponent" component = {RMGHomeComponent}></Route>
                          <Route path = "/EmployeeHomeComponent" component = {EmployeeHomeComponent}></Route>
                          <Route path = "/PostRequirementComponent" component = {PostRequirementComponent}></Route>
                          <Route path = "/POCHomeComponent" component = {POCHomeComponent}></Route>
                          <Route path = "/FeedbackComponent" component = {FeedbackComponent}></Route>
                          <Route path = "/PostProfileComponent" component = {PostProfileComponent}></Route>
                          <Route path = "/LandingPage" component={LandingPage}></Route>
                          <Route path = "/Home" component={Home}></Route>
                          <Route path = "/Status" component={Status}></Route>
                          <Route path = "/ForgotPassword" component={ForgotPassword}></Route>
                          <Route path = "/ResetPassword" component={ResetPassword}></Route>
                          {/* <Route path = "/add-employee/:id" component = {CreateEmployeeComponent}></Route>
                          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route> */}
                          {/* <Route path = "/update-employee/:id" component = {UpdateEmployeeComponent}></Route> */}
                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
