
import MaterialTable from 'material-table'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import moment from 'moment';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

export default function Users() {
    const addSlide = () => {
        setIsOpen(true);
    }
    const deleteRowData = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        })
            .then((result) => {
                if (result.isConfirmed) {
                    http.delete(`delete-users/${id}`)
                        .then((res) => {
                            setUpdate(!update);
                            setIsOpen(false);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Success !',
                                text: 'News Deleted Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                }
            })
    }
    const editData = (id) => {
        http.get(`users/${id}`)
            .then((res) => {
                console.log(res.data);
                setSlideData(res.data);
                setIsOpen(true);
            })
            .catch((err) => {
                console.log(err)
            })
    }
    const columns = [
        {
            title: "SL",
            field: "",
            render: (row) => <div>{row.tableData.id + 1}</div>,
            width: "20 !important",
            cellStyle: {
                textAlign: "center",
            },
        },

        {
            title: "Date",
            render: (row) => <div>{moment(row.created_at).format('YYYY-MM-DD')}</div>,
            cellStyle: {
                textAlign: "center",
            },
        },

        {
            title: "Name",
            field: `name`,

            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Email",
            field: `email`,

            cellStyle: {
                textAlign: "center",
            },
        },


        {
            title: "Action",
            field: "patient",
            render: (row) => (
                <div>
                    <button
                        onClick={() => editData(row.id)}
                        className="btn btn-sm action-btn"
                    >
                        <i className="far fa-edit"></i>
                    </button>
                    &nbsp;
                    <button
                        onClick={() => deleteRowData(row.id)}
                        className="btn btn-sm action-btn"
                    >
                        <i className="far fa-trash"></i>
                    </button>
                </div>
            ),
            cellStyle: {
                textAlign: "center",
            },
        },
    ];
    const [data, setData] = useState([]);
    const [roles, setRoles] = useState([]);
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http
            .get(`users`, { signal: controller.signal })
            .then((res) => {
                setData(res.data)
                setSpinner(false);
            })
            .catch((err) => {
                console.log(err);
            });
        http
            .get(`roles`, { signal: controller.signal })
            .then((res) => {
                setRoles(res.data)
            })
            .catch((err) => {
                console.log(err);
            });



        return () => {
            controller.abort();
        };
    }, [update]);
    // add modal 
    const customStyles = {
        content: {
            marginTop: '20px',
            marginBottom: '35px',
            top: '40%',
            left: '60%',
            // right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: "90%",
            width: "52%",
            height: "350px",
            padding: "10px",
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    const [slideData, setSlideData] = useState({
        image: "",
        name: "",
        password: "",
        confirm_password: "",
        email: "",
        role_id: "",
    })
    const handleChange = (e) => {
        setSlideData({ ...slideData, [e.target.name]: e.target.value });
    }
    const submitData = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('name', slideData.name || "");
        formData.append('email', slideData.email || "");
        formData.append('password', slideData.password || "");
        formData.append('role_id', slideData.role_id || "");
        formData.append('user_type', "admin");
        if (slideData.password === slideData.confirm_password) {
            if (slideData.id) {
                http.put(`update-user/${slideData.id}`, slideData)
                    .then((res) => {
                        setUpdate(!update);
                        closeModal();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Success !',
                            text: 'User Added Successfully',
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
                http.post('register', slideData)
                    .then((res) => {
                        setUpdate(!update);
                        closeModal();
                        Swal.fire({
                            position: 'top-center',
                            icon: 'success',
                            title: 'Success !',
                            text: 'User Added Successfully',
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
        } else {
            toast.error("Password does not match")
        }
    }

    const closeModal = () => {
        setIsOpen(false);
        setSlideData({ name: "", role_id: "", password: "", password_confirmation: "", email: "", });
    }
    console.log(data, "users ddde");
    return (
        <div className='page-content adjustment-type-table'>
            <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                <h6>Users</h6>
                <div>
                    <button style={{ marginTop: "1px" }} onClick={addSlide} className='btn btn-sm btn-primary float-end'>Add User</button>
                </div>
            </div>
            <ToastContainer />
            <MaterialTable
                columns={columns}
                data={data}
                isLoading={spinner}
                options={{
                    search: true,
                    showTitle: false,
                    searchFieldAlignment: "left",
                    pageSize: 10,
                    emptyRowsWhenPaging: false,
                    pageSizeOptions: [5, 10, 20, 50, 100],
                }}
            />

            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="product_modal">
                    <div className="page-content">
                        <div className=" patients-head ">
                            <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-name">Add User
                                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
                            </h5>
                        </div>

                        <div className=" p-3">
                            <form onSubmit={submitData}>
                                <input required onChange={handleChange} name='name' value={slideData.name} type="text" className="form-control form-control-sm my-2" placeholder="Name" />
                                <input required onChange={handleChange} name='email' value={slideData.email} type="email" className="form-control form-control-sm my-2" placeholder="Email" />
                                <input required onChange={handleChange} name='password' value={slideData.password} type="password" className="form-control form-control-sm my-2" placeholder="Password" />
                                <input required onChange={handleChange} name='confirm_password' type="password" className="form-control form-control-sm my-2" placeholder="Confirm Password" />
                                {/* <input required onChange={handleChange} name='password_confirmation' value={slideData.password_confirmation} type="password" className="form-control form-control-sm my-2" placeholder="password_confirmation" /> */}
                                <select name="role_id" onChange={handleChange} value={slideData.role_id} className="form-control form-control-sm my-2" required>
                                    <option value="">Select Role</option>
                                    {
                                        roles.map((item, index) => {
                                            return <option key={index} value={item.id}>{item.role}</option>
                                        })
                                    }
                                </select>
                                <button className="btn mt-2 btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
                            </form>

                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}
