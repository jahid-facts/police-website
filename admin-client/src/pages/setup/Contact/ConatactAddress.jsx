
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import edit from '../../../front_assets/images/edit.png';
import Swal from 'sweetalert2';
import http from '../../../http';

export default function ContactAddress() {
    const [disable, setDisabled] = useState(true);
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [activityData, setActivityData] = useState({
        office: "",
        phone: "",
        fax: "",
        email: "",
        map: "",
        mobile:""
    })
    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http
            .get(`contact-address`)
            .then((res) => {
                if (res.data) {
                    setActivityData(res.data)
                }
                setSpinner(false);
            })
            .catch((err) => {
                console.log(err);
            });


        return () => {
            controller.abort();
        };
    }, [update]);


    const handleChange = (e) => {
        setActivityData({ ...activityData, [e.target.name]: e.target.value });
    }
    const submitData = (e) => {
        e.preventDefault()
        if (activityData.id) {
            http.put(`update-contact-address/${activityData.id}`, activityData)
                .then((res) => {
                    setUpdate(!update);
                    setDisabled(true);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Success !',
                        text: 'Data Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        } else {
            http.post('save-contact-address', activityData)
                .then((res) => {
                    setUpdate(!update);
                    setDisabled(true);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Success !',
                        text: 'Data Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
                .catch((err) => {
                    console.log(err)
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        showConfirmButton: false,
                        timer: 1500
                    })
                })
        }

    }
    return (
        <div className='page-content adjustment-type-table'>
            <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                <h6>Contact Address</h6>
                <div>
                    <img style={{ height: "24px", cursor: "pointer" }} onClick={() => setDisabled(!disable)} src={edit} alt="edit-icon" />

                    {/* <button style={{ marginTop: "1px" }} onClick={addSlide} className='btn btn-sm btn-primary float-end'></button> */}
                </div>
            </div>


            <div className="custom-card p-3">
                <form onSubmit={submitData}>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Contact Office</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.office} name="office" type="text" className="form-control form-control-sm my-2" required placeholder="Company Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Phone</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.phone} name="phone" type="text" className="form-control form-control-sm my-2" placeholder="Phone" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Fax</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.fax} name="fax" type="text" className="form-control form-control-sm my-2" placeholder="Fax" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Mobile</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.mobile} name="mobile" type="text" className="form-control form-control-sm my-2" placeholder="Mobile" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Email</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.email} name="email" type="email" className="form-control form-control-sm my-2" placeholder="Email" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Map Embed Link</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.map} name="map" type="text" className="form-control form-control-sm my-2" placeholder="Map Embed Link" />
                        </div>
                    </div>
                    {/* <textarea required className="form-control form-control-sm my-2" value={activityData.title} name="title" onChange={handleChange} id="" cols="30" rows="3" placeholder="Description"></textarea> */}


                    <button disabled={disable} className="btn mt-2 btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
                    <div className="mt-5"></div>
                </form>

            </div>

        </div>
    )
}
