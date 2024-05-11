import { configureStore } from "@reduxjs/toolkit";
import CartSlice from './slices/CartSlice';
import WishlistSlice from './slices/WishlistSlice';

const store = configureStore({
  reducer: {
    cart: CartSlice,
  },
});

export default store;
