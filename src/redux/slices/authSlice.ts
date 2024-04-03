import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface InitialState {
  isLogout: boolean
}

const initialState: InitialState = {
  isLogout: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState,
  reducers: {
    logoutUser: (state, action: PayloadAction<any>) => {
      state.isLogout = action.payload
    }
  }
})

export const { logoutUser } = authSlice.actions
export default authSlice.reducer


// import { createSlice, PayloadAction } from "@reduxjs/toolkit"

// interface InitialState {
//   isLogout: boolean
// }

// const initialState: InitialState = {
//   isLogout: false
// }

// const authSlice = createSlice({
//   name: 'auth',
//   initialState: initialState,
//   reducers: {
//     logoutUser: (state, action: PayloadAction<any>) => {
//       state = {...state, isLogout: action.payload}
//     }
//   }
// })

// export const { logoutUser } = authSlice.actions
// export default authSlice.reducer


