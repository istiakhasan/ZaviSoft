import { baseApi } from "./baseApi";


export const productApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    getAllProduct: build.query({
      query: (arg) => ({
        url: "/products",
        method: "GET",
        params: arg,
      }),
      providesTags: ['products'],
    }),
    getProductById: build.query({
      query: (arg) => ({
        url: `/products/${arg?.id}`,
        method: "GET",
        
      }),
      providesTags: ['products'],
    }),
   
  }),
});

export const {
  useGetAllProductQuery,
  useGetProductByIdQuery,

} = productApi;
