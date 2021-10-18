import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { addContact } from "./phonebook-actions.js";

const phonebookContacts = createReducer([], {
  [addContact]: (state, { payload }) => [...state, payload],
});

export const rootReducer = combineReducers({ phonebookContacts });
