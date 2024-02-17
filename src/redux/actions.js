import { createAction, nanoid } from '@reduxjs/toolkit';

export const addContact = createAction(
  'contacts/AddContact',
  (name, number) => {
    return {
      payload: {
        name,
        number,
        id: nanoid(),
      },
    };
  }
);

export const deleteContact = createAction(
  'contacts/deleteContact',
  contactId => {
    return {
      payload: contactId,
    };
  }
);

export const setStatusFilter = createAction(
  'filters/setStatusFilter',
  value => {
    return {
      payload: value,
    };
  }
);

console.log(addContact('Learn Redux Toolkit'));

console.log(addContact.toString());
