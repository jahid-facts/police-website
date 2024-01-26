import MaterialTable from 'material-table';
import React, { useEffect, useRef, useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import JoditEditor from 'jodit-react';
import http from '../../../http';
import { RoleContext } from '../../../navbar/Auth';
import { useContext } from 'react';
import { useParams } from 'react-router-dom';

export default function SubTitlePages({ subtitleId }) {
    const userRole = useContext(RoleContext);
    const { administration } = userRole;

    const [data, setData] = useState([]);
    const [pages, setPages] = useState([]);
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);

    const { title, menu_id } = useParams();

    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);

        http.get(`sub-title`)
            .then((res) => {
                setPages(res.data);
                setSpinner(false);
            })
            .catch((err) => {
                console.log(err);
            });

        http.get(`sub-title-pages`)
            .then((res) => {
                setData(res.data);
                setSpinner(false);
            })
            .catch((err) => {
                console.log(err);
            });

        return () => {
            controller.abort();
        };
    }, [update, title]);

    const [modalIsOpen, setIsOpen] = useState(false);
    const [categoryData, setPagesData] = useState({
        title: "",
        subtitleId: "",
        index: "",
    });

    const editor = useRef(null);
    const [content, setContent] = useState('');

    const config = {
        readonly: false,
        placeholder: 'Start typing...',
        uploader: {
            insertImageAsBase64URI: true
        },
        removeButtons: ['fullsize', 'about', 'outdent', 'indent', 'video', 'print', 'superscript', 'subscript', 'file', 'cut', 'selectall'],
    };

    const handleChange = (e) => {
        setPagesData({ ...categoryData, [e.target.name]: e.target.value });
    };

    const addPage = () => {
        setIsOpen(true);
    };

    const closeModal = () => {
        setContent("");
        setIsOpen(false);
        setPagesData({ title: "", subtitleId: "" });
    };

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
                    http.delete(`delete-sub-title-pages/${id}`)
                        .then((res) => {
                            setUpdate(!update);
                            setIsOpen(false);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Success!',
                                text: 'Banner Deleted Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            });
    };

    const editData = (id) => {
        http.get(`sub-title-pages/${id}`)
            .then((res) => {
                setPagesData(res.data);
                setContent(res.data.content);
                setIsOpen(true);
            })
            .catch((err) => {
                console.log(err);
            });
    };

    const submitData = (e) => {
        e.preventDefault();
        const formData = {
            title: categoryData.title,
            subtitleId: Number(categoryData.pageId), // Updated to use 'pageId'
            index: Number(categoryData.index),
            status: "Active", // Hardcoded value based on the Postman data
            content: content,
        };

        if (categoryData.id) {
            http.put(`update-sub-title-pages/${categoryData.id}`, formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setPagesData({ title: "", subtitleId: "" });
                    setContent("");
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Success!',
                        text: 'Data Updated Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch((err) => {
                    console.log(err);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
        } else {
            http.post('create-sub-title-pages', formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setContent("");
                    setPagesData({ title: "", subtitleId: "" });
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Success!',
                        text: 'Data Added Successfully',
                        showConfirmButton: false,
                        timer: 1500
                    });
                })
                .catch((err) => {
                    console.log(err);
                    Swal.fire({
                        position: 'top-center',
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                        showConfirmButton: false,
                        timer: 1500
                    });
                });
        }
    };

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
            title: "Title",
            render: (row) => (
                <div>{row?.subtitle?.title}</div>
            ),
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Index",
            field: `index`,
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

    return (
        <div className='page-content adjustment-type-table'>
            <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                <h6>Pages</h6>
                <div>
                    {
                        administration.includes('Add Menu Section') &&
                        <button style={{ marginTop: "1px" }} onClick={addPage} className='btn btn-sm btn-primary float-end'>Add Page</button>
                    }
                </div>
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
                style={{
                    content: {
                        top: '55%',
                        left: '58%',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        maxHeight: "90%",
                        width: "76%",
                        height: "480px",
                        padding: "10px",
                    },
                }}
                contentLabel="Example Modal"
            >
                <div className="product_modal">
                    <div className="page-content">
                        <div className=" patients-head ">
                            <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-name">Add Page
                                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
                            </h5>
                        </div>

                        <div className=" p-3">
                            <form onSubmit={submitData}>
                                <input onChange={handleChange} value={categoryData.title} name="title" type="text" className="form-control form-control-sm my-2" required placeholder="Title" />

                                <select name="pageId" onChange={handleChange} value={categoryData.pageId} className="form-control form-control-sm my-2" required>
                                    <option value="">Select Title</option>
                                    {
                                        pages.map((item, index) => (
                                            <option key={index} value={item.id}>{item.title}</option>
                                        ))
                                    }
                                </select>

                                <select name="index" required onChange={handleChange} value={categoryData.index} className="form-control form-control-sm my-2">
                                    <option value="">Select Index</option>
                                    {
                                        data.map((item, index) => (
                                            <option key={index} value={index + 1}>{index + 1}</option>
                                        ))
                                    }
                                    {
                                        categoryData?.id ?
                                            <></>
                                            :
                                            <option value={data?.length + 1}>{data?.length + 1}</option>
                                    }
                                </select>

                                <JoditEditor
                                    ref={editor}
                                    value={content}
                                    config={config}
                                    tabIndex={1}
                                    onBlur={(newContent) => setContent(newContent)}
                                />

                                <button className="btn mt-2 btn-sm btn-success float-end text-uppercase" type="submit">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1">
                                        <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path>
                                        <polyline points="17 21 17 13 7 13 7 21"></polyline>
                                        <polyline points="7 3 7 8 15 8"></polyline>
                                    </svg> Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}