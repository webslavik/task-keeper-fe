'use client';
import Title from '@/app/components/shared/Title';
import NoData from '@/app/components/shared/NoData';
import TaskItem from '@/app/components/TaskItem';
import { useGetTasksQuery } from '@/app/store/services/task';

const Tasks = () => {
    // @ts-ignore
    const { data, isSuccess, isLoading } = useGetTasksQuery();
    const isDataExisted = !!data?.tasks.length;

    return (
        <>
            {isLoading && <p>Loading...</p>}

            {isSuccess && (
                <>
                    <Title type={2}>Tasks</Title>

                    {isDataExisted && (
                        data.tasks.map((task: any) => {
                            return <TaskItem key={task.id} className='mb-5' {...task} />;
                        })
                    )}

                    {!isDataExisted && <NoData />}
                </>
            )}
        </>
    );
};

export default Tasks;