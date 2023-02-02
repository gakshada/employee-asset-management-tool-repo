import React from 'react';
import './css-styling/Navbar.css';
import AssetLogo from "../images/Asset-Logo.jpg"
import {Link} from 'react-router-dom'

const Navbar = () => {
    return(
       <nav>
            <div className ='logo'>
                <img src={AssetLogo} alt='this is Assets logo image'></img>
                <span>Employee Asset Management Tool</span>
            </div>
            <div>
                <ul id='navbar'>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to ="/login">
                            <button id='btn1'>Login</button>
                        </Link>
                        
                    </li>
                    <li>
                        <Link to ="/">
                                <button id='btn2'>Contact</button>
                        </Link>
                        
                    </li>
                </ul>
            </div>
       </nav>
        
    );   
}
export default Navbar;