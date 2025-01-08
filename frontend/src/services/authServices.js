import axiosInstance from '../utils/axiosinstance';

import { AUTH_REGISTER,AUTH_LOGIN,BASE_URL } from '../constants/constant';

export const registerUser= async (userData)=>{
    const response=await axiosInstance.post(AUTH_REGISTER,userData);
    return response.data;
}

export const loginUser= async (userData)=>{
    const  response=await axiosInstance.post(AUTH_LOGIN,userData);
    return response.data;
}