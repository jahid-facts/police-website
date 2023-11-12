
import React, { useEffect, useState } from 'react';
import dummyImage from '../../assets/DomDaines.png';
import BitModal from './BitModal';
import axios from 'axios';
import imgUrl from '../../imgUrl';
import { Link } from 'react-router-dom';

const InformationOnBitOfficers = () => {
    const [selectedOption, setSelectedOption] = useState([]);
    const [options, setOptions] = useState([]);

    useEffect(() => {
        axios.get(`thana`)
            .then(res => {
                setOptions(res.data);
                setSelectedOption(res?.data[0]?.bit_officers);
            })
    }, [])

    // Handler function to update the selected option
    const handleOptionChange = (event) => {
        const data = options.find((option) => parseInt(option.id) === parseInt(event.target.value));
        setSelectedOption(data.bit_officers);
    };

    // Handler function to reset the dropdown selection
    const handleResetClick = () => {
        setSelectedOption(options[0]?.bit_officers);
    };

    // State to manage the modal visibility
    const [showModal, setShowModal] = useState(false);

    // State to store the data for the modal
    const [modalData, setModalData] = useState('');
    // console.log("modalData", modalData);

    // Handler function to open the modal
    const handleDetailsButtonClick = (data, index) => {
        // console.log("data", data);
        setModalData({ data: data, index: index });
        setShowModal(true);
    };

    // Handler function to close the modal
    const closeModal = () => {
        setShowModal(false);
    };

    return (
        <div className="container pt-2">
            <h6 className="fw-bold text-center">বিট পুলিশিং যোগাযোগ</h6>
            <div className="row d-flex justify-content-center">
                <div className="col-md-4">
                    <div className="app__form__row">
                        <div className="d-flex align-items-center">
                            <select className="form-select form-select-sm me-md-1" onChange={handleOptionChange}>
                                {options.map((option) => (
                                    <option key={option.id} value={option.id}>
                                        {option.title}
                                    </option>
                                ))}
                            </select>
                            <button className="btn__rest" onClick={handleResetClick}>Reset</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="row">
                <div className="col-md-12">
                    <div className="">
                        {selectedOption?.length > 0 &&
                            <div className="table-responsive pt-1 d-flex justify-content-start">
                                <table className="table table-bordered thana__table">
                                    <thead>
                                        <tr>
                                            <th className="th__sr">বিট নং</th>
                                            <th>ঠিকানা</th>
                                            <th>অবস্থান</th>
                                            <th>পদবী</th>
                                            <th className="thana__th">নাম</th>
                                            <th>মোবাইল</th>
                                            <th>ছবি</th>
                                            <th>অ্যাকশান</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectedOption.map((item, index) => <>
                                                <tr className="tr__body" key={item.id}>
                                                    <td>{index + 1}.</td>
                                                    <td>{item.address}</td>
                                                    <td>{item.current_address}</td>
                                                    <td>{item.designation}</td>
                                                    <td>{item.name}</td>
                                                    <td>{item.mobile}</td>
                                                    <td className="text-center">
                                                        {
                                                            item.image ?
                                                                <img src={`${imgUrl}/${item.image}`} className="img-fluid" style={{ width: '80px', height: '80px' }} alt="image" loading='lazy' />
                                                                :
                                                                <img src={dummyImage} className="img-fluid" style={{ width: '80px', height: '80px' }} alt="image" loading='lazy' />
                                                        }
                                                    </td>
                                                    <td className="text-center">
                                                        {/* <button type='button' className="btn__details"
                                                            onClick={() => handleDetailsButtonClick(item, index)}
                                                        >Details</button> */}
                                                        <Link to={`/bit-news/${item.id}`}>
                                                            <button type='button' className="btn__details"
                                                                onClick={() => handleDetailsButtonClick(item, index)}
                                                            >Details</button>
                                                        </Link>

                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td colSpan={8}>
                                                        <div className="row g-1">
                                                            {item?.bitNews?.slice(0, 4).map(news =>
                                                                <div key={news.id} className="col-3">
                                                                    <Link  to={`/bit-news-details/${news.id}`} style={{ textDecoration: "none" }} >

                                                                        <div className="rc__card">
                                                                            <div className="card">
                                                                                <div className="row g-0">
                                                                                    <div className="col-4">
                                                                                        <div className="card__rc__img">
                                                                                            <img src={`${imgUrl}/${news.image}`} className='img-fluid' alt="..." loading='lazy' />
                                                                                        </div>
                                                                                    </div>
                                                                                    <div className="col-8">
                                                                                        <div className="card-body">
                                                                                            <p className="card__rc__desc">{news.title}</p>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                    </Link>
                                                                </div>)}

                                                        </div>
                                                    </td>
                                                </tr>

                                            </>)
                                        }

                                    </tbody>


                                </table>
                            </div>

                        }


                        {/* Render the modal */}
                        <BitModal showModal={showModal} closeModal={closeModal} info={modalData} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default InformationOnBitOfficers;
