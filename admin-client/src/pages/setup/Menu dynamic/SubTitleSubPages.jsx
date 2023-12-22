import MaterialTable from 'material-table'
import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import { useContext } from 'react';
import { RoleContext } from '../../../navbar/Auth';
import { useParams } from 'react-router-dom';

export default function SubTitleSubPages({ pagesId }) {
    const userRole = useContext(RoleContext);
    const { administration } = userRole;

    const { title, menu_id } = useParams();

    const [data, setData] = useState([]);
    const [thana, setThana] = useState([]);
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);

    // const [disable, setDisabled] = useState(true);

    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);

        http.get(`sub-title-sub-pages`)
            .then((res) => {
                setData(res.data);
                setSpinner(false);
            })
            .catch((err) => {
                console.log(err);
            });

        http.get(`sub-title-pages`)
            .then((res) => {
                setThana(res.data);
                setSpinner(false);
            })
            .catch((err) => {
                console.log(err);
            });

        return () => {
            controller.abort();
        };
    }, [update, title]);

    const addPage = () => {
        setIsOpen(true);
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
                    http.delete(`delete-sub-title-sub-pages/${id}`)
                        .then((res) => {
                            setUpdate(!update);
                            setIsOpen(false);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Success !',
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
        http.get(`sub-title-sub-pages/${id}`)
            .then((res) => {
                setCategoryData(res.data);
                setIsOpen(true);
            })
            .catch((err) => {
                console.log(err);
            });
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
            title: "Area",
            field: `title`,
            render: (row) => (
                <div>{row?.thana?.title}</div>
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
            title: "Index",
            field: `index`,
            cellStyle: {
                textAlign: "center",
            },
        },

        {
            title: "Designation",
            field: 'designation',
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
            title: "Address",
            field: 'address',
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Mobile",
            field: 'mobile',
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Phone",
            field: 'phone',
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Image",
            field: 'image',
            render: row => (
                <img src={`${global.img_Url}/${row.image}`} style={{ height: "60px", maxWidth: "60px" }} className='img-fluid' alt="test" />
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
                    {administration.includes('Edit Menu Section') && (
                        <button
                            onClick={() => editData(row.id)}
                            className="btn btn-sm action-btn"
                        >
                            <i className="far fa-edit"></i>
                        </button>
                    )}
                    {administration.includes('Delete Menu Section') && (
                        <button
                            onClick={() => deleteRowData(row.id)}
                            className="btn btn-sm action-btn"
                        >
                            <i className="far fa-trash"></i>
                        </button>
                    )}
                </div>
            ),
            cellStyle: {
                textAlign: "center",
            },
        },
    ];

    const [modalIsOpen, setIsOpen] = useState(false);
    const [categoryData, setCategoryData] = useState({
        name: "",
        designation: "",
        mobile: "",
        phone: "",
        bcs_batch: "",
        location: "",
        image: "",
        address: "",
        current_address: "",
        office: "",
        fax: "",
        email: "",
        from_date: "",
        to_date: "",
        index: "",
        status: "Active",
    });

    const handleChange = (e) => {
        setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
    };

    const closeModal = () => {
        setIsOpen(false);
        setCategoryData({
            name: "",
            designation: "",
            mobile: "",
            phone: "",
            bcs_batch: "",
            location: "",
            image: "",
            address: "",
            current_address: "",
            office: "",
            fax: "",
            email: "",
            from_date: "",
            to_date: "",
            index: "",
            status: "Active",
        });
    };

    const submitData = (e) => {
        e.preventDefault();
        // const formData = new FormData();
        // formData.append('pagesId', categoryData.pagesId);
        // formData.append('name', categoryData.name);
        // formData.append('designation', categoryData.designation);
        // formData.append('mobile', categoryData.mobile);
        // formData.append('phone', categoryData.phone);
        // formData.append('bcs_batch', categoryData.bcs_batch);
        // formData.append('location', categoryData.location);
        // formData.append('image', categoryData.image);
        // formData.append('address', categoryData.address);
        // formData.append('current_address', categoryData.current_address);
        // formData.append('office', categoryData.office);
        // formData.append('fax', categoryData.fax);
        // formData.append('email', categoryData.email);
        // formData.append('from_date', categoryData.from_date);
        // formData.append('to_date', categoryData.to_date);
        // // formData.append('index', categoryData.index);
        // formData.append('index', Number(categoryData.index));
        // formData.append('status', categoryData.status);

        const formData = {
            name: categoryData.name,
            pagesId: Number(categoryData.pagesId), // Updated to use 'pageId'
            index: Number(categoryData.index),
            designation: categoryData.designation,
            mobile: categoryData.mobile,
            phone: categoryData.phone,
            bcs_batch: categoryData.bcs_batch,
            location: categoryData.location,
            image: categoryData.image,
            address: categoryData.address,
            current_address: categoryData.current_address,
            office: categoryData.office,
            fax: categoryData.fax,
            email: categoryData.email,
            from_date: categoryData.from_date,
            to_date: categoryData.to_date,
            index: Number(categoryData.index),
            status: "Active", // Hardcoded value based on the Postman data
            // content: content,
        };

        if (categoryData.id) {
            http.put(`update-sub-title-sub-pages/${categoryData.id}`, formData)
                .then((res) => {
                    setUpdate(!update);
                    // setDisabled(true)
                    setIsOpen(false);
                    setCategoryData({
                        name: "",
                        designation: "",
                        mobile: "",
                        phone: "",
                        bcs_batch: "",
                        location: "",
                        image: "",
                        address: "",
                        current_address: "",
                        office: "",
                        fax: "",
                        email: "",
                        from_date: "",
                        to_date: "",
                        index: "",
                        status: "Active",
                    });
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Success !',
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
            http.post('create-sub-title-sub-pages', formData)
                .then((res) => {
                    setUpdate(!update);
                    // setDisabled(true)
                    setIsOpen(false);
                    setCategoryData({
                        name: "",
                        designation: "",
                        mobile: "",
                        phone: "",
                        bcs_batch: "",
                        location: "",
                        image: "",
                        address: "",
                        current_address: "",
                        office: "",
                        fax: "",
                        email: "",
                        from_date: "",
                        to_date: "",
                        index: "",
                        status: "Active",
                    });
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Success !',
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

    const customStyles = {
        content: {
            top: '50%',
            left: '58%',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: "90%",
            width: "76%",
            height: "500px",
            padding: "10px",
        },
    };

    return (
        <div className='page-content adjustment-type-table'>
            <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                <h6>Sub Pages</h6>
                {administration.includes('Add Menu Section') && (
                    <div>
                        <button style={{ marginTop: "1px" }} onClick={addPage} className='btn btn-sm btn-primary float-end'>Add Page</button>
                    </div>
                )}
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
                            <h5 className="fw-normal px-2  text-start card-name">Add Officer
                                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
                            </h5>
                        </div>

                        <div className=" p-3">
                            <form onSubmit={submitData}>
                                <div className="row">
                                    <div className="col-6">
                                        <label htmlFor="name">Name</label>
                                        <input onChange={handleChange} value={categoryData.name} name="name" type="text" className="form-control form-control-sm my-2" required placeholder="Name" />
                                        <label htmlFor="designation">Designation</label>
                                        <input onChange={handleChange} value={categoryData.designation} name="designation" type="text" className="form-control form-control-sm my-2" required placeholder="Designation" />

                                        <label htmlFor="designation">BCS Batch</label>
                                        <input onChange={handleChange} name='bcs_batch' value={categoryData.bcs_batch} type="text" className="form-control form-control-sm my-2" placeholder="BCS Batch" />
                                        <label htmlFor="designation">From Date</label>
                                        <input onChange={handleChange} name='from_date' value={categoryData.from_date} type="date" className="form-control form-control-sm my-2" required placeholder="From Date" />
                                        <label htmlFor="designation">To Date</label>
                                        <input onChange={handleChange} name='to_date' value={categoryData.to_date} type="date" className="form-control form-control-sm my-2" placeholder="To Date" />
                                        <label className="form-label mt-2">Contact Office</label>
                                        {/* <input disabled={disable} onChange={handleChange} value={categoryData.office} name="office" type="text" className="form-control form-control-sm my-2" required placeholder="Company Name" /> */}
                                        <input onChange={handleChange} value={categoryData.office} name="office" type="text" className="form-control form-control-sm my-2" required placeholder="Company Name" />

                                        <label htmlFor="address">Address</label>
                                        <input onChange={handleChange} value={categoryData.address} name="address" type="text" className="form-control form-control-sm my-2" required placeholder="Address" />
                                        <label htmlFor="current_address">Current Address</label>
                                        <input onChange={handleChange} value={categoryData.current_address} name="current_address" type="text" className="form-control form-control-sm my-2" required placeholder="Current Address" />
                                        <label htmlFor="pagesId">Thana</label>
                                        <select name="pagesId" onChange={handleChange} value={categoryData.pagesId} className="form-control form-control-sm my-2" required>
                                            <option value="">Select Title</option>
                                            {thana.map((item, index) => (
                                                <option key={index} value={item.id}>{item.title}</option>
                                            ))}
                                        </select>

                                        <label htmlFor="pagesId">index</label>
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

                                        <label htmlFor="image">Image</label>
                                        <input onChange={(e) => setCategoryData({ ...categoryData, image: e.target.files[0] })} type="file" className="form-control form-control-sm my-2" />
                                    </div>
                                    <div className="col-6">
                                        <label htmlFor="mobile">Mobile</label>
                                        <input onChange={handleChange} value={categoryData.mobile} name="mobile" type="text" className="form-control form-control-sm my-2" required placeholder="Mobile" />
                                        <label htmlFor="phone">Phone</label>
                                        <input onChange={handleChange} value={categoryData.phone} name="phone" type="text" className="form-control form-control-sm my-2" placeholder="Phone" />
                                        <label htmlFor="email">Email</label>
                                        <input onChange={handleChange} value={categoryData.email} name="email" type="email" className="form-control form-control-sm my-2" placeholder="Email" />
                                        <label htmlFor="fax">Fax</label>
                                        <input onChange={handleChange} value={categoryData.fax} name="fax" type="text" className="form-control form-control-sm my-2" placeholder="Fax" />
                                        <label htmlFor="location">Map Location</label>
                                        <input onChange={handleChange} value={categoryData.location} name="location" type="text" className="form-control form-control-sm my-2" placeholder="Map Location" />
                                        <button className="btn mt-4  btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
                                    </div>
                                </div>
                            </form>

                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}






// import MaterialTable from 'material-table'
// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';
// import Modal from 'react-modal';
// import Swal from 'sweetalert2';
// import http from '../../../http';
// import { useContext } from 'react';
// import { RoleContext } from '../../../navbar/Auth';
// import { useParams } from 'react-router-dom';

// export default function SubTitleSubPages({pagesId}) {
//     const userRole = useContext(RoleContext);
//     const { administration } = userRole;

//     const { title, menu_id } = useParams();

//     const addPage = () => {
//         setIsOpen(true);
//     }
//     const deleteRowData = (id) => {
//         Swal.fire({
//             title: 'Are you sure?',
//             text: "You won't be able to revert this!",
//             icon: 'warning',
//             showCancelButton: true,
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             confirmButtonText: 'Yes, delete it!'
//         })
//             .then((result) => {
//                 if (result.isConfirmed) {
//                     http.delete(`delete-sub-title-sub-pages/${id}`)
//                         .then((res) => {
//                             setUpdate(!update);
//                             setIsOpen(false);
//                             Swal.fire({
//                                 position: 'top-center',
//                                 icon: 'success',
//                                 title: 'Success !',
//                                 text: 'Banner Deleted Successfully',
//                                 showConfirmButton: false,
//                                 timer: 1500
//                             })
//                         })
//                 }
//             })
//     }
//     const editData = (id) => {
//         http.get(`sub-title-sub-pages/${id}`)
//             .then((res) => {
//                 setCategoryData(res.data);
//                 setIsOpen(true);
//             })
//             .catch((err) => {
//                 console.log(err)
//             })
//     }
//     const columns = [
//         {
//             title: "SL",
//             field: "",
//             render: (row) => <div>{row.tableData.id + 1}</div>,
//             width: "20 !important",
//             cellStyle: {
//                 textAlign: "center",
//             },
//         },

//         {
//             title: "Area",
//             field: `title`,
//             render: (row) => (
//                 <div>{row?.thana?.title}</div>
//             ),
//             cellStyle: {
//                 textAlign: "center",
//             },
//         },
//         {
//             title: "Name",
//             field: `name`,
//             cellStyle: {
//                 textAlign: "center",
//             },
//         },
//         {
//             title: "Designation",
//             field: 'designation',
//             cellStyle: {
//                 textAlign: "center",
//             },
//         },
//         {
//             title: "Address",
//             field: 'address',
//             cellStyle: {
//                 textAlign: "center",
//             },
//         },
//         {
//             title: "Mobile",
//             field: 'mobile',
//             cellStyle: {
//                 textAlign: "center",
//             },
//         },
//         {
//             title: "Phone",
//             field: 'phone',
//             cellStyle: {
//                 textAlign: "center",
//             },
//         },
//         {
//             title: "Image",
//             field: 'phone',
//             render: row => <><img src={`${global.img_Url}/${row.image}`} style={{ height: "60px", maxWidth: "60px" }} className='img-fluid' alt="test" />
//             </>,
//             cellStyle: {
//                 textAlign: "center",
//             },
//         },

//         {
//             title: "Action",
//             field: "patient",
//             render: (row) => (
//                 <div>
//                     {
//                         administration.includes('Edit Menu Section') &&
//                         <button
//                             onClick={() => editData(row.id)}
//                             className="btn btn-sm action-btn"
//                         >
//                             <i className="far fa-edit"></i>
//                         </button>

//                     }
//                     {
//                         administration.includes('Delete Menu Section') &&
//                         <button
//                             onClick={() => deleteRowData(row.id)}
//                             className="btn btn-sm action-btn"
//                         >
//                             <i className="far fa-trash"></i>
//                         </button>
//                     }
//                 </div>
//             ),
//             cellStyle: {
//                 textAlign: "center",
//             },
//         },
//     ];
//     const [data, setData] = useState([]);
//     const [thana, setThana] = useState([]);
//     const [update, setUpdate] = useState(false);
//     const [spinner, setSpinner] = useState(false);
//     useEffect(() => {
//         const controller = new AbortController();
//         setSpinner(true);
//         http
//             .get(`sub-title-sub-pages`)
//             .then((res) => {
//                 setData(res.data)
//                 setSpinner(false);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//         http
//             .get(`sub-title-pages`)
//             .then((res) => {
//                 setThana(res.data)
//                 setSpinner(false);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });


//         return () => {
//             controller.abort();
//         };
//     }, [update, title]);
//     // add modal
//     const customStyles = {
//         content: {
//             top: '50%',
//             left: '58%',
//             // right: 'auto',
//             // bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             maxHeight: "90%",
//             width: "76%",
//             height: "500px",
//             padding: "10px",
//         },
//     };
//     const [modalIsOpen, setIsOpen] = useState(false);
//     const [categoryData, setCategoryData] = useState({
//         name: "",
//         email: "",
//         image: "",
//         fax: "",
//         address: "",
//         current_address: "",
//         location: "",
//         mobile: "",
//         pagesId: "",
//         phone: "",
//         designation: ""
//     })

//     const handleChange = (e) => {
//         setCategoryData({ ...categoryData, [e.target.name]: e.target.value });
//     }
//     const submitData = (e) => {
//         e.preventDefault()
//         const formData = new FormData();
//         formData.append('name', categoryData.name)
//         formData.append('address', categoryData.address)
//         formData.append('mobile', categoryData.mobile)
//         formData.append('phone', categoryData.phone)
//         formData.append('fax', categoryData.fax)
//         formData.append('designation', categoryData.designation)
//         formData.append('location', categoryData.location)
//         formData.append('current_address', categoryData.current_address)
//         formData.append('image', categoryData.image)
//         formData.append('pagesId', categoryData.thanaId)
//         formData.append('email', categoryData.email)

//         if (categoryData.id) {
//             http.put(`update-sub-title-sub-pages/${categoryData.id}`, formData)
//                 .then((res) => {
//                     setUpdate(!update);
//                     setIsOpen(false);
//                     setCategoryData({
//                         name: "",
//                         email: "",
//                         image: "",
//                         fax: "",
//                         address: "",
//                         current_address: "",
//                         location: "",
//                         mobile: "",
//                         pagesId: "",
//                         phone: "",
//                         designation: ""
//                     });
//                     Swal.fire({
//                         position: 'top-center',
//                         icon: 'success',
//                         title: 'Success !',
//                         text: 'Data Updated Successfully',
//                         showConfirmButton: false,
//                         timer: 1500
//                     })
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                     Swal.fire({
//                         position: 'top-center',
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'Something went wrong!',
//                         showConfirmButton: false,
//                         timer: 1500
//                     })
//                 })
//         } else {
//             http.post('create-sub-title-sub-pages', formData)
//                 .then((res) => {
//                     setUpdate(!update);
//                     setIsOpen(false);
//                     setCategoryData({
//                         name: "",
//                         email: "",
//                         image: "",
//                         fax: "",
//                         address: "",
//                         current_address: "",
//                         location: "",
//                         mobile: "",
//                         pagesId: "",
//                         phone: "",
//                         designation: ""
//                     });
//                     Swal.fire({
//                         position: 'top-center',
//                         icon: 'success',
//                         title: 'Success !',
//                         text: 'Data Added Successfully',
//                         showConfirmButton: false,
//                         timer: 1500
//                     })
//                 })
//                 .catch((err) => {
//                     console.log(err)
//                     Swal.fire({
//                         position: 'top-center',
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'Something went wrong!',
//                         showConfirmButton: false,
//                         timer: 1500
//                     })
//                 })
//         }

//     }
//     const closeModal = () => {
//         setIsOpen(false);
//         setCategoryData({
//             name: "",
//             email: "",
//             image: "",
//             fax: "",
//             address: "",
//             current_address: "",
//             location: "",
//             mobile: "",
//             pagesId: "",
//             phone: "",
//             designation: ""
//         });
//     }
//     return (
//         <div className='page-content adjustment-type-table'>
//             <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
//                 <h6>Sub Pages</h6>
//                 {
//                     administration.includes('Add Menu Section') &&
//                     <div>
//                         <button style={{ marginTop: "1px" }} onClick={addPage} className='btn btn-sm btn-primary float-end'>Add Page</button>
//                     </div>
//                 }
//             </div>

//             <MaterialTable
//                 columns={columns}
//                 data={data}
//                 isLoading={spinner}
//                 options={{
//                     search: true,
//                     showTitle: false,
//                     searchFieldAlignment: "left",
//                     pageSize: 10,
//                     emptyRowsWhenPaging: false,
//                     pageSizeOptions: [5, 10, 20, 50, 100],
//                 }}
//             />

//             <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 style={customStyles}
//                 contentLabel="Example Modal"
//             >
//                 <div className="product_modal">
//                     <div className="page-content">
//                         <div className=" patients-head ">
//                             <h5 className="fw-normal px-2  text-start card-name">Add Officer
//                                 <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
//                             </h5>
//                         </div>

//                         <div className=" p-3">
//                             <form onSubmit={submitData}>
//                                 <div className="row">
//                                     <div className="col-6">
//                                         <label htmlFor="name">Name</label>
//                                         <input onChange={handleChange} value={categoryData.name} name="name" type="text" className="form-control form-control-sm my-2" required placeholder="Name" />
//                                         <label htmlFor="designation">Designation</label>
//                                         <input onChange={handleChange} value={categoryData.designation} name="designation" type="text" className="form-control form-control-sm my-2" required placeholder="Designation" />
//                                         <label htmlFor="address">Address</label>
//                                         <input onChange={handleChange} value={categoryData.address} name="address" type="text" className="form-control form-control-sm my-2" required placeholder="Address" />
//                                         <label htmlFor="current_address">Current Address</label>
//                                         <input onChange={handleChange} value={categoryData.current_address} name="current_address" type="text" className="form-control form-control-sm my-2" required placeholder="Current Address" />
//                                         <label htmlFor="pagesId">Thana</label>
//                                         <select name="pagesId" onChange={handleChange} value={categoryData.thanaId} className="form-control form-control-sm my-2" required>
//                                             <option value="">Select Title</option>
//                                             {
//                                                 thana.map((item, index) => {
//                                                     return <option key={index} value={item.id}>{item.title}</option>
//                                                 })
//                                             }
//                                         </select>
//                                         <label htmlFor="image">Image</label>
//                                         <input onChange={(e) => setCategoryData({ ...categoryData, image: e.target.files[0] })} type="file" className="form-control form-control-sm my-2" />
//                                     </div>
//                                     <div className="col-6">
//                                         <label htmlFor="mobile">Mobile</label>
//                                         <input onChange={handleChange} value={categoryData.mobile} name="mobile" type="text" className="form-control form-control-sm my-2" required placeholder="Mobile" />
//                                         <label htmlFor="phone"> Phone</label>
//                                         <input onChange={handleChange} value={categoryData.phone} name="phone" type="text" className="form-control form-control-sm my-2" placeholder="Phone" />
//                                         <label htmlFor="email"> Email</label>
//                                         <input onChange={handleChange} value={categoryData.email} name="email" type="email" className="form-control form-control-sm my-2" placeholder="Email" />
//                                         <label htmlFor="fax"> Fax</label>
//                                         <input onChange={handleChange} value={categoryData.fax} name="fax" type="text" className="form-control form-control-sm my-2" placeholder="Fax" />
//                                         <label htmlFor="location">Map Location</label>
//                                         <input onChange={handleChange} value={categoryData.location} name="location" type="text" className="form-control form-control-sm my-2" placeholder="Map Location" />
//                                         <button className="btn mt-4  btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
//                                     </div>
//                                 </div>
//                             </form>

//                         </div>

//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     )
// }