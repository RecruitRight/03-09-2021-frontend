
import EmployeeService from '../services/EmployeeService';
import React,{Component} from 'react';
import { Form } from 'react-bootstrap';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './GlobalVariable';

class UploadFile extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: ''
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files});
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	EmployeeService.Upload(formData).then(res =>{
        let s=res.data;
        if(s.booleanMsg){
            this.props.history.push('/RMGHomeComponent');
                alert('Profiles Uploded Successfully');
            }
            else{
                console.log("unsuccessful");
                alert('Error! Please Upload Again');
            }
    });
    
	};

	// File content to be displayed after
	// file upload is complete
	/*fileData = () => {
	
	if (this.state.selectedFile) {
		
		for (const i of Object.keys(this.state.selectedFile)) {
		<p>{this.state.selectedFile[i].name}</p>
		}*

		return (
			<div>
			<h5>File Details:</h5> 
			<p>File Name: {this.state.selectedFile.name}</p>	
			<p>Last Modified:{" "}
			{this.state.selectedFile.lastModifiedDate.toDateString()}
			</p>
		</div>);
	} else {
		return (
		<div></div>
		);
	}
	};*/
	
	render() {
	
	return (
		<div>
            <div class="alert alert-info" role="alert">
            Upload only PDF Attachment 
            </div>
			<div>
				<input type="file" onChange={this.onFileChange} accept="application/pdf" multiple/>
				<button type="button" class="btn btn-primary" onClick={this.onFileUpload}>Upload</button>
			</div>
	</div>);
	}
}

export default UploadFile;
