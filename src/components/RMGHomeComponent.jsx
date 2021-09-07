import React, {Component } from 'react';

class RMGHomeComponent extends Component {
    constructor() {
        super();
        this.state = {  }
    }

    viewProfile=(event)=>{
        this.props.history.push('/ProfileComponent');
    }

    postProfiles=(event)=>{
        this.props.history.push('/UploadFile');
    }

    render() { 
        return ( 
            <div>
                <h1>RMG Dashboard</h1>
                <button className="btn btn-primary" onClick={this.viewProfile}>Profile</button>
                <button className="btn btn-primary" style={{marginLeft: "10px"}}>Status</button>
                <button className="btn btn-primary" style={{marginLeft: "10px"}} onClick={this.postProfiles}>Post Profiles</button>
            </div>
         );
    }
}
 
export default RMGHomeComponent;