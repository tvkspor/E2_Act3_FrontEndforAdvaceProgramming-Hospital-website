import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllMedicine = async (search, limit) => {
    let res = {}
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/medicine/get-all?filter=name&filter=${search}&limit=${limit}`)
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/Medicine/get-all?limit=${limit}`)
    }
    return res.data
}

export const getMedicineType = async (type, page, limit) => {
    if (type) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/medicine/get-all-type`)
        return res.data
    }
}

export const createMedicine = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/medicine/create`, data)
    return res.data
}

export const getDetailsMedicine = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/medicine/get-details/${id}`)
    return res.data
}

export const updateMedicine = async (id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/medicine/update/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteMedicine = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/medicine/delete/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteManyMedicine = async (data, access_token,) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/medicine/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const getAllTypeMedicine = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/medicine/get-all-type`)
    return res.data
}