import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const basicApi = createApi({
    reducerPath: 'basicApi',
    baseQuery: fetchBaseQuery({
        baseUrl: process.env.REACT_APP_BASE_API_URL
    }),
    keepUnusedDataFor: 60 * 3,
    endpoints: () => ({}),
    tagTypes: ['Location']
})