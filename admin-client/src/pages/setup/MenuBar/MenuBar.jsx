import MaterialTable from 'material-table';
import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import { RoleContext } from '../../../navbar/Auth';
import { useNavigate } from 'react-router-dom';

export default function DynamicLink() {
    const userRole = useContext(RoleContext);
    const { home_page } = userRole;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [contentData, setContentData] = useState({ title: "" });
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [data, setData] = useState([]);
    const [subtitles, setSubtitles] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState(null);
    const navigate = useNavigate()
    const [titleSubtitles, setTitleSubtitles] = useState({});


    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http.get(`get-all-menu-title`)
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
    }, [update]);

    const addContents = () => {
        setIsOpen(true);
    }

    const selectTitle = (title) => {
        setSelectedTitle(title);
        console.log("clicked ", title)

        http.get(`get-subtitles-by-title/${title.id}`)
            .then((res) => {
                setSubtitles(res.data);
                console.log(res)
            })
            .catch((err) => {
                console.log(err);
            });
        http.get(`get-subtitles-by-title/${title.id}`)
            .then((res) => {
                setTitleSubtitles({
                    ...titleSubtitles,
                    [title.id]: res.data,
                });
            })
            .catch((err) => {
                console.log(err);
            });
        navigate(`/menu-bar/${encodeURIComponent(title.title)}`);  //////SubMenuPage
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
                    http.delete(`delete-menu-title/${id}`)
                        .then((res) => {
                            setUpdate(!update);
                            setIsOpen(false);
                            Swal.fire({
                                position: 'top-center',
                                icon: 'success',
                                title: 'Success!',
                                text: 'Heading Deleted Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            });
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                }
            });
    }

    const editData = (id) => {
        http.get(`get-single-menu-title/${id}`)
            .then((res) => {
                setContentData(res.data);
                setIsOpen(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const submitData = (e) => {
        e.preventDefault();

        if (contentData.id) {
            http.put(`update-menu-title/${contentData.id}`, contentData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setContentData({ title: "" });
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
            http.post('create-menu-title', contentData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setContentData({ title: "" });
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
        setContentData({ title: "", subtitle: "" });
    }

    const closeModal = () => {
        setIsOpen(false);
        setContentData({ title: "", subtitle: "" });
        setSelectedTitle(null); // Clear the selected title
        setSubtitles([]);
    }

    const handleChange = (e) => {
        setContentData({ ...contentData, [e.target.name]: e.target.value });
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
            title: "Title",
            field: "title",
            render: (row) => (
                <div
                    style={{ cursor: "pointer", color: row === selectedTitle ? "blue" : "black" }}
                    onClick={() => selectTitle(row)}
                >
                    {row.title}
                </div>
            ),
        },

        {
            title: "Action",
            field: "patient",
            render: (row) => (
                <div>
                    {home_page.includes('Edit Home') &&
                        <button
                            onClick={() => editData(row.id)}
                            className="btn btn-sm action-btn"
                        >
                            <i className="far fa-edit"></i>
                        </button>
                    }
                    {home_page.includes('Delete Home') &&
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
                <h6>Menu Bar Title</h6>
                <div>
                    <button style={{ marginTop: "1px" }} onClick={addContents} className='btn btn-sm btn-primary float-end'>Add</button>
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
                        marginTop: '20px',
                        marginBottom: '35px',
                        top: '35%',
                        left: '60%',
                        bottom: 'auto',
                        marginRight: '-50%',
                        transform: 'translate(-50%, -50%)',
                        maxHeight: "90%",
                        width: "52%",
                        height: "300px",
                        padding: "10px",
                    },
                }}
                contentLabel="Example Modal"
            >

                <div className="product_modal">
                    <div className="page-content">
                        <div className=" patients-head ">
                            <h5 className="fw-normal custom_py-3 px-2 text-start mb-2 card-name">
                                Add Content
                                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'>
                                    <i className="fal fa-times"></i>
                                </span>
                            </h5>
                        </div>

                        <div className=" p-3">
                            <form onSubmit={submitData}>
                                <input
                                    onChange={handleChange}
                                    name='title'
                                    value={contentData.title}
                                    type="text"
                                    className="form-control form-control-sm my-2"
                                    required
                                    placeholder="Title"
                                />

                                <button
                                    className="btn mt-2 btn-sm btn-success float-end text-uppercase"
                                    type="submit"
                                >
                                    Save
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </Modal>
        </div>
    );
}





// import MaterialTable from 'material-table';
// import React, { useState, useEffect, useContext } from 'react';
// import Modal from 'react-modal';
// import Swal from 'sweetalert2';
// import http from '../../../http';
// import { RoleContext } from '../../../navbar/Auth';

// import { useNavigate } from 'react-router-dom';

// export default function DynamicLink() {
//     const userRole = useContext(RoleContext);
//     const { home_page } = userRole;

//     const [modalIsOpen, setIsOpen] = useState(false);
//     const [contentData, setContentData] = useState({ title: "" });
//     const [update, setUpdate] = useState(false);
//     const [spinner, setSpinner] = useState(false);
//     const [data, setData] = useState([]);
//     const [subtitles, setSubtitles] = useState([]);
//     const [showSubtitleInput, setShowSubtitleInput] = useState(false); // Step 1

//     const [selectedTitle, setSelectedTitle] = useState(null);

//     const navigate = useNavigate()

//     const [formattedResponse, setFormattedResponse] = useState(null);
//     const [titleSubtitles, setTitleSubtitles] = useState({});


//     useEffect(() => {
//         const controller = new AbortController();
//         setSpinner(true);
//         http.get(`get-all-menu-title`)
//             .then((res) => {
//                 setData(res.data);
//                 setSpinner(false);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });

//         // http.get(`/get-all-sub-menu-item`)
//         // // http.get(`get-subtitles-by-title/${title.id}`)
//         //     .then((res) => {
//         //         setSubtitles(res.data);
//         //     })
//         //     .catch((err) => {
//         //         console.log(err);
//         //     });

//         return () => {
//             controller.abort();
//         };
//     }, [update]);

//     const addContents = () => {
//         setIsOpen(true);
//     }

//     const selectTitle = (title) => {
//         setSelectedTitle(title);
//         console.log("clicked ", title)
//         // Fetch subtitles for the selected title
//         // http.get(`get-subtitles-by-title/${title.id}`)
//         http.get(`get-subtitles-by-title/${title.id}`)
//             .then((res) => {
//                 setSubtitles(res.data);
//                 console.log(res)
//             })
//             .catch((err) => {
//                 console.log(err);
//             });


//         // Fetch subtitles for the selected title and store them in state
//         http.get(`get-subtitles-by-title/${title.id}`)
//             .then((res) => {
//                 setTitleSubtitles({
//                     ...titleSubtitles,
//                     [title.id]: res.data,
//                 });
//             })
//             .catch((err) => {
//                 console.log(err);
//             });

//         // navigate(`/get-subtitles-by-title/${title.id}`);
//         navigate(`/menu-bar/${encodeURIComponent(title.title)}`);  //////SubMenuPage
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
//                     http.delete(`delete-menu-title/${id}`)
//                         .then((res) => {
//                             setUpdate(!update);
//                             setIsOpen(false);
//                             Swal.fire({
//                                 position: 'top-center',
//                                 icon: 'success',
//                                 title: 'Success!',
//                                 text: 'Heading Deleted Successfully',
//                                 showConfirmButton: false,
//                                 timer: 1500
//                             });
//                         })
//                         .catch((err) => {
//                             console.log(err);
//                         });
//                 }
//             });
//     }

//     const editData = (id) => {
//         http.get(`get-single-menu-title/${id}`)
//             .then((res) => {
//                 setContentData(res.data);
//                 setIsOpen(true);
//             })
//             .catch((err) => {
//                 console.log(err);
//             });
//     }

//     const submitData = (e) => {
//         e.preventDefault();

//         if (contentData.id) {
//             http.put(`update-menu-title/${contentData.id}`, contentData)
//                 .then((res) => {
//                     setUpdate(!update);
//                     setIsOpen(false);
//                     setContentData({ title: "" });
//                     Swal.fire({
//                         position: 'top-center',
//                         icon: 'success',
//                         title: 'Success!',
//                         text: 'Data Updated Successfully',
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     Swal.fire({
//                         position: 'top-center',
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'Something went wrong!',
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 });
//         } else {
//             // Adjust the data object based on whether the subtitle input should be included
//             // const postData = showSubtitleInput
//             //     ? { title: contentData.title, subtitle: contentData.subtitle }
//             //     : { title: contentData.title };

//             http.post('create-menu-title', contentData)
//                 .then((res) => {
//                     setUpdate(!update);
//                     setIsOpen(false);
//                     setContentData({ title: "" });
//                     Swal.fire({
//                         position: 'top-center',
//                         icon: 'success',
//                         title: 'Success!',
//                         text: 'Data Added Successfully',
//                         showConfirmButton: false,
//                         timer: 1500
//                     });


//                     // const subtitleData = {
//                     //     menu_id: res.data.id,
//                     //     subtitle: contentData.subtitle
//                     // };


//                     // Check if there are subtitles for the title
//                     // if (titleSubtitles[res.data.id]) {
//                     //     // If yes, append the new subtitle
//                     //     setTitleSubtitles({
//                     //         ...titleSubtitles,
//                     //         [res.data.id]: [...titleSubtitles[res.data.id], subtitleData],
//                     //     });
//                     // } else {
//                     //     // If no, create a new entry with the subtitle
//                     //     setTitleSubtitles({
//                     //         ...titleSubtitles,
//                     //         [res.data.id]: [subtitleData],
//                     //     });
//                     // }

//                     // After creating a menu title, create a subtitle (assuming this logic, adjust as needed)
//                     // if (showSubtitleInput) {
//                     //     const subtitleData = {
//                     //         // menuTitleId: res.data.id,
//                     //         menu_id: res.data.id,
//                     //         subtitle: contentData.subtitle
//                     //     };

//                     // http.post('create-sub-menu-item-title', subtitleData)
//                     //     .then(() => {
//                     //         // Refresh subtitles
//                     //         // http.get(`get-all-sub-menu-item`)
//                     //         http.get(`get-subtitles-by-title/${res.data.id}`)
//                     //             .then((res) => {
//                     //                 setSubtitles(res.data);
//                     //             })
//                     //             .catch((err) => {
//                     //                 console.log(err);
//                     //             });

//                     // Match the structure of your Postman response
//                     // const formattedResponse = {
//                     //     id: res.data.id,
//                     //     title: res.data.title,
//                     //     createdAt: res.data.createdAt,
//                     //     updatedAt: res.data.updatedAt,
//                     //     menu_id: res.data.menu_id,
//                     // };

//                     // Do something with the formatted response, such as updating state
//                     // setFormattedResponse(formattedResponse);

//                     // });
//                     // }
//                 })
//                 .catch((err) => {
//                     console.log(err);
//                     Swal.fire({
//                         position: 'top-center',
//                         icon: 'error',
//                         title: 'Oops...',
//                         text: 'Something went wrong!',
//                         showConfirmButton: false,
//                         timer: 1500
//                     });
//                 });
//         }
//         // Clear the subtitle input and checkbox status after submission
//         // setShowSubtitleInput(false);
//         setContentData({ title: "", subtitle: "" });
//     }

//     const closeModal = () => {
//         setIsOpen(false);
//         // setShowSubtitleInput(false); // Clear checkbox status on modal close
//         setContentData({ title: "", subtitle: "" });
//         setSelectedTitle(null); // Clear the selected title
//         setSubtitles([]);
//     }

//     const handleChange = (e) => {
//         setContentData({ ...contentData, [e.target.name]: e.target.value });
//     }

//     // const handleCheckboxChange = (e) => {
//     //     setShowSubtitleInput(e.target.checked); // Step 1
//     // }

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
//         // {
//         //     title: "Title",
//         //     field: "title",
//         // },

//         {
//             title: "Title",
//             field: "title",
//             render: (row) => (
//                 <div
//                     style={{ cursor: "pointer", color: row === selectedTitle ? "blue" : "black" }}
//                     onClick={() => selectTitle(row)}
//                 >
//                     {row.title}
//                 </div>
//             ),
//         },

//         // {
//         //     title: "Title",
//         //     field: "title",
//         //     render: (row) => (
//         //         <Link
//         //             to={`/get-all-sub-menu-item/${row.id}`}  // Replace with your actual dynamic route path
//         //             style={{ textDecoration: 'none', color: row === selectedTitle ? "blue" : "black" }}
//         //             onClick={() => selectTitle(row)}
//         //         >
//         //             {row.title}
//         //         </Link>
//         //     ),
//         // },

//         {
//             title: "Action",
//             field: "patient",
//             render: (row) => (
//                 <div>
//                     {home_page.includes('Edit Home') &&
//                         <button
//                             onClick={() => editData(row.id)}
//                             className="btn btn-sm action-btn"
//                         >
//                             <i className="far fa-edit"></i>
//                         </button>
//                     }
//                     {home_page.includes('Delete Home') &&
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

//     return (
//         <div className='page-content adjustment-type-table'>
//             <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
//                 <h6>Menu Bar Title</h6>
//                 <div>
//                     <button style={{ marginTop: "1px" }} onClick={addContents} className='btn btn-sm btn-primary float-end'>Add</button>
//                 </div>
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

//             {/* {subtitles.map((subtitle) => (
//                 <div key={subtitle.id}>
//                     {subtitle.subtitle}
//                 </div>
//             ))} */}

//             {/* {selectedTitle && (
//                 <div>
//                     <h4>Subtitles for {selectedTitle.title}</h4>
//                     {subtitles.map((subtitle) => (
//                         <div key={subtitle.id}>
//                             {subtitle.subtitle}
//                         </div>
//                     ))}
//                 </div>
//             )} */}


//             {/* {selectedTitle && (
//                 <div>
//                     <h4>Subtitles for {selectedTitle.title}</h4>
//                     {titleSubtitles[selectedTitle.id] && titleSubtitles[selectedTitle.id].map((subtitle) => (
//                         <div key={subtitle.id}>
//                             {subtitle.subtitle}
//                         </div>
//                     ))}
//                 </div>
//             )} */}

//             <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 style={{
//                     content: {
//                         marginTop: '20px',
//                         marginBottom: '35px',
//                         top: '35%',
//                         left: '60%',
//                         bottom: 'auto',
//                         marginRight: '-50%',
//                         transform: 'translate(-50%, -50%)',
//                         maxHeight: "90%",
//                         width: "52%",
//                         height: "300px",
//                         padding: "10px",
//                     },
//                 }}
//                 contentLabel="Example Modal"
//             >
//                 <div className="product_modal">
//                     <div className="page-content">
//                         <div className=" patients-head ">
//                             <h5 className="fw-normal custom_py-3 px-2 text-start mb-2 card-name">
//                                 Add Content
//                                 <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'>
//                                     <i className="fal fa-times"></i>
//                                 </span>
//                             </h5>
//                         </div>

//                         <div className=" p-3">
//                             <form onSubmit={submitData}>
//                                 <input
//                                     onChange={handleChange}
//                                     name='title'
//                                     value={contentData.title}
//                                     type="text"
//                                     className="form-control form-control-sm my-2"
//                                     required
//                                     placeholder="Title"
//                                 />

//                                 {/* Step 2: Render subtitle input based on checkbox status */}
//                                 {/* {showSubtitleInput && (
//                                     <input
//                                         onChange={handleChange}
//                                         name='subtitle'
//                                         value={contentData.subtitle}
//                                         type="text"
//                                         className="form-control form-control-sm my-2"
//                                         placeholder="Subtitle"
//                                     />
//                                 )} */}

//                                 {/* Step 1: Add a checkbox for controlling subtitle visibility */}
//                                 {/* <label>
//                                     <input
//                                         type="checkbox"
//                                         checked={showSubtitleInput}
//                                         onChange={handleCheckboxChange}
//                                     />
//                                     Show Subtitle
//                                 </label> */}

//                                 <button
//                                     className="btn mt-2 btn-sm btn-success float-end text-uppercase"
//                                     type="submit"
//                                 >
//                                     Save
//                                 </button>
//                             </form>
//                         </div>
//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     );
// }