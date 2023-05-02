import {createSlice} from '@reduxjs/toolkit';
import {login, logout, register} from './actions';
interface UsersState {
  data: null | undefined | object;
  loading: boolean;
  error: object | null | undefined;
}

const initialState = {
  data: null,
  loading: false,
  error: null,
} as UsersState;

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: builder => {
    //login cases start
    builder.addCase(login.pending, (state, action) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = action.error;
    });
    //login cases end

    //register cases start
    builder.addCase(register.pending, (state, action) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(register.fulfilled, (state, action) => {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(register.rejected, (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = action.error;
    });
    //register cases ends

    //logout cases starts
    builder.addCase(logout.pending, (state, action) => {
      state.data = null;
      state.loading = true;
      state.error = null;
    });
    builder.addCase(logout.fulfilled, (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = null;
    });
    builder.addCase(logout.rejected, (state, action) => {
      state.data = null;
      state.loading = false;
      state.error = action.error;
    });
    //logout cases end
  },
});

export default userSlice.reducer;
