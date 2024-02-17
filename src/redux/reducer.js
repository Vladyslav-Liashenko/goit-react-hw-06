import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import { addContact, deleteContact, setStatusFilter } from './actions';

const contactsInitialState = [];

export const contactsReducer = createReducer(contactsInitialState, builder => {
  builder
    .addCase(addContact, (state, action) => {
      state.push(action.payload);
    })
    .addCase(deleteContact, (state, action) => {
      const index = state.findIndex(contact => contact.id === action.payload);
      return state.splice(index, 1);
    });
});

const filtersInitialState = {
  status: statusFilters.all,
};

export const filtersReducer = createReducer(filtersInitialState, builder => {
  builder.addCase(setStatusFilter, (state, action) => {
    state.status = action.payload;
  });
});
