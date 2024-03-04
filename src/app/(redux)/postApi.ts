import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from './constants';

export const postApi = createApi({
    reducerPath: 'postApi',
    baseQuery: fetchBaseQuery({
        baseUrl: `${BASE_URL}`,
    }),

    endpoints: (builder) => ({
        getToken: builder.query({
            query: () => ({
                url: '/token',
                method: 'GET'
            })
        }),

        postUser: builder.mutation<string, { token: string, payload: FormData }>({

            queryFn: async ({ token, payload }) => {
                const result = await fetch(`${BASE_URL}users`, {
                    method: 'POST',
                    body: payload,
                    headers: {
                        'Token': `${token}`,
                    },
                })
                const data = await result.json();
                return { data };
            }
        })

    }),
});

export const { usePostUserMutation, useGetTokenQuery } = postApi;
