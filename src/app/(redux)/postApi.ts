import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, TOKEN } from './constants';



export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}/token`,
        headers: { Authorization: `Bearer ${TOKEN}` },
    }),

    endpoints: (builder) => ({
        postUser: builder.mutation({
            query: (body) => ({
                url: "users",
                method: "POST",
                body,
            })
        })
    }),
});

export const { usePostUserMutation } = postApi;