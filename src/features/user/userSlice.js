import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
      currentUser: null,
      isLoggedIn: false
  },
  reducers: {
    setLoggedUser: (state, action) => {
        state.currentUser = action.payload
        state.isLoggedIn = true
    },
    setLogout: (state) => {
      state.currentUser = null
      state.isLoggedIn = false
    }
  },
})

export const { setLoggedUser, setLogout } = userSlice.actions

export default userSlice.reducer