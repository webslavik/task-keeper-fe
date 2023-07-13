import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import sharedSlice from './slices/sharedSlice';
import authApi from '@/app/store/services/auth';
import authSlice from './slices/authSlice';
import taskApi from '@/app/store/services/task';

const store = configureStore({
    reducer: {
        shared: sharedSlice,
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice,
        [taskApi.reducerPath]: taskApi.reducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(authApi.middleware, taskApi.middleware),
});

setupListeners(store.dispatch);

export {store};