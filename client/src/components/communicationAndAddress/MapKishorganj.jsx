import { useEffect, useState } from 'react';
import LeftHomePage from '../mainHomePage/LeftHomePage';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from 'axios';

const MapKishorganj = () => {
    const [data, setData] = useState({
        name: "",
        email: "",
        office: "",
        message: "",
        subject: "",

    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({
            ...data, [name]: value
        });
    }
    const [loading, setLoading] = useState(false)
    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true)
        axios.post('/send-email', data)
            .then(res => {
                setLoading(false)
                Swal.fire(
                    'Your message has been sent successfully!',
                    '',
                    'success'
                )
            })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })

    }
    const [info, setInfo] = useState({});
    const [contactPerson, setContactPerson] = useState([]);
    useEffect(() => {
        axios.get(`contact-address`)
            .then(res => {
                setInfo(res.data)
            })
        axios.get(`contact-person`)
            .then(res => {
                setContactPerson(res.data)
            })
    }, [])
    console.log(data)
    return (
        <div className="container">
            <div className="row g-3">
                <div className="col-md-9">
                    <h6 className="rc__hd__txt"> ম্যাপ</h6>
                    {
                        info?.map &&
                        <div className="pt-0">
                            <iframe src={info?.map} width="100%" height="450" style={{ border: "0" }} allowFullScreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                    }

                    <div className="pt-3">
                        <h6 className="rc__hd__txt">ঠিকানা</h6>
                        <p className="fw-bold" style={{ marginBottom: "2px" }}>{info?.office}</p>
                        <p className="geo__familarity__desc">ফোন : {info?.phone}, ফ্যাক্স : {info?.phone}</p>
                        <p className="geo__familarity__desc pt-1">মোবাইল : {info?.mobile} ; E-mail : {info?.email}</p>
                    </div>
                    <div className="app__form__row pt-3">
                        <h6 className="rc__hd__txt">যোগাযোগ</h6>
                        <div className="border p-2">
                            <form onSubmit={handleSubmit} className="row g-2 mb-3 d-flex justify-content-center">
                                <div className="col-md-12">
                                    <select name="office" onChange={handleChange} id="inputState" className="form-select form-select-sm">
                                        <option selected>SELECT...</option>
                                        {
                                            contactPerson?.map((item, id) => (
                                                <option key={id} value={item.email}>{item.name}</option>
                                            ))
                                        }
                                    </select>
                                </div>
                                <div className="col-md-12">
                                    <input required onChange={handleChange} name="name" type="text" className="form-control form-control-sm" placeholder="FULL NAME" />
                                </div>
                                <div className="col-md-12">
                                    <input required onChange={handleChange} name="email" type="email" className="form-control form-control-sm" placeholder="E-MAIL" />
                                </div>
                                <div className="col-md-12">
                                    <input required onChange={handleChange} name="subject" type="text" className="form-control form-control-sm" placeholder="SUBJECT" />
                                </div>
                                <div className="col-md-12">
                                    <textarea required onChange={handleChange} name="message" className="form-control form-control-sm" placeholder="WRITE YOUR MESSAGE ..." rows="3"></textarea>
                                </div>

                                <div className="col-md-10">
                                    <div className="text-center pt-3">
                                        <input type='submit' disabled={loading} value="SEND NOW" className="btn__send__msg" />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <LeftHomePage />
                </div>
            </div>
        </div>
    );
};

export default MapKishorganj;