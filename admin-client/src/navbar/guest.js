import {Routes, Route} from "react-router-dom";
import Login from "../components/login";
import ForgotPassword from "../components/ForgotPassword";

function Guest() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>} />
                <Route path="/forgot-password" element={<ForgotPassword/>} />
            </Routes>
        </div>
    );
}

export default Guest;
