import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actions from "./contacts-actions";

const {
  fetchContactRequest,
  fetchContactSuccess,
  fetchContactError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
  changeFilter,
} = actions;

const items = createReducer([], {
  [fetchContactSuccess]: (_, { payload }) => payload,
  [addContactSuccess]: (state, { payload }) => [...state, payload],
  [deleteContactSuccess]: (state, { payload }) =>
    state.filter(({ id }) => id !== payload),
});

const filter = createReducer("", {
  [changeFilter]: (_, { payload }) => payload,
});

const loading = createReducer(false, {
  [addContactRequest]: () => true,
  [addContactSuccess]: () => false,
  [addContactError]: () => false,
  [deleteContactRequest]: () => true,
  [deleteContactSuccess]: () => false,
  [deleteContactError]: () => false,
  [fetchContactRequest]: () => true,
  [fetchContactSuccess]: () => false,
  [fetchContactError]: () => false,
});

// const error = createReducer(false, {
//   [addContactRequest]: () => false,
//   [addContactSuccess]: () => false,
//   [addContactError]: () => true,
//   [deleteContactRequest]: () => false,
//   [deleteContactSuccess]: () => false,
//   [deleteContactError]: () => true,
//   [fetchContactRequest]: () => false,
//   [fetchContactSuccess]: () => false,
//   [fetchContactError]: () => true,
// });

const error = createReducer(null, {
  [addContactError]: (_, { payload }) => payload,
  [deleteContactError]: (_, { payload }) => payload,
  [fetchContactError]: (_, { payload }) => payload,
});

export default combineReducers({ items, filter, loading, error });
