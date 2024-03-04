import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL, COUNT_PER_PAGE } from './constants';

export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({
        baseUrl: BASE_URL
    }),

    endpoints: (builder) => ({
        getAllUsers: builder.query({
            query: (page) => ({
                url: `users?page=${page + 1}&count=${COUNT_PER_PAGE}&offset=${page * COUNT_PER_PAGE}`,
                method: 'GET'
            }),
            serializeQueryArgs: ({ endpointName }) => {
                return endpointName;
            },
            // Always merge incoming data to the cache entry
            merge: (currentCache, newItems) => {
                currentCache.users.push(...newItems.users);
            },
            // Refetch when the page arg changes
            forceRefetch({ currentArg, previousArg }) {
                return currentArg !== previousArg;
            },

        }),

        getPositions: builder.query({
            query: () => ({
                url: '/positions',
                method: 'GET'
            })
        }),



    }),
});

export const { useGetAllUsersQuery, useGetPositionsQuery } = api;