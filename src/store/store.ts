import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/user/userSlice';
import paymentReducer from './slices/payments/paymentSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    payment: paymentReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({serializableCheck: false}),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
