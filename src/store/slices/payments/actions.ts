import {createAsyncThunk} from '@reduxjs/toolkit';
import database from '@react-native-firebase/database';
import auth from '@react-native-firebase/auth';

interface paymentType {
  title: string;
  description: string;
  date: string;
}

export const addPayment = createAsyncThunk(
  'payment/add',
  async (input: paymentType, thunkAPI) => {
    const user = auth().currentUser;
    const result = await database()
      .ref('payments')
      .push()
      .set({
        uid: user?.uid,
        ...input,
        hasPaid: false,
      });
    return result;
  },
);
