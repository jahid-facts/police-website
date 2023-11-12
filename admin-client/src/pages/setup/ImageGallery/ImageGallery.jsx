
import MaterialTable from 'material-table'
import React, { useContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import { RoleContext } from '../../../navbar/Auth';

export default function ImageGallery() {
    const userRole = useContext(RoleContext);
    const { home_page } = userRole;
    const addImage = () => {
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
                    http.delete(`delete-image-gallery/${id}`)
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
                            })
                        })
                }
            })
    }
    const editData = (id) => {
        http.get(`image-gallery/${id}`)
            .then((res) => {
                setGalleryData({ ...res.data, multipleImages: res.data?.multipleImages?.split(',') });
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
            title: "Title",
            field: `title`,
            cellStyle: {
                textAlign: "center",
            },
        },

        {
            title: "Image",
            field: `image`,
            render: (row) => (
                <img src={`${global.img_Url}/${row.mainImage}`} style={{ height: "100px", maxWidth: "200px" }} className='img-fluid' alt="test" />
            ),
            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Gallery Image",
            field: `image`,
            render: (row) => (
                
                    row.multipleImages?.split(',').map((item, index) => <img src={`${global.img_Url}/${item}`} style={{ height: "100px", maxWidth: "200px" }} className='img-fluid' alt="test" key={index} />)
                
                // <img src={`${global.img_Url}/${row.mainImage}`} style={{ height: "100px", maxWidth: "200px" }} className='img-fluid' alt="test" />
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
    const [data, setData] = useState([]);
    const [update, setUpdate] = useState(false);
    const [spinner, setSpinner] = useState(false);
    useEffect(() => {
        const controller = new AbortController();
        setSpinner(true);
        http
            .get(`image-gallery`)
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
            left: '60%',
            // right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: "90%",
            width: "72%",
            height: "450px",
            padding: "10px",
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    const [galleryData, setGalleryData] = useState({
        image: "", multipleImages: [],
        title: "",
    })
    const handleChange = (e) => {
        setGalleryData({ ...galleryData, [e.target.name]: e.target.value });
    }
    const submitData = (e) => {
        e.preventDefault()
        const formData = new FormData();
        formData.append('mainImage', galleryData.image);
        formData.append('title', galleryData.title);
        Array.from(galleryData.multipleImages).forEach(item => {
            formData.append("multipleImages", item)
        })
        // formData.append('multipleImages', galleryData.multipleImages);
        if (galleryData.id) {
            http.put(`update-image-gallery/${galleryData.id}`, formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setGalleryData({ image: "", multipleImages: [], title: "", });
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
            http.post('save-image-gallery', formData)
                .then((res) => {
                    setUpdate(!update);
                    setIsOpen(false);
                    setGalleryData({ image: "", multipleImages: [], title: "", });
                    Swal.fire({
                        position: 'top-center',
                        icon: 'success',
                        title: 'Success !',
                        text: 'Image Added Successfully',
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
        setGalleryData({ image: "", multipleImages: [], title: "", });
    }
    const addMultipleImage = (e) => {
        const existingImages = galleryData.multipleImages;
        const newImg = e.target.files;
        Array.from(newImg).forEach(img => {
            existingImages.push(img);
        })
        setGalleryData({ ...galleryData, multipleImages: existingImages });
    }
    const multipleImageRemove = (index) => {
        setGalleryData({
            ...galleryData,
            multipleImages: galleryData.multipleImages.filter((item, i) => i !== index),
        });
    };
    const multipleImageRemoveFromSever = (index) => {
        // const formData = new FormData();
        // formData.append('img', galleryData.multipleImages[index]);
        http.put(`delete-single-gallery-image/${galleryData.id}`, { img: galleryData.multipleImages[index] })
            .then((res) => {
                setGalleryData({
                    ...galleryData,
                    multipleImages: galleryData.multipleImages.filter((item, i) => i !== index),
                });
            })
            .catch((err) => {
                console.log(err)
            })

    };
    console.log(galleryData.multipleImages, "dd")
    return (
        <div className='page-content adjustment-type-table'>
            <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                <h6>Image Gallery</h6>
                <div>
                    <button style={{ marginTop: "1px" }} onClick={addImage} className='btn btn-sm btn-primary float-end'>Add Image</button>
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
                style={customStyles}
                contentLabel="Example Modal"
            >
                <div className="product_modal">
                    <div className="page-content">
                        <div className=" patients-head ">
                            <h5 className="fw-normal custom_py-3 px-2  text-start mb-2 card-name">Add Image
                                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
                            </h5>
                        </div>

                        <div className=" p-3">
                            <form onSubmit={submitData}>
                                <label htmlFor="title">Title</label>
                                <input onChange={handleChange} value={galleryData.title} name="title" type="text" className="form-control form-control-sm my-2" required placeholder="Title" />

                                {/* <textarea required className="form-control form-control-sm my-2" value={galleryData.title} name="title" onChange={handleChange} id="" cols="30" rows="3" placeholder="Description"></textarea> */}
                                <label htmlFor="image">Main Image</label>
                                {
                                    galleryData.id ?

                                        <input className="form-control form-control-sm my-2" name="image" onChange={(e) => setGalleryData({ ...galleryData, image: e.target.files[0] })} type="file" accept='image/*' />
                                        :
                                        <input required className="form-control form-control-sm my-2" name="image" onChange={(e) => setGalleryData({ ...galleryData, image: e.target.files[0] })} type="file" accept='image/*' />
                                }
                                <label htmlFor="multipleImages"> Multiple Images</label>
                                <input className="form-control form-control-sm my-2" name="image" onChange={(e) => addMultipleImage(e)} type="file" multiple accept='image/*' />
                                <div className="d-flex">
                                    {
                                        galleryData.multipleImages?.map((item, index) => {
                                            return (

                                                <div className="image__view d-flex align-items-start clear-fix me-1">
                                                    {
                                                        typeof item == "object" ?
                                                            <img src={URL.createObjectURL(item)} key={index} style={{ height: "100px", maxWidth: '100px' }} className='img-fluid me-1' alt="test" />
                                                            :
                                                            <img src={`${global.img_Url}/${item}`} key={index} style={{ height: "100px", maxWidth: '100px' }} className='img-fluid' alt="test" />
                                                    }
                                                    {
                                                        galleryData.id ?
                                                            <span className="close__icon"
                                                                onClick={() =>  multipleImageRemoveFromSever(index)}>
                                                                <i style={{ cursor: "pointer" }} className="fal fa-times"></i>
                                                            </span>
                                                            :
                                                            <span className="close__icon"
                                                                onClick={() => multipleImageRemove(index)}>
                                                                <i style={{ cursor: "pointer" }} className="fal fa-times"></i>
                                                            </span>
                                                    }

                                                </div>)
                                        })
                                    }
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
