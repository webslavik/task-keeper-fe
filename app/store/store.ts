import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query/react';
import authApi from '@/app/store/services/auth';
import authSlice from './slices/authSlice';
import taskApi from '@/app/store/services/task';

const store = configureStore({
    reducer: {
        [authApi.reducerPath]: authApi.reducer,
        auth: authSlice,
        [taskApi.reducerPath]: taskApi.reducer,
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware().concat(authApi.middleware, taskApi.middleware),
});

setupListeners(store.dispatch);

export {store};