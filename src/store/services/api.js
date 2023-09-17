import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  tagTypes: ["Restaurant", "Review", "Dish", "User"],
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3001/api/" }),
  endpoints: (builder) => ({
    getRestaurants: builder.query({
      query: () => ({
        url: "restaurants",
      }),
      providesTags: (result) =>
        (result || []).map(({ id }) => ({ type: "Restaurant", id })),
    }),
    getDishes: builder.query({
      query: (restaurantId) => ({
        url: "dishes",
        params: {
          restaurantId,
        },
      }),
      providesTags: (result) =>
        (result || [])
          .map(({ id }) => ({ type: "Dish", id }))
          .concat({ type: "Dish", id: "LIST" }),
    }),
    getAllDishes: builder.query({
      query: () => ({
        url: "dishes",
      }),
      providesTags: (result) => 
      (result || [])
      .map(({id}) => ({type: 'Dish', id}))
      .concat({type:"User", id: "LIST"}),
    }),
    getUsers: builder.query({
      query: () => ({
        url: "users",
      }),
      providesTags: (result) =>
        (result || [])
          .map(({ id }) => ({ type: "User", id }))
          .concat({ type: "User", id: "LIST" }),
    }),
    getReviews: builder.query({
      query: (restaurantId) => ({
        url: "reviews",
        params: {
          restaurantId,
        },
      }),
      providesTags: (result) =>
        (result || [])
          .map(({ id }) => ({ type: "Review", id }))
          .concat({ type: "Review", id: "LIST" }),
    }),
    updateReview: builder.mutation({
      query: ({ reviewId, review }) => ({
        url: `review/${reviewId}`,
        method: "PATCH",
        body: review,
      }),
      invalidatesTags: (result) => [{ type: "Review", id: result.id }],
    }),
    createReview: builder.mutation({
      query: ({ restaurantId, newReview }) => ({
        url: `review/${restaurantId}`,
        method: "POST",
        body: newReview,
      }),
      invalidatesTags: () => [{ type: "Review", id: "LIST" }],
    }),
  }),
});

export const {
  useGetRestaurantsQuery,
  useGetReviewsQuery,
  useCreateReviewMutation,
  useUpdateReviewMutation,
  useGetDishesQuery,
  useGetUsersQuery,
  useGetAllDishesQuery,
} = api;
