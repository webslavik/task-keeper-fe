'use client';
import ContentSection from '@/app/components/shared/ContentSection';
import Link from '@/app/components/shared/Link';
import Title from '@/app/components/shared/Title';
import TaskForm from '@/app/components/TaskForm';
import { ROUTES } from '@/app/constants';

const CreatePage = () => {

    return (
        <>
            <div className='mb-8'>
                <Link href={ROUTES.dashboard}>Go back</Link>
            </div>

            <ContentSection>
                <Title type={2}>
                    Create new task
                </Title>

                <TaskForm />
            </ContentSection>
        </>
    );
};

export default CreatePage;
