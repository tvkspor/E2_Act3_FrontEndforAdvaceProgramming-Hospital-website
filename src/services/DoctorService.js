import axios from "axios"
import { axiosJWT } from "./UserService"

export const getAllDoctor    = async (search, limit) => {
    let res = {}
    if (search?.length > 0) {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/get-all?filter=name&filter=${search}&limit=${limit}`)
    } else {
        res = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/get-all?limit=${limit}`)
    }
    return res.data
}

export const getAllTypedoctor = async () => {
    const res = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/get-all-type`)
    return res.data
}