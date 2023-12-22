import MaterialTable from 'material-table';
import React, { useState, useEffect, useContext } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import { RoleContext } from '../../../navbar/Auth';
import { useNavigate, useParams } from 'react-router-dom';

export default function SubMenuPage({ titleId }) {
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


// export default function DynamicSubPage({ titleId }) {
//     const { '*' } = useParams();

//     // Use the captured dynamic segment in your component logic
//     return (
//         <div>
//             <h2>Dynamic content under {titleId}</h2>
//             <p>Dynamic segment: {decodeURIComponent('*')}</p>
//         </div>
//     );
// }


