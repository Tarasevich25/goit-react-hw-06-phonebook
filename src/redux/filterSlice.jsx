import { createSlice } from '@reduxjs/toolkit';

const filterState = {
  filter: '',
};

const filterSlice = createSlice({
  name: 'filter',
  initialState: filterState,

  reducers: {
    setFilter: {
      reducer(state, action) {
        state.filter = action.payload;
      },
    },
  },
});

export const { setFilter } = filterSlice.actions;
export const getFilter = state => state.filter.filter;
export const filterReducer = filterSlice.reducer;