
import MaterialTable from 'material-table'
import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import Modal from 'react-modal';
import Swal from 'sweetalert2';
import http from '../../../http';
import moment from 'moment';

export default function Roles() {
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
                    http.delete(`delete-roles/${id}`)
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
        http.get(`roles/${id}`)
            .then((res) => {
                const { home_page, work_section, footer_section, zilla_police, administration, units, activity, crime_management, service,
                    notice_board,
                    bit_policing,
                    phone_directory,
                    user,
                    role,id } = res.data
                setSlideData({
                    home_page: home_page ? home_page.split(",") : [],
                    work_section: work_section ? work_section.split(",") : [],
                    footer_section: footer_section ? footer_section.split(",") : [],
                    zilla_police: zilla_police ? zilla_police.split(",") : [],
                    notice_board: notice_board ? notice_board.split(",") : [],
                    service: service ? service.split(",") : [],
                    crime_management: crime_management ? crime_management.split(",") : [],
                    units: units ? units.split(",") : [],
                    activity: activity ? activity.split(",") : [],
                    bit_policing: bit_policing ? bit_policing.split(",") : [],
                    phone_directory: phone_directory ? phone_directory.split(",") : [],
                    user: user ? user.split(",") : [],
                    administration: administration ? administration.split(",") : [],
                    role: role,
                    id:id
                });
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
            title: "Date",
            render: (row) => <div>{moment(row.created_at).format('YYYY-MM-DD')}</div>,
            cellStyle: {
                textAlign: "center",
            },
        },

        {
            title: "Role Name",
            field: `role`,

            cellStyle: {
                textAlign: "center",
            },
        },
        {
            title: "Email",
            field: `email`,

            cellStyle: {
                textAlign: "center",
            },
        },


        {
            title: "Action",
            field: "patient",
            render: (row) => (
                <div>
                    <button
                        onClick={() => editData(row.id)}
                        className="btn btn-sm action-btn"
                    >
                        <i className="far fa-edit"></i>
                    </button>
                    &nbsp;
                    <button
                        onClick={() => deleteRowData(row.id)}
                        className="btn btn-sm action-btn"
                    >
                        <i className="far fa-trash"></i>
                    </button>
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
            .get(`roles`, { signal: controller.signal })
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
            marginTop: '20px',
            marginBottom: '35px',
            top: '38%',
            left: '58%',
            // right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            maxHeight: "90%",
            width: "76%",
            height: "300px",
            padding: "5px",
        },
    };
    const [modalIsOpen, setIsOpen] = useState(false);
    const [slideData, setSlideData] = useState({
        home_page: [],
        work_section: [],
        footer_section: [],
        zilla_police: [],
        administration: [],
        units: [],
        activity: [],
        crime_management: [],
        service: [],
        notice_board: [],
        bit_policing: [],
        phone_directory: [],
        user: [],
        role: "",
    })
    const handleChange = (e) => {
        setSlideData({ ...slideData, [e.target.name]: e.target.value });
    }
    const submitData = (e) => {
        e.preventDefault()
        if(slideData.id) {
            http.put(`update-roles/${slideData.id}`, slideData)
            .then((res) => {
                setUpdate(!update);
                closeModal();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Success !',
                    text: 'User Added Successfully',
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
            
        }else {
            http.post('save-roles', slideData)
            .then((res) => {
                setUpdate(!update);
                closeModal();
                Swal.fire({
                    position: 'top-center',
                    icon: 'success',
                    title: 'Success !',
                    text: 'User Added Successfully',
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
        setSlideData({
            home_page: [],
            work_section: [],
            footer_section: [],
            zilla_police: [],
            administration: [],
            units: [],
            activity: [],
            crime_management: [],
            service: [],
            notice_board: [],
            bit_policing: [],
            phone_directory: [],
            user: [],
            role: "",
        });
    }
    const handleCheckbox = (e) => {
        const { value, name, checked } = e.target;
        if (checked) {
            setSlideData({ ...slideData, [name]: [...slideData[name], value] });
        } else {
            setSlideData({ ...slideData, [name]: slideData[name].filter(item => item !== value) });
        }
    }
    const handleCheckboxAll = (e) => {
        const { value, name, checked } = e.target;
        if (checked) {
            setSlideData({ ...slideData, [name]: value.split(",") });
        } else {
            setSlideData({ ...slideData, [name]: [] });
        }
    }
    const homePage = [
        {
            name: "home_page",
            label: "Home Page",
            pages: ['Read Home', 'Add Home', 'Edit Home', 'Delete Home']
        },
        // {
        //     name: "work_section",
        //     label: "Work Section",
        //     pages: ['Read Work Section', 'Add Work Section', 'Edit Work Section', 'Delete Work Section']
        // },
        // {
        //     name: "footer_section",
        //     label: "Footer Section",
        //     pages: ['Read Footer Section', 'Add Footer Section', 'Edit Footer Section', 'Delete Footer Section']
        // },
        // {
        //     name: "zilla_police",
        //     label: "Zilla Police",
        //     pages: ['Read Zilla Police', 'Add Zilla Police', 'Edit Zilla Police', 'Delete Zilla Police']
        // },
        {
            name: "administration",
            label: "Menu Section",
            pages: ['Read Menu Section', 'Add Menu Section', 'Edit Menu Section', 'Delete Menu Section']
        },
        {
            name: "user",
            label: "Users",
            pages: ['Read Users', 'Add Users', 'Edit Users', 'Delete Users']
        },
        // {
        //     name: "activity",
        //     label: "Activity",
        //     pages: ['Read Activity', 'Add Activity', 'Edit Activity', 'Delete Activity']
        // },
        // {
        //     name: "crime_management",
        //     label: "Crime Management",
        //     pages: ['Read Crime Management', 'Add Crime Management', 'Edit Crime Management', 'Delete Crime Management']
        // },
        {
            name: "service",
            label: "Roles",
            pages: ['Read Roles', 'Add Roles', 'Edit Roles', 'Delete Roles']
        },
        // {
        //     name: "notice_board",
        //     label: "Notice Board",
        //     pages: ['Read Notice Board', 'Add Notice Board', 'Edit Notice Board', 'Delete Notice Board']
        // },
        // {
        //     name: "bit_policing",
        //     label: "Bit Policing",
        //     pages: ['Read Bit Policing', 'Add Bit Policing', 'Edit Bit Policing', 'Delete Bit Policing']
        // },
        // {
        //     name: "phone_directory",
        //     label: "Phone Directory",
        //     pages: ['Read Phone Directory', 'Add Phone Directory', 'Edit Phone Directory', 'Delete Phone Directory']
        // },
    ]
    console.log(slideData, "users");
    return (
        <div className='page-content adjustment-type-table'>
            <div className="custom-card p-2 d-flex justify-content-between mb-2 align-items-center">
                <h6>Roles</h6>
                <div>
                    <button style={{ marginTop: "1px" }} onClick={addSlide} className='btn btn-sm btn-primary float-end'>Add Role</button>
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
                            <h5 className="fw-normal px-2  text-start card-name">Add Role
                                <span style={{ cursor: "pointer", fontSize: "16px" }} onClick={closeModal} className='float-end'><i className="fal fa-times"></i></span>
                            </h5>
                        </div>

                        <div className=" p-3">
                            <form onSubmit={submitData}>
                                <input required onChange={handleChange} name='role' value={slideData.role} type="text" className="form-control form-control-sm my-2" placeholder="Role Name" />
                                <div className="row g-2">
                                    {
                                        homePage.map((item, index) => {
                                            const { name } = item;
                                            return <div key={index} className="col-3">
                                                <div className="custom-card p-2">
                                                    <div className="d-flex">
                                                        <input type="checkbox" checked={slideData[name]?.length === 4} name={item.name} onChange={handleCheckboxAll} value={item.pages.toString()} id="" className='me-2' />
                                                        <h6>{item.label}</h6>
                                                    </div>
                                                    {
                                                        item?.pages?.map((page, index) => <div key={index} className='ms-3'>
                                                            <input checked={slideData[name]?.includes(page)} type="checkbox" name={item.name} value={page} id="" onChange={handleCheckbox} className='me-2 mt-2' />
                                                            <label style={{ marginTop: "-3px" }} htmlFor={page}>{page}</label>
                                                        </div>)
                                                    }

                                                </div>
                                            </div>
                                        }
                                        )
                                    }

                                </div>
                                {/* <input required onChange={handleChange} name='password_confirmation' value={slideData.password_confirmation} type="password" className="form-control form-control-sm my-2" placeholder="password_confirmation" /> */}

                                <button className="btn mt-2 btn-sm btn-success float-end text-uppercase" type="submit"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-save mb-1"><path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"></path><polyline points="17 21 17 13 7 13 7 21"></polyline><polyline points="7 3 7 8 15 8"></polyline></svg> Save</button>
                            </form>

                        </div>

                    </div>
                </div>
            </Modal>
        </div>
    )
}
