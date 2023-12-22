import { createAsyncThunk ,createSlice, PayloadAction } from '@reduxjs/toolkit'
import { RootState } from '../store/store';
import { log } from 'console'
import axios from 'axios';

export interface UserInfos {
  id: number;
  name: string;
  userName: string;
  rank: number;
  level: number;
  avatar: string;
}

export interface userState {
  user_Data:UserInfos;
  loading: boolean;
  error: string | null;
}

// export const initialState: userState = {
//   user_Data: {
//     id: 0,
//     name: '',
//     userName: '',http://localhost:3000/_next/image?url=%2Fgsus.jpeg&w=640&q=75
//     rank: 0,
//     level: 0,
//     avatar: '',
//   },
//   loading: false,
//   error: null,
// }
// const UserInfo:UserInfos = {
//   name: 'hassaaaaaaan',
//   userName: '',
//   rank: 0,
//   level: 0,
//   pathImg: '',
// }


// export interface tInitialState  {
//   userInfo: UserInfos;
//   status: string;
//   error: any;
// }

// export const initialState:tInitialState = {
//   userInfo: UserInfo,
//   status: 'none',
//   error: null
// }

const initialState = {
  entity: [],
} as any;
  export const fetchInfos = createAsyncThunk("user/fetch", async (thunkApi) => {
  try {
    const response = await axios.get('http://localhost:4000/Profile', {withCredentials: true });

    if (response.status === 200) {
      console.log('Data getted successfully:', response.data);
      // console.log(response.data);
    } else {
      console.error('Data getting failed:', response.data);
    }
  } catch (error) {
    console.error('Error getting data:', error);
  }
  })

// export const fetchInfos = createAsyncThunk("user/fetch", async (thunkApi) => {
//   const response = await fetch("http://localhost:4000/Profile", {
//     method: "GET",
//     credentials: 'include',
//   });
//   // console.log(response);
  
//   const data = await response.json();   
//   return (data);
// })

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchInfos.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchInfos.fulfilled, (state, action) => {
        state.user_Data = action.payload;
        state.loading = false;
      })
      .addCase(fetchInfos.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || 'Something went wrong !';
      });
  },
});


// export const { addInfos } = userSlice.actions;
export default userSlice.reducer;
// export const selectUser = (state: RootState) => state.user.user_Data
// export const selectLoading = (state: RootState) => state.user.loading
// export const selectError = (state: RootState) => state.user.error

