'use client';
import { useGetTasksQuery } from '../store/services/task';

const Tasks = () => {
    const { data, error, isLoading } = useGetTasksQuery();

    return (
        <div>
            <h2>Tasks</h2>
        </div>
    );
};

export default Tasks;