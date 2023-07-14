'use client';
import TaskItem from '@/app/components/TaskItem';
import { useGetTasksQuery } from '@/app/store/services/task';

const Tasks = () => {
    const { data, isSuccess, isLoading } = useGetTasksQuery();

    return (
        <div>
            <h2>Tasks</h2>

            {isLoading && <p>Loading...</p>}

            {isSuccess && data.tasks.length && (
                data.tasks.map((task) => {
                    return <TaskItem key={task.id} className='mb-5' {...task} />;
                })
            )}
        </div>
    );
};

export default Tasks;