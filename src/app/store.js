import { configureStore } from '@reduxjs/toolkit'
import { recipeApi } from '../services/Apis'
import recipeReducer  from '../features/recipeSlice';

export const store = configureStore({
  reducer: {
    [recipeApi.reducerPath]: recipeApi.reducer,
     recipe: recipeReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(recipeApi.middleware),
})