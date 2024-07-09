import { createSlice } from "@reduxjs/toolkit";

export const userSlice = createSlice({
  name: "user",
  initialState: {
    username: "Daniel Finn",
    place: "Abuja",
    dob: "1990-01-01",
    university: "University of Abuja",
    experience: "5 years",
  },
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    updateUserPlace: (state, action) => {
      state.place = action.payload;
    },
  },
});

export const { setUsername, updateUserPlace } = userSlice.actions;

export default userSlice.reducer;
