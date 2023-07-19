'use client';
import * as Yup from 'yup';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/navigation';
import { ROUTES } from '@/app/constants';
import { Form, Field } from './shared/FormComponents';
import Title from './shared/Title';
import Text from './shared/Text';
import Input from './shared/Input';
import Button, { BUTTON_TYPES } from './shared/Button';
import Link from './shared/Link';
import ErrorMessage from './shared/ErrorMessage';
import { useLoginUserMutation } from '@/app/store/services/auth';
import { login } from '@/app/store/slices/authSlice';
import { startLoading, finishLoading } from '@/app/store/slices/sharedSlice';

const LoginSchema = Yup.object().shape({
    email: Yup
        .string()
        .email('Invalid email')
        .required('Required'),
    password: Yup
        .string()
        .required('Required'),
});

const LoginForm = () => {
    const router = useRouter();
    const dispatch = useDispatch();
    const [loginUser, { isSuccess, isError, error }] = useLoginUserMutation();

    const onSubmit = async (values: any) => {
        dispatch(startLoading());

        const { data } = await loginUser(values);
        const { access_token: accessToken, user } = data ?? {};

        if (accessToken) {
            dispatch(login({ accessToken, user }));
        }

        dispatch(finishLoading());
    };

    useEffect(() => {
        if (isSuccess) {
            router.push(ROUTES.dashboard);
        }
    }, [isSuccess, router]);

    const initialValues = { email: '', password: '' };

    return (
        <Form initialValues={initialValues} validationSchema={LoginSchema} onSubmit={onSubmit}>
            {({ handleSubmit }) => (
                <form onSubmit={handleSubmit} noValidate>
                    <Title type={3} className='mb-5'>Log in to your account</Title>

                    <Field name='email'>
                        {(props: any) => (
                            <Input {...props} type='email' label='Email' className='mb-2' />
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
                        Login
                    </Button>

                    <Text>
                        Do not have an account?
                        <Link href={ROUTES.registration} className='ml-2'>Sign up</Link>
                    </Text>
                </form>
            )}
        </Form>
    )
};

export default LoginForm;
