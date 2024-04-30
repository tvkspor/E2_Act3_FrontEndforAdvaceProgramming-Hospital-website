import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllbooking = async (day) => {
    const res = await axiosJWT.get(
        `${process.env.REACT_APP_API_URL}/booking/get-Allbooking/${day}`,
    );
    return res.data;
}

export const findBooking = async (CCCD) => {
    const res = await axiosJWT.get(
        `${process.env.REACT_APP_API_URL}/booking/find-Booking/${CCCD}`,
    );
    return res.data;
}

export const getAllBooking = async (search, limit) => {
    let res = {}
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/booking/get-all?filter=name&filter=${search}&limit=${limit}`)
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/booking/get-all?limit=${limit}`)
    }
    return res.data
}


export const createBooking = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/booking/create`, data)
    return res.data
}


export const deleteBooking = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/booking/delete/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const booking = async (data) => {
    try {
        const res = await axios.post(`${ process.env.REACT_APP_API_URL }/booking/create`, data);
        return res.data;
    } catch (error) {
        console.error('Error while booking:', error);
        throw error; // Re-throw the error for further handling
    }
}
export const deleteManyBooking = async (data, access_token,) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/booking/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}