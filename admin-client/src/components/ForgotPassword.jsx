import React from "react";
import { useState } from "react";
import AuthUser from "./AuthUser";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import logo from '../front_assets/Logo_Image/Logo.png'
import '../CSS/login.css'
import http from "../http";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export default function ForgotPassword() {

    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        email: '',
        newPassword: '',
        confirm_password: '',
        token: '',

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    }
    const navigate = useNavigate();
    const submitForm = (e) => {
        setLoading(true);
        e.preventDefault();
        http.post('forget-password', { email: user.email }).then((res) => {
           
            if (res.status === 200) {
                setIsSent(true);
                setLoading(false);
                toast.success('Email sent successfully')
            } else {
                toast.error('Invalid Email User Not Found', {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }).catch(err => {
            toast.error('Invalid Email User Not Found', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        })
    }

    const reset = (e) => {
        e.preventDefault();
        if (user.confirm_password !== user.newPassword) {
            toast.error('Password does not match', {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        } else {
            http.post('reset-password', user).then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Password updated successfully!',
                    })
                    navigate('/')
                } else {
                    setLoading(false);
                    toast.error('Something went wrong please try again', {
                        position: "top-center",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                    });
                }
            })
        }

    }

    return (

        <div className="app-content">
            <div className="content-wrapper">
                <div className="content-body">
                    <div className="auth-wrapper auth-basic px-2">
                        <div className="auth-inner my-2">
                            <ToastContainer />
                            {/* Login basic */}
                            <div className="col-md-3 mx-auto" style={{ marginTop: "50px" }}>
                                <div className="card mb-0">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <a href="#" className="brand-logo">
                                                <img style={{ width: '35%' }} src={logo} alt="" srcset="" />
                                                {/* <h2 className="brand-text text-accent ms-1">Police</h2> */}
                                                <h2 style={{}} className="ms-1 fw-bold logoPos">Police</h2>
                                            </a>
                                            {/* <Link to="/">Home</Link> */}
                                            <h4 className="card-title mb-1"></h4>
                                            {/* <p className="card-text mb-3">Please sign-in to your account and start the adventure.</p> */}
                                        </div>
                                        <form className="auth-login-form mt-2" onSubmit={submitForm}>
                                            <div className="mb-1">
                                                <label htmlFor="login-email" className="form-label">Email</label>
                                                <input type="text" className="form-control" name="email" onChange={handleChange} placeholder="john@example.com" aria-describedby="login-email" tabIndex={1} autofocus />
                                            </div>
                                            {
                                                isSent &&
                                                <>
                                                    <div className="mb-1">
                                                        <label htmlFor="login-email" className="form-label">OTP</label>
                                                        <input type="text" className="form-control" name="token" onChange={handleChange} aria-describedby="login-email" tabIndex={1} autofocus />
                                                    </div>
                                                    <div className="mb-1">
                                                        <div className="d-flex justify-content-between">
                                                            <label className="form-label" htmlFor="login-password">New Password</label>
                                                        </div>
                                                        <div className="input-group input-group-merge form-password-toggle">
                                                            <input type="password" className="form-control form-control-merge" name="newPassword" onChange={handleChange} tabIndex={2} placeholder="············" aria-describedby="login-password" />
                                                            <br />
                                                        </div>
                                                    </div>
                                                    <div className="mb-1">
                                                        <div className="d-flex justify-content-between">
                                                            <label className="form-label" htmlFor="login-password">Confirm Password</label>
                                                        </div>
                                                        <div className="input-group input-group-merge form-password-toggle">
                                                            <input type="password" className="form-control form-control-merge" name="confirm_password" onChange={handleChange} tabIndex={2} placeholder="············" aria-describedby="login-password" />
                                                            <br />
                                                        </div>
                                                    </div>
                                                </>
                                            }
                                            {
                                                isSent ?
                                                    <button type="submit" onClick={reset} className="btn btn-primary w-100 mt-4">Submit</button>
                                                    :
                                                    <input type="submit" disabled={loading} value="Submit" className="btn btn-primary w-100 mt-4" />
                                            }
                                        </form>

                                    </div>
                                </div>
                            </div>
                            {/* /Login basic */}
                        </div>
                    </div>
                </div>
            </div>
        </div>




    )
}