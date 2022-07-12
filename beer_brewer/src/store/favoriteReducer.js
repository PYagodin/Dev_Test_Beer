import { createSlice } from "@reduxjs/toolkit";
const favoritesSlice = createSlice({
  name: "favoriteBeers",
  initialState: {
    favoriteBeers: [],
  },
  reducers: {
    addFavoriteBeer: (state, action) => {
      let beerObj = { ...action.payload };

      if (
        !state.favoriteBeers.some((element) => {
          return element.name === beerObj.name;
        })
      ) {
        beerObj["rating"] = "Not selected";
        state.favoriteBeers.push(beerObj);
      }
    },

    updateRating: (state, action) => {
      let beerObj = { ...action.payload };
      let beerIndex = state.favoriteBeers.findIndex(
        (x) => x.name === beerObj.name
      );
      state.favoriteBeers[beerIndex] = beerObj;
      console.log(beerObj);
    },

    clearFavorites: (state) => {
      state.favoriteBeers = [];
    },

    sendRemoveBeer: (state, action) => {
      state.favoriteBeers = state.favoriteBeers.filter(
        (beer) => beer.name !== action.payload.name
      );
    },
  },
});
export const {
  addFavoriteBeer,
  updateRating,
  clearFavorites,
  sendRemoveBeer,
} = favoritesSlice.actions;
export default favoritesSlice.reducer;
