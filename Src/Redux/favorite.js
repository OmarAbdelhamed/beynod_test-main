import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const toggleFavorite = createAsyncThunk(
  'favorites/toggleFavorite',
  async (productId, { getState }) => {
    const { auth } = getState();
    const response = await axios.post(
      `https://beyond-fix.applaiteknoloji.online/api/add-delete-favourite`,
      { product_id: productId },
      {
        headers: {
          'Authorization': `${auth.authState.token}`,
        },
      }
    ).then((response) => {
        if (response.status === 200) {
            console.log(response.data , auth.authState.token);
        }
    })
    .catch((error) => {
        console.log(error.response.data );
    })
    return productId;
  }
);

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    items: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(toggleFavorite.fulfilled, (state, action) => {
      const index = state.items.indexOf(action.payload);
      if (index >= 0) {
        state.items.splice(index, 1);
      } else {
        state.items.push(action.payload);
      }
    });
  },
});

export const { reducer: favoritesReducer } = favoritesSlice;
