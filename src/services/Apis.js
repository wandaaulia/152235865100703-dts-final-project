import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


export const recipeApi = createApi({
  reducerPath: 'recipeApi',
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
  }),
    searchRecipeByName : builder.query({
    query: (name) => `/api/json/v1/1/search.php?s=${name}`
  })
})
})

export const { useAllFoodQuery, useGetCategoryFoodQuery, useGetRecipeDetailQuery,
useSearchRecipeByNameQuery} = recipeApi