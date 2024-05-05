import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

export const medicineSlide = createSlice({
  name: 'medicine',
  initialState,
  reducers: {
    searchMedicine: (state, action) => {
      state.search = action.payload
    },
  },
})
// Action creators are generated for each case reducer function
export const { searchMedicine } = medicineSlide.actions

export default medicineSlide.reducer