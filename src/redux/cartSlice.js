// cartSlice.js
import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const { product, count } = action.payload;
      const existingItem = state.items.find(item => item.product.id === product.id);

      if (existingItem) {
        existingItem.count += count;
      } else {
        state.items.push({ product, count });
      }
    },
    removeFromCart: (state, action) => {
      const productId = action.payload;
      state.items = state.items.filter(item => item.product.id !== productId);
    },
    updateCartItem: (state, action) => {
      const { productId, count } = action.payload;
      const itemToUpdate = state.items.find(item => item.product.id === productId);

      if (itemToUpdate) {
        if (count > 0) {
          // Update the count
          itemToUpdate.count = count;
        } else {
          // Remove the item if count is 0
          state.items = state.items.filter(item => item.product.id !== productId);
        }
      }
    },
  },
});

export const { addToCart, removeFromCart, updateCartItem } = cartSlice.actions;
export const selectCartItems = state => state.cart.items;

export default cartSlice.reducer;
