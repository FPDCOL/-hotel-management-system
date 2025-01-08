import axios from'axios';

import { BASE_URL } from '../constants/constant';

const axiosInstance=axios.create({
    baseURL:BASE_URL,
    header:{
        'Content-Type':'application/json',
    },
});

export default axiosInstance