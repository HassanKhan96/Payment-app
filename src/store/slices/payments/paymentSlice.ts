import {createSlice} from '@reduxjs/toolkit';
import {addPayment} from './actions';

interface PaymentState {
  payments: [];
  addPayments: 'idle' | 'success' | 'error' | 'pending';
  loading: boolean;
  error: null | unknown;
}

const initialState = {
  payments: [],
  addPayments: 'idle',
  loading: false,
  error: null,
} as PaymentState;

export const paymentSlice = createSlice({
  name: 'payments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(addPayment.pending, (state, action) => {
      state.addPayments = 'pending';
      state.loading = true;
      state.error = null;
    }),
      builder.addCase(addPayment.fulfilled, (state, action) => {
        state.addPayments = 'success';
        state.loading = false;
        state.error = null;
      });
    builder.addCase(addPayment.rejected, (state, action) => {
      state.addPayments = 'error';
      state.loading = false;
      state.error = action.payload;
    });
  },
});

export default paymentSlice.reducer;
