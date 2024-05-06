import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: "",
  avatar: "",
  access_token: "",
  id: "",
  isAdmin: false,
  isDoctor: false,
  city: "",
  refreshToken: "",
  sex: "",
  eventData: [],
  dateofbirth: "",
  BHXH: "",
  CCCD: "",
};

export const userSlide = createSlice({
  name: "user",
  initialState,
  reducers: {
    updateUser: (state, action) => {
      const {
        name = "",
        email = "",
        access_token = "",
        address = "",
        phone = "",
        avatar = "",
        _id = "",
        isAdmin,
        isDoctor,
        city = "",
        refreshToken = "",
        sex = "",
        dateofbirth = "",
        BHXH = "",
        CCCD = "",
        eventData = [],
      } = action.payload;
      state.name = name ? name : state.name;
      state.email = email ? email : state.email;
      state.address = address ? address : state.address;
      state.phone = phone ? phone : state.phone;
      state.avatar = avatar ? avatar : state.avatar;
      state.id = _id ? _id : state.id;
      state.access_token = access_token ? access_token : state.access_token;
      state.isAdmin = isAdmin ? isAdmin : state.isAdmin;
      state.isDoctor = isDoctor ? isDoctor : state.isDoctor;
      state.city = city ? city : state.city;
      state.refreshToken = refreshToken ? refreshToken : state.refreshToken;
      state.sex = sex ? sex : state.sex;
      state.dateofbirth = dateofbirth ? dateofbirth : state.dateofbirth;
      state.eventData = eventData ? eventData : state.eventData;
      state.BHXH = BHXH ? BHXH : state.BHXH;
      state.CCCD = CCCD ? CCCD : state.CCCD;
    },
    resetUser: (state) => {
      window.localStorage.clear();
      state.name = "";
      state.email = "";
      state.address = "";
      state.phone = "";
      state.avatar = "";
      state.id = "";
      state.access_token = "";
      state.isAdmin = false;
      state.isDoctor = false;
      state.city = "";
      state.refreshToken = "";
      state.sex = "";
      state.dateofbirth = "";
      state.BHXH = "";
      state.CCCD = "";
    },
  },
});

// Action creators are generated for each case reducer function
export const { updateUser, resetUser } = userSlide.actions;

export default userSlide.reducer;
