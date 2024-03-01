
import { configureStore } from '@reduxjs/toolkit'
import { api } from './api'
import { setupListeners } from '@reduxjs/toolkit/query';
import { postApi } from './postApi';

export const store = () => {
    return configureStore({
        reducer: {
            [api.reducerPath]: api.reducer,
            [postApi.reducerPath]: postApi.reducer
        },
        middleware: (getDefaultMiddleware) =>
            getDefaultMiddleware().concat(api.middleware, postApi.middleware),
    })
}

// Infer the type of store
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']