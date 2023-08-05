import { createSlice } from '@reduxjs/toolkit';

import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const initialStateContacts = {
  contacts: [
    { id: 'id-1', name: 'John Deer', number: '536-95-87' },
    { id: 'id-2', name: 'Bill Ross', number: '756-98-21' },
    { id: 'id-3', name: 'Ann Clint', number: '751-97-28' },
    { id: 'id-4', name: 'Sia Norton', number: '457-28-91' },
  ],
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: initialStateContacts,

  reducers: {
    addContact(state, action) {
      

      state.contacts.push(action.payload);
    },
    deleteContact: {
      reducer(state, action) {
        state.contacts = state.contacts.filter(contact  => contact.id !== action.payload);
      },
    },
  },
});

const persistConfig = {
  key: 'contacts',
  storage,
};

export const contactsReducer = persistReducer(
  persistConfig,
  contactsSlice.reducer
);

export const { addContact, deleteContact } = contactsSlice.actions;
export const getContacts = state => state.contacts.contacts;