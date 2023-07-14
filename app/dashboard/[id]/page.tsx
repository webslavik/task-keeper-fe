'use client';
import ContentSection from '@/app/components/shared/ContentSection';
import Title from '@/app/components/shared/Title';
import TaskForm from '@/app/components/TaskForm';
import { useGetTaskQuery } from '@/app/store/services/task';

type Props = {
    params: {
        id: string;
    };
}

const TaskPage = ({params}: Props) => {
    const {id} = params;
    const {data, isSuccess, isLoading} = useGetTaskQuery(id);

    return (
        <div>
            {isLoading && <p>Loading...</p>}

            {isSuccess && (
                <ContentSection>
                    <Title type={2}>
                        Edit task
                    </Title>

                    <TaskForm {...data.task} />
                </ContentSection>
            )}
        </div>
    );
};

export default TaskPage;
