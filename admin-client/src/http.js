
import axios from "axios";

export default axios.create({
    baseURL:`${process.env.NODE_ENV === 'development' ?   process.env.REACT_APP_DEV_MODE_URL :   process.env.REACT_APP_PRO_MODE_URL}`,
    headers:{
        "Content-type" : "application/json"
    }
});

