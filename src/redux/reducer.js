import { createReducer } from '@reduxjs/toolkit';
import { statusFilters } from './constants';
import { addContact, deleteContact, setStatusFilter } from './actions';

const contactsInitialState = [
  { id: 'id-1', text: 'Rosie Simpson', phone: '459-12-56' },
  { id: 'id-2', text: 'Hermione Kline', phone: '443-89-12' },
  { id: 'id-3', text: 'Eden Clements', phone: '645-17-79' },
  { id: 'id-4', text: 'Annie Copeland', phone: '227-91-26' },
  { id: 'id-5', text: 'Andrian Pan', phone: '459444-12-56' },
  { id: 'id-6', text: 'Yura Robin', phone: '44124-839-12' },
  { id: 'id-7', text: 'Ira Comandik', phone: '64324-14237-79' },
  { id: 'id-8', text: 'Diana TopGun', phone: '22567-941-26' },
];

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
