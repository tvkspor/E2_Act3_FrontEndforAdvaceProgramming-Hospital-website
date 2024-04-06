import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

export const doctorSlide = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    searchDoctor: (state, action) => {
      state.search = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchDoctor} = doctorSlide.actions

export default doctorSlide.reducer