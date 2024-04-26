import { createSlice } from "@reduxjs/toolkit";
import { dispatch } from "../store";
const initialState = {
  sidebar: {
    open: false,
    type: "CONTACT",
  },
};

const slice = createSlice({
  name: "app",
  initialState,
  reducers: {
    toggleSidebar(state) {
      state.sidebar.open = !state.sidebar.open;
    },
    updateSidebarType(state, action) {
      console.log(action);
      state.sidebar.type = action.payload.type;
    },
  },
});

export default slice.reducer;

export function toggleSidebar() {
  return async () => {
    dispatch(slice.actions.toggleSidebar());
  };
}
export function UpdateSidebarType(type) {
  return async () => {
    console.log(type);
    dispatch(slice.actions.updateSidebarType({ type }));
  };
}
