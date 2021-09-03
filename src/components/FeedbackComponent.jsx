import React, { Component } from 'react';
import EmployeeService from '../services/EmployeeService';

class FeedbackComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: '',
            reqId: '',
            comments: '',
            status: ''
        }
        this.changeReqId = this.changeReqId.bind(this);
        this.changeUserId = this.changeUserId.bind(this);
        this.changeComments = this.changeComments.bind(this);
        this.selectStatus = this.selectStatus.bind(this);
    }

    changeReqId= (event) => {
        this.setState({reqId: event.target.value});
    }

    changeUserId= (event) => {
        this.setState({userId: event.target.value});
    }

    changeComments= (event) => {
        this.setState({comments: event.target.value});
    }

    selectStatus= (e)=> {
        this.setState({status:e.target.value});
    }

    cancel(){
        this.props.history.push('/FeedbackComponent');
            
    }

    sendFeedback = (e) => {
        e.preventDefault();
        let employee = {userId:this.state.userId, reqId:this.state.reqId, comments: this.state.comments, status: this.state.status};
        console.log('employee => ' + JSON.stringify(employee));

        // step 5
        EmployeeService.feedBack(employee).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            this.props.history.push('/EmployeeHomeComponent');
            }
            else{
                console.log("unsuccessful");
            }
        });
    }

    render() { 
        return (  
            <div className="page-wrap">
            <br></br>
               <div className = "container p-4">
                    <div className = "row">
                        <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <div className="p-5">
                                <form>
                                    <h3 className="text-center">Feedback</h3>
                                    <div className = "card-body"></div>
                                        <label> Requirement Id: </label><br></br>
                                        <input name="reqId" className="form-control" 
                                            value={this.state.reqId} onChange={this.changeReqId} required/>
                                    <br></br>
                                        <label> User Id: </label><br></br>
                                        <input name="userId" className="form-control" type="email"
                                            value={this.state.userId} onChange={this.changeUserId} required/>
                                    
                                    <br></br>
                                    <div>
                                        <label for="validsel" class="form-label">Status:</label>
                                        <select class="form-select" id="validsel" value={this.state.status} onChange={this.selectStatus.bind(this)} required="required">
                                        <option selected disabled value="">Choose Option</option>
                                        <option>Accept</option>
                                        <option>Reject</option>
                                        </select>
                                    </div>
                                    <br></br>
                                        <label> Comments: </label><br></br>
                                        <textarea name="Comments" className="form-control" 
                                            value={this.state.comments} onChange={this.changeComments} required/>
                                  
                                    <br></br>
                                    <div class="text-center">
                                    <button className="btn btn-primary" disabled={!this.state.reqId || !this.state.userId || !this.state.status || !this.state.comments} onClick={this.sendFeedback}>Submit</button>
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
 
export default FeedbackComponent;