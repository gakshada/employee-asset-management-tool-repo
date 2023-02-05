import React, { useEffect, useState } from "react"
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import './css-styling/UpdateAssetStatus.css'
const UpdateAssetStatus = () => {
    const param = useParams();
    const [asset, setAsset] = useState({});
    const [itemName, setItemName] = useState('');
    const [serialNumber, setSerialNumber] = useState('');
    const [itemStatus, setItemstatus] = useState('');
    const [empId, setEmpId] = useState('');
    const { itemNumber } = param;

    useEffect(() => {
        axios.get(`http://localhost:8080/asset-retrieve-itemnumber/${itemNumber}`)
            .then(res => {
                console.log(res);
                setAsset(res.data);
                setItemName(res.data.itemName);
                setSerialNumber(res.data.serialNumber);
                setItemstatus(res.data.status);
                setEmpId(res.data.employee.userId)
            })
            .catch(err => {
                console.log(err);
            })
    }, [itemNumber])

    function editAsset(serialNumber) {
        axios.put(`http://localhost:8080/asset-update-status/${serialNumber}?status=${itemStatus}`).then((result) => {
            if (result.status === 200) {
                alert("Asset updated successfully!");
            }
        }).catch((error) => {
            console.log(error);
        })
    }
    return (
        <div id="main-assetStatus-container">
            <div id="sub-assetStatus-container">
                <div>
                    <h1>Update Asset Status</h1>
                </div>
                <div>
                    <form>
                        <div>
                            <label>Item Number:</label>
                            <input type="text" value={itemNumber}></input>
                        </div>
                        <div>
                            <label>Item Name:</label>
                            <input type="text" value={itemName}></input>
                        </div>
                        <div>
                            <label>Serial Number:</label>
                            <input type="text" value={serialNumber}></input>
                        </div>
                        <div>
                            <label>Employee Id:</label>
                            <input type="text" value={empId}></input>
                        </div>
                        <div>
                            <label>Item Status:</label>
                            <input type="text" onChange={(e) => setItemstatus(e.target.value)} value={itemStatus}></input>
                        </div>
                        <div id="btn-div1">
                            <button id="as-btn1"onClick={() => editAsset(serialNumber)}>Update Status</button>
                            <button id="back-btn1">
                                <Link to="/retrieve-all-asset-details">Back</Link>
                            </button>
                        </div>

                    </form>

                </div>
            </div>
        </div>
    )
}
export default UpdateAssetStatus;