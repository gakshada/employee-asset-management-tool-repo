import React from 'react'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import "./css-styling/GetEmployeewithId.css"

const GetSingleEmployee = () => {

    const [employee, setEmployee] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id);
    }

    const navigate = useNavigate();
    const goBack = () => {
        navigate(-1);
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/employee-retrieve/${id}`)
            .then(res => {
                console.log(res)
                setEmployee(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [idFromButtonClick])

    return (
        <div id="employee-container">
            <div id="sub-emp-container">
                <div>
                    <h1 id="text-heading">Employee Details</h1>
                    <div id="fetch-wrapper">
                        <label>Enter userId:</label>
                        <input type="number" value={id} onChange={e => setId(e.target.value)} />
                        <button id="fetch-btn" type="button" onClick={handleClick}>Fetch Employee</button>
                    </div>

                </div>
                <div id="employee-details">
                    <p><span>Employee Name: </span>{employee.empName}</p>
                    <p><span>Employee Address: </span>{employee.empAddress}</p>
                    <p><span>Employee PhoneNumber: </span>{employee.empPhoneNumber}</p>
                    <p><span>Employee Designation: </span>{employee.empDesignation}</p>
                    <button id="back-btn1" onClick={goBack}>
                        Back
                    </button>
                </div>
            </div>

        </div>
    );
}
export default GetSingleEmployee;