import { createSlice } from '@reduxjs/toolkit';

const initialState = [];

const contactSlice = createSlice({
  name: 'contacts',
  initialState: initialState,
  reducers: {
    addContact:(state, { payload }) => {
      state.push(payload);
    },
    deleteContact:(state, action) =>{
      const index = state.findIndex(contact => contact.id === action.payload);
      state.splice(index, 1);
    },
  },
});

export const { addContact, deleteContact } = contactSlice.actions;
export const contactsReducer = contactSlice.reducer;
