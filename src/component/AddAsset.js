import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css-styling/AddAsset.css'

const AddAsset = () => {
    const [itemName, setItemName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [itemStatus, setItemstatus] = useState('');
    const [empId, setEmpId] = useState('');

    const submitForm = (event) => {
        event.preventDefault();
        const assetObj = {
            'itemName': itemName,
            'serialNumber': serialNumber,
            'status': itemStatus,
            'employee': {
                'userId': empId
            }
        }

        axios.post(`http://localhost:8080/asset-save`, assetObj).then((response) => {
            if (response.status === 200) {
                setItemName('');
                setSerialNumber('');
                setItemstatus('')
                setEmpId('');
                alert("Asset added Successfully!");
            }
            console.log(response.data);
        }).catch((err) => {
            console.log(err);
        })

    }
    return (
        <div id="main-asset-container">
            <div id="sub-asset-container">
                <h1>Add Asset</h1>
                <form>
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
                    <div id="btn-div">
                        <button id='as-btn' onClick={submitForm}>Add Asset</button>
                        <button id="back-btn">
                            <Link to="/admin-dashboard">Back</Link>
                        </button>
                    </div>
                </form>

            </div>

        </div>
    )
}
export default AddAsset;