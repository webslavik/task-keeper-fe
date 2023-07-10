import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@/app/constants';

const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: `${API_URL}/api/auth` }),
    tagTypes: ['Auth'],
    endpoints: (builder) => ({
        createUser: builder.mutation({
            query: (user) => ({
                url: '/register',
                method: 'POST',
                body: user,
            }),
        }),
        loginUser: builder.mutation({
            query: (user) => ({
                url: '/login',
                method: 'POST',
                body: user,
            })
        }),
    }),
});

export const { useCreateUserMutation, useLoginUserMutation } = authApi;
export default authApi;