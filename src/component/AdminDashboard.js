import React from 'react'; 
import { Link } from 'react-router-dom';
import adminPage from "../images/admin.jpg"
import "./css-styling/AdminDashboard.css"

const AdminDashboard =() =>{
    return(
        <div className='ad-main-container'>
            <div className='ad-heading-image-container'>
                <h1>Welcome to the Admin Dashboard!</h1>
                <img className="img-2"src={adminPage} alt="admin-page image"></img>
            </div>
            <div className='admin-acivity-list-container'>
                <h2>Employee and Asset Management</h2>
                <ul className='admin-activity-list'>
                    <li>
                        <Link to="/add-employee">Add Employee</Link>
                    </li>
                    <li>
                        <Link to="/retrieve-all-employee">Get All Employee</Link>
                    </li>
                    <li>
                        <Link to="/retrieve-all-employee">Update Employee Name</Link>
                    </li>
                    <li>
                        <Link to="/retrieve-all-employee">Delete Employee Record</Link>
                    </li>
                    <li>
                        <Link to="/add-asset">Add Assets</Link>
                    </li>
                    <li>
                        <Link to="/retrieve-all-asset-details">Get All assets List</Link>
                    </li>
                    <li>
                        <Link to="/retrieve-asset-with-id">Get All assets of specific Employee</Link>
                    </li>
                    <li>
                        <Link to="/retrieve-all-asset-details">Update Asset Status</Link>
                        
                    </li>
            
                </ul>

            </div>
        </div>
    ) ;
}
export default AdminDashboard;