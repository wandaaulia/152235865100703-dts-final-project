import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const recipeApi = createApi({
  reducerPath: 'makeupApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://www.themealdb.com/' }),
  endpoints: (builder) => ({
    allFood: builder.query({
      query: () => `api/recipes`,
    }),
      getCategoryFood: builder.query({
      query: (name) => `api/json/v1/1/filter.php?c=${name}`,
  }),
  getRecipeDetail : builder.query({
    query: (key) => `/api/json/v1/1/lookup.php?i=${key}`
  })
})
})

export const { useAllFoodQuery, useGetCategoryFoodQuery, useGetRecipeDetailQuery} = recipeApi