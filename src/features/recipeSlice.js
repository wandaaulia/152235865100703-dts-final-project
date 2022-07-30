import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
  isMenu: false
}

export const recipeSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setOpenMenu: (state) => {
      state.isMenu = true
    },
    setCloseMenu: (state) => {
    state.isMenu = false
    },
  },
})

export const { setOpenMenu, setCloseMenu } = recipeSlice.actions

export default recipeSlice.reducer