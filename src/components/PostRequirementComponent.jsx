import React, { Component } from 'react'
import EmployeeService from '../services/EmployeeService';
import {components} from "react-select";
import ReactSelect from 'react-select';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './GlobalVariable';

Option = (props) => {
    return (
      <div>
        <components.Option {...props}>
          <input
            type="checkbox"
            checked={props.isSelected}
            onChange={() => null}
          />{" "}
          <label>{props.label}</label>
        </components.Option>
      </div>
    );
  };

class PostRequirementComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
                experience:'',
                 DDL1:[],
                 DDL2:[],
                 DDL3:[],
                 DDL4:[],
                domainValue:'',
                jobRoleValue:'',
                jobRoleTypeValue:'',
                techStackValue:null,
                developerList:[],
                testerList:[],
                technicalArchitectList:[],
                bussinessAnalystList:[],
                managerList:[],
                fullstackList:[],
                frontendList:[],
                backendList:[],
                databaseList:[],
                list:'',
        }
        this.changeExperienceHandler = this.changeExperienceHandler.bind(this);
    }

    componentDidMount(){
        this.setState({
            DDL1: [
                { domain: 'BFSI', DDL2:[
                    {jobrole: 'Developer'},
                    {jobrole: 'Tester'},
                    {jobrole: 'Technical Architect'},
                    {jobrole: 'Bussiness Analyst'},
                    {jobrole: 'Manager'},
                ]},
                { domain: 'MBU', DDL2:[
                    {jobrole: 'Developer'},
                    {jobrole: 'Tester'},
                    {jobrole: 'Technical Architect'},
                    {jobrole: 'Bussiness Analyst'},
                    {jobrole: 'Manager'},
                ]}, 
                { domain: 'AWS-BU', DDL2:[
                    {jobrole: 'Developer'},
                    {jobrole: 'Tester'},
                    {jobrole: 'Technical Architect'},
                    {jobrole: 'Bussiness Analyst'},
                    {jobrole: 'Manager'},
                ]},
                { domain : 'LifeSciences', DDL2:[
                    {jobrole: 'Developer'},
                    {jobrole: 'Tester'},
                    {jobrole: 'Technical Architect'},
                    {jobrole: 'Bussiness Analyst'},
                    {jobrole: 'Manager'},
                ]}
            ]
        });

        this.setState({developerList: ['Fullstack Developer','Frontend Developer','Backend Developer', 'Database Developer']});
        this.setState({testerList: ['Manual Testing', 'Automatic Testing']});
        this.setState({technicalArchitectList:[]});
        this.setState({bussinessAnalystList:[]});
        this.setState({managerList:[]});



        
        this.setState({fullstackList:[{value:'HTML', label:'HTML'}, {value:'CSS', label:'CSS'}, {value:'JavaScript', label:'JavaScript'}, {value:'Bootstrap', label:'Bootstrap'}, {value:'Angular', label:'Angular'},  {value:'React', label:'React'},  {value:'Vue.js', label:'Vue.js'},  {value:'Flutter', label:'Flutter'},  {value:'Ionic', label:'Ionic'}, {value:'C', label:'C'}, {value:'Java', label:'Java'},{value:'Python', label:'Python'}, {value:'Spring Boot', label:'Spring Boot'}, {value:'NodeJS', label:'NodeJS'}, {value:'PHP', label:'PHP'}, {value:'Django', label:'Django'}]});
        this.setState({frontendList:[{value:'HTML', label:'HTML'}, {value:'CSS', label:'CSS'}, {value:'JavaScript', label:'JavaScript'}, {value:'Bootstrap', label:'Bootstrap'}, {value:'Angular', label:'Angular'},  {value:'React', label:'React'},  {value:'Vue.js', label:'Vue.js'},  {value:'Flutter', label:'Flutter'},  {value:'Ionic', label:'Ionic'}]}); 
        this.setState({backendList:[{value:'C', label:'C'}, {value:'Java', label:'Java'},{value:'Python', label:'Python'}, {value:'Spring Boot', label:'Spring Boot'}, {value:'NodeJS', label:'NodeJS'}, {value:'PHP', label:'PHP'}, {value:'Django', label:'Django'}]});
        this.setState({databaseList:[{value:'Oracle SQL', label:'Oracle SQL'}, {value:'MySql', label:'MySql'}, {value:'PostgreSQL', label:'PostgreSQL'}, {value:'DB2', label:'DB2'}, {value:'MongoDB', label:'MongoDB'}]});
        
    }

    selectDomain(e){
        this.setState({ domainValue: e.target.value});
        this.setState({ DDL2 : this.state.DDL1.find(x => x.domain === e.target.value).DDL2});
    }
    
    selectJobRole(e){
        this.setState({ jobRoleValue: e.target.value});
        switch(e.target.value){
            case 'Developer':
                for(var i of this.state.developerList) {
                    this.state.DDL3.push(i);
                }
                break;
            case 'Tester':
                for(var i of this.state.testerList) {
                    this.state.DDL3.push(i);
                }
                break;
            case 'Technical Architect':
                for(var i of this.state.technicalArchitectList) {
                    this.state.DDL3.push(i);
                }
                break;
            case 'Bussiness Analyst':
                for(var i of this.state.bussinessAnalystList) {
                    this.state.DDL3.push(i);
                }
                break;
            case 'Manager':
                for(var i of this.state.managerList) {
                    this.state.DDL3.push(i);
                }
                break;
        }
    }

    selectJobRoleType(e){
        this.setState({ jobRoleTypeValue: e.target.value});
        switch(e.target.value){
            case 'Fullstack Developer':
                for(var i of this.state.fullstackList) {
                    this.state.DDL4.push(i);
                }
                break;
            case 'Frontend Developer':
                for(var i of this.state.frontendList) {
                    this.state.DDL4.push(i);
                }
                break;
            case 'Backend Developer':
                for(var i of this.state.backendList) {
                    this.state.DDL4.push(i);
                }
                break;
            case 'Database Developer':
                for(var i of this.state.databaseList) {
                    this.state.DDL4.push(i);
                }
                break;
        }
    }
    
    selectTechStackType = (e) => {
        this.setState({
            techStackValue: e
          });
      }

      handlePost = (e) => {
        e.preventDefault();
        {this.state.techStackValue.map(x=> {
            this.state.list=this.state.list.concat(x.value);
            this.state.list=this.state.list.concat(",");
        })}
        this.state.list = this.state.list.slice(0, -1);
        let details = {sessionId: 'dsdf', domain: this.state.domainValue, jobRole: this.state.jobRoleValue, jobRoleType:this.state.jobRoleTypeValue, techStack: this.state.list, experience:this.state.experience
        };
        console.log('details => ' + JSON.stringify(details));
        
        // step 5
        EmployeeService.postRequirement(details).then(res =>{
            let s=res.data;
            if(s.booleanMsg){
            this.props.history.push('/admin');
            }
            else{
                
            }
        });

        
    }

    changeExperienceHandler= (event) => {
        this.setState({experience: event.target.value});
    }

    render() {
        // const dFlag=this.state.domainFlag;
        return (
            <div className="page-wrap">
                <br></br>
                   <div className = "container p-3">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <div className="p-5">
                                <h3 className="text-center">Post a Requirement</h3><br></br>
                                <div className = "card-body">
                                    <select class="form-select" value={this.state.domainValue} onChange={this.selectDomain.bind(this)} >
                                        <option>-- Domain --</option>
                                        {this.state.DDL1.map(x=> {
                                            return <option>{x.domain}</option>
                                        })}
                                    </select>
                                    <br></br>
                                    <select class="form-select" value={this.state.jobRoleValue} onChange={this.selectJobRole.bind(this)}>
                                        <option>-- Job Role --</option>
                                        {this.state.DDL2.map(x=> {
                                            return <option>{x.jobrole}</option>
                                        })}
                                    </select>
                                    <br></br>
                                    <select class="form-select" value={this.state.jobRoleTypeValue} onChange={this.selectJobRoleType.bind(this)}>
                                        <option>-- Job Role Type--</option>
                                        {this.state.DDL3.map(x=> {
                                            return <option>{x}</option>
                                        })}
                                    </select>
                                    <br></br>
                                    {/* <select class="form-select" multiple={true} value={this.state.techStackValue} onChange={this.selectTechStackType.bind(this)}>
                                        <option>-- TechStack--</option>
                                        {this.state.DDL4.map(x=> {
                                            return <option>{x}</option>
                                        })}
                                    </select> */}

                                    <ReactSelect
                                            options={this.state.DDL4}
                                            isMulti
                                            closeMenuOnSelect={false}
                                            hideSelectedOptions={false}
                                            components={{
                                                Option
                                            }}
                                            onChange={this.selectTechStackType}
                                            allowSelectAll={true}
                                            value={this.state.techStackValue}
                                    />
                                    <br></br>
                                    <div className = "form-group">
                                        <input placeholder="Experience (in Years)" name="experience" className="form-control" 
                                            value={this.state.experience} onChange={this.changeExperienceHandler}/>
                                    </div>
                                    <br></br>
                                    <div class="text-center">
                                    <button className="btn btn-primary" onClick={this.handlePost}>Post</button>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                   </div>
            </div>
        )
    }
}

export default PostRequirementComponent