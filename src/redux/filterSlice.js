import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  // Ім'я слайсу
  name: 'filter',
  // Початковий стан редюсера слайсу
  initialState: { name: '' },
  // Об'єкт редюсерів
  reducers: {
    filterContact(state, action) {
      state.name = action.payload;
    },
  },
});

// Генератори екшенів
export const { filterContact } = filterSlice.actions;

// Редюсер слайсу
export const filterReducer = filterSlice.reducer;
