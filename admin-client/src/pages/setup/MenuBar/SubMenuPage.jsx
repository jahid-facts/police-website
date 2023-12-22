import MaterialTable from 'material-table';
import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import { RoleContext } from '../../../navbar/Auth';
import { useNavigate,useParams } from 'react-router-dom';

export default function SubMenuPage({titleId}) {
    // const userRole = useContext(RoleContext);
    // const { home_page } = userRole;
    const [modalIsOpen, setIsOpen] = useState(false);
    const [contentData, setContentData] = useState({ title: "" });
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    const [data, setData] = useState([]);
    const [subtitles, setSubtitles] = useState([]);
    const [selectedTitle, setSelectedTitle] = useState(null);
    const navigate = useNavigate()
    const [titleSubtitles, setTitleSubtitles] = useState({});

    const userRole = useContext(RoleContext);
      const { home_page } = userRole;
    const { title, menu_id } = useParams();
      // const decodedTitle = decodeURIComponent(title);
    
      // const [formattedResponse, setFormattedResponse] = useState(null);
    
      // const addContents = () => {
      //   setIsOpen(true);
      // };


    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http.get(`get-subtitles-by-title/${titleId}`)
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

    // const customStyles = {
    //       content: {
    //         marginTop: '20px',
    //         marginBottom: '35px',
    //         top: '35%',
    //         left: '60%',
    //         bottom: 'auto',
    //         marginRight: '-50%',
    //         transform: 'translate(-50%, -50%)',
    //         maxHeight: '90%',
    //         width: '52%',
    //         height: '300px',
    //         padding: '10px',
    //       },
    //     };

    const addContents = () => {
        setIsOpen(true);
    }

    const selectTitle = (title) => {
      setSelectedTitle(title);
    //   setSelectedTitle(subTitle);
      console.log("clicked ", title);
    
      // Assuming subtitles is an array of subtitles associated with the title
      const subTitle = title.subtitles || [];
    
      http.get(`get-subtitles-by-title/${title.id}`)
        .then((res) => {
          setSubtitles(res.data);
          console.log(res);
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
    
        navigate(`/menu-bar/${encodeURIComponent(title.title)}`);
        
      // Assuming you want to navigate to the first subtitle in the array
    // if (subtitles.length > 0) {
    //     const firstSubtitle = subtitles[0].subtitle;
    //     navigate(`/zilla-police-pages/${encodeURIComponent(title.title)}/${encodeURIComponent(firstSubtitle)}`);
    //   } else {
    //     // Handle the case when there are no subtitles
    //     navigate(`/zilla-police-pages/${encodeURIComponent(title.title)}`);
    //   }
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
                    http.delete(`delete-sub-menu-item/${titleId}/${id}`)
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
        http.get(`get-single-sub-menu-item/${titleId}/${id}`)
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
            http.put(`update-sub-menu-item/${titleId}/${contentData.id}`, contentData)
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
            http.post(`create-sub-menu-item-title/${titleId}`, { title: contentData.title })
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
// import React, { useEffect, useState, useContext } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import Modal from 'react-modal';
// import Swal from 'sweetalert2';
// import http from '../../../http';
// import { RoleContext } from '../../../navbar/Auth';

// // export default function SubMenuPage() {
// export default function SubMenuPage({titleId}) {
//   // console.log(title)

//   const userRole = useContext(RoleContext);
//   const { home_page } = userRole;

// //   const { title } = useParams();
// const { title, menu_id } = useParams();


// // console.log(titleId);


//   const decodedTitle = decodeURIComponent(title);

//   const [formattedResponse, setFormattedResponse] = useState(null);

//   const addContents = () => {
//     setIsOpen(true);
//   };

//   const deleteRowData = (id) => {
//     Swal.fire({
//       title: 'Are you sure?',
//       text: "You won't be able to revert this!",
//       icon: 'warning',
//       showCancelButton: true,
//       confirmButtonColor: '#3085d6',
//       cancelButtonColor: '#d33',
//       confirmButtonText: 'Yes, delete it!',
//     }).then((result) => {
//       if (result.isConfirmed) {
//         http.delete(`delete-sub-menu-item/${titleId}/${id}`)
//           .then((res) => {
//             setUpdate(!update);
//             setIsOpen(false);
//             Swal.fire({
//               position: 'top-center',
//               icon: 'success',
//               title: 'Success !',
//               text: 'Heading Deleted Successfully',
//               showConfirmButton: false,
//               timer: 1500,
//             });
//           });
//       }
//     });
//   };

//   const editData = (id) => {
//     http.get(`get-single-sub-menu-item/${titleId}/${id}`)
//       .then((res) => {
//         setContentData(res.data);
//         setIsOpen(true);
//       })
//       .catch((err) => {
//         console.log(err);
//       });
//   };

//   const columns = [
//     {
//       title: 'SL',
//       field: '',
//       render: (row) => <div>{row.tableData.id + 1}</div>,
//       width: '20 !important',
//       cellStyle: {
//         textAlign: 'center',
//       },
//     },
//     {
//       title: 'Title',
//       field: 'title',
//       cellStyle: {
//         cursor: 'pointer',
//         color: 'blue',
//         textDecoration: 'underline',
//       },
//       render: (row) => (
//         <div onClick={() => handleTitleClick(row.title)}>
//           {row.title}
//         </div>
//       ),
//     },
//     {
//       title: 'Action',
//       field: 'patient',
//       render: (row) => (
//         <div>
//           {home_page.includes('Edit Home') &&
//             <button
//               onClick={() => editData(row.id)}
//               className="btn btn-sm action-btn"
//             >
//               <i className="far fa-edit"></i>
//             </button>
//           }
//           {home_page.includes('Delete Home') &&
//             <button
//               onClick={() => deleteRowData(row.id)}
//               className="btn btn-sm action-btn"
//             >
//               <i className="far fa-trash"></i>
//             </button>
//           }
//         </div>
//       ),
//       cellStyle: {
//         textAlign: 'center',
//       },
//     },
//   ];

//   const [data, setData] = useState([]);
//   const [update, setUpdate] = useState(false);
//   const [spinner, setSpinner] = useState(false);
//   const [modalIsOpen, setIsOpen] = useState(false);
//   const [contentData, setContentData] = useState({
//     title: '',
//     // menu_id: '',
//   });

//   const navigate = useNavigate();

//   useEffect(() => {
//     const controller = new AbortController();
//     setSpinner(true);

//     // http.get(`get-all-sub-menu-item/${title}`)
//     // http.get(`get-all-sub-menu-item`)
//     // http.get(`get-subtitles-by-title/${decodedTitle}`)
//     // http.get(`get-subtitles-by-title/${menu_id}`)
//     http.get(`get-subtitles-by-title/${titleId}`)
//       .then((res) => {
//         setData(res.data);
//         setSpinner(false);
//       })
//       .catch((err) => {
//         console.log(err);
//       });

//     return () => {
//       controller.abort();
//     };
//   }, [update, title]);

//   const customStyles = {
//     content: {
//       marginTop: '20px',
//       marginBottom: '35px',
//       top: '35%',
//       left: '60%',
//       bottom: 'auto',
//       marginRight: '-50%',
//       transform: 'translate(-50%, -50%)',
//       maxHeight: '90%',
//       width: '52%',
//       height: '300px',
//       padding: '10px',
//     },
//   };

//   const handleChange = (e) => {
//     setContentData({ ...contentData, [e.target.name]: e.target.value });
//   };

//   const submitData = (e) => {
//     e.preventDefault();

//     // const parsedMenuId = parseInt(contentData.menu_id, 10);

//     // if (isNaN(parsedMenuId) || parsedMenuId <= 0) {
//     //   console.error('Invalid menu_id');
//     //   return;
//     // }
    
//     if (contentData.id) {
//       http.put(`update-sub-menu-item/${titleId}/${contentData.id}`, contentData)
//         .then((res) => {
//           setUpdate(!update);
//           setIsOpen(false);
//           setContentData({ title: '' });
//           Swal.fire({
//             position: 'top-center',
//             icon: 'success',
//             title: 'Success !',
//             text: 'Data Updated Successfully',
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         })
//         .catch((err) => {
//           console.log(err);
//           Swal.fire({
//             position: 'top-center',
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         });
//     } else {

       
//     //   http.post('create-sub-menu-item-title', { title: contentData.title, menu_id: parseInt(contentData.menu_id) })
//     // http.post('create-sub-menu-item-title', { title: contentData.title})
//     // http.post(`create-sub-menu-item-title/${titleId}`, { title: contentData.title, menu_id: parseInt(menu_id) })
//     http.post(`create-sub-menu-item-title/${titleId}`, { title: contentData.title })
//         .then((res) => {
//           setUpdate(!update);
//           setIsOpen(false);
//         //   setContentData({ title: '', menu_id: '' });
//         setContentData({ title: '' });
//           Swal.fire({
//             position: 'top-center',
//             icon: 'success',
//             title: 'Success !',
//             text: 'Data Added Successfully',
//             showConfirmButton: false,
//             timer: 1500,
//           });

//           // Match the structure of your Postman response
//           const formattedResponse = res.data ? {
//             id: res.data.id,
//             title: res.data.title,
//             createdAt: res.data.createdAt,
//             updatedAt: res.data.updatedAt,
//             menu_id: res.data.menu_id,
//         } : null;

//           // Update state with the formatted response
//           setFormattedResponse(formattedResponse);

//         })
//         .catch((err) => {
//           console.log(err);
//           Swal.fire({
//             position: 'top-center',
//             icon: 'error',
//             title: 'Oops...',
//             text: 'Something went wrong!',
//             showConfirmButton: false,
//             timer: 1500,
//           });
//         });
//     }
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//     // setContentData({ title: '', menu_id: '' });
//     setContentData({ title: '' });
//   };

//   const handleTitleClick = (clickedTitle) => {
//     navigate(`/menu-bar/${encodeURIComponent(clickedTitle)}`);
//     // navigate(`/menu-bar/${encodeURIComponent(title.title)}/${encodeURIComponent(subTitle.title)}`)
//   };

//   return (
//     <div className="page-content adjustment-type-table">
//       <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
//         <h6 onClick={() => handleTitleClick(decodedTitle)} style={{ cursor: 'pointer' }}>
//           {decodedTitle}
//         </h6>
//         <div>
//           <button style={{ marginTop: '1px' }} onClick={addContents} className="btn btn-sm btn-primary float-end">
//             Add
//           </button>
//         </div>
//       </div>

//       <MaterialTable
//         columns={columns}
//         data={data}
//         isLoading={spinner}
//         options={{
//           search: true,
//           showTitle: false,
//           searchFieldAlignment: 'left',
//           pageSize: 10,
//           emptyRowsWhenPaging: false,
//           pageSizeOptions: [5, 10, 20, 50, 100],
//         }}
//       />

//       <Modal isOpen={modalIsOpen} onRequestClose={closeModal} style={customStyles} contentLabel="Example Modal">
//         <div className="modal-header">
//           <h5 className="modal-title" id="exampleModalLabel">
//             Add Content
//           </h5>
//           <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
//         </div>
//         <div className="modal-body">
//           <form onSubmit={submitData}>
//             <div className="mb-3">
//               <label htmlFor="title" className="form-label">
//                 Title
//               </label>
//               <input
//                 type="text"
//                 className="form-control"
//                 id="title"
//                 name="title"
//                 value={contentData.title}
//                 onChange={handleChange}
//                 required
//               />
//             </div>
//             {/* <div className="mb-3">
//               <label htmlFor="menu_id" className="form-label">
//                 Menu ID
//               </label>
//               <input
//                 type="number"
//                 className="form-control"
//                 id="menu_id"
//                 name="menu_id"
//                 value={contentData.menu_id}
//                 onChange={handleChange}
//                 required
//               />
//             </div> */}
//             <button type="submit" className="btn btn-primary">
//               Save
//             </button>
//           </form>
//         </div>
//       </Modal>
//     </div>
//   );
// }







// // SubMenuPage.js
// import MaterialTable from 'material-table'
// import React from 'react'
// import { useEffect } from 'react';
// import { useState } from 'react';

// import { useParams } from 'react-router-dom';

// import Modal from 'react-modal';
// import Swal from 'sweetalert2';
// import http from '../../../http';
// import { useContext } from 'react';
// import { RoleContext } from '../../../navbar/Auth';

// export default function SubMenuPage() {
//     const userRole = useContext(RoleContext);
//     const { home_page } = userRole;

//     const { title } = useParams();
//     const decodedTitle = decodeURIComponent(title);

//     const addContents = () => {
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
//                     http.delete(`delete-sub-menu-item/${id}`)
//                         .then((res) => {
//                             setUpdate(!update);
//                             setIsOpen(false);
//                             Swal.fire({
//                                 position: 'top-center',
//                                 icon: 'success',
//                                 title: 'Success !',
//                                 text: 'Heading Deleted Successfully',
//                                 showConfirmButton: false,
//                                 timer: 1500
//                             })
//                         })
//                 }
//             })
//     }
//     const editData = (id) => {
//         http.get(`get-single-sub-menu-item/${id}`)
//             .then((res) => {
//                 setContentData(res.data);
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
//             title: "Title",
//             field: `title`,

//         },
//         // {
//         //     title: "Link",
//         //     field: `link`,

//         // },


//         {
//             title: "Action",
//             field: "patient",
//             render: (row) => (
//                 <div>
//                     {
//                         home_page.includes('Edit Home') &&
//                         <button
//                             onClick={() => editData(row.id)}
//                             className="btn btn-sm action-btn"
//                         >
//                             <i className="far fa-edit"></i>
//                         </button>

//                     }
//                     {
//                         home_page.includes('Delete Home') &&
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
//     const [headings, setHeadings] = useState([]);
//     const [update, setUpdate] = useState(false);
//     const [spinner, setSpinner] = useState(false);

//     // const [menuId, setMenuId] = useState('');

//     useEffect(() => {
//         const controller = new AbortController();
//         setSpinner(true);
//         http.get(`get-all-sub-menu-item`)
//             .then((res) => {
//                 setData(res.data);
//                 // setHeadings(res.data.headings);
//                 setSpinner(false);
//                 // console.log(res)
//             })

//             .catch((err) => {
//                 console.log(err);
//             })
            

//         return () => {
//             controller.abort();
//         };
//     }, [update]);
//     // add modal 
//     const customStyles = {
//         content: {
//             marginTop: '20px',
//             marginBottom: '35px',
//             top: '35%',
//             left: '60%',
//             // right: 'auto',
//             bottom: 'auto',
//             marginRight: '-50%',
//             transform: 'translate(-50%, -50%)',
//             maxHeight: "90%",
//             width: "52%",
//             height: "300px",
//             padding: "10px",
//         },
//     };
//     const [modalIsOpen, setIsOpen] = useState(false);
//     const [contentData, setContentData] = useState({
//         title: "",
//         menu_id: ""
//     })
//     const handleChange = (e) => {
//         setContentData({ ...contentData, [e.target.name]: e.target.value });

//         // setPageTitle(e.target.value);
//     }
//     const submitData = (e) => {
//         e.preventDefault()

//         const parsedMenuId = parseInt(contentData.menu_id, 10);

//         if (isNaN(parsedMenuId) || parsedMenuId <= 0) {
//             console.error('Invalid menu_id');
//             return;
//         }

//         if (contentData.id) {
//             http.put(`update-sub-menu-item/${contentData.id}`, contentData)
//                 .then((res) => {
//                     setUpdate(!update);
//                     setIsOpen(false);
//                     setContentData({ title: "" });
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
//             http.post('create-sub-menu-item-title', { title: contentData.title, menu_id: parseInt(contentData.menu_id) })
//                 .then((res) => {
//                     setUpdate(!update);
//                     setIsOpen(false);
//                     setContentData({ title: "", menu_id: "" });
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
//         // setContentData({ title: "", link: "" });
//         setContentData({ title: "" });
//         setContentData({ menu_id: "" });
//     }
//     console.log(contentData)
//     return (
//         <div className='page-content adjustment-type-table'>
//             <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
//                 {/* <h6>Sub-title</h6> */}
//                 <h6>{decodedTitle}</h6>

//                 {/* <label>Title:</label>
//                 <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
//                 <button onClick={handleSave}>Save Title</button> */}

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

//             <Modal
//                 isOpen={modalIsOpen}
//                 onRequestClose={closeModal}
//                 style={customStyles}
//                 contentLabel="Example Modal"
//             >
//                 <div className="product_modal">
//                     <div className="page-content">
//                         <div className=" patients-head ">
//                             <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-name">Add Content
//                                 <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
//                             </h5>
//                         </div>

//                         <div className=" p-3">
//                             <form onSubmit={submitData}>
//                                 <input onChange={handleChange} name='title' value={contentData.title} type="text" className="form-control form-control-sm my-2" required placeholder="Title" />
//                                 <input onChange={handleChange} name='menu_id' value={contentData.menu_id} type="number" className="form-control form-control-sm my-2" required placeholder="menu_id" />
//                                 {/* <textarea required className="form-control form-control-sm my-2" value={contentData.title} name="title" onChange={handleChange} id="" cols="30" rows="5" placeholder="Description"></textarea> */}
//                                 <button className="btn mt-2 btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
//                             </form>

//                         </div>

//                     </div>
//                 </div>
//             </Modal>
//         </div>
//     )
// }






