
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import edit from '../../../front_assets/images/edit.png';
import Swal from 'sweetalert2';
import http from '../../../http';

export default function FooterCompanySocialMedia() {
    const [disable, setDisabled] = useState(true);


    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [activityData, setActivityData] = useState({
        company: "",
        facebook: "",
        youtube: "",
        whatsapp: "",
        company_link: ""
    })
    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http
            .get(`footer-branding`)
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
        const formData = new FormData();
        formData.append('image', activityData.image);
        formData.append('name', activityData.name);
        formData.append('designation', activityData.designation);
        if (activityData.id) {
            http.put(`update-footer-branding/${activityData.id}`, activityData)
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
            http.post('save-footer-branding', activityData)
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
                <h6>Footer Company and Social Media</h6>
                <div>
                    <img style={{ height: "24px", cursor: "pointer" }} onClick={() => setDisabled(!disable)} src={edit} alt="edit-icon" />

                    {/* <button style={{ marginTop: "1px" }} onClick={addSlide} className='btn btn-sm btn-primary float-end'></button> */}
                </div>
            </div>


            <div className="custom-card p-3">
                <form onSubmit={submitData}>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Company Name</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.company} name="company" type="text" className="form-control form-control-sm my-2" required placeholder="Company Name" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Company Website</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.company_link} name="company_link" type="text" className="form-control form-control-sm my-2" placeholder="Company Website Link" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Facebook Page</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.facebook} name="facebook" type="text" className="form-control form-control-sm my-2" placeholder="Facebook Link" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">Youtube Channel</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.youtube} name="youtube" type="text" className="form-control form-control-sm my-2" placeholder="Youtube Link" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-2">
                            <label className="form-label mt-2">WhatsApp Number</label>
                        </div>
                        <div className="col-10">
                            <input disabled={disable} onChange={handleChange} value={activityData.whatsapp} name="whatsapp" type="text" className="form-control form-control-sm my-2" placeholder="WhatsApp Number" />
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
