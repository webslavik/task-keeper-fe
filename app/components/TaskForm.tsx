'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ROUTES } from '@/app/constants';
import { Form, Field } from './shared/FormComponents';
import Input from './shared/Input';
import Button, { BUTTON_TYPES } from './shared/Button';
import ErrorMessage from './shared/ErrorMessage';
import { useCreateUserMutation } from '../store/services/auth';
import { startLoading, finishLoading } from '@/app/store/slices/sharedSlice';

const TaskSchema = Yup.object().shape({
    title: Yup
        .string()
        .required('Required'),
    description: Yup
        .string()
        .required('Required'),
});

const TaskForm = () => {
    const dispatch = useDispatch();
    const router = useRouter();
    const [createUser, { isSuccess, isError, error }] = useCreateUserMutation();

    const onSubmit = async (values: any) => {
        dispatch(startLoading());
        await createUser(values);
        dispatch(finishLoading());
    };

    useEffect(() => {
        if (isSuccess) {
            router.push(ROUTES.home);
        }
    }, [isSuccess, router]);

    const initialValues = { title: '', description: '' };

    return (
        <Form initialValues={initialValues} validationSchema={TaskSchema} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Field name='title'>
                        {(props: any) => (
                            <Input {...props} type='title' label='Title' className='mb-2' />
                        )}
                    </Field>

                    <Field name='description'>
                        {(props: any) => (
                            <Input {...props} type='description' label='Description' className='mb-4' />
                        )}
                    </Field>

                    {isError && error && (
                        <ErrorMessage message={error.data.detail} className='mb-4'/>
                    )}

                    <Button type={BUTTON_TYPES.primary} className='mb-4' isSubmit>
                        Add/Create task
                    </Button>
                </form>
            )}
        </Form>
    );
};

export default TaskForm;
