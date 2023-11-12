
import MaterialTable from 'material-table'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import moment from 'moment'
import { useContext } from 'react';
import { RoleContext } from '../../../navbar/Auth';

export default function ExPoliceSuper() {
    const userRole = useContext(RoleContext);
    const { administration } = userRole;
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
                    http.delete(`delete-ex-police-super/${id}`)
                        .then((res) => {
                            setUpdate(!update);
                            setIsOpen(false);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Success !',
                                text: 'Deleted Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                }
            })
    }
    const editData = (id) => {
        http.get(`ex-police-super/${id}`)
            .then((res) => {
                setSlideData({ ...res.data, date: moment().format('YYYY-MM-DD') });
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
            title: "Name",
            field: `name`,
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Title",
            field: `title`,
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "From Date",
            field: `from_date`,
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "To Date",
            field: `to_date`,
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Image",
            field: `image`,
            render: (row) => (
                <img src={`${global.img_Url}/${row.image}`} style={{ height: "100px", maxWidth: "600px" }} className='img-fluid' alt="test" />
            ),
            cellStyle: {
                textAlign: "center",
            },
        },


        {
            title: "Action",
            field: "patient",
            render: (row) => (
                <div>
                     {
                        administration.includes('Edit Menu Section') &&
                        <button
                            onClick={() => editData(row.id)}
                            className="btn btn-sm action-btn"
                        >
                            <i className="far fa-edit"></i>
                        </button>

                    }
                    {
                        administration.includes('Delete Menu Section') &&
                        <button
                            onClick={() => deleteRowData(row.id)}
                            className="btn btn-sm action-btn"
                        >
                            <i className="far fa-trash"></i>
                        </button>
                    }
                </div>
            ),
            cellStyle: {
                textAlign: "center",
            },
        },
    ];
    const [data, setData] = useState([]);
    const [pages, setPages] = useState([]);
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http
            .get(`ex-police-super`)
            .then((res) => {
                setData(res.data)
                setSpinner(false);
            })
            .catch((err) => {
                console.log(err);
            });
        http
            .get(`administration-pages-only`)
            .then((res) => {
                setPages(res.data)
                setSpinner(false);
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
            height: "400px",
            padding: "10px",
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    const [slideData, setSlideData] = useState({
        image: "",
        name: "",
        title: "",
        from_date: "",
        to_date: "",
        designationId: ""
    })
    const handleChange = (e) => {
        setSlideData({ ...slideData, [e.target.name]: e.target.value });
    }
    const submitData = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', slideData.image);
        formData.append('name', slideData.name);
        formData.append('title', slideData.title);
        formData.append('from_date', slideData.from_date);
        formData.append('to_date', slideData.to_date);
        if (slideData.id) {
            http.put(`update-ex-police-super/${slideData.id}`, formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setSlideData({ image: "", date: moment().format('YYYY-MM-DD') });
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
            http.post('save-ex-police-super', formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setSlideData({ image: "", date: moment().format('YYYY-MM-DD') });
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
    const closeModal = () => {
        setIsOpen(false);
        setSlideData({ image: "", date: moment().format('YYYY-MM-DD') });
    }
    return (
        <div className='page-content adjustment-type-table'>
            <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                <h6>Former Police Super</h6>
                {
                    administration.includes('Add Menu Section') &&
                    <div>
                        <button style={{ marginTop: "1px" }} onClick={addSlide} className='btn btn-sm btn-primary float-end'>Add</button>
                    </div>
                }
            </div>
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
                            <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-name">Add Officer
                                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
                            </h5>
                        </div>

                        <div className=" p-3">
                            <form onSubmit={submitData}>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Name</label>
                                    </div>
                                    <div className="col-9">
                                        <input onChange={handleChange} name='name' value={slideData.name} type="text" className="form-control form-control-sm my-2" required placeholder="Name" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Title</label>
                                    </div>
                                    <div className="col-9">
                                        <input onChange={handleChange} name='title' value={slideData.title} type="text" className="form-control form-control-sm my-2" placeholder="Title" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label>From Date</label>
                                    </div>
                                    <div className="col-9">
                                        <input onChange={handleChange} name='from_date' value={slideData.from_date} type="date" className="form-control form-control-sm my-2" required placeholder="From Date" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label>To Date</label>
                                    </div>
                                    <div className="col-9">
                                        <input onChange={handleChange} name='to_date' value={slideData.to_date} type="date" className="form-control form-control-sm my-2" placeholder="To Date" />
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-3">
                                        <label>Image</label>
                                    </div>
                                    <div className="col-9">
                                    <input className="form-control form-control-sm my-2" name="image" onChange={(e => setSlideData({ ...slideData, image: e.target.files[0] }))} type="file" accept='image/*' />
                                    </div>
                                </div>
                                <button className="btn mt-2 btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
                            </form>

                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}
