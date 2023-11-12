import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import http from '../../http';

export default function Dashboard() {
    const [users, setUsers] = useState(0);
    const [thana, setThana] = useState(0);
    const [bitOfficer, setBitOfficer] = useState(0);
    const [circle, setCircle] = useState(0);
    useEffect(() => {
        http.get('users').then(res => {
            setUsers(res.data.length)
        })
        http.get('sub-units-thana').then(res => {
            setThana(res.data)
        })
        http.get('bit-officers').then(res => {
            setBitOfficer(res.data.length)
        })
        http.get('sub-units-circle').then(res => {
            setCircle(res.data)
        })
    }, [])
    return (
        <div className='page-content'>
            <div className="row">
                <div className="col-md-3">
                    <div className="custom-card p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span style={{ fontSize: "25px", color: "#8A96A5" }}>Total Users</span>
                        
                        </div>
                        <div className="d-flex mt-2">
                            <div className="dashboard-icon d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-user-doctor"></i>
                            </div>
                            <div>
                                <span className='ms-3' style={{ fontSize: "25px", fontWeight: "700" }}>{users}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="custom-card p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span style={{ fontSize: "25px", color: "#8A96A5" }}>Circle Office</span>
                        </div>
                        <div className="d-flex mt-2">
                            <div className="dashboard-icon d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-user-doctor"></i>
                            </div>
                            <div>
                                <span className='ms-3' style={{ fontSize: "25px", fontWeight: "700" }}>{circle}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="custom-card p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span style={{ fontSize: "25px", color: "#8A96A5" }}>Thana</span>
                        </div>
                        <div className="d-flex mt-2">
                            <div className="dashboard-icon d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-user-doctor"></i>
                            </div>
                            <div>
                                <span className='ms-3' style={{ fontSize: "25px", fontWeight: "700" }}>{thana}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="custom-card p-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <span style={{ fontSize: "25px", color: "#8A96A5" }}>Total Bit Policing</span>
                        </div>
                        <div className="d-flex mt-2">
                            <div className="dashboard-icon d-flex justify-content-center align-items-center">
                                <i className="fa-solid fa-user-doctor"></i>
                            </div>
                            <div>
                                <span className='ms-3' style={{ fontSize: "25px", fontWeight: "700" }}>{bitOfficer}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
