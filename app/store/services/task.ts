import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '@/app/constants';

const baseTaskQuery = fetchBaseQuery({
    baseUrl: `${API_URL}/api/tasks`,
    prepareHeaders: (headers, { getState }) => {
        const accessToken = (getState() as any).auth.accessToken;

        if (accessToken) {
            headers.set('authorization', `Bearer ${accessToken}`);
        }

        return headers;
    }
});

const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: baseTaskQuery,
    tagTypes: ['Task'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
                url: '/',
                method: 'GET',
            }),
        }),
    }),
});

export const { useGetTasksQuery } = taskApi;
export default taskApi;
