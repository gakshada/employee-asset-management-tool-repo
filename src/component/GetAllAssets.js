import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "./css-styling/retrieve.css"

const GetAllAssets = () => {
    const [assets, setAssets] = useState([]);

    function getList() {
        axios.get('http://localhost:8080/asset-retrieve').then(res => {
            console.log(res)
            setAssets(res.data);

        }).catch(err => {
            console.log(err);
        })
    }
    useEffect(() => {
        getList();
    }, [])
    return (
        <div className="main-retrieve-container">
            <div className='sub-retrieve-container'>
            <h1>List of all Assets</h1>
            <table border="1">
                <thead>
                    <tr>
                        <th>Item Number</th>
                        <th>Item Name</th>
                        <th>Serial Number</th>
                        <th>Asset status</th>
                        <th>Employee Id</th>
                        <th>Action</th>
                    </tr>
                </thead>

                <tbody>
                    {
                        assets.map(asset => (
                            <tr key={asset.itemNum}>
                                <td>{asset.itemNum}</td>
                                <td>{asset.itemName}</td>
                                <td>{asset.serialNumber}</td>
                                <td>{asset.status}</td>
                                <td>{asset.employee.userId}</td>
                                <td>
                                    <Link className="btn-link" to={"/update-asset/"+asset.itemNum}>
                                        <button className='update-btn1'>Update</button>
                                    </Link>
                                </td>
                            </tr>
                        )
                        )
                    }
                </tbody>
            </table>
            <button className="delete-btn1">
                <Link className="btn-link" to="/admin-dashboard">Back</Link>
            </button>
            </div>
            
        </div>
    )
}

export default GetAllAssets;