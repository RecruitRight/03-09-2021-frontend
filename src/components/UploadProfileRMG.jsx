import EmployeeService from '../services/EmployeeService';
import React,{Component} from 'react';
import { Form } from 'react-bootstrap';
import { builtinModules } from 'module';
import FooterComponent from './FooterComponent';

class UploadProfileRMG extends Component {
	constructor(props) {
        super(props)
        this.state = {
              f:null,
        }
    }

	onFileChange = e => {
		const formData = new FormData(); 
		for( let i =0; i <e.target.files.length; i++){
			formData.append('resumeList', e.target.files[i]);
		}
		this.state.f=formData;
};
logout = (e) => {
    e.preventDefault();
      EmployeeService.logout().then((res) => {
        let s = res.data;
        if (s.booleanMsg) {
          window.userId = "";
          window.userType = "";
          window.firstName = "";
          window.lastName = "";
          window.contact = "";
          window.sessionId = "";
          localStorage.clear();
          this.props.history.push('/Home');
        } 
        
      });
  };
  
onFileUpload = async e => {
	EmployeeService.Upload(this.state.f).then(res =>{
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




	
	render() {
	
	return (
		<div>
            <div class="alert alert-info" role="alert">
            Upload only PDF Attachment 
            </div>
			<div>
				<input type="file" onChange={(e) => this.onFileChange(e)} accept="application/pdf" multiple="multiple"/>
				<button type="button" class="btn btn-primary" onClick={this.onFileUpload}>Upload</button>
			</div>
			<FooterComponent></FooterComponent>
		</div>
	);
	}
}

export default UploadProfileRMG;