
import EmployeeService from '../services/EmployeeService';
import React,{Component} from 'react';
import { Form } from 'react-bootstrap';

class UploadFile extends Component {

	state = {

	// Initially, no file is selected
	selectedFile: null
	};
	
	// On file select (from the pop up)
	onFileChange = event => {
	
	// Update the state
	this.setState({ selectedFile: event.target.files[0] });
	
	};
	
	// On file upload (click the upload button)
	onFileUpload = () => {
	
	// Create an object of formData
	const formData = new FormData();
	
	// Update the formData object
	formData.append(
		"myFile",
		this.state.selectedFile,
		this.state.selectedFile.name
	);
	
	// Details of the uploaded file
	console.log(this.state.selectedFile);
	
	// Request made to the backend api
	// Send formData object
	EmployeeService.Upload(formData).then(res =>{
        let s=res.data;
        if(s.booleanMsg){
            <div class="alert alert-success alert-dismissible fade show" role="alert">
            <strong>Upload Successfull</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
        }
        else{
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
            <strong>Upload Fail, Try Again</strong>
            <button type="button" class="close" data-dismiss="alert" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
            </div>
        }
    });
    
	};
	
	// File content to be displayed after
	// file upload is complete
	fileData = () => {
	
	if (this.state.selectedFile) {
		
		return (
		<div>
			<h5>File Details:</h5>
			
<p>File Name: {this.state.selectedFile.name}</p>	
<p>Last Modified:{" "}
{this.state.selectedFile.lastModifiedDate.toDateString()}
</p>
</div>
		);
	} else {
		return (
		<div></div>
		);
	}
	};
	
	render() {
	
	return (
		<div>
            <div class="alert alert-info" role="alert">
            Upload only PDF Attachment 
            </div>
			<div>
				<input type="file" onChange={this.onFileChange} accept="application/pdf"/>
				<button type="button" class="btn btn-primary" onClick={this.onFileUpload}>Upload</button>
			</div>
		{this.fileData()}
		</div>
	);
	}
}

export default UploadFile;
