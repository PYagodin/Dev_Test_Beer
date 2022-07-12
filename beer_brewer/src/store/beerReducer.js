import { createSlice } from "@reduxjs/toolkit";
const beersSlice = createSlice({
  name: "beers",
  initialState: {
    beers: [],
  },
  reducers: {
    updateBeers: (state, action) => {
      state.beers = action.payload;
    },
  },
});
export const { updateBeers } = beersSlice.actions;
export default beersSlice.reducer;
