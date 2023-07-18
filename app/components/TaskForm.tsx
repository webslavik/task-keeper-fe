'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import * as Yup from 'yup';
import { ROUTES } from '@/app/constants';
import { Form, Field } from './shared/FormComponents';
import Input from '@/app/components/shared/Input';
import TextArea from '@/app/components/shared/TextArea';
import Button, { BUTTON_TYPES } from './shared/Button';
import ErrorMessage from './shared/ErrorMessage';
import { useCreateTaskMutation, useUpdateTaskMutation, useDeleteTaskMutation } from '../store/services/task';

const TaskSchema = Yup.object().shape({
    title: Yup
        .string()
        .required('Required'),
    description: Yup
        .string()
        .required('Required'),
});

type Props = {
    id?: number;
    title ?: string;
    description ?: string;
}

const getErrorMessage = (error: any) => {
    if (error) {
        return error.data.detail;
    }
};

const TaskForm = (task: Props) => {
    const router = useRouter();
    const [createTask, createTaskResult] = useCreateTaskMutation();
    const [updateTask, updateTaskResult] = useUpdateTaskMutation();
    const [deleteTask, deleteTaskResult] = useDeleteTaskMutation();

    const isSuccess = [createTaskResult.isSuccess, updateTaskResult.isSuccess, deleteTaskResult.isSuccess].some(Boolean);
    const isLoading = [createTaskResult.isLoading, updateTaskResult.isLoading, deleteTaskResult.isLoading].some(Boolean);
    const isError = [createTaskResult.isError, updateTaskResult.isError, deleteTaskResult.isError].some(Boolean);;
    const errorMessage = getErrorMessage(createTaskResult.error || updateTaskResult.error || deleteTaskResult.error);

    const onSubmit = async (values: any) => {
        if (task.id) {
            await updateTask(values);
            return;
        }

        await createTask(values);
    };

    const onDelete = async () => {
        await deleteTask(task.id);
    };

    useEffect(() => {
        if (isSuccess) {
            router.push(ROUTES.dashboard);
        }
    }, [isSuccess, router]);

    const initialValues = task.id ? task : { title: '', description: '' };

    return (
        <Form initialValues={initialValues} validationSchema={TaskSchema} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Field name='title'>
                        {(props: any) => {
                            return <Input {...props} label='Title' className='mb-2' disabled={isLoading}/>;
                        }}
                    </Field>

                    <Field name='description'>
                        {(props: any) => (
                            <TextArea {...props} label='Description' className='mb-4' disabled={isLoading}/>
                        )}
                    </Field>

                    {isError && errorMessage && (
                        <ErrorMessage message={errorMessage} className='mb-4'/>
                    )}

                    <Button className='mr-5' disabled={isLoading} isSubmit>
                        Save
                    </Button>

                    {task.id && (
                        <Button type={BUTTON_TYPES.primary} danger onClick={onDelete} disabled={isLoading}>
                            Delete
                        </Button>
                    )}
                </form>
            )}
        </Form>
    );
};

export default TaskForm;
