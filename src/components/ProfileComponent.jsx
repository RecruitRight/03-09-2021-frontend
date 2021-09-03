import React, { Component } from 'react';

class ProfileComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    editProfile=()=>{
        this.props.history.push('/EditProfileComponent');
    }

    render() { 
        return (<div className = "container p-5">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className="p-5">
                                <h3 className="text-center">Profile</h3>
                                <br></br>
                            { //   <div class="d-flex flex-column align-items-center text-center p-3 py-5"><img class="rounded-circle mt-5" src="logo.png" width="90"></div>
                                 }  <label> First Name: </label><br></br><br></br>
                                    <label> Last Name: </label><br></br><br></br>
                                    <label> Contact: </label><br></br><br></br>
                                    <label> Email: </label><br></br><br></br>
                                    <br></br>
                                    <div class="text-center">
                                    <button type="button" class="btn btn-primary" onClick={this.editProfile}>Edit Profile</button>
                                    </div>
                                <br></br>
                            </div>
                        </div>
                   </div>
                </div>   
    );
    }
}
 
export default ProfileComponent;