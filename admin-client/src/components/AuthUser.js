
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

export default function AuthUser() {

    const navigate = useNavigate();

    const getToken = () => {
        const tokenString = sessionStorage.getItem('user') || localStorage.getItem('user');
        const userToken = JSON.parse(tokenString);
        return userToken;
    }
    const getUser = () => {
        const userString = sessionStorage.getItem('user') || localStorage.getItem('user');
        const user_details = JSON.parse(userString);
        return user_details;
    }

    const [user, setUser] = useState(getUser());


    const saveToken = (user, isRemember) => {
        isRemember ? localStorage.setItem('user', JSON.stringify(user)) : sessionStorage.setItem('user', JSON.stringify(user));
        setUser(user);
        navigate('/');
        window.location.reload(true)

    }

    const logout = () => {
        sessionStorage.clear();
        localStorage.clear();
        navigate('/');
    }

    return {
        setUser: saveToken,
        user,
        getToken,
        logout
    }
}