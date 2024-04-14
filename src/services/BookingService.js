import axios from "axios";

export const axiosJWT = axios.create()

export const booking = async (data) => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/booking/create`,data);
      return res.data;
    } catch (error) {
      console.error('Error while booking:', error);
      throw error; // Re-throw the error for further handling
    }
  };
