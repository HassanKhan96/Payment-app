import {createAsyncThunk} from '@reduxjs/toolkit';
import auth from '@react-native-firebase/auth';

export const login = createAsyncThunk(
  'user/login',
  async (cred: {email: string; password: string}, thunkAPI) => {
    const {email, password} = cred;
    const user = await auth().signInWithEmailAndPassword(email, password);
    return user.user;
  },
);

export const register = createAsyncThunk(
  'user/register',
  async (
    cred: {email: string; password: string; fullName: string},
    thunkAPI,
  ) => {
    const {email, password, fullName} = cred;
    const user = await auth().createUserWithEmailAndPassword(email, password);

    return user.user;
  },
);

export const logout = createAsyncThunk('user/logout', async thunkAPI => {
  const result = await auth().signOut();
  return result;
});
