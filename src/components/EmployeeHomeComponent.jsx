import React, {Component } from 'react';

class EmployeeHomeComponent extends Component {
    constructor() {
        super();
        this.state = {  }
    }

    viewProfile=(event)=>{
        this.props.history.push('/ProfileComponent');
    }

    viewFeedback=(event)=>{
        this.props.history.push('/FeedbackComponent');
    }

    render() { 
        return ( 
            <div >
                <h1>Employee Dashboard</h1>
                <button className="btn btn-primary" onClick={this.viewProfile}>Profile</button>
                <button className="btn btn-primary" style={{marginLeft: "10px"}}>Status</button>
                <button className="btn btn-primary" onClick={this.viewFeedback} style={{marginLeft: "10px"}}>Feedback</button>
            </div>
         );
    }
}
 
export default EmployeeHomeComponent;