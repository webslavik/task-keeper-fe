'use client';
import ContentSection from '@/app/components/shared/ContentSection';
import Title from '@/app/components/shared/Title';
import TaskForm from '@/app/components/TaskForm';

const CreatePage = () => {
    return (
        <>
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
