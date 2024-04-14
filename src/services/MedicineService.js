import axios from "axios";

export const getAlltype = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/medicine/getalltype`
  );
  return res.data;
};

export const getAllTabletsname = async () => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_URL}/medicine/getalltabletsname`
  );
  return res.data;
};
