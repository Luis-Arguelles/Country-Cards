import { createSlice } from "@reduxjs/toolkit";

export const favoritesArraySlice = createSlice({
  name: "favoritesArray",
  initialState: {
    value: [],
  },
  reducers: {
    addCountry: (state, action) => {
      state.value.push(action.payload);
    },

    removeCountry: (state, action) => {
      const countryToRemove = action.payload;
      state.value = state.value.filter((country) => {
        if (country.name.common != countryToRemove.name.common) {
          return country;
        }
      });
    },
  },
});

// Action creators are generated for each case reducer function
export const { addCountry, removeCountry, incrementByAmount } =
  favoritesArraySlice.actions;

export default favoritesArraySlice.reducer;
