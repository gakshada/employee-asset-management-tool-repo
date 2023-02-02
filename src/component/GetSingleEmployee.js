import React from 'react'
import {useState, useEffect} from 'react'
import axios from 'axios'

const GetSingleEmployee =() =>{
    const [employee, setEmployee] = useState({});
    const [id, setId] = useState(1);
    const [idFromButtonClick,setIdFromButtonClick]=useState(1);

    const handleClick=()=>{
        setIdFromButtonClick(id);
    }

    // useEffect(() =>{
    //     fetch(`http://localhost:8080/employee-retrieve/${id}`).then(response=>
    //     {return response.json}).then(d=>{
    //         console.log(d);
    //         setEmployee(d);
    //     }).catch(err =>{
    //         console.log(err);
    //     })
    // },[id])

    useEffect(()=>{
        axios.get(`http://localhost:8080/employee-retrieve/${id}`)
        .then(res =>{
            console.log(res)
            setEmployee(res.data)
        })
        .catch(err =>
            {
                console.log(err);
            })
    },[idFromButtonClick])

    return(
        <div>
                <label>Enter userId:</label>
                <input type="number" value={id} onChange={e=> setId(e.target.value)} />
                <button type="button" onClick={handleClick}>Fetch Employee</button>
                <p>Employee Name :{employee.empName}</p>
                <p>Employee Address :{employee.empAddress}</p>
                <p>Employee PhoneNumber :{employee.empPhoneNumber}</p>
                <p>Employee Designation :{employee.empDesignation}</p>
        </div>
    );
}
export default GetSingleEmployee;