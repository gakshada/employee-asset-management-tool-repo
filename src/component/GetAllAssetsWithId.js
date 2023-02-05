import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import './css-styling/retrieve.css'
const GetAllAssetsWithId = () => {
    const [assets, setAssets] = useState([]);
    const [id, setId] = useState(0);
    const [idFromButtonClick, setIdFromButtonClick] = useState(1);

    const handleClick = () => {
        setIdFromButtonClick(id);
    }

    useEffect(() => {
        axios.get(`http://localhost:8080/asset-retrieve/${id}`).then(res => {
            if (res.status === 200) {
                console.log(res)
                setAssets(res.data);
            }
        }).catch(err => {

            if (id > 0) {
                alert("It seems like no asset allocated to this Id");
            }
            console.log(err);
        })
    }, [idFromButtonClick])

    return (
        <div className="main-retrieve-container">
            <div  className='sub-retrieve-container'>
            <div>
                <label>Enter userId:</label>
                <input type="number" value={id} onChange={e => setId(e.target.value)} />
                <button className='update-btn1' type="button" onClick={handleClick}>Fetch Asset</button>
            </div>
            <div>
                <h1>List of all Assets</h1>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Item Number</th>
                            <th>Item Name</th>
                            <th>Serial Number</th>
                            <th>Asset status</th>
                            <th>Employee Id</th>
                            
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
                                </tr>
                            )
                            )
                        }
                    </tbody>
                </table>
                <button className='delete-btn1'>
                    <Link className="btn-link" to="/admin-dashboard">Back</Link>
                </button>
            </div>
            </div>
           
            {/* <div>
            <input type="text"></input>
           </div> */}
        </div>
    );

}

export default GetAllAssetsWithId;