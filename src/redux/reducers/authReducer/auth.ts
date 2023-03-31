import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthState, AuthStatus } from './authInterface';

const initialState:AuthState ={ 
  authStatus: 'authenticated',
  isLoading: false,
  user:{
    email: '',
  },
};
const authSlice = createSlice({
  initialState,
  name:'auth',
  reducers: {
    setUser: (state: AuthState, action:PayloadAction<{email: string}>) =>{
      state.user = action.payload;
    },
    setAuthStatus:(state: AuthState, action:PayloadAction<AuthStatus>) =>{
      state.authStatus = action.payload;
    },
    setIsLoading: (state:AuthState, action:PayloadAction<boolean>) =>{
      state.isLoading = action.payload;
    },
    setLogout: (state:AuthState)=>{
      state.authStatus='not-authenticated';
      state.user ={
        email: '',
      }
    }
  }
})

export const {setAuthStatus, setIsLoading, setUser, setLogout} = authSlice.actions;
const authReducer = authSlice.reducer;
export default authReducer;