import axios from "axios";

export const axiosJWT = axios.create();

export const loginUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/sign-in`,
    data
  );
  return res.data;
};

export const signupUser = async (data) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/sign-up`,
    data
  );
  return res.data;
};

export const resetPassword = async (
  email,
  password,
  confirmPassword,
  token
) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/reset-password/${email}`,
    { email, password, confirmPassword, token }
  );
  return res.data;
};

export const forgotPassword = async (email) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/forgot-password`,
    { email }
  );
  return res.data;
};

export const getDetailsUser = async (id, access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_URL}/user/get-details/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteUser = async (id, access_token, data) => {
  const res = await axiosJWT.delete(
    `${process.env.REACT_APP_API_URL}/user/delete-user/${id}`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const getAllUser = async (access_token) => {
  const res = await axiosJWT.get(
    `${process.env.REACT_APP_API_URL}/user/getAll`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

// export const refreshToken = async () => {
//     const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/refresh-token`, {
//         withCredentials: true
//     })
//     return res.data
// }

export const refreshToken = async (refreshToken) => {
  const res = await axios.post(
    `${process.env.REACT_APP_API_URL}/user/refresh-token`,
    {},
    {
      headers: {
        token: `Bearer ${refreshToken}`,
      },
    }
  );
  return res.data;
};

export const getTreatmenthistory = async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/gettreatmenthistory/${id}`
  );
  return res.data;
};

export const getDoctorcourse = async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/getdoctorcourse/${id}`
  );
  return res.data;
};

export const getTreatment = async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/gettreatment/${id}`
  );
  return res.data;
};

export const getEventData = async (id) => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/user/geteventdata/${id}`
  );
  return res.data;
};

export const logoutUser = async () => {
  const res = await axios.post(`${process.env.REACT_APP_API_URL}/user/log-out`);
  return res.data;
};

export const updateUser = async (id, data, access_token) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/user/update-user/${id}`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const updatetreatmentHistory = async (id, data) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/user/update-treatmenthistory/${id}`,
    data
  );
  return res.data;
};

export const updateComment = async (id, data) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/user/update-comment/${id}`,
    data
  );
  return res.data;
};

export const updateEventData = async (id, data) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/user/update-eventdata/${id}`,
    data
  );
  return res.data;
};

export const updateEventData2 = async (id, data) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/user/update-eventdata2/${id}`,
    data
  );
  return res.data;
};

export const updateProgress = async (id, data) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/user/update-progress/${id}`,
    data
  );
  return res.data;
};

export const updateMedicine = async (id, data) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/user/update-medicine/${id}`,
    data
  );
  return res.data;
};

export const updateTreatment = async (id, access_token) => {
  const res = await axiosJWT.put(
    `${process.env.REACT_APP_API_URL}/user/update-treatment/${id}`,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};

export const deleteManyUser = async (data, access_token) => {
  const res = await axiosJWT.post(
    `${process.env.REACT_APP_API_URL}/user/delete-many`,
    data,
    {
      headers: {
        token: `Bearer ${access_token}`,
      },
    }
  );
  return res.data;
};
