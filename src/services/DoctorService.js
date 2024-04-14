import axios from "axios";

// export const getAllDoctor = async () => {
//   const res = await axios.get(
//     `${process.env.REACT_APP_API_URL}/doctor/get-all-doctor`
//   );
//   return res.data;
// };
export const getAllDoctor = async (search, limit) => {
  let res = {}
  if (search?.length > 0) {
      res = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/get-all-doctor?filter=name&filter=${search}&limit=${limit}`)
  } else {
      res = await axios.get(`${process.env.REACT_APP_API_URL}/doctor/get-all-doctor?limit=${limit}`)
  }
  return res.data
}

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

export const getAllDepartmentDoctor = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-department`
  );
  return res.data;
};
