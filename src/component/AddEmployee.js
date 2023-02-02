import React, { useState } from "react";
import axios from "axios";
import './css-styling/AddEmployee.css'
import { Link } from "react-router-dom";

const AddEmployee = () => {
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const [userName, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [role, setUserrole] = useState("employee");
    

    const submitForm = (event) => {
        event.preventDefault();
        const employeeObj = {
            'empName': name,
            'empAddress': address,
            'empPhoneNumber': phoneNumber,
            'empDesignation': designation,
            'username': userName,
            'password': password,
            'userRole': role
        }


        axios.post(`http://localhost:8080/employee-save`, employeeObj).then((response) => {
            if (response.status === 200) {
                setName('');
                setAddress('');
                setPhoneNumber('');
                setDesignation('');
                setUsername('');
                setPassword('')
                alert("Employee added Successfully!");
            }
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        })
    }

    return (
        <div id="add-emp-main-container">
            <div id="add-emp-submain-container">
                <h1>Add Employee</h1>
                <form id="add-emp-form">
                    <div>
                        <label>Employee Name:</label>
                        <input type="text" value={name} onChange={e => setName(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Employee Address:</label>
                        <input type="text" value={address} onChange={e => setAddress(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Employee PhoneNumber:</label>
                        <input type="text" value={phoneNumber} onChange={e => setPhoneNumber(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Employee Designation:</label>
                        <input type="text" value={designation} onChange={e => setDesignation(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Employee userName:</label>
                        <input type="email" value={userName} placeholder="Provide email" onChange={e => setUsername(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Employee OneTime Password:</label>
                        <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                    </div>
                    <div>
                        <label>Role:</label>
                        <input type="text" placeholder="role is employee" value="employee" onChange={e => setUserrole(e.target.value)}></input>
                    </div>
                    <div>
                        <button  id='add-btn' onClick={submitForm}>Add Employee</button>
                    </div>

                </form>
                <button  id='go-btn'>
                    <Link to="/admin-dashboard">Go Back</Link>
                </button>
            </div>
        </div>
    )
}
export default AddEmployee;