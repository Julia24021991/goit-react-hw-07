import { createSlice } from '@reduxjs/toolkit';

const filterInitialState = '';

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: filterInitialState,
  // Об'єкт редюсерів
  reducers: {
    filterContact(state, action) {
      return action.payload;
    },
  },
});

// Генератори екшенів
export const { filterContact } = filterSlice.actions;

// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
