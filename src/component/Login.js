import React, { useRef, useState, useEffect } from 'react';
import "./css-styling/Login.css";
import LoginPic from "../images/emplogin.jpg"
import { Link } from 'react-router-dom';
import AdminDashboard from './AdminDashboard';
import EmployeeDashboard from './EmployeeDashboard';

const Login = () => {

    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [role, setRole] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [id,setId]=useState('')
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        fetch("http://localhost:8080/user-login", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: user,
                password: pwd
            }),
        }).then((response) => response.json())
            .then((result) => {
                if (result.userRole === "admin") {
                    console.log(result.userRole);
                    setRole(result.userRole);
                    alert("Admin logged in successfully!..");
                    setSuccess(true);

                }
                else if (result.userRole === "employee") {
                    console.log(result.userRole);
                    setRole(result.userRole);
                    setId(result.userId);
                    alert("Employee logged in successfully!..");
                    setSuccess(true);
                }
                else {
                    alert("please provide valid username or password!");
                }
                setUser('');
                setPwd('');
            }).catch((error) => {
                console.error('There has been a problem with your fetch operation:', error);
            });
        console.log(user);
        console.log(pwd);
    }

    return (
        <>
            <div className="main">
                {success ? (
                    <section>
                        {(role === "admin") ? (
                            <p>
                                <Link to="/admin-dashboard"><AdminDashboard /></Link>
                            </p>) : (
                            <p>
                                <Link to={"/employee-dashboard/"+id}><EmployeeDashboard /></Link>
                            </p>
                        )
                        }
                    </section>
                ) : (
                    <section className="sub-main">
                        <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                        <div className="login-wrapper">
                            <h1>Login Page</h1>
                            <div className='img-container'>
                                <img src={LoginPic} alt="Employee Logo" />
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className='form-content'>
                                    <label htmlFor="username">Username:</label>
                                    <input
                                        type="text"
                                        id="username"
                                        ref={userRef}
                                        autoComplete="off"
                                        onChange={(e) => setUser(e.target.value)}
                                        value={user}
                                        required
                                    />
                                    <label htmlFor="password">Password:</label>
                                    <input
                                        type="password"
                                        id="password"
                                        onChange={(e) => setPwd(e.target.value)}
                                        value={pwd}
                                        required
                                    />
                                </div>
                                <div className='btn-wrapper'>
                                    <button className='login-btn'>Login</button>
                                </div>
                                <p className='Info'>Need Help? <Link to="/admin-support">Contact Admin</Link></p>
                            </form>
                        </div>
                    </section>

                )}
            </div>
        </>
    );
}
export default Login;