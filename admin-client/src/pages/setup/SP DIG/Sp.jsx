

import MaterialTable from 'material-table'
import React, { useContext, useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import moment from 'moment'
import { RoleContext } from '../../../navbar/Auth';
import JoditEditor from 'jodit-react';

export default function Sp() {
    const userRole = useContext(RoleContext);
    const { home_page } = userRole;
    // text editor
    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = (
        {
            readonly: false, // all options from https://xdsoft.net/jodit/doc/,
            placeholder: 'Start typings...',
            uploader: {
                insertImageAsBase64URI: true
            },
            removeButtons: ['fullsize', 'about', 'outdent', 'indent', 'video', 'print', 'superscript', 'subscript', 'file', 'cut', 'selectall'],
        }

    );

    // text editor
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [data, setData] = useState([]);
    const [activityData, setActivityData] = useState({
        image: "",
        name: "",
        title: "",
        index: "",
        designation: "",
        content: "",
    })
    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http
            .get(`police-super`)
            .then((res) => {
                if (res.data) {
                    setData(res.data)
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

    const customStyles = {
        content: {
            marginTop: '20px',
            marginBottom: '35px',
            top: '50%',
            left: '60%',
            // right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: "90%",
            width: "62%",
            height: "500px",
            padding: "10px",
        },
    };
    const handleChange = (e) => {
        setActivityData({ ...activityData, [e.target.name]: e.target.value });
    }
    const submitData = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('image', activityData.image);
        formData.append('name', activityData.name);
        formData.append('designation', activityData.designation);
        formData.append('title', activityData.title);
        formData.append('index', activityData.index);
        formData.append('content', content);
        if (activityData.id) {
            http.put(`update-police-super/${activityData.id}`, formData)
                .then((res) => {
                    setUpdate(!update);
                    closeModal();
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
            http.post('save-police-super', formData)
                .then((res) => {
                    setUpdate(!update);
                    closeModal();
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
                    http.delete(`delete-slide/${id}`)
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
        http.get(`police-super/${id}`)
            .then((res) => {
                setActivityData({ ...res.data });
                setContent(res.data.content)
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
            title: "Designation",
            field: `designation`,
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
                        home_page.includes('Edit Home') &&
                        <button
                            onClick={() => editData(row.id)}
                            className="btn btn-sm action-btn"
                        >
                            <i className="far fa-edit"></i>
                        </button>

                    }
                    {
                        home_page.includes('Delete Home') &&
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
    const [isOpen, setIsOpen] = useState(false);
    const addSlide = () => {
        setIsOpen(true);
    }
    const closeModal = () => {
        setIsOpen(false);
        setActivityData({ image: "", name: "", designation: "", content: "" });
        setContent('');
    }
    return (

        <>

            <div className='page-content adjustment-type-table'>
                <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                    <h6>To Slider</h6>
                    {
                        home_page.includes('Add Home') &&
                        <div>
                            <button style={{ marginTop: "1px" }} onClick={addSlide} className='btn btn-sm btn-primary float-end'>Add Page</button>
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
                    isOpen={isOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div className="product_modal">
                        <div className="page-content">
                            <div className=" patients-head ">
                                <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-name">Add
                                    <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
                                </h5>
                            </div>

                            <div className=" p-3">
                                <form onSubmit={submitData}>
                                    <input onChange={handleChange} value={activityData.title} name="title" type="text" className="form-control form-control-sm my-2" required placeholder="Title" />
                                    <input onChange={handleChange} value={activityData.name} name="name" type="text" className="form-control form-control-sm my-2" required placeholder="Name" />
                                    <input onChange={handleChange} value={activityData.designation} name="designation" type="text" className="form-control form-control-sm my-2" required placeholder="Designation" />

                                    {/* <textarea required className="form-control form-control-sm my-2" value={activityData.title} name="title" onChange={handleChange} id="" cols="30" rows="3" placeholder="Description"></textarea> */}
                                    {
                                        activityData.id ?
                                            <input className="form-control form-control-sm my-2" name="image" onChange={(e) => setActivityData({ ...activityData, image: e.target.files[0] })} type="file" accept='image/*' />
                                            :
                                            <input required className="form-control form-control-sm my-2" name="image" onChange={(e) => setActivityData({ ...activityData, image: e.target.files[0] })} type="file" accept='image/*' />
                                    }
                                    <select name="index" required onChange={handleChange} value={activityData.index} className="form-control form-control-sm my-2" >
                                        <option value="">Select Index</option>
                                        {
                                            data.map((item, index) => {
                                                return <option key={index} value={index + 1}>{index + 1}</option>
                                            })
                                        }
                                        {
                                            activityData?.id ?
                                                <></>
                                                :
                                                <option value={data?.length + 1}>{data?.length + 1}</option>
                                        }
                                    </select>
                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                    // onChange={(newContent) => { console.log(newContent) }}
                                    />
                                    <button className="btn mt-2 btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
                                    <div className="mt-5"></div>
                                </form>
                            </div>

                        </div>
                    </div>
                </Modal>
            </div>
        </>

    )
}
