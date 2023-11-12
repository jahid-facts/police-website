
import MaterialTable from 'material-table'
import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import JoditEditor from 'jodit-react';
import { useContext } from 'react';
import { RoleContext } from '../../../navbar/Auth';

export default function Notice() {
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
                    http.delete(`delete-notice/${id}`)
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
        http.get(`notice-setup/${id}`)
            .then((res) => {
                setCategoryData(res.data?.notice);
                setContent(res.data?.notice?.content);
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
            title: "Category",
            field: `title`,
            render: (row) => (
                <div>{row?.category?.title}</div>
            ),
            cellStyle: {
                textAlign: "center",
            },
        },

        {
            title: "Title",
            render: row => <div>{row?.notice?.title}</div>,
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
    const [data, setData] = useState([]);
    const [unit, setUnit] = useState([]);
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http
            .get(`notice-categories`)
            .then((res) => {
                setUnit(res.data)
                setSpinner(false);
            })
            .catch((err) => {
                console.log(err);
            });
        http
            .get(`notice-setup`)
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
            top: '50%',
            left: '58%',
            // right: 'auto',
            // bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: "90%",
            width: "76%",
            height: "450px",
            padding: "10px",
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    const [categoryData, setCategoryData] = useState({
        title: "",
        categroyId: "",
        content: "",
        file: "",
        published_in_news: false
    })

    const handleChange = (e) => {
        setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
    }
    const [categories, setCategories] = useState([]);

    const submitData = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append("title", categoryData.title);
        Array.from(categories).forEach(item => {
            formData.append("categories", item)
        })
        formData.append("content", content);
        formData.append("file", categoryData.file || "");
        formData.append("published_in_news", categoryData.published_in_news);
        if (categoryData.id) {
            http.put(`update-notice/${categoryData.id}`, formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setCategoryData({ title: "", unitId: "" });
                    setCategories([]);
                    setContent('');
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
            if (categoryData.published_in_news) {
                http.post(`save-news`, formData)
                    .then(res => console.log(res))
                    .catch((err) => {
                        console.log(err)
                    })
            }
            http.post('save-notice', formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setCategoryData({ title: "", unitId: "" });
                    setCategories([]);
                    setContent('');
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
        setCategories([]);
    }
    return (
        <div className='page-content adjustment-type-table'>
            <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                <h6>All Notice</h6>
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
                            <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-name">Add Notice
                                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
                            </h5>
                        </div>

                        <div className=" p-3">
                            <form onSubmit={submitData}>
                                <div className="row">
                                    {
                                        categoryData?.id ?
                                            <></>
                                            :
                                            <>
                                                <div className="col-12">
                                                    <div className="row">
                                                        <div className="col-2">
                                                            <label htmlFor="category">Select Categories</label>
                                                        </div>
                                                        <div className="col-9">
                                                            {
                                                                unit.map((item, index) => {
                                                                    return <>

                                                                        <input key={index} className='me-1' onChange={(e) => {
                                                                            const { value, checked } = e.target;

                                                                            if (checked) {
                                                                                setCategories([...categories, value])
                                                                            } else {
                                                                                const newCategories = categories.filter((item) => item !== value)
                                                                                setCategories(newCategories)
                                                                            }
                                                                        }
                                                                        } value={item.id} type='checkbox' />
                                                                        <label htmlFor="category" className='me-2'>{item.title}</label>
                                                                    </>
                                                                })
                                                            }

                                                            <input className='me-1' checked={categoryData?.published_in_news} onChange={(e) => setCategoryData({ ...categoryData, published_in_news: e.target.checked })} type="checkbox" value="" id="flexCheckDefault" />
                                                            <label htmlFor="category" className='me-2'>Publish as News</label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </>
                                    }

                                    <div className="col-6">
                                        <input onChange={handleChange} value={categoryData.title} name="title" type="text" className="form-control form-control-sm my-2" required placeholder="Title" />
                                    </div>
                                    <div className="col-6">
                                        <input onChange={(e) => setCategoryData({ ...categoryData, file: e.target.files[0] })} name="image" type="file" className="form-control form-control-sm my-2" placeholder="BCS Batch" />
                                        {/* <div className="form-check">
                                            <label className="form-check-label" for="flexCheckDefault">
                                                Publish as News
                                            </label>
                                            <input checked={categoryData.published_in_news} onChange={(e) => setCategoryData({ ...categoryData, published_in_news: e.target.checked })} className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />

                                        </div> */}
                                    </div>

                                    <JoditEditor
                                        ref={editor}
                                        value={content}
                                        config={config}
                                        tabIndex={1} // tabIndex of textarea
                                        onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
                                    // onChange={(newContent) => { console.log(newContent) }}
                                    />
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
