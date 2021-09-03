import React, {Component } from 'react';

class POCHomeComponent extends Component {
    constructor() {
        super();
        this.state = {  }
    }

    viewProfile=(event)=>{
        this.props.history.push('/ProfileComponent');
    }

    postReq=(event)=>{
        this.props.history.push('/PostRequirementComponent');
    }

    render() { 
        return ( 
            <div>
                <h1>Account POC Dashboard</h1>
                <button className="btn btn-primary" onClick={this.viewProfile}>Profile</button>
                <button className="btn btn-primary" style={{marginLeft: "10px"}}>Status</button>
                <button className="btn btn-primary" style={{marginLeft: "10px"}} onClick={this.postReq}>Post Requirements</button>
            </div>
         );
    }
}
 
export default POCHomeComponent;