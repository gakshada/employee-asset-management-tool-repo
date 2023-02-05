import React from "react";
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import axios from "axios";
import { Link } from "react-router-dom";
import "./css-styling/updateEmployeeName.css"

const UpdateEmployeeName = () => {
    const param = useParams();
    const [employee, setEmployee] = useState({});
    const [name, setName] = useState('');
    const { id } = param;

    useEffect(() => {
        axios.get(`http://localhost:8080/employee-retrieve/${id}`)
            .then(res => {
                console.log(res);
                setEmployee(res.data);
                setName(res.data.empName)
            })
            .catch(err => {
                console.log(err);
            })
    }, [id])

    function editEmployee(id) {
        axios.put(`http://localhost:8080/employee-update-name/${id}?name=${name}`).then((result) => {
            if (result.status === 200) {
                alert("Employee updated successfully!");
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div id="up-page-container">
            <div id="up-page-sub-container">
                <div id="up-heading-container">
                    <h1>Update Employee Name</h1>
                </div>
                <div id="up-info-container">
                    <label>Employee Id:</label>
                    <input type="text" value={id}></input>
                    <label>Employee Name:</label>
                    <input type="text" onChange={(e) => setName(e.target.value)} value={name}></input>
                    <div id="up-btn-div">
                        <button id="up-name-btn" onClick={() => editEmployee(id)}>Update Name</button>
                        <button id="up-go-btn">
                            <Link to="/retrieve-all-employee">Back</Link>
                        </button>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default UpdateEmployeeName;