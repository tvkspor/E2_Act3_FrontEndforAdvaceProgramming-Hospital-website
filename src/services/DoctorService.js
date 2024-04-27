import axios from "axios";
import { axiosJWT } from "./UserService";

export const getAllDoctor = async (search, limit) => {
  let res = {};
  if (search?.length > 0) {
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/doctor/get-all?filter=name&filter=${search}&limit=${limit}`
    );
  } else {
    res = await axios.get(
      `${process.env.REACT_APP_API_URL}/doctor/get-all?limit=${limit}`
    );
  }
  return res.data;
};

export const getAllTypeDoctor = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-type`
  );
  return res.data;
};

export const createDoctor = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/doctor/create`,
    data
  );
  return res.data;
};

export const getDetailsDoctor = async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-details/${id}`
  );
  return res.data;
};

export const updateDoctor = async (id, access_token, data) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/doctor/update/${id}`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteDoctor = async (id, access_token) => {
  const res = await axiosJWT.delete(
    `${process.env.REACT_APP_API_URL}/doctor/delete/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteManyDoctor = async (data, access_token) => {
  const res = await axiosJWT.post(
    `${process.env.REACT_APP_API_URL}/doctor/delete-many`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const getAllDoctorCardiology = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-doctor-cardiology`
  );
  return res.data;
};

export const getAllDoctorNervesurgery = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-doctor-nervesurgery`
  );
  return res.data;
};

export const getAllDoctorIntensivecare = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-doctor-intensivecare`
  );
  return res.data;
};

export const getAllDoctorMusculoskeletal = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-doctor-musculoskeletal`
  );
  return res.data;
};

export const getAllDoctorOtorhinology = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-doctor-otorhinology`
  );
  return res.data;
};

export const getAllDoctorPediatrics = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-doctor-pediatrics`
  );
  return res.data;
};

export const getAllDepartmentDoctor = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-department`
  );
  return res.data;
};
