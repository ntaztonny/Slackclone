import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
  status: "idle",
};

export const appSlice = createSlice({
  name: "app",
  initialState: { roomId: "6S4UyJbyY4oL6j8Nwkkd" },
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    enterRoom: (state, action) => {
      state.roomId = action.payload.roomId;
    },
  },
});

export const { enterRoom } = appSlice.actions;
export const selectRoomId = (state) => state.app.roomId;

export default appSlice.reducer;
