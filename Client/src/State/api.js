import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
  reducerPath: "exchangesApi",
   
  endpoints: (build) => ({
    getsaveExchangeData: build.query({
      query: (data) => ({
        url: "exchange/savedata",
        method: "POST",
        body: data,
       
        
      }),
      
    }),
    getExchange: build.query({
      query: () => "exchange/getdata",
     

    }),
  }),
});

export default api;
