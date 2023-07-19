'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { ROUTES } from '@/app/constants';
import { Form, Field } from './shared/FormComponents';
import Title from './shared/Title';
import Text from './shared/Text';
import Input from './shared/Input';
import Button, { BUTTON_TYPES } from './shared/Button';
import Link from './shared/Link';
import ErrorMessage from './shared/ErrorMessage';
import { useCreateUserMutation } from '../store/services/auth';
import { startLoading, finishLoading } from '@/app/store/slices/sharedSlice';

const SignUpSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email')
        .required('Required'),
    first_name: Yup
        .string()
        .required('Required'),
    last_name: Yup
        .string()
        .required('Required'),
    password: Yup
        .string()
        .min(8, 'Password must be 8 characters long')
        .matches(/[0-9]/, 'Password requires a number')
        .matches(/[a-z]/, 'Password requires a lowercase letter')
        .matches(/[A-Z]/, 'Password requires an uppercase letter')
        .matches(/[^\w]/, 'Password requires a symbol')
        .required('Required'),
});

const SignUpForm = () => {
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
            router.push(ROUTES.root);
        }
    }, [isSuccess, router]);

    return (
        <Form initialValues={{ email: '', password: '' }} validationSchema={SignUpSchema} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Title type={3} className='mb-5'>Get started on T.K. today</Title>

                    <Field name='first_name'>
                        {(props: any) => (
                            <Input {...props} type='text' label='First name' className='mb-2' />
                        )}
                    </Field>

                    <Field name='last_name'>
                        {(props: any) => (
                            <Input {...props} type='text' label='Last name' className='mb-2' />
                        )}
                    </Field>

                    <Field name='email'>
                        {(props: any) => (
                            <Input {...props} type='text' label='Email' className='mb-2' />
                        )}
                    </Field>

                    <Field name='password'>
                        {(props: any) => (
                            <Input {...props} type='password' label='Password' className='mb-4' />
                        )}
                    </Field>

                    {isError && error && (
                        <ErrorMessage message={error.data.detail} className='mb-4' />
                    )}

                    <Button type={BUTTON_TYPES.primary} className='mb-4' isSubmit>
                        Create an account
                    </Button>

                    <Text>
                        Already have an account?
                        <Link href={ROUTES.root} className='ml-2'>Log in</Link>
                    </Text>
                </form>
            )}
        </Form>
    );
};

export default SignUpForm;
