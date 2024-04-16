import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllItem = async (search, limit) => {
    let res = {}
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/items/get-all?filter=name&filter=${search}&limit=${limit}`)
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/items/get-all?limit=${limit}`)
    }
    return res.data
}

export const getAllTypeItem = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/get-all-type`)
    return res.data
}

export const getItemType = async (type, page, limit) => {
    if (type) {
        const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/get-all?filter=type&filter=${type}&limit=${limit}&page=${page}`)
        return res.data
    }
}

export const createItem = async (data) => {
    const res = await axios.post(`${process.env.REACT_APP_API_URL}/items/create`, data)
    return res.data
}

export const getDetailsItem = async (id) => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/items/get-details/${id}`)
    return res.data
}

export const updateItem = async (id, access_token, data) => {
    const res = await axiosJWT.put(`${process.env.REACT_APP_API_URL}/items/update/${id}`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })  
    return res.data
}

export const deleteItem = async (id, access_token) => {
    const res = await axiosJWT.delete(`${process.env.REACT_APP_API_URL}/items/delete/${id}`, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}

export const deleteManyItems = async (data, access_token,) => {
    const res = await axiosJWT.post(`${process.env.REACT_APP_API_URL}/items/delete-many`, data, {
        headers: {
            token: `Bearer ${access_token}`,
        }
    })
    return res.data
}