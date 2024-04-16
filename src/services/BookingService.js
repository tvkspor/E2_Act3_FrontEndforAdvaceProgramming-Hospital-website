import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllBooking = async () => {
        const res = await axiosJWT.get(
          `${process.env.REACT_APP_API_URL}/booking/get-all`,
        );
        return res.data;
}


export const createBooking = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/booking/create`, data)
    return res.data
}

export const getDetailsBooking = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/booking/get-details/${id}`)
    return res.data
}

export const updateBooking = async (id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/booking/update/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
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

export const deleteManyBooking = async (data, access_token,) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/booking/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}




export const booking = async (data) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/booking/create`,data);
      return res.data;
    } catch (error) {
      console.error('Error while booking:', error);
      throw error; // Re-throw the error for further handling
    }
  };
