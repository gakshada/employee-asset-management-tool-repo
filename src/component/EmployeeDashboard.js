import React from 'react'; 
import { Link, useParams} from 'react-router-dom';
import EmployeeImg from '../images/Employee.jpg'
import "./css-styling/EmployeeDashboard.css"

const EmployeeDashboard =() =>{
    const param = useParams();
    const {id}=param;
    return (
        <div className='main-container'>
            <div className='heading-image-container'>
                <h1 className='heading'>Welcome to the Employee Dashboard!</h1>
                <img className='img-1' src={EmployeeImg} alt="employee-page image"></img>
            </div>
            <div className='ul-list-container'>
                    <ul>
                        <li>
                            <Link to={"/update-phone-and-address/"+id}>Update address and phonenumber</Link>
                        </li>
                        <li>
                            <Link to="/retrieve-employee-with-id">Get Employee with id</Link>
                        </li>
                    </ul>
            </div>
        </div>
    );
}
export default EmployeeDashboard;