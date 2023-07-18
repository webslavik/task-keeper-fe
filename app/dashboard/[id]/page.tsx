'use client';
import ContentSection from '@/app/components/shared/ContentSection';
import Link from '@/app/components/shared/Link';
import Title from '@/app/components/shared/Title';
import TaskForm from '@/app/components/TaskForm';
import { useGetTaskQuery } from '@/app/store/services/task';
import { ROUTES } from '@/app/constants';

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
                <>
                    <div className='mb-8'>
                        <Link href={ROUTES.dashboard}>Go back</Link>
                    </div>

                    <ContentSection>
                        <Title type={2}>
                            Edit task
                        </Title>

                        <TaskForm {...data.task} />
                    </ContentSection>
                </>
            )}
        </div>
    );
};

export default TaskPage;
