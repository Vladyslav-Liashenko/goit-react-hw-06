import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer, filtersReducer } from './reducer';

export const store = configureStore({
    reducer: {
        contact: contactsReducer,
        filter: filtersReducer,
    }
});