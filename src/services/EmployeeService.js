import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "";

class EmployeeService {

    signUp(employee){
        return axios.post("http://localhost:8080/signup", employee);
    }

    login(employee){
        return axios.post("http://localhost:8080/login", employee);
    }

    logout(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/user/logout", employee,config);
    }

    forgotPassword(employee){
        return axios.post("http://localhost:8080/forgotPassword", employee);
    }

    resetPassword(employee){
        return axios.post("http://localhost:8080/resetPassword", employee);
    }

    candidateProfileStatus(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/candidate/profileStatus ", employee,config);
    }

    pocRequirement(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/poc/requirementList", employee,config);
    }

    postRequirement(details){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/postRequirement", details,config);
    }

    closeRequirement(details){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/poc/closeRequirement", details,config);
    }

    editDetails(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/user/editDetails", employee,config);
    }

    pocEligibleProfiles(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/poc/requirement/eligibleProfiles", employee,config);
    }

    fetchAllActiveRequirements(employee){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.get("http://localhost:8080/fetchAllActiveRequirements", employee,config);
    }

    Upload(formData){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/uploadProfile", formData,config);
    }

    feedback(formData){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/feedBack", formData,config);
    }

    uploadResume(details){
        const config = {
            headers: {
                Authorization: 'Bearer ' + localStorage.getItem('token')
            }
        };
        return axios.post("http://localhost:8080/postRequirement", details,config);
    }

}

export default new EmployeeService()