import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  search: '',
}

export const itemSlide = createSlice({
  name: 'item',
  initialState,
  reducers: {
    searchItem: (state, action) => {
      state.search = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { searchItem } = itemSlide.actions

export default itemSlide.reducer