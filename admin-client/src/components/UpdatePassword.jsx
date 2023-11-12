import { useState } from "react";
import AuthUser from "./AuthUser";
import { useNavigate } from "react-router-dom";
import http from "../http";
import Swal from "sweetalert2";

export default function UpdatePassword() {

    const navigate = useNavigate();
    const { getToken } = AuthUser();
    const user = getToken();
    const [info, setInfo] = useState({
        email: user.email,
        oldPassword: "",
        newPassword: "",
        confirm_password: '',
    })

    const submitForm = () => {
        if (info.newPassword !== info.confirm_password) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Password does not match!',
            })
        } else {
            http.put('/change-password', info).then((res) => {
                if (res.status === 200) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Password updated successfully!',
                    })
                    setInfo({
                        email: '',
                        oldPassword: '',
                        newPassword: '',
                        confirm_password: '',
                    })
                } else {
                    Swal.fire({
                        icon: 'error',
                        title: 'Oops...',
                        text: 'Something went wrong!',
                    })
                }
            })
            .catch((err) => {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Something went wrong!',
                })
            })
        }

    }

    return (
        <div className="col-md-4 mx-auto  mt-5 pt-5">
            <div className="custom-card p-2 pb-5">
            <h2 class="fw-bolder  text-center pt-5 text-login logoPos">Change password</h2>
            <p class="text-center pt-3">Your new password must be different from previous used passwords.</p>
                <form onSubmit={submitForm}>
                    
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="name">Old Password</label>
                        <input value={info.oldPassword} required type="password" name="name" className="form-control" onChange={e => setInfo({ ...info, oldPassword: e.target.value })} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="password">New Password</label>
                        <input value={info.newPassword} required type="password" password="password" className="form-control" onChange={e => setInfo({ ...info, newPassword: e.target.value })} />
                    </div>
                    <div className="form-group mb-2">
                        <label className="form-label" htmlFor="email">Confirm PassWord</label>
                        <input value={info.confirm_password} required type="password" name="email" className="form-control" onChange={e => setInfo({ ...info, confirm_password: e.target.value })} />
                    </div>

                    <button type="button" onClick={submitForm} className="btn btn-primary float-end ">Submit</button>

                </form>
            </div>
        </div>
    )
}