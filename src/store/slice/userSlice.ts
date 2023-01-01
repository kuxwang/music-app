import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import api from "api";

export const fetchUser:any = createAsyncThunk(
  'users/fetchUser',
  async () => {
    const response = await api.accountFn()
    return response.data
  }
)


const initialState:any = {
  account: {}
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled,(state,action)=>{
      console.log(state);
      console.log(action);
      state.account = action.payload.account;
    })
  }
  
})

export default userSlice.reducer