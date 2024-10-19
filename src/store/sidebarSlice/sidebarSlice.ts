import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  openSidebar: false, 
};

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState,
  reducers: {
    toggleSidebar: (state) => {
        state.openSidebar = !state.openSidebar
    }
  },
});

export const { toggleSidebar } = sidebarSlice.actions;
export default sidebarSlice.reducer;