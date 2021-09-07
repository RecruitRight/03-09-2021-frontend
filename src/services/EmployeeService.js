import axios from 'axios';

const EMPLOYEE_API_BASE_URL = "";

class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    signUp(employee){
        return axios.post("http://localhost:8080/signup", employee);
    }

    login(employee){
        return axios.post("http://localhost:8080/login", employee);
    }

    logout(employee){
        return axios.post("http://localhost:8080/logout", employee);
    }

    forgotPassword(employee){
        return axios.post("http://localhost:8080/forgotPassword", employee);
    }

    resetPassword(employee){
        return axios.post("http://localhost:8080/resetPassword", employee);
    }

    pocRequirement(employee){
        return axios.post("http://localhost:8080/poc/requirementList", employee);
    }

    postRequirement(details){
        return axios.post("http://localhost:8080/postRequirement", details);
    }

    updateProfile(employee){
        return axios.post("http://localhost:8080/login", employee);
    }

    Upload(formData){
        return axios.post("http://localhost:8080/uploadProfile", formData);
    }

    feedback(formData){
        return axios.post("http://localhost:8080/feedBack", formData);
    }

    uploadResume(details){
        return axios.post("http://localhost:8080/postRequirement", details);
    }

}

export default new EmployeeService()