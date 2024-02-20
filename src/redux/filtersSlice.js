import { createSlice } from '@reduxjs/toolkit';

const initialState = '';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setFilter: (state, action) => {
      state.status = action.payload;
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const filtersReducer = filterSlice.reducer;
