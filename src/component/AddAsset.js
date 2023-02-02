import React, {useState} from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const AddAsset = () => {
    const [itemNumber,setItemNumber] =useState('');
    const [itemName,setItemName]=useState('');
    const [serialNumber,setSerialNumber]=useState('');
    const [itemStatus, setItemstatus]=useState('');
    const [empId, setEmpId]=useState('');

    const submitForm = (event)=>{
        event.preventDefault();
        const assetObj = {
            'itemNum':itemNumber,
            'itemName':itemName,
            'serialNumber':serialNumber,
            'status':itemStatus,
            'employee':{
                'userId':empId
            }
            }

            axios.post(`http://localhost:8080/asset-save`,assetObj).then((response)=>
        {
            if(response.status===200)
            {
               setItemNumber('');
               setItemName('');
               setSerialNumber('');
               setItemstatus('')
               setEmpId('');
               alert("Asset added Successfully!");
            }
           console.log(response.data);
        }).catch((err)=>{
            console.log(err);
        })
        console.log(itemName,itemNumber,itemStatus,empId,serialNumber);
    }
    return (
        <div>
            <h1>Add Asset</h1>
            <form>
                <div>
                    <label>Item Number:</label>
                    <input type="text" value={itemNumber} onChange={e => setItemNumber(e.target.value)}></input>
                </div>
                <div>
                    <label>Item Name:</label>
                    <input type="text" value={itemName} onChange={e => setItemName(e.target.value)}></input>
                </div>
                <div>
                    <label>Serial Number:</label>
                    <input type="text" value={serialNumber} onChange={e => setSerialNumber(e.target.value)}></input>
                </div>
                <div>
                    <label>Item status:</label>
                    <input type="text" value={itemStatus} onChange={e => setItemstatus(e.target.value)}></input>
                </div>
                <div>
                    <label>Employee Id:</label>
                    <input type="text" value={empId} onChange={e => setEmpId(e.target.value)}></input>
                </div>
                <div>
                    <button onClick={submitForm}>Add Asset</button>
                </div>
            </form>
            <button>
                <Link to="/admin-dashboard">Go Back</Link>
            </button>
        </div>
    )
}
export default AddAsset;