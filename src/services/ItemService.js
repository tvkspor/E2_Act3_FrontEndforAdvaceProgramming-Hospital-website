import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllItem    = async (search, limit) => {
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