import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { handleUnauthorizeError, getAuthHeader } from './utils';
import { API_URL } from '@/app/constants';

const baseTaskQuery = fetchBaseQuery({
    baseUrl: `${API_URL}/api/tasks`,
    prepareHeaders: getAuthHeader,
});

const taskApi = createApi({
    reducerPath: 'taskApi',
    baseQuery: handleUnauthorizeError(baseTaskQuery),
    tagTypes: ['Task'],
    endpoints: (builder) => ({
        getTasks: builder.query({
            query: () => ({
                url: '',
                method: 'GET',
            }),
        }),
        getTask: builder.query({
            query: (id) => ({
                url: `/${id}`,
                method: 'GET',
            }),
        }),
        createTask: builder.mutation({
            query: (task) => ({
                url: '',
                method: 'POST',
                body: task,
            }),
        }),
        updateTask: builder.mutation({
            query: (task) => ({
                url: `/${task.id}`,
                method: 'PATCH',
                body: task,
            }),
        }),
        deleteTask: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE'
            }),
        }),
    }),
});

export const {
    useGetTasksQuery,
    useGetTaskQuery,
    useCreateTaskMutation,
    useUpdateTaskMutation,
    useDeleteTaskMutation,
} = taskApi;
export default taskApi;
