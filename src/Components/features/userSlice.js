import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  wishlist: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
    },
    logout: (state) => {
      state.user = null;
    },
    wishlist: (state, action) => {
      for (let i = 0; i <= state.wishlist.length; i++) {
        if (state.wishlist[i]) {
          if (state.wishlist[i].movie === action.payload.wishlist.movie) {
            let arr = state.wishlist.filter(
              (obj) => obj.movie !== action.payload.wishlist.movie
            );
            state.wishlist = arr;
          }
        }
      }if(true){
        state.wishlist.push(action.payload.wishlist);
      }
    },
  },
});

export const { login, logout, wishlist } = userSlice.actions;

export const selectUser = (state) => state.user.user;
export const selectwishlist = (state) => state.user.wishlist;

export default userSlice.reducer;
