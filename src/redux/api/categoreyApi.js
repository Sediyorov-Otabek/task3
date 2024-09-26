import { api } from "../api/index";

export const categoryApi = api.injectEndpoints({
  endpoints: (build) => ({
    getCategory: build.query({
      query: (query) => ({
        url: `/products?${query}`,
      }),
      providesTags: ["Products"],
    }),
    getSingleCategory: build.query({
      query: (id) => ({
        url: `/products/${id}`,
      }),
      providesTags: ["Products"],
    }),
    getBrands: build.query({
      query: () => ({
        url: "/brands",
      }),
      providesTags: ["Products"],
    }),
    getColors: build.query({
      query: () => ({
        url: "/colors",
      }),
      providesTags: ["Products"],
    }),
  }),
});

// GET -> build.query
// POST, PUT, PATCH, DELETE -> build.mutation

export const {
  useGetCategoryQuery,
  useGetSingleCategoryQuery,
  useGetBrandsQuery,
  useGetColorsQuery,
} = categoryApi;
