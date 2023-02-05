import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './css-styling/AdminContact.css'
const AdminContact = () => {
    const [admin, setAdmin] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/admin-retrieve")
            .then(res => {
                console.log(res)
                setAdmin(res.data)
            })
            .catch(err => {
                console.log(err);
            })
    }, [])

    return (
        <div id="admin-container">
            <div id="sub-ad-container">
            <div id="text-message"> 
                <p>If you have any query feel free to contact Admin support.</p>
                <p>You can contact through direct call or can drop a mail.</p>
            </div>
            <div id="admin-details">
                <ul>
                    {
                        admin.map(ad => (
                            <li key={ad.userId}>
                                <p><span>Name: </span>{ad.adminName}</p>
                                <p><span>Contact No: </span>{ad.adminContact}</p>
                                <p><span>Email: </span>{ad.username}</p>
                            </li>
                        )
                        )
                    }
                </ul>
            </div>
            </div>
            
        </div>
    )
}
export default AdminContact;