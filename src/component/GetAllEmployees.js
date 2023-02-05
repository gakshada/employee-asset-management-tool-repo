import axios from 'axios';
import React from 'react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import "./css-styling/retrieve.css"

const GetAllEmployees = () => {
    const [employees, setEmployees] = useState([]);
   
    function getList() {
        axios.get('http://localhost:8080/employee-retrieve').then(res => {
            console.log(res)
            setEmployees(res.data);

        }).catch(err => {
            console.log(err);
        })
    }

    useEffect(() => {
        getList();
    }, [])

    function deleteUser(id) {
        axios.delete(`http://localhost:8080/employee-delete/${id}`).then((result) => {
            if (result.status === 200) {
                alert("Employee deleted with id " + id);
                getList();
            }
        }).catch((error) => {
            console.log(error);
        })
        // alert(id);
    }
    return (
        <div className="main-retrieve-container">
            <div className='sub-retrieve-container'>
            <h1>List of all Employees</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Employee id</th>
                        <th>Employee Name</th>
                        <th>Employee Address</th>
                        <th>Employee PhoneNumber</th>
                        <th>Employee Designation</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        employees.map(employee => (
                            <tr key={employee.userId}>
                                <td>{employee.userId}</td>
                                <td>{employee.empName}</td>
                                <td>{employee.empAddress}</td>
                                <td>{employee.empPhoneNumber}</td>
                                <td>{employee.empDesignation}</td>
                                <td><button className="delete-btn1" onClick={() => deleteUser(employee.userId)}>Delete</button></td>
                                <td>
                                    <Link className="btn-link" to={"/update-name/"+employee.userId}>
                                    <button className='update-btn1'>Update</button>
                                    </Link>
                                </td>   
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
            <button className='delete-btn1'>
                <Link className="btn-link" to="/admin-dashboard">Back</Link>
            </button>
            </div>
           
        </div>
    );
}

export default GetAllEmployees;