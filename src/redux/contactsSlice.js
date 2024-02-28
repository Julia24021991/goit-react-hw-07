import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsInitialState = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

const contactsSlice = createSlice({
  // Ім'я слайсу
  name: 'contacts',
  // Початковий стан редюсера слайсу
  initialState: { items: contactsInitialState },
  // Об'єкт редюсерів
  reducers: {
    addContact: (state, action) => {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      const updatedItems = state.items.filter(item => item.id !== action.payload);
      return { ...state, items: updatedItems };
    },
  },
});

// Генератори екшенів
export const { addContact, deleteContact } = contactsSlice.actions;

const persistConfig = {
  key: 'contacts',
  storage,
  whitelist: ['items'],
};

export const contactsReducer = persistReducer(persistConfig, contactsSlice.reducer);
