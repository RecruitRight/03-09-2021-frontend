import React from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import SignUp from './components/SignUp';
import Login from './components/Login';
import ProfileComponent from './components/ProfileComponent';
import EditProfileComponent from './components/EditProfileComponent';
import UploadFile from './components/UploadFile';
import RMGHomeComponent from './components/RMGHomeComponent';
import EmployeeHomeComponent from './components/EmployeeHomeComponent';
import PostRequirementComponent from './components/PostRequirementComponent';
import POCHomeComponent from './components/POCHomeComponent';
import FeedbackComponent from './components/FeedbackComponent';
import LandingPage from './components/LandingPage';
import Home from './components/Home';
import Status from './components/Status';
import ForgotPassword from './components/ForgotPassword';
import ResetPassword from './components/ResetPassword';
import ViewRequirements from './components/ViewRequirements';
import ViewRequirementsPanelist from './components/ViewRequirementsPanelist';
import EditProfileEmployee from './components/EditProfileEmployee';
import EditProfilePOC from './components/EditProfilePOC';
import EditProfileRMG from './components/EditProfileRMG';
import ProfileEmployee from './components/ProfileEmployee';
import ProfileRMG from './components/ProfileRMG';
import ProfilePOC from './components/ProfilePOC';
import UploadProfileRMG from './components/UploadProfileRMG';
import CandidateProfileStatus from './components/CandidateProfileStatus';
import POCEligibleProfiles from './components/POCEligibleProfiles';
import CloseRequirement from './components/CloseRequirement';
import ViewAllRequirements from './components/ViewAllRequirements';

function App() {
  return (
    <div>
        <Router>
                <div className="Container-fluid">
                    <Switch> 
                          <Route path = "/" exact component = {Home}></Route>
                          <Route path = "/signup" component = {SignUp}></Route>
                          <Route path = "/login" component = {Login}></Route>
                          <Route path = "/ProfileComponent" component = {ProfileComponent}></Route>
                          <Route path = "/EditProfileComponent" component = {EditProfileComponent}></Route>
                          <Route path = "/UploadFile" component = {UploadFile}></Route>
                          <Route path = "/RMGHomeComponent" component = {RMGHomeComponent}></Route>
                          <Route path = "/EmployeeHomeComponent" component = {EmployeeHomeComponent}></Route>
                          <Route path = "/PostRequirementComponent" component = {PostRequirementComponent}></Route>
                          <Route path = "/POCHomeComponent" component = {POCHomeComponent}></Route>
                          <Route path = "/FeedbackComponent" component = {FeedbackComponent}></Route>
                          <Route path = "/LandingPage" component={LandingPage}></Route>
                          <Route path = "/Home" component={Home}></Route>
                          <Route path = "/Status" component={Status}></Route>
                          <Route path = "/ForgotPassword" component={ForgotPassword}></Route>
                          <Route path = "/ResetPassword" component={ResetPassword}></Route>
                          <Route path = "/ViewRequirements" component = {ViewRequirements}></Route>
                          <Route path = "/ViewRequirementsPanelist" component = {ViewRequirementsPanelist}></Route>
                          <Route path = "/EditProfileEmployee" component = {EditProfileEmployee}></Route>
                          <Route path = "/EditProfilePOC" component = {EditProfilePOC}></Route>
                          <Route path = "/EditProfileRMG" component = {EditProfileRMG}></Route>
                          <Route path = "/ProfileEmployee" component = {ProfileEmployee}></Route>
                          <Route path = "/ProfileRMG" component = {ProfileRMG}></Route>
                          <Route path = "/ProfilePOC" component = {ProfilePOC}></Route>
                          <Route path = "/UploadProfileRMG" component = {UploadProfileRMG}></Route>
                          <Route path = "/CandidateProfileStatus" component = {CandidateProfileStatus}></Route>
                          <Route path = "/POCEligibleProfiles" component = {POCEligibleProfiles}></Route>
                          <Route path = "/CloseRequirement" component = {CloseRequirement}></Route>
                          <Route path = "/ViewAllRequirements" component = {ViewAllRequirements}></Route>
                    </Switch>
                </div>
        </Router>
    </div>
  );
}

export default App;
