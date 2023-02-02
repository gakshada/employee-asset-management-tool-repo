import React from "react";
import {useParams} from 'react-router-dom'
import {useState,useEffect} from 'react'
import axios from "axios";
import { Link } from "react-router-dom";

const UpdateEmployee = () =>{
    const param = useParams();
    const [employee, setEmployee] = useState({});
    const [name, setName] = useState('');
    const {id}=param;

    useEffect(()=>{
        axios.get(`http://localhost:8080/employee-retrieve/${id}`)
        .then(res =>{
            console.log(res);
            setEmployee(res.data);
            setName(employee.empName)
        })
        .catch(err =>
            {
                console.log(err);
            })
    },[id])

    function editEmployee(id)
    {
        axios.put(`http://localhost:8080/employee-update-name/${id}?name=${name}`).then((result) => {
            if (result.status === 200) {
                alert("Employee updated successfully!");
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div>
            <div>
                <h1>Update Employee</h1>
                <label>Employee Id:</label>
                <input type="text" value={id}></input>
                <label>Employee Name:</label>
                <input type="text" onChange={(e)=>setName(e.target.value)} value={name}></input>
                <button onClick={()=>editEmployee(id)}>Update Name</button>
                <button>
                    <Link to="/admin-dashboard">Go Back</Link>
                </button>
            </div>
        </div>
    )
}

export default UpdateEmployee;