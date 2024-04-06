import axios from "axios";

export const getAllDoctor = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/doctor/get-all-doctor`
  );
  return res.data;
};
