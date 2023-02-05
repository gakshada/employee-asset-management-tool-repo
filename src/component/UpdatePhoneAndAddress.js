import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import "./css-styling/UpdatePhoneAndAddress.css"

const UpdatePhoneAndAddress = () => {
    const param = useParams();
    const [employee, setEmployee] = useState({});
    const [name, setName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [designation, setDesignation] = useState('');
    const { id } = param;

    useEffect(() => {
        axios.get(`http://localhost:8080/employee-retrieve/${id}`)
            .then(res => {
                console.log(res);
                setEmployee(res.data);
                setName(res.data.empName);
                setPhoneNumber(res.data.empPhoneNumber);
                setAddress(res.data.empAddress)
                setDesignation(res.data.empDesignation)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    function editEmployee(id) {
        axios.put(`http://localhost:8080/employee-update-address-and-phonenumber/${id}?address=${address}&phoneNumber=${phoneNumber}`).then((result) => {
            console.log("success");
            if (result.status === 200) {
                alert("Employee updated successfully!");
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div id="main-upEmp-container">
            <div id="sub-upEmp-container">
                <div>
                    <h1>Update Your Phone Number and Address</h1>
                </div>
                <form >
                    <div>
                        <label>Employee Id:</label>
                        <input type="text" value={id}></input>
                    </div>
                    <div>
                        <label>Employee Name:</label>
                        <input type="text" value={name}></input>
                    </div>
                    <div>
                        <label>Employee PhoneNumber:</label>
                        <input type="text" onChange={(e) => setPhoneNumber(e.target.value)} value={phoneNumber}></input>
                    </div>
                    <div>
                        <label>Employee Address:</label>
                        <input type="text" onChange={(e) => setAddress(e.target.value)} value={address}></input>
                    </div>
                    <div>
                        <label>Employee Designation:</label>
                        <input type="text" value={designation}></input>
                    </div>
                    <div id="btn-div2">
                        <button id="upEmp-btn" onClick={() => editEmployee(id)}>Update</button>
                        <button id="back-btn2">
                            <Link to={"/employee-dashboard/" + id}>Back</Link>
                        </button>
                    </div>

                </form>
            </div>
        </div>)
}
export default UpdatePhoneAndAddress;