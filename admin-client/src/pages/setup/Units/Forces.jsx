
import MaterialTable from 'material-table'
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import { useContext } from 'react';
import { RoleContext } from '../../../navbar/Auth';

export default function Forces() {
    const userRole = useContext(RoleContext);
    const { administration } = userRole;
    const addPage = () => {
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
                    http.delete(`delete-forces/${id}`)
                        .then((res) => {
                            setUpdate(!update);
                            setIsOpen(false);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Success !',
                                text: 'Data Deleted Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        })
                }
            })
    }
    const editData = (id) => {
        http.get(`forces/${id}`)
            .then((res) => {
                setCategoryData(res.data);
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
            title: "Unit",
            field: `title`,
            render: (row) => (
                <div>{row?.unit?.title}</div>
            ),
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Sub Unit",
            field: `title`,
            render: (row) => (
                <div>{row?.sub_units?.title}</div>
            ),
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
            title: "Mobile",
            field: `mobile`,
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Post",
            field: `designation`,
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Designation",
            field: `current_designation`,
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Phone",
            field: `phone`,
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Image",
            field: `image`,
            render: (row) => (
                <img src={`${global.img_Url}/${row.image}`} style={{ height: "70px", maxWidth: "100px" }} className='img-fluid' alt="test" />
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
    const [unit, setUnit] = useState([]);
    const [subUnit, setSubUnit] = useState([]);
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http
            .get(`units`)
            .then((res) => {
                setUnit(res.data)
                setSpinner(false);
            })
            .catch((err) => {
                console.log(err);
            });
        http
            .get(`forces`)
            .then((res) => {
                setData(res.data)
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
            top: '45%',
            left: '58%',
            // right: 'auto',
            // bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: "90%",
            width: "76%",
            height: "330px",
            padding: "10px",
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    const [categoryData, setCategoryData] = useState({
        unitId: "",
        title: "",
        name: "",
        designation: "",
        current_designation: "",
        mobile: "",
        phone: "",
        bcs_batch: "",
        image: "",
        sub_unitId: "",
    })
    // text editor
    // text editor
    const handleChange = (e) => {
        setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
    }
    useEffect(() => {
        http
            .get(`units/${categoryData.unitId}`)
            .then((res) => {
                setSubUnit(res.data?.sub_units)
            })
            .catch((err) => {
                console.log(err);
            });
    }, [categoryData.unitId]);
    const submitData = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("name", categoryData.name);
        formData.append("designation", categoryData.designation);
        formData.append("current_designation", categoryData.current_designation);
        formData.append("mobile", categoryData.mobile);
        formData.append("phone", categoryData.phone);
        formData.append("bcs_batch", categoryData.bcs_batch);
        formData.append("image", categoryData.image);
        formData.append("sub_unitId", parseInt(categoryData.sub_unitId));
        formData.append("unitId", parseInt(categoryData.unitId));
        if (categoryData.id) {
            http.put(`update-forces/${categoryData.id}`, formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setCategoryData({ title: "", unitId: "" });
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
            http.post('save-forces', formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setCategoryData({ title: "", unitId: "" });
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
        setCategoryData({ title: "", unitId: "" });
    }
    return (
        <div className='page-content adjustment-type-table'>
            <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                <h6>All Forces</h6>
                {
                    administration.includes('Add Menu Section') &&
                    <div>
                        <button style={{ marginTop: "1px" }} onClick={addPage} className='btn btn-sm btn-primary float-end'>Add Page</button>
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
                            <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-name">Add Force
                                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
                            </h5>
                        </div>

                        <div className=" p-3">
                            <form onSubmit={submitData}>
                                <div className="row">
                                    <div className="col-6">
                                        <select name="unitId" onChange={handleChange} value={categoryData.unitId} className="form-control form-control-sm my-2" required>
                                            <option value="">Select Unit</option>
                                            {
                                                unit.map((item, index) => {
                                                    return <option key={index} value={item.id}>{item.title}</option>
                                                })
                                            }
                                        </select>
                                        {
                                            subUnit?.length > 0 &&
                                            <select name="sub_unitId" onChange={handleChange} value={categoryData.sub_unitId} className="form-control form-control-sm my-2" required>
                                                <option value="">Select Sub Unit</option>
                                                {
                                                    subUnit.map((item, index) => {
                                                        return <option key={index} value={item.id}>{item.title}</option>
                                                    })
                                                }
                                            </select>
                                        }
                                        <input onChange={handleChange} value={categoryData.name} name="name" type="text" className="form-control form-control-sm my-2" required placeholder="Name" />
                                        <input onChange={handleChange} value={categoryData.designation} name="designation" type="text" className="form-control form-control-sm my-2" required placeholder="Post" />
                                        <input onChange={handleChange} value={categoryData.current_designation} name="current_designation" type="text" className="form-control form-control-sm my-2" placeholder="Designation" />

                                    </div>
                                    <div className="col-6">
                                        <input onChange={handleChange} value={categoryData.mobile} name="mobile" type="text" className="form-control form-control-sm my-2" required placeholder="Mobile" />
                                        <input onChange={handleChange} value={categoryData.phone} name="phone" type="text" className="form-control form-control-sm my-2" placeholder="Phone" />
                                        <input onChange={handleChange} value={categoryData.bcs_batch} name="bcs_batch" type="text" className="form-control form-control-sm my-2" placeholder="BCS Batch" />
                                        <input onChange={(e)=> setCategoryData({...categoryData, image: e.target.files[0]})}  name="image" type="file" accept='image/*' className="form-control form-control-sm my-2" placeholder="BCS Batch" />
                                    </div>
                                </div>
                                {/* <textarea required className="form-control form-control-sm my-2" value={categoryData.title} name="title" onChange={handleChange} id="" cols="30" rows="3" placeholder="Description"></textarea> */}


                                <button className="btn mt-2 btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
                            </form>

                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}
