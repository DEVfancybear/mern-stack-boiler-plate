import * as types from "../constants/ActionTypes";
import axios from "axios";

const API = "http://localhost:5000/api/"
export const loginUser = dataSubmit => {
    return async dispatch => {
        const req = await axios.post(API + "users/login", dataSubmit);
        const data = await req.data;
        dispatch({
            type: types.LOGIN_USER,
            payload: data
        })
    }
}

export const registerUser = dataSubmit => {
    return async dispatch => {
        const req = await axios.post(API + "users/register", dataSubmit);
        const data = await req.data;
        dispatch({
            type: types.REGISTER_USER,
            payload: data
        })
    }
}

export const logoutUser = () => {
    return async dispatch => {
        const req = await axios.get(API + "users/logout");
        const data = await req.data
        dispatch({
            type: types.LOGOUT_USER,
            payload: data
        })
    }
}


export function auth(){
    const request = axios.get(API+"users/auth")
        .then(response => response.data);

    return {
        type: types.AUTH_CHECK,
        payload: request
    }
}